(() => {
  const sources = [
    "https://registry.npmmirror.com/katex/0.16.7/files/dist/",
    "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/KaTeX/0.16.7/"
  ];
  let currentBody;
  let ready = false;

  function loadResource(url, stylesheet = false) {
    return new Promise((resolve, reject) => {
      const element = document.createElement(stylesheet ? "link" : "script");
      if (stylesheet) {
        element.rel = "stylesheet";
        element.href = url;
        // External styles must not delay the site's own styles or content.
        element.media = "print";
      } else {
        element.src = url;
        element.async = true;
      }
      const timer = setTimeout(() => fail(), 8000);
      function fail() {
        clearTimeout(timer);
        element.onload = element.onerror = null;
        element.remove();
        reject(new Error(`Unable to load ${url}`));
      }
      element.onerror = fail;
      element.onload = () => {
        clearTimeout(timer);
        element.onload = element.onerror = null;
        if (stylesheet) element.media = "all";
        resolve(element);
      };
      document.head.appendChild(element);
    });
  }

  function render() {
    if (!ready || !currentBody) return;
    currentBody.querySelectorAll(".arithmatex").forEach((element) => {
      window.renderMathInElement(element, {
        delimiters: [
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true }
        ],
        ignoredClasses: ["katex"],
        macros: { "\\mbox": "\\text{#1}" },
        throwOnError: false
      });
    });
  }

  document$.subscribe(({ body }) => {
    currentBody = body;
    render();
  });

  async function initialize() {
    for (const source of sources) {
      let stylesheet;
      try {
        stylesheet = await loadResource(`${source}katex.min.css`, true);
        await loadResource(`${source}katex.min.js`);
        await loadResource(`${source}contrib/auto-render.min.js`);
        if (!window.katex || typeof window.renderMathInElement !== "function") {
          throw new Error("KaTeX rendering dependencies are unavailable");
        }
        ready = true;
        render();
        return;
      } catch (error) {
        if (stylesheet) stylesheet.remove();
        console.warn("KaTeX mirror failed; trying the next source.", error);
      }
    }
    console.warn("KaTeX could not be loaded. The original formulas remain visible.");
  }

  initialize();
})();
