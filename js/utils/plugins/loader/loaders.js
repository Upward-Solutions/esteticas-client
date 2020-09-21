export const ballPulse = (color) => {
  return `
    <div class="ball-pulse">
        <div style="background-color: ${color}"></div>
        <div style="background-color: ${color}"></div>
        <div style="background-color: ${color}"></div>
    </div>
    `;
};

export const clipRotate = (color) => {
  return `
    <div class="ball-clip-rotate">
        <div style="background-color: ${color}"></div>
    </div>
    `;
};

export const scaleRipple = (color) => {
  if (color) {
    return `
        <div class="ball-scale-ripple">
            <div style="background-color: ${color}"></div>
        </div>
        `;
  } else {
    return `
        <div class="ball-scale-ripple">
            <div></div>
        </div>
        `;
  }
};

export const circleSpin = (color) => {
  if (color) {
    return `
        <div class="semi-circle-spin">
            <div style="background-color: ${color}"></div>
        </div>
        `;
  } else {
    return `
        <div class="semi-circle-spin">
            <div></div>
        </div>
        `;
  }
};

export const gridPulse = (color) => {
  return `
    <div class="ball-grid-pulse">
        <div style="background-color: ${color}"></div>
        <div style="background-color: ${color}"></div>
        <div style="background-color: ${color}"></div>
        <div style="background-color: ${color}"></div>
        <div style="background-color: ${color}"></div>
        <div style="background-color: ${color}"></div>
        <div style="background-color: ${color}"></div>
        <div style="background-color: ${color}"></div>
        <div style="background-color: ${color}"></div>
    </div>
    `;
};

export const pulseSync = (color) => {
  return `
    <div class="ball-pulse-sync">
        <div style="background-color: ${color}"></div>
        <div style="background-color: ${color}"></div>
        <div style="background-color: ${color}"></div>
    </div>
    `;
};
