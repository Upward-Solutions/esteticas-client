import { getByClass, getByTag, hiddenElement, IS_FIREFOX } from './constants.js';

const createToggle = () => {
  const toggles = getByClass('toggle');

  for (const toggle of toggles) {
    if (!toggle.classList.contains('disabled')) {
      toggle.addEventListener('click', (event) => {
        const currentToggle = event.target.classList.contains('toggle')
          ? event.target
          : event.target.parentNode;

        if (currentToggle.classList.contains('toggle-off')) {
          currentToggle.classList.remove('toggle-off');
          currentToggle.classList.add('toggle-on');
        } else {
          currentToggle.classList.remove('toggle-on');
          currentToggle.classList.add('toggle-off');
        }
      });
    }
  }
};

const createRadioGroups = () => {
  const radios = getByClass('radio-group');

  for (const radio of radios) {
    const childrens = radio.children;
    for (const children of childrens) {
      children.addEventListener('click', (event) => {
        for (const item of childrens) {
          if (item !== event.target) {
            item.classList.remove('radio-on');
            item.classList.add('radio-off');
          }
        }
      });
    }
  }
};

const createRadio = () => {
  const radios = getByClass('radio');

  for (const radio of radios) {
    if (!radio.classList.contains('disabled')) {
      radio.addEventListener('click', (event) => {
        const currentRadio = event.target.classList.contains('radio')
          ? event.target
          : event.target.parentNode;

        if (currentRadio.classList.contains('radio-off')) {
          currentRadio.classList.remove('radio-off');
          currentRadio.classList.add('radio-on');
        } else {
          currentRadio.classList.remove('radio-on');
          currentRadio.classList.add('radio-off');
        }
      });
    }
  }
  createRadioGroups();
};

const createCheckbox = () => {
  const checkboxes = getByClass('checkbox');

  for (const checkbox of checkboxes) {
    if (!checkbox.classList.contains('disabled')) {
      checkbox.addEventListener('click', (event) => {
        const currentCheck = event.target.classList.contains('checkbox')
          ? event.target
          : event.target.parentNode;

        if (currentCheck.classList.contains('checkbox-off')) {
          currentCheck.classList.remove('checkbox-off');
          currentCheck.classList.add('checkbox-selected');
        } else if (currentCheck.classList.contains('checkbox-selected')) {
          currentCheck.classList.remove('checkbox-selected');
          currentCheck.classList.add('checkbox-undeterminated');
        } else {
          currentCheck.classList.remove('checkbox-undeterminated');
          currentCheck.classList.add('checkbox-off');
        }
      });
    }
  }
};

const createPasswordInput = () => {
  const inputs = getByClass('input');
  for (const input of inputs) {
    if (input.children[1].className === 'password-icon') {
      const button = input.lastElementChild;
      const inputTag = input.firstElementChild;

      button.addEventListener('click', () => {
        if (inputTag.type === 'text') {
          inputTag.type = 'password';
          button.style.backgroundImage = "url('../../styles/assets/eyeClose-icon.svg')";
        } else {
          inputTag.type = 'text';
          button.style.backgroundImage = "url('../../styles/assets/eyeOpen-icon.svg')";
        }
      });
    }
  }
};

const createInputDateTimeForMozilla = () => {
  const div = document.createElement('div');
  div.className = 'input-date';
  const inputDate = document.createElement('input');
  inputDate.type = 'date';
  const inputTime = document.createElement('input');
  inputTime.type = 'time';
  div.appendChild(inputDate);
  div.appendChild(inputTime);
  return div;
};

const createDateInput = () => {
  if (IS_FIREFOX) {
    const inputs = getByTag('input');
    for (const input of inputs) {
      if (input.attributes[0].value === 'datetime-local') {
        const newInput = createInputDateTimeForMozilla();
        input.parentNode
          .insertBefore(newInput, input);
        input.remove();
      }
    }
  }
};

const applyCustomStyles = () => {
  createToggle();
  createRadio();
  createCheckbox();
  createPasswordInput();
  createDateInput();
};

export const setInputError = (input) => {
  input.classList.add('error');
  if (input.nextElementSibling.tagName === 'SPAN') {
    input.style.backgroundImage = 'none';
  }
};

export default applyCustomStyles;
