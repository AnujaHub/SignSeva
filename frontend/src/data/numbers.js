const numbersDeck = [];

for (let i = 0; i <= 9; i++) {
  numbersDeck.push({
    content: i.toString(),
    img: `/assets/numbers/${i}.jpg`, // Placeholder until you add number images
  });
}

export default numbersDeck;
