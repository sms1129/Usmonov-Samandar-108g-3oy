const list = document.querySelector(".list");

products.sort((a, b) => {
  if (a.price > b.price) {
    return -1;
  } else {
    return 1;
  }
});

for (i = 0; i < 5; i++) {
  let elLi = document.createElement("div");
  elLi.setAttribute("class", "list-item");
  elLi.innerHTML = `
    <img src=${products[i].image} height="150" width="260"/>
    <div class="price-2">
        <p class="our_rate">${products[i].rating.rate}/${products[i].rating.count}</p>
        <p class="our_price_value">$${products[i].price}</p>
    </div>
    `;
  list.appendChild(elLi);
}

const list2 = document.querySelector(".list-2");
products.forEach((el) => {
  if (el.price > 60 && el.price < 700) {
    let elLi = document.createElement("li");
    elLi.setAttribute("class", "our_item");
    elLi.innerHTML = `
        <img src=${el.image} width="200"/>
        <div class="price-2">
            <p class="our_rate">${el.rating.rate}/${el.rating.count}</p>
            <p class="our_price_value">$${el.price}</p>
        </div>
        `;
    list2.appendChild(elLi);
  }
});


products.sort((a, b) => {
  if (a.price > b.price) {
    return 1;
  } else {
    return -1;
  }
});

const list3 = document.querySelector(".list-3");
products.forEach((el) => {
  if (el.price > 0 && el.price < 11) {
    let elLi = document.createElement("li");
    elLi.setAttribute("class", "our_item");
    elLi.innerHTML = `
        <img src=${el.image} width="200"/>
        <div class="price-2">
            <p class="our_rate">${el.rating.rate}/${el.rating.count}</p>
            <p class="our_price_value">$${el.price}</p>
        </div>
        `;
    list3.appendChild(elLi);
  }
});

const searchBtn = document.querySelector(".btn-search");

searchBtn.addEventListener('click', () => {
  location.replace('second.html');
})