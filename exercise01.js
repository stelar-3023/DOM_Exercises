const paragraph = document.querySelector("p");
paragraph.innerHTML = paragraph.innerText
  .split(" ")
  .map((word) =>
    word.length > 8
      ? `<span style="background-color: aqua">${word}</span>`
      : word
  )
  .join(" ");

let message = "I said don't click here"

function btnMessage() {
  console.log(message)  
}
btnPress = document.getElementById("btn")
btnPress.addEventListener("click", btnMessage)
