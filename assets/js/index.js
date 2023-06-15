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

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('cardInfo');

  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('imgWrapper');

  const img = document.createElement('img');
  img.classList.add('img');
  img.src = profilePicture;
  img.alt = fullName;
  img.addEventListener('error', handleImageError);

  const initials = document.createElement('p');
  initials.classList.add('initials');
  initials.textContent = generateInitials(fullName);


  const actorName = createElement('h1', {classNames: ['actorName']}, fullName);

  const cardText = document.createElement('p');
  cardText.classList.add('cardText');
  cardText.textContent = aboutMe ? aboutMe : 'Actor didn`t write about self';

  imgWrapper.append(img, initials);
  cardInfo.append(imgWrapper, actorName, cardText);

  const cardHeader = createElement('div', {classNames: ['cardHeader']});

  const card = createElement(
    'article',
    { classNames: ['cardContainer'] },
    cardHeader,
    cardInfo
  );

  return card;
}
