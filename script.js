const slider = document.querySelector("#slider");
const pageViews = document.querySelector("[page-views]");
const totalPrice = document.querySelector(`[total-price]`);
const switcher = document.querySelector("[toggle-input]");
const sumbit = document.querySelector(".start-btn");

switcher.checked = false;
slider.value = 100000;
let price = [8, 12, 16, 24, 36];

const storage = {
  totalPrice: 16,
  billingType: "month",
};

// function switchPrice(dataBilling) {
//   if (dataBilling == "month") {
//     price = [8, 12, 16, 24, 36];
//   }
// }

switcher.addEventListener("change", () => {
  if (switcher.checked) {
    storage.billingType = "year";

    for (let i = 0; i < price.length; i++) {
      price[i] *= 0.25;
    }

    const yearlyVal = storage.totalPrice * 0.25;
    totalPrice.firstChild.textContent = `$${yearlyVal}.00`;
    totalPrice.lastChild.textContent = `/  ${storage.billingType}`;
    storage.totalPrice = yearlyVal;
  } else {
    storage.billingType = "month";
    for (let i = 0; i < price.length; i++) {
      price[i] /= 0.25;
    }
    const monthlyVal = storage.totalPrice / 0.25;

    totalPrice.firstChild.textContent = `$${monthlyVal}.00`;

    storage.totalPrice = monthlyVal;
    totalPrice.lastChild.textContent = `/  ${storage.billingType}`;
  }
  // console.log(storage);
  // console.log(currentBill);
});

slider.addEventListener("input", (e) => {
  let sliderVal = e.target.value;

  if (sliderVal < 49999) {
    storage.totalPrice = price[0];
    totalPrice.firstChild.textContent = `$${storage.totalPrice}.00`;
    totalPrice.lastChild.textContent = `/  ${storage.billingType}`;
  } else if (sliderVal > 50000 && sliderVal < 99999) {
    storage.totalPrice = price[1];
    totalPrice.firstChild.textContent = `$${storage.totalPrice}.00`;
    totalPrice.lastChild.textContent = `/  ${storage.billingType}`;

    // console.log("12");
  } else if (sliderVal > 100000 && sliderVal < 499999) {
    storage.totalPrice = price[2];
    totalPrice.firstChild.textContent = `$${storage.totalPrice}.00`;
    totalPrice.lastChild.textContent = `/  ${storage.billingType}`;

    // console.log("16");
  } else if (sliderVal > 500000 && sliderVal < 999999) {
    storage.totalPrice = price[3];
    totalPrice.firstChild.textContent = `$${storage.totalPrice}.00`;
    totalPrice.lastChild.textContent = `/  ${storage.billingType}`;

    // console.log("24");
  } else {
    storage.totalPrice = price[4];
    totalPrice.firstChild.textContent = `$${storage.totalPrice}.00`;
    totalPrice.lastChild.textContent = `/  ${storage.billingType}`;

    // console.log("36");
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

sumbit.addEventListener("click", () => {
  console.log(storage);
});

// 1,000,000
