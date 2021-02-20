const paragraph = document.querySelector("p");

paragraph.innerHTML = paragraph.innerHTML.split(".").join("</p><p>") + "</p>";
