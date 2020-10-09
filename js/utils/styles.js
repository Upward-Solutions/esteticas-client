import { getByClass, getByTag, IS_FIREFOX } from "./constants.js";

export const applyCustomStyles = () => {
  createToggle();
  createRadio();
  createCheckbox();
  createPasswordInput();
  createDateInput();
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
  createRadioGroups();
};

const createRadioGroups = () => {
  const radios = getByClass("radio-group");

  for (const radio of radios) {
    const childrens = radio.children;
    for (const children of childrens) {
      children.addEventListener("click", (event) => {
        for (const children of childrens) {
          if (children !== event.target) {
            children.classList.remove("radio-on");
            children.classList.add("radio-off");
          }
        }
      });
    }
  }
};

const createCheckbox = () => {
  const checkboxes = getByClass("checkbox");

  for (const checkbox of checkboxes) {
    if (!checkbox.classList.contains("disabled")) {
      checkbox.addEventListener("click", () => {
        const currentCheck = event.target.classList.contains("checkbox")
          ? event.target
          : event.target.parentNode;

        if (currentCheck.classList.contains("checkbox-off")) {
          currentCheck.classList.remove("checkbox-off");
          currentCheck.classList.add("checkbox-selected");
        } else if (currentCheck.classList.contains("checkbox-selected")) {
          currentCheck.classList.remove("checkbox-selected");
          currentCheck.classList.add("checkbox-undeterminated");
        } else {
          currentCheck.classList.remove("checkbox-undeterminated");
          currentCheck.classList.add("checkbox-off");
        }
      });
    }
  }
};

const createPasswordInput = () => {
  const inputs = getByClass("input");
  for (const input of inputs) {
    if (input.children[1].className === "password-icon") {
      const button = input.lastElementChild;
      const inputTag = input.firstElementChild;

      button.addEventListener("click", () => {
        if (inputTag.type === "text") {
          inputTag.type = "password";
          button.style.backgroundImage =
            "url('../../styles/assets/eyeClose-icon.svg')";
        } else {
          inputTag.type = "text";
          button.style.backgroundImage =
            "url('../../styles/assets/eyeOpen-icon.svg')";
        }
      });
    }
  }
};

const createDateInput = () => {
  if (IS_FIREFOX) {
    const inputs = getByTag("input");
    for (const input of inputs) {
      if (input.attributes[0].value === "datetime-local") {
        const newInput = createInputDateTimeForMozilla();
        input.parentNode.
        insertBefore(newInput, input);
        input.remove();
      }
    }
  }
};

const createInputDateTimeForMozilla = () => {
  let div = document.createElement("div");
  div.className = "input-date";
  let inputDate = document.createElement("input");
  inputDate.type = "date";
  let inputTime = document.createElement("input");
  inputTime.type = "time";
  div.appendChild(inputDate);
  div.appendChild(inputTime);
  return div;
};
