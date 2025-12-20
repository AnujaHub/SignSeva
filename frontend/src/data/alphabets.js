const lettersDeck = [];

for (let i = 65; i <= 90; i++) {
  const letter = String.fromCharCode(i);
  const lowercaseLetter = letter.toLowerCase();
  lettersDeck.push({
    content: letter,
    img: `/assets/alphabets/${letter}.jpg`,
  });
}

export default lettersDeck;
