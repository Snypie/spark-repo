
let state;

// const apiUrl = 'https://api.myjson.com/bins/ynnm0';
const apiUrlMech = 'https://api.myjson.com/bins/ift3c';
// const apiUrlDragon = 'https://api.myjson.com/bins/152a2w';


let getQuoteUsingAsync = async function() {
    try {
    const response = await fetch(apiUrlMech);
    state = await response.json();
    // console.log(state);
    updateContent();
    } catch (err) {
     console.log('something went wrong');
     console.log(err);
    }
}

// let getQuoteUsingAsync = async function() {
//     try {
//     const response = await fetch(apiUrlDragon);
//     state = await response.json();
//     // console.log(state);
//     updateContent();
//     } catch (err) {
//      console.log('something went wrong');
//      console.log(err);
//     }
// }

let updateContent = function() {
    console.log(state);

    // const fives = document.getElementById('character-name');
    // const imgAnimated = document.getElementById('imgAnimated');
    // const quote = document.getElementById('character-quote');
    const img = document.querySelector('#img-mech>img');
    // const mainContent = document.getElementById('main-content-container');

    // imgAnimated.innerText = state.imgAnimated;
    // quote.innerText = state.quote;

    let cardArray = [1, 2, 3]


    for ( let i = 0; i < 3; i++) {
        let cardNumber = Math.floor(Math.random() * 100);
        cardArray[i] = state[cardNumber].img;
        let imgLocation = document.getElementById('img-' + i);
        imgLocation.setAttribute("src", cardArray[i]);
    }
    
    img.src = state[i].img
    
}

getQuoteUsingAsync();