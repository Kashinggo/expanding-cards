const panels = document.querySelectorAll(".panels");

panels.map((panel) => {
  panel.addEventListen("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.map((panel) => {
    panel.classList.remove("active");
  });
};
