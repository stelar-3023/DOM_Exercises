document
  .getElementById("username")
  .insertAdjacentHTML(
    "beforebegin",
    '<label for="username">Username: </label>'
  );
document
  .getElementById("password")
  .insertAdjacentHTML(
    "beforebegin",
    '<label for="password">Password: </label>'
  );
document
  .getElementById("confirmPassword")
  .insertAdjacentHTML(
    "beforebegin",
    '<label for="confirmPassword">Confirm Password: </label>'
  );

const checkInput = (event) => {
  const errorElement = Array.from(
    event.target.parentNode.querySelectorAll("span")
  );
  if (event.target.value === "" && !errorElement.length) {
    event.target.insertAdjacentHTML(
      "afterend",
      '<span class="text-danger">Required</span>'
    );
  }
  if (errorElement && event.target.value !== "") {
    errorElement.forEach((elem) => elem.remove());
  }
};

document.getElementById("username").addEventListener("blur", checkInput);
document.getElementById("password").addEventListener("blur", checkInput);
document.getElementById("confirmPassword").addEventListener("blur", checkInput);

document.getElementById("confirmPassword").addEventListener("blur", (event) => {
  if (event.target.value !== document.getElementById("password").value) {
    event.target.insertAdjacentHTML(
      "afterend",
      '<span class="text-danger">Passwords do not match</span>'
    );
  }
});

const btn = document.querySelector("button");
btn.setAttribute("disabled", "disabled");
document
  .getElementById("registrationForm")
  .addEventListener("change", (event) => {
    const formisFilled = Array.from(document.querySelectorAll("input")).every(
      (input) => input.value
    );
    if (formisFilled) {
      btn.removeAttribute("disabled");
    } else {
      btn.setAttribute("disabled", "disabled");
    }
  });

const form = document.getElementById("registrationForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const alert = document.createElement("div");
  alert.classList.add("alert", "alert-success");
  alert.innerText = "User registered successfully";
  form.prepend(alert);
})