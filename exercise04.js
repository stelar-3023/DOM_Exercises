const paragraph = document.querySelector("p");

const wordCount = paragraph.innerText.split(" ").length;
const wordCountElement = document.createElement("div");
wordCountElement.innerText = `${wordCount} words`;
document.body.insertBefore(wordCountElement, paragraph);