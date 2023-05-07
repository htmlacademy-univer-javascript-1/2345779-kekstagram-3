import { drawPictures } from './draw.js';
import { showAlert } from './util.js';


const getPics = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((pics) => drawPictures(pics))
    .catch(() => {
      showAlert('Не удалось подгрузить изображения');
    });
};


export {getPics};
