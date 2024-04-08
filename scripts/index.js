// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placeList = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(addCard, deleteCard) {
  const cardBox = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardBox.querySelector(".card__image");
  const cardTitle = cardBox.querySelector(".card__title");
  cardImage.src = addCard.link;
  cardImage.alt = addCard.name;
  cardTitle.textContent = addCard.name;
  const cardDeleteButton = cardBox.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", function () {
    deleteCard(cardBox);
  });
  return cardBox;
}

// @todo: Функция удаления карточки
function deleteCard(cardBox) {
  cardBox.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (cardBox) {
  placeList.append(createCard(cardBox, deleteCard));
});
