const paragraph = document.querySelector("p");

Array.from(document.querySelectorAll("p"))
.forEach(p => {
  p.innerHTML = p.innerHTML.replace(/\?/g, "🤔" )
})