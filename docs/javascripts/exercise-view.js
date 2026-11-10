(() => {
  function initialize() {
    const controls = document.querySelector("[data-exercise-view-controls]");
    if (!controls || controls.dataset.ready) return;

    const article = controls.closest(".md-content__inner");
    const buttons = controls.querySelectorAll("button[data-exercise-view]");
    const headings = "h1, h2, h3, h4, h5, h6";

    // 保留整个习题子树；对包裹习题的知识块只保留通往习题的分支。
    function classify(element) {
      if (element.matches(`${headings}, .exercise, style, script`)) return;
      if (element.querySelector(`.exercise, ${headings}`)) {
        element.classList.add("exercise-view-context");
        [...element.children].forEach(classify);
      } else {
        element.classList.add("exercise-view-knowledge");
      }
    }

    // 仅筛选按钮之后的笔记正文，保留主题附加的评论和页尾信息。
    let element = controls.nextElementSibling;
    while (element && element.id !== "__comments" &&
      !element.matches(".md-source-file, .md-feedback, .md-content__button")) {
      classify(element);
      element = element.nextElementSibling;
    }

    function setView(view) {
      article.classList.toggle("exercise-view-only", view === "exercises");
      buttons.forEach(button => {
        button.setAttribute("aria-pressed", String(button.dataset.exerciseView === view));
      });
      // 让主题重新计算目录跟随和回到顶部按钮的位置。
      window.dispatchEvent(new Event("resize"));
    }

    buttons.forEach(button => {
      button.addEventListener("click", () => setView(button.dataset.exerciseView));
    });
    controls.dataset.ready = "true";
    controls.hidden = false;
  }

  document$.subscribe(initialize);
})();
