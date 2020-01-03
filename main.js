//FIRST TASK


const hamburger = document.querySelector('.burger');

const iconBurger = document.querySelector('.fa-bars');
const iconSecondBurger = document.querySelector('.fa-times');
const asideColumn = document.querySelector('aside');



hamburger.addEventListener("click", function () {
    iconBurger.classList.toggle('show');
    iconSecondBurger.classList.toggle('show');
    asideColumn.classList.toggle('active');
})





// SECOND TASK
const concerts = document.querySelector('#concerts');

concerts.addEventListener('click', (e) => {
    if (e.target.classList.contains('button--buy-ticket')) {
        const buyTicketButton = e.target;
        const haveFunText = document.createElement('p');
        haveFunText.textContent = 'Have fun!';

        const buttonContainer = buyTicketButton.parentElement;
        buttonContainer.insertBefore(haveFunText, buyTicketButton);
        buyTicketButton.remove();
        // OR
        // buyTicketButton.replaceWith(haveFunText);
    }
});

// const btn = document.querySelector('.button');

// btn.addEventListener('click', () => {
//     btn.classList.remove('button');
//     btn.textContent = "Have fun!";

// });

//ANIMATION

const gallery = document.querySelectorAll('.gallery__item');

gallery.addEventListener('mouseout', mouseOut);

function mouseOut() {
    document.querySelectorAll('.gallery__item').style.filter = "grayscale(80%)";
}





//THIRD TASK

//log form data

const formElem = document.querySelector('.contact__form');

formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    // to get form values use FormData and Object.fromEntries
    const formData = new FormData(e.target);

    const formObject = Object.fromEntries(formData);
    console.log(formObject);


});





