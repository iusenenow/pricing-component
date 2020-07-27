const toggle = document.querySelector(".toggle");
const button = document.querySelector(".button");
const prices = document.querySelectorAll(".price");
const monthly = ["19.99", "24.99", "39.99"];
const annually = ["199.99", "249.99", "399.99"];

let switchcheck = false;

function priceTransition() {
  prices.forEach((price) => {
    price.style.transform = "rotateX(180deg)";
    price.style.transition = "transform 350ms";
    setTimeout(function () {
      price.style.transform = "scale(1)";
    }, 350);
  });
}

function priceChange() {
  prices.forEach((price, index) => {
    !switchcheck
      ? (price.textContent = `$${monthly[index]}`)
      : (price.textContent = `$${annually[index]}`);
  });
}

toggle.addEventListener("click", function () {
  if (!switchcheck) {
    button.style.left = "calc(100% - 24px)";
    toggle.style.opacity = ".30";
    priceChange();
    priceTransition();
    switchcheck = true;
  } else {
    button.style.left = "3px";
    toggle.style.opacity = "1";
    priceChange();
    priceTransition();
    switchcheck = false;
  }
});
