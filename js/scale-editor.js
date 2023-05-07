const zoomIn = document.querySelector('.scale__control--bigger');
const zoomOut = document.querySelector('.scale__control--smaller');
const scaleInput = document.querySelector('.scale__control--value');
const previewPic = document.querySelector('.img-upload__preview');

const STEP = 25;

const shrink = (evt) => {
  evt.preventDefault();

  let value = parseInt(scaleInput.value, 10);
  if (value >= 50) {
    value -= STEP;
  } else {
    value = 25;
  }
  scaleInput.value = `${value}%`;
  previewPic.style.transform = `scale(${value/100})`;
};

const enlarge = (evt) => {
  evt.preventDefault();

  let value = parseInt(scaleInput.value, 10);
  if (value <= 75) {
    value += STEP;
  } else {
    value = 100;
  }
  scaleInput.value = `${value}%`;
  previewPic.style.transform = `scale(${value/100})`;
};

const initScaleEditor = () => {
  zoomIn.addEventListener('click', (evt) => {
    enlarge(evt);
  });

  zoomOut.addEventListener('click', (evt) => {
    shrink(evt);
  });
};

export {initScaleEditor};

