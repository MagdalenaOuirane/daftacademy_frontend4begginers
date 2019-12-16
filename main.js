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


const btn = document.querySelector('.button');

btn.addEventListener('click', () => {
    btn.classList.remove('button');
    btn.textContent = "Have fun!";

});

//ANIMATION

const gallery = document.querySelectorAll('.gallery__item');

gallery.addEventListener('mouseout', mouseOut);

function mouseOut() {
    document.querySelectorAll('.gallery__item').style.filter = "grayscale(80%)";
}





//THIRD TASK

//Creating Form Data Object

// let FormData = new FormData(formElem);

// formData.append("email", "magda@gmail.com");
// formData.append("topic", "concerts");

// let blob = new Blob([content], { type: "text/xml" });

// let request = new XMLHttpRequest();
// request.open('POST', "");
// request.send(formData);






// const formElem = document.querySelector('contact__form');

// formElem.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // to get form values use FormData and Object.fromEntries
//     new FormData(formElem);

//     const entries = new Map([
//         ['email', 'magda@gmail.com'],
//         ['topic', 'concerts']
//     ]);

//     const obj = Object.fromEntries(entries);
//     console.log(obj);


// });





