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
// titoli
const onImgTitle = document.querySelector(".on-img-title");
// testi
const onImgText = document.querySelector(".on-img-text");

let currentIndex = 0;

// Cicli
// ciclo per immagini
for (let i = 0; i < items.length; i++) {

    // ogni ciclo prendo un imagine
    const urlCurrentImg = items[i];

    // Creo una classe per l'active
    let activeClass = "";

    // la prima immagine deve avere l'active
    if (i === currentIndex) {
        activeClass = "active";
    }

    // Creo i tag img
    const tagImg = `<img class="${activeClass}" src="${urlCurrentImg}" alt="immagine ${i}">`;

    // aggiungo all'Html
    imgContainer.innerHTML += tagImg;

    for (let k = 0; k < title.length; k++) {
        // ogni ciclo prendo un titolo
        const currentTitle = title[k];

        // Active per il titolo
        let activeTitle = "";

        // Il primo titolo è visibile
        if (k === currentIndex) {
            activeTitle = "active";
        }

        // creo i title in on-img-title
        onImgTitle.innerHTML += `<h3 class="${activeTitle}">${currentTitle}</h3>`;
    }
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
    activeImg.classList.remove("active");

    // Decremento counter
    currentIndex--;

    // Ricomincia se va sotto lo 0
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }

    const imgTags = imgContainer.querySelectorAll("img");
    const nowActiveImg = imgTags[currentIndex];

    nowActiveImg.classList.add("active");
});

// Freccia Up
arrowDown.addEventListener("click", function ()
{
    const activeImg = imgContainer.querySelector(".active");
    activeImg.classList.remove("active");

    // Incremento counter
    currentIndex++;

    // se arriva al massimo ricomincia da 0
    if (currentIndex > items.length - 1) {
        currentIndex = 0;
    }

    const imgTags = imgContainer.querySelectorAll("img");
    const nowActiveImg = imgTags[currentIndex];
    nowActiveImg.classList.add("active");
});


// for (let k = 0; k < title.length; k++) {
    //     // ogni ciclo prendo un titolo
    //     const currentTitle = title[k];

    //     // Active per il titolo
    //     let activeTitle = "";

    //     // Il primo titolo è visibile
    //     if (k === currentIndex) {
    //         activeTitle = "active";
    //     }

    //     // creo i title in on-img-title
    //     onImgTitle.innerHTML += `<h3 class="${activeTitle}">${currentTitle}</h3>`;
    // }


// for (let j = 0; j < text.length; j++) {
    //     // ogni ciclo prendo un testo
    //     const currentText = text[j];

    //     // Active per il titolo
    //     let activeText = "";

    //     // Il primo titolo è visibile
    //     if (j === currentIndex) {
    //         activeText = "active";
    //     }

    //     // creo i title in on-img-title
    //     onImgText.innerHTML += `<p class="${activeText}">${currentText}</p>`;
    // }