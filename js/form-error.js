
const errorMessageElement = document.querySelector('#error').content.querySelector('.error');

const closeErrorElement = () => {
  errorMessageElement.classList.add('hidden');
  document.removeEventListener('keydown', onFormEscapeKeyDown);
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
};

function onFormEscapeKeyDown(evt){
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeErrorElement();
  }
}

function errorSending(){
  const errorButton = errorMessageElement.querySelector('.error__button');
  document.addEventListener('keydown', onFormEscapeKeyDown);
  errorButton.addEventListener('click', () => {
    closeErrorElement();
  });
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.body.append(errorMessageElement);
}

export {errorSending};
