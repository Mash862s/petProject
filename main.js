const frenchArt = [
  {
    img: "./pictures/france/amurhaunt.jpg",
    author: "Марсель Руссо",
    title: "Охота Амура",
    info: "Холст, масло (50х80)",
    price: "14 500руб",
    shopButton: "В корзину",
  },
  {
    img: "./pictures/france/ladywithdog.jpg",
    author: "Анри Селин",
    title: "Дама с собачкой",
    info: "Акрил, бумага (50х80)",
    price: "16 500руб",
    shopButton: "В корзину",
  },
  {
    img: "./pictures/france/proccedures.jpg",
    author: "Франсуа Дюпон",
    title: "Процедура",
    info: "Цветная литография (40х60)",
    price: "20 000руб",
    shopButton: "В корзину",
  },
  {
    img: "./pictures/france/rose.jpg",
    author: "Луи  Детуш",
    title: "Роза",
    info: "Бумага, акрил (50х80)",
    price: "12 000руб",
    shopButton: "В корзину",
  },
  {
    img: "./pictures/france/birds.jpg",
    author: "Франсуа Дюпон",
    title: "Птичья трапеза",
    info: "Цветная  литография (40х60)",
    price: "22 500руб",
    shopButton: "В корзину",
  },
  {
    img: "./pictures/france/fish.jpg",
    author: "Пьер Моранж",
    title: "Пейзаж с рыбой",
    info: "Цветная литография (40х60)",
    price: "20 000руб",
    shopButton: "В корзину",
  },
];

const germanyArt = [
  {
    img: "./pictures/germany/owntown.png",
    author: "Курт Вернер",
    title: "Над городом",
    info: "Цветная литография(40х60)",
    price: "16 00руб",
    shopButton: "В корзину",
  },
  {
    img: "./pictures/germany/chicks.png",
    author: "Макс Рихтер",
    title: "Птенцы",
    info: "Бумага, акрил (50х80)",
    price: "14 500руб",
    shopButton: "В корзину",
  },
  {
    img: "./pictures/germany/amongtheleaves.png",
    author: "Мартин Майер",
    title: "Среди листьев",
    info: "Цветная литография (40х60)",
    price: "20 000руб",
    shopButton: "В корзину",
  },
  {
    img: "./pictures/germany/brightbird.png",
    author: "Герман Беккер",
    title: "Яркая птица",
    info: "Цветная литография (50х80)",
    price: "13 000руб",
    shopButton: "В корзину",
  },
  {
    img: "./pictures/germany/woodpeckers.png",
    author: "Вульф Бауэр",
    title: "Дятлы",
    info: "Бумага, Акрил (50х80)",
    price: "20 00руб",
    shopButton: "В корзину",
  },
  {
    img: "./pictures/germany/bigwaters.png",
    author: "Вальер Артман",
    title: "Большие воды",
    info: "Бумага, акрил (50х80)",
    price: "23 000руб",
    shopButton: "В корзину",
  },
];

const englandArt = [
  {
    img: "./pictures/england//wildebeast.png",
    author: "Пол Смит",
    title: "Дикий зверь",
    info: "Акварель, бумага(50х80)",
    price: "19 500руб",
    shopButton: "В корзину",
  },
  {
    img: "./pictures//england/rockycoasts.png",
    author: "Джон Уайт",
    title: "Скалистый берег",
    info: "Цветная литография (40х60)",
    price: "17 500руб",
    shopButton: "В корзину",
  },
  {
    img: "./pictures/england/riverandmounts.png",
    author: "Джим Уотсон",
    title: "Река и горы",
    info: "Акварель, бумага(40х60)",
    price: "20 500руб",
    shopButton: "В корзину",
  },
  {
    img: "./pictures/england/whiteparrot.png",
    author: "Юджин Зиллион",
    title: "Белый попугай",
    info: "Цветная литография (40х0)",
    price: "15 500руб",
    shopButton: "В корзину",
  },
  {
    img: "./pictures/england/nigthtfish.png",
    author: "Эрик Гилман",
    title: "Ночная рыба",
    info: "Бумага, Акрил (50х80)",
    price: "12 500руб",
    shopButton: "В корзину",
  },
  {
    img: "./pictures/england/redcat.png",
    author: "Альфред Бар",
    title: "Рыжий кот",
    info: "Цветная литография (40х60)",
    price: "21 000руб",
    shopButton: "В корзину",
  },
];

const scrollNavBar = document.querySelectorAll("[data-scroll-to]");

const mainPageCards = document.querySelector(".main__page__cards");

const selectCategory = document.querySelector(
  ".main__page__selected__category",
);
createCards(frenchArt);

async function createCards(arg) {
  await arg.forEach((item) => {
    let card = document.createElement("div");
    card.className = "main__page__cards__card";

    let cardImage = document.createElement("img");
    cardImage.className = "main__page__cards__card__img";
    cardImage.src = item.img;
    cardImage.alt = item.author || "Art";

    let cardAuthor = document.createElement("p");
    cardAuthor.className = "main__page__cards__card__author";
    cardAuthor.innerText = item.author;

    let cardTitle = document.createElement("p");
    cardTitle.className = "main__page__cards__card__title";
    cardTitle.innerText = item.title;

    let cardInfo = document.createElement("p");
    cardInfo.className = "main__page__cards__card__info";
    cardInfo.innerText = item.info;

    let cardPrice = document.createElement("p");
    cardPrice.className = "main__page__cards__card__price";
    cardPrice.innerText = item.price;

    let cardShopButton = document.createElement("button");
    cardShopButton.className = "main__page__cards__card__shop__button";
    cardShopButton.innerText = item.shopButton;

    card.append(cardImage);
    card.append(cardAuthor);
    card.append(cardTitle);
    card.append(cardInfo);
    card.append(cardPrice);
    card.append(cardShopButton);

    mainPageCards.append(card);
  });
}

function handleCountryFilter(target) {
  const countryDataMap = {
    france: frenchArt,
    germany: germanyArt,
    england: englandArt,
  };
  const country = event.target.dataset.country;

  if (country && countryDataMap[country]) {
    mainPageCards.innerHTML = "";
    createCards(countryDataMap[country]);
  }
}

selectCategory.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("main__page__selected__category__button")
  ) {
    const clickedBtn = event.target;

    const buttonsSelectCategory = document.querySelectorAll(
      ".main__page__selected__category__button",
    );
    buttonsSelectCategory.forEach((btn) => btn.classList.remove("isActive"));

    clickedBtn.classList.add("isActive");
  }

  handleCountryFilter();
});

scrollNavBar.forEach((button) => {
  button.addEventListener("click", (event) => {
    const targetId = event.target.dataset.scrollTo;
    const element = document.querySelector(`#${targetId}`);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
