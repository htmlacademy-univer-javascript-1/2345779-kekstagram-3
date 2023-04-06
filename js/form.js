const uploadPicForm = document.querySelector('.img-upload__form');
const overlay = uploadPicForm.querySelector('.img-upload__overlay');
const smallerButton = uploadPicForm.querySelector('.scale__control--smaller');
const biggerButton = uploadPicForm.querySelector('.scale__control--bigger');
const scaleInput = uploadPicForm.querySelector('.scale__control--value');
const previewPic = uploadPicForm.querySelector('.img-upload__preview img');
const buttons = document.querySelectorAll('.effects__radio');


// Кнопки изменения масштаба
const shrink = (evt) => {
  evt.preventDefault();

  let value = parseInt(scaleInput.value, 10);
  if (value >= 50) {
    value -= 25;
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
    value += 25;
  } else {
    value = 100;
  }
  scaleInput.value = `${value}%`;
  previewPic.style.transform = `scale(${value/100})`;
};

// Изменения фильтра картинки

const removeFilters = (evt) => {
  evt.preventDefault();
  previewPic.classList = [];
};

const changeFilter = (evt, elem) => {
  evt.preventDefault();
  previewPic.classList = [];
  previewPic.classList.add(`effects__preview--${elem.value}`);
};

const addListener = (elem) => {
  if (elem.value === 'none') {
    elem.addEventListener('click', removeFilters);
  } else {
    elem.addEventListener('click', changeFilter);
  }
};

const removeListener = () => {
  buttons.forEach((element) => {
    if (element.value === 'none') {
      element.removeEventListener('click', removeFilters);
    } else {
      element.removeEventListener('click', changeFilter);
    }
  });
};

const makeListeners = () => {
  buttons.forEach((element) => addListener(element));
};

// Обработка открытия и закрытия окна

const closeOnButton = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeWindow();
  }
};


function openWindow() {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);
  smallerButton.addEventListener('click', shrink);
  biggerButton.addEventListener('click', enlarge);
  makeListeners();
}

function closeWindow() {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
  cleanForm();
  removeListener();
}

uploadPicForm.addEventListener('change', (evt) => {
  evt.preventDefault();

  openWindow();
});

const closeButton = uploadPicForm.querySelector('#upload-cancel');

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  closeWindow();
});


function cleanForm() {
  document.querySelector('#upload-file').value = '';
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
}

