import { getByClass, IS_FIREFOX } from "./constants.js";

export const applyCustomStyles = () => {
  createToggle();
  createRadio();
  createRadioGroups();
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

const createRadio = () => {
  const radios = getByClass("radio");

  for (let radio of radios) {
    if (!radio.classList.contains("disabled")) {
      radio.addEventListener("click", (event) => {
        const currentRadio = event.target.classList.contains("radio")
          ? event.target
          : event.target.parentNode;

        if (currentRadio.classList.contains("radio-off")) {
          currentRadio.classList.remove("radio-off");
          currentRadio.classList.add("radio-on");
        } else {
          currentRadio.classList.remove("radio-on");
          currentRadio.classList.add("radio-off");
        }
      });
    }
  }
};

const createRadioGroups = () => {
  const radios = getByClass("radio-group");
  for (const radio of radios) {
    const childrens = radio.children;
    for (const children of childrens) {
      children.addEventListener("click", (event) => {
        for (const children of childrens) {
          if (children !== event.target) {
            children.classList.remove('radio-on');
            children.classList.add('radio-off');
          }
        }
      });
    }
  }
};
