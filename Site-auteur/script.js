document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".livre");
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});