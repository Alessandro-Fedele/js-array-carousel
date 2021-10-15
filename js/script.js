const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// Prendo gli elementi Dom
// immagini
const imgContainer = document.querySelector(".img-container");
const thumbContainer = document.querySelector(".thumbnail");
// // titoli
// const onImgTitle = document.querySelector(".on-img-title");
// // testi
// const onImgText = document.querySelector(".on-img-text");

let currentIndex = 0;

// Cicli
// ciclo per immagini
for (let i = 0, k = 0, j = 0; i < items.length, k < title.length, j < text.length; i++, k++, j++) {
    console.log(i, j, k);
    // ogni ciclo prendo un imagine
    const urlCurrentImg = items[i];
    const currentTitle = title[k];
    const currentText = text[j];

    // Creo una classe per l'active
    let activeClass = "";

    // la prima immagine deve avere l'active
    if (i === currentIndex) {
        activeClass = "active";
    }

    // Creo i tag img
    const tagImg = `<img class="${activeClass}" src="${urlCurrentImg}" alt="immagine ${i}">`;
    const onImgTitle = `<h3>${currentTitle}</h3>`;
    const onImgText = `<p>${currentText}</p>`;

    // aggiungo all'Html
    // imgContainer.classList.add("active");
    imgContainer.innerHTML += tagImg + onImgTitle + onImgText;
    thumbContainer.innerHTML += tagImg;

}
//-------------------------
// Arrow
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");

// Freccia down
// Devo aggiungere un evento al click
arrowUp.addEventListener("click", function ()
{
    // Prendo la classe attiva e ci rimuovo la classe che la rende attiva
    const activeImg = imgContainer.querySelector(".active");
    const activeThumb = thumbContainer.querySelector(".active");
    activeImg.classList.remove("active");
    activeThumb.classList.remove("active");

    // Decremento counter
    currentIndex--;

    // Ricomincia se va sotto lo 0
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }

    const imgTags = imgContainer.querySelectorAll("img");
    const activeON = thumbContainer.querySelectorAll("img");
    const nowActiveImg = imgTags[currentIndex];
    const nowActiveThumb = activeON[currentIndex];

    nowActiveImg.classList.add("active");
    nowActiveThumb.classList.add("active");
});

// Freccia Up
arrowDown.addEventListener("click", function ()
{
    const activeImg = imgContainer.querySelector(".active");
    const activeThumb = thumbContainer.querySelector(".active");
    activeImg.classList.remove("active");
    activeThumb.classList.remove("active");

    // Incremento counter
    currentIndex++;

    // se arriva al massimo ricomincia da 0
    if (currentIndex > items.length - 1) {
        currentIndex = 0;
    }

    const imgTags = imgContainer.querySelectorAll("img");
    const activeON = thumbContainer.querySelectorAll("img");
    const nowActiveImg = imgTags[currentIndex];
    const nowActiveThumb = activeON[currentIndex];

    nowActiveImg.classList.add("active");
    nowActiveThumb.classList.add("active");
});