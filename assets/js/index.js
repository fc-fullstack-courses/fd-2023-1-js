'use strict';

const root = document.getElementById('root');

/*
  нужно
  1. создать через ДОМ верстку для каждой карточки актера
  2. добавить эту верстку в наш див
*/

const ActorsCards = responseData.map((actor) => createActorCard(actor));
root.append(...ActorsCards);

function createActorCard(actor) {
  const fullName = `${actor.firstName} ${actor.lastName}`;

  const card = document.createElement('article');
  card.classList.add('cardContainer');

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('cardHeader');

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('cardInfo');

  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('imgWrapper');

  const img = document.createElement('img');
  img.classList.add('img');
  // img.setAttribute('src')
  img.src = actor.profilePicture;
  img.alt = fullName;

  const actorName = document.createElement('h1');
  actorName.classList.add('actorName');
  actorName.textContent = fullName;

  const cardText = document.createElement('p');
  cardText.classList.add('cardText');
  cardText.textContent = actor.aboutMe
    ? actor.aboutMe
    : 'Actor didn`t write about self';

  imgWrapper.append(img);
  cardInfo.append(imgWrapper, actorName, cardText);
  card.append(cardHeader, cardInfo);
  return card;
}
