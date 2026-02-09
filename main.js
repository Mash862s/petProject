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

function createCardElement(tagName, className, cardText, item) {
  if (tagName != "img") {
    let cardElement = document.createElement(`${tagName}`);
    cardElement.className = `main__page__cards__card__${className}`;
    cardElement.innerText = cardText != undefined ? cardText : "В корзину";

    return cardElement;
  } else {
    let cardImage = document.createElement(`${tagName}`);
    cardImage.className = `main__page__cards__card__${className}`;
    cardImage.src = item.img;
    cardImage.alt = item.author || "Art";
    return cardImage;
  }
}

function createCards(arg) {
  arg.forEach((item) => {
    let card = document.createElement("div");
    card.className = "main__page__cards__card";

    const elements = [
      (cardImage = createCardElement("img", "img", null, item)),
      (cardAuthor = createCardElement("p", "author", item.author)),
      (cardTitle = createCardElement("p", "title", item.title)),
      (cardInfo = createCardElement("p", "info", item.info)),
      (cardPrice = createCardElement("p", "price", item.price)),
      (cardShopButton = createCardElement("button", "shopButton", item.shop)),
    ];

    card.append(...elements);

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
