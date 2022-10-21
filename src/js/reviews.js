const reviews = [
    {
        name: "SAULO KLEIN NERY",
        profession: "intern",
        review: "Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris.Diuretics paradis num copo é motivis de denguis.Manduma pindureta quium dia nois paga.Quem num gosta di mé, boa gentis num é.",
        src: "review01.jpeg"
    },
    {
        name: "filipe quintanilha",
        profession: "student",
        review: "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Viva Forevis aptent taciti sociosqu ad litora torquent.",
        src: "review02.jpeg"
    },
    {
        name: "sebastião ferreira neto",
        profession: "web developer",
        review: "Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Pra lá , depois divoltis porris, paradis.",
        src: "review03.jpeg"
    }
];

const image = document.querySelector('.review-image');
const reviewerName = document.getElementById('name');
const reviewerProfession = document.getElementById('profession');
const reviewDescription = document.getElementById('description');
const leftArrowButton = document.getElementById('left-arrow');
const rightArrowButton = document.getElementById('right-arrow');
const surpriseButton = document.getElementById('surprise');

const arrayLength = reviews.length;

let counter = 0;

window.addEventListener('DOMContentLoaded',
    () => {
        showPersonInfos(counter);
    }
);

leftArrowButton.addEventListener("click",
    () => {
        counter = leftArrow(counter, arrayLength);
        showPersonInfos(counter);
    }
);

rightArrowButton.addEventListener("click",
    () => {
        counter = rightArrow(counter, arrayLength);
        showPersonInfos(counter);
    }
);

surpriseButton.addEventListener("click",
    () => {
        counter = surprise(counter, arrayLength);
        showPersonInfos(counter);
    }
);

function rightArrow(counter, arrayLength){
    if(counter === arrayLength - 1)
        counter = 0;
    else
        counter++;
        
    console.log(counter);

    return counter;
}

function leftArrow(counter, arrayLength){
    if(counter === 0)
        counter = arrayLength - 1;
    else
        counter--;
    
    console.log(counter);

    return counter;
}

function getRandomNumber(arrayLength){
    return Math.floor(Math.random() * arrayLength);
}

function surprise(counter, arrayLength){
    let randomNumber;
    do {
        randomNumber = getRandomNumber(arrayLength);
    } while (randomNumber === counter);

    console.log("Random: ", randomNumber);

    return randomNumber;
}

function showPersonInfos(counter){

    const person = reviews[counter];

    reviewerName.textContent = person.name.toLowerCase();
    reviewerProfession.textContent = person.profession.toLowerCase();
    reviewDescription.textContent = person.review.toLowerCase();
    image.src = `./assets/imgs/${person.src}`;
}