function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

function checkCommentLength(string, requiredLength) {
  if(string.length <= requiredLength) {
    return true;
  } else {
    return false;
  }
}

const button = document.querySelector('.img-upload__label');
button.onclick = function() {
  console.log(getRandomInt(1, 100));
  console.log(checkCommentLength('xdd', 4));
};
