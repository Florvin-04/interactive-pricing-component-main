const slider = document.querySelector("#slider");
const pageViews = document.querySelector("[page-views]");
const totalPrice = document.querySelector(`[total-price]`);
const changePrice = document.querySelector("[toggle-input]");

const price = [8, 12, 16, 24, 36];

changePrice.addEventListener("change", () => {
  if (changePrice.checked) {
    totalPrice.firstChild.textContent = 2;
  } else {
    totalPrice.firstChild.textContent = 9;
  }
});

slider.addEventListener("input", (e) => {
  let sliderVal = e.target.value;

  if (sliderVal < 49999) {
    totalPrice.firstChild.textContent = `${price[0]}`;
  } else if (sliderVal > 50000 && sliderVal < 99999) {
    console.log("12");
  } else if (sliderVal > 100000 && sliderVal < 499999) {
    console.log("16");
  } else if (sliderVal > 500000 && sliderVal < 999999) {
    console.log("24");
  } else {
    console.log("36");
  }

  if (sliderVal.length === 1 || sliderVal.length === 2) {
    pageViews.innerText = `${sliderVal} pageviews`;
  } else if (sliderVal.length === 3) {
    pageViews.innerText = `${sliderVal}h pageviews`;
  } else if (sliderVal.length === 4) {
    pageViews.innerText = `${sliderVal.slice(0, 1)}k pageviews`;
  } else if (sliderVal.length === 5) {
    pageViews.innerText = `${sliderVal.slice(0, 2)}k pageviews`;
  } else if (sliderVal.length === 6) {
    pageViews.innerText = `${sliderVal.slice(0, 3)}k pageviews`;
  } else if (sliderVal.length === 7) {
    pageViews.innerText = `1m pageviews`;
  }
});

// 1,000,000
