(() => {
  const loader = document.currentScript;
  const container = document.querySelector(".giscus");
  const client = document.createElement("script");
  client.src = "https://giscus.app/client.js";
  client.async = true;
  client.crossOrigin = "anonymous";
  Object.assign(client.dataset, loader.dataset);

  function syncTheme() {
    // Follow the palette actually rendered by Material, including automatic mode.
    const theme = document.body.dataset.mdColorScheme === "slate"
      ? "transparent_dark"
      : "light";
    client.dataset.theme = theme;

    const frame = container.querySelector(".giscus-frame");
    if (frame && frame.contentWindow) {
      frame.contentWindow.postMessage(
        { giscus: { setConfig: { theme } } },
        "https://giscus.app"
      );
    }
  }

  new MutationObserver(syncTheme).observe(document.body, {
    attributes: true,
    attributeFilter: ["data-md-color-scheme"]
  });
  // A lazy iframe may finish loading after the palette has already changed.
  container.addEventListener("load", syncTheme, true);
  // Set the initial theme before the remote script can create its iframe.
  syncTheme();
  loader.after(client);
})();
