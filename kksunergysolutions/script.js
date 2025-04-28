let flipped = false;

function flipCard() {
  const front = document.getElementById('cardFront');
  const back = document.getElementById('cardBack');

  if (!flipped) {
    front.style.transform = 'rotateY(180deg)';
    back.style.transform = 'rotateY(360deg)';
  } else {
    front.style.transform = 'rotateY(0deg)';
    back.style.transform = 'rotateY(180deg)';
  }
  flipped = !flipped;
}
