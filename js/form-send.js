const successMessageElement = document.querySelector('#success').content.querySelector('.success');

const closeSuccessElement = () => {
  successMessageElement.classList.add('hidden');
  document.removeEventListener('keydown', onFormEscapeKeyDown);
  document.removeEventListener('click', closeSuccessElement);
};

function onFormEscapeKeyDown(evt){
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeSuccessElement();
  }
}

function successSending(){
  const successButton = successMessageElement.querySelector('.success__button');
  document.addEventListener('keydown', onFormEscapeKeyDown);
  document.addEventListener('click', closeSuccessElement);
  successButton.addEventListener('click', () => {
    closeSuccessElement();
  });
  document.body.append(successMessageElement);
}

export {successSending};
