// Scripts
console.log("Vous contemplez le vide. Et le vide vous contemple.");

let markdownTexts = document.querySelectorAll('.markdown');
markdownTexts.forEach(el => {
  const reader = new commonmark.Parser({smart: true});
  const writer = new commonmark.HtmlRenderer({sourcepos: true});
  const parsed = reader.parse(el.textContent);
  el.innerHTML = writer.render(parsed);
});

let baffleHash = baffle('.text--list .hash')
                  .start()
                  .set({
                    characters: '0x000x01',
                    speed: 150
                  });

let hashBtn = document.querySelectorAll('.hash');

hashBtn.forEach(el => {
  el.setAttribute('data-value', '+');
  el.addEventListener('click', toggleShow);
});

function toggleShow() {
  let textVerse = this.parentNode.querySelector('.text__subject');
  let textProse = this.parentNode.querySelector('.text__body');
  if (textVerse.style.display === 'none' &&
      textProse.style.display === 'none') {
    this.setAttribute('data-value', '-');
    baffleHash.reveal(1500);
    textVerse.style.display = 'block';
    textProse.style.display = 'block';
    hashBtn.forEach((other) => {
      let otherVerse = other.parentNode.querySelector('.text__subject');
      let otherProse = other.parentNode.querySelector('.text__body');
      if (other != this &&
          otherVerse.style.display === 'block' &&
          otherProse.style.display === 'block') {
        other.setAttribute('data-value', '+');
        otherVerse.style.display = 'none';
        otherProse.style.display = 'none';
      }
    });
  }
  else {
    baffleHash.start();
    this.setAttribute('data-value', '+');
    textVerse.style.display = 'none';
    textProse.style.display = 'none';
  }
}
