const backBtn = document.querySelector(".btn-back");

backBtn.addEventListener("click", () => {
  location.replace("index.html");
});

const list4 = document.querySelector(".list-4");

products.sort((a, b) => {
  if (a.price > b.price) {
    return 1;
  } else {
    return -1;
  }
});

function render() {
  list4.innerHTML = "";
  for (i = 0; i < 20; i++) {
    let elLi = document.createElement("div");
    elLi.setAttribute("class", "list-item1");
    elLi.innerHTML = `
    <img src=${products[i].image} height="300" width="220"/>
    <div class="price-2">
        <p class="our_rate">${products[i].rating.rate}/${products[i].rating.count}</p>
        <p class="our_price_value">$${products[i].price}</p>
    </div>
    `;
    list4.appendChild(elLi);
  }
}

render();

const inputValue = document.querySelector(".sear");

inputValue.addEventListener("input", () => {
  list4.innerHTML = "";
  const result = inputValue.value.toLowerCase();

  products.forEach((el) => {
    if (el.title.toLowerCase().includes(result, 0)) {
      let elLi = document.createElement("div");
      // let elLi = document.createElement("div");
      elLi.setAttribute("class", "list-item1");
      elLi.innerHTML = `
        <img src=${el.image} height="300" width="220"/>
        <div class="price-2">
            <p class="our_rate">${el.rating.rate}/${el.rating.count}</p>
            <p class="our_price_value">$${el.price}</p>
        </div>
      `;
      list4.appendChild(elLi);
    }
  });
});
