
let state;
let stateTwo;

// const apiUrl = 'https://api.myjson.com/bins/ynnm0';
const apiUrlMech = 'https://api.myjson.com/bins/ift3c';
const apiUrlDragon = 'https://api.myjson.com/bins/152a2w';


let getMechsUsingAsync = async function() {
    try {
        // let cardNumber = Math.floor(Math.random() * 100);
    const response = await fetch(apiUrlMech);
    state = await response.json();
    
    //  console.log(state);
    
    updateContent();
    } catch (err) {
     console.log('something went wrong');
     console.log(err);
    }
}

let getDragonsUsingAsync = async function() {
    try {
    const response = await fetch(apiUrlDragon);
    stateTwo = await response.json();
    console.log(stateTwo);
    updateContentTwo();
    } catch (err) {
     console.log('something went wrong dragon');
     console.log(err);
    }
}
// image.src = state.img;
// let image = document.querySelector('#img-mech>img');

let updateContent = function() {
    for ( let i = 0; i < 3; i++) {
        let cardNumber = Math.floor(Math.random() * 130);
        let cardArray = state[cardNumber].img;
        let imgLocation = document.getElementById('img-' + i);
        imgLocation.setAttribute("src", cardArray);
        // let imgCode = state.img[i];
        // let image = document.querySelector('#img-mech>img');
        // image.src = state.img;
    }
    document.getElementById('new-img-button')
    .addEventListener('click', updateContent);
}
    let updateContentTwo = function() {
        for ( let i = 0; i < 3; i++) {
            let cardNumber = Math.floor(Math.random() * 74);
            let cardArray = stateTwo[cardNumber].img;
            let imgLocation = document.getElementById('dimg-' + i);
            imgLocation.setAttribute("src", cardArray);
            // let imgCode = state.img[i];
            // let image = document.querySelector('#img-mech>img');
            // image.src = state.img;
        }
        document.getElementById('new-img-button-two')
        .addEventListener('click', updateContentTwo);
}

getMechsUsingAsync();
getDragonsUsingAsync();