const paragraph = document.querySelector("p");
paragraph.innerHTML = paragraph.innerText
  .split(" ")
  .map((word) =>
    word.length > 8
      ? `<span style="background-color: aqua">${word}</span>`
      : word
  )
  .join(" ");

