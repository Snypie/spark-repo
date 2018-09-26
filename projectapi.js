
let state;

// const apiUrl = 'https://api.myjson.com/bins/ynnm0';
const apiUrl = 'https://api.myjson.com/bins/pp2yg';

// const apiKey = 'RGAPI-936b7cb5-f720-42d8-acf0-8c7ac89a5838';
// let leagueType = '/lol/league/v3/challengerleagues/by-queue/{queue}';


let getQuoteUsingAsync = async function() {
    try {
    const response = await fetch(apiUrl);
    state = await response.json();
    // console.log(state);
    updateContent();
    } catch (err) {
     console.log('something went wrong');
     console.log(err);
    }
}

let updateContent = function() {
    console.log(state);

    // const fives = document.getElementById('character-name');
    // const imgAnimated = document.getElementById('imgAnimated');
    // const quote = document.getElementById('character-quote');
    const img = document.querySelector('#imgAnimated-img>img');
    // const mainContent = document.getElementById('main-content-container');

    // imgAnimated.innerText = state.imgAnimated;
    // quote.innerText = state.quote;

    for(let i = 0; i < 2; i++) {

    img.src = state[i].imgAnimated;
    }
}

getQuoteUsingAsync();