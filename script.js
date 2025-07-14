const cards = [
  {
    filename: "63.Queen_Swords.png",
    description: `Queen of Swords - Aroree

Upright: Aroree, through centuries of healing, learned how to be independent, as the Queen of Swords suggests you are. This Glider carries the scars of her past with humility, allowing them to guide her decisions wisely. At one point in her story, she finds emotions to be distractions from logic, reasoning that since the wolfriders could easily recognize again they would be at peace with her kidnapping Windkin. In the same vein, you may also be letting your head rule your decisions. Do you feel closer to others when you connect intellectually versus emotionally? Continue to search for truth in everything you do.

Reversed: One could also argue that it was Aroree’s emotional response to feeling trapped that led her to swipe the young Wolfrider Windkin. Ensure that you allow your head and heart to communicate in balance. You may be letting your heart take too much of a lead. If you’re struggling to express compassion to others, reflect on why that is.`
  }
  // Add more card objects here following the same structure
];

function drawCard() {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const card = cards[randomIndex];

  const image = document.getElementById("card-image");
  image.src = `images/${card.filename}`;
  image.style.display = 'block';

  const formatted = card.description
    .split("\n\n")
    .map(p => `<p>${p}</p>`)
    .join("");

  document.getElementById("card-description").innerHTML = formatted;
}
