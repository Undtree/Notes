(() => {
  const gallery = document.querySelector('.home-gallery');
  const image = gallery?.querySelector('img');
  if (!image) return;

  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const target = { x: 0, y: 0 };
  const position = { x: 0, y: 0 };
  let artwork;
  let layers = [];
  let loading;
  let frame = 0;
  let previousTime = 0;

  const enabled = () => finePointer.matches && !reducedMotion.matches;

  function render() {
    const bounds = artwork.getBoundingClientRect();
    // 将位移换算为 SVG 坐标，使不同显示尺寸下的实际幅度保持在几像素。
    const scaleX = 1122 / bounds.width;
    const scaleY = 1402 / bounds.height;
    layers.forEach(({ element, x, y }) => {
      const dx = (position.x * x * scaleX).toFixed(3);
      const dy = (position.y * y * scaleY).toFixed(3);
      element.setAttribute('transform', `translate(${dx} ${dy})`);
    });
  }

  function animate(time) {
    const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16;
    previousTime = time;
    const blend = 1 - Math.exp(-elapsed / 120);
    position.x += (target.x - position.x) * blend;
    position.y += (target.y - position.y) * blend;
    const settled = Math.abs(target.x - position.x) < .001 &&
      Math.abs(target.y - position.y) < .001;
    if (settled) {
      position.x = target.x;
      position.y = target.y;
    }
    render();
    frame = settled ? 0 : requestAnimationFrame(animate);
    if (settled) previousTime = 0;
  }

  function moveTo(x, y) {
    target.x = x;
    target.y = y;
    if (!frame) frame = requestAnimationFrame(animate);
  }

  function reset() {
    if (artwork && enabled()) moveTo(0, 0);
  }

  async function updateMode() {
    if (!enabled()) {
      cancelAnimationFrame(frame);
      frame = previousTime = 0;
      target.x = target.y = position.x = position.y = 0;
      layers.forEach(({ element }) => element.removeAttribute('transform'));
      gallery.classList.remove('home-gallery--interactive');
      return;
    }

    if (!artwork) {
      if (!loading) {
        loading = Promise.all([
          fetch(new URL('geometric-canopy-layers.svg', image.currentSrc || image.src))
            .then(response => {
              if (!response.ok) throw new Error('Gallery layers unavailable');
              return response.text();
            }),
          image.decode()
        ]).then(([source]) => {
          const documentSvg = new DOMParser().parseFromString(source, 'image/svg+xml');
          const svg = document.importNode(documentSvg.documentElement, true);
          svg.classList.add('home-gallery-art');
          svg.setAttribute('aria-hidden', 'true');
          svg.querySelector('image').setAttribute('href', image.currentSrc || image.src);
          layers = [...svg.querySelectorAll('[data-layer]')].map(element => ({
            element,
            x: Number(element.dataset.shiftX),
            y: Number(element.dataset.shiftY)
          }));
          gallery.append(svg);
          artwork = svg;
        }).catch(() => {
          // 增强层加载失败时继续展示原 PNG。
        });
      }
      await loading;
    }
    if (artwork && enabled()) gallery.classList.add('home-gallery--interactive');
  }

  gallery.addEventListener('pointermove', event => {
    if (!enabled() || !artwork || event.pointerType === 'touch') return;
    const bounds = gallery.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
    const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
    moveTo(x, y);
  });
  gallery.addEventListener('pointerleave', reset);
  gallery.addEventListener('pointercancel', reset);
  window.addEventListener('blur', reset);
  finePointer.addEventListener('change', updateMode);
  reducedMotion.addEventListener('change', updateMode);
  updateMode();
})();
