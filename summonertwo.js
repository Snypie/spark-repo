
let state;

const apiUrl = 'https://api.myjson.com/bins/ynnm0';
// const apiUrlMech = 'https://api.myjson.com/bins/ift3c';
// const apiUrlDragon = 'https://api.myjson.com/bins/152a2w';


let getQuoteUsingAsync = async function() {
    try {
        // let cardNumber = Math.floor(Math.random() * 100);
    const response = await fetch(apiUrl);
    state = (await response.json())[1];

    let image = document.querySelector('#cardback>img1');

    image.src = state.img;
    
     console.log(state);
    
    // updateContent();
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

// let updateContent = function() {
//    console.log(state);

// let image = document.querySelector('#cardback>img1');

// image.src = state.img;
// }

getQuoteUsingAsync();