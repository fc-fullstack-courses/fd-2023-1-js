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
  const { id, firstName, lastName, profilePicture, aboutMe } = actor;

  const fullName =
    firstName || lastName ? `${firstName} ${lastName}`.trim() : 'Unknown Actor';

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
  img.src = profilePicture;
  img.alt = fullName;
  img.addEventListener('error', handleImageError);

  const initials = document.createElement('p');
  initials.classList.add('initials');
  initials.textContent = generateInitials(fullName);

  const actorName = document.createElement('h1');
  actorName.classList.add('actorName');
  actorName.textContent = fullName;

  const cardText = document.createElement('p');
  cardText.classList.add('cardText');
  cardText.textContent = aboutMe ? aboutMe : 'Actor didn`t write about self';

  imgWrapper.append(img, initials);
  cardInfo.append(imgWrapper, actorName, cardText);
  card.append(cardHeader, cardInfo);
  return card;
}
