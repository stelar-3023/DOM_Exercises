document
  .querySelector("#pro-plan ul")
  .insertAdjacentHTML("beforeend", "<li>24/7 Phone Support</li>");

document.querySelector(".card-deck").style["flex-direction"] = "row-reverse";

const proCTA = document.querySelector("#pro-plan button");
// proCTA.style.backgroundColor = "#007BFF";
// proCTA.style.color = "#fff";
proCTA.innerText = "Buy Now";

proCTA.classList.add("btn-primary");
proCTA.classList.remove("btn-outline-primary");

const basicStorage = document.querySelector("#basic-plan .storage-amount");
const proStorage = document.querySelector("#pro-plan .storage-amount");

basicStorage.innerText = basicStorage.innerText * 1.5;
proStorage.innerText = proStorage.innerText * 1.25;

document
  .querySelector(".container")
  .insertAdjacentHTML(
    "afterbegin",
    '<label>Monthly<input id="monthlyPricing" type="radio" name="pricing" value="monthly" checked></label>  <label>Annual<input id="annualPricing" type="radio" name="pricing" value="annual"></label>'
  );

const pricing = {
  monthly: {
    basic: "10 / month",
    pro: "30 / month",
  },
  annual: {
    basic: "100 / year",
    pro: "300 / year",
  },
};

const changePricing = (event) => {
  const selection = event.target.value;
  document.querySelector("#basic-plan .pricing").innerText =
    pricing[selection].basic;
  document.querySelector("#pro-plan .pricing").innerText =
    pricing[selection].pro;
};

Array.from(document.querySelectorAll('input[type="radio"]')).forEach((radio) =>
  radio.addEventListener("change", changePricing)
);
