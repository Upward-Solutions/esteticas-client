import { getByClass, IS_FIREFOX } from "./constants.js";

export const applyCustomStyles = () => {
  createToggle();
};

const createToggle = () => {
  const toggles = getByClass("toggle");

  for (let toggle of toggles) {
    if (!toggle.classList.contains("disabled")) {
      toggle.addEventListener("click", (event) => {
        const currentToggle = event.target.classList.contains("toggle")
          ? event.target
          : event.target.parentNode;

        if (currentToggle.classList.contains("toggle-off")) {
          currentToggle.classList.remove("toggle-off");
          currentToggle.classList.add("toggle-on");
        } else {
          currentToggle.classList.remove("toggle-on");
          currentToggle.classList.add("toggle-off");
        }
      });
    }
  }
};
