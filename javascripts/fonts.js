(() => {
  const sources = [
    "https://registry.npmmirror.com/@fontsource-variable/noto-serif/5.3.0/files/index.css",
    "https://registry.npmmirror.com/@fontsource-variable/noto-serif/5.3.0/files/wght-italic.css",
    "https://registry.npmmirror.com/lxgw-wenkai-screen-webfont/1.7.0/files/style.css"
  ];

  sources.forEach((url) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    link.media = "print";
    // Slow font requests can finish later without blocking the page.
    const timer = setTimeout(() => {
      console.warn("Web font stylesheet is still loading; using system fonts until it is ready.", url);
    }, 10000);
    function fail() {
      clearTimeout(timer);
      link.onload = link.onerror = null;
      link.remove();
      console.warn("Web font stylesheet unavailable; using system fonts.", url);
    }
    link.onerror = fail;
    link.onload = () => {
      clearTimeout(timer);
      link.onload = link.onerror = null;
      link.media = "all";
    };
    document.head.appendChild(link);
  });
})();
