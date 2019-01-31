import catOrDog from './cat-or-dog.js';
const image = document.getElementById('animal-pic')
const catCounter = document.getElementById('cat-count');
const dogCounter = document.getElementById('dog-count');
const radioForm = document.getElementById('radio-form');

console.log(radioForm);


let dogCount = 0;
let catCount = 0;
radioForm.addEventListener('submit', function(event){
    event.preventDefault();
    const randomNumber = Math.random();
    const animal = catOrDog(randomNumber);
    let imageSource = '';
    
    if(animal === 'cat') {
        imageSource = './assets/cat.jpg';
        catCount++;
        catCounter.textContent = catCount;
    }
    else {
        imageSource = './assets/dog.jpg';
        dogCount++;
        dogCounter.textContent = dogCount;
    }
    image.src = imageSource;
    image.classList.remove('hidden');

    console.log('user input', radioForm.elements.side.value);
    
    
});

    


// grab form node from dom 

// add event listener to form node

//have button/form submit generate random number

//create function that takes randomNumber and either returns dog or cat