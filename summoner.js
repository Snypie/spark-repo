
let state;


const apiUrl = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/snypiespyder?api_key=RGAPI-6537e196-1c0c-4274-a32f-9af43048e7a1';
// const apiKey = 'RGAPI-936b7cb5-f720-42d8-acf0-8c7ac89a5838';
// let leagueType = '/lol/league/v3/challengerleagues/by-queue/{queue}';


let getQuoteUsingAsync = async function() {
    try {
        const response = await fetch(apiUrl, {

            mode: 'no-cors'
        
        });
        console.log(response);
        const json = await response.json();

        // updateContent();
    } catch (err) {
        console.log('Something went wrong. :(');
        console.error(err.stack);
    }
}



getQuoteUsingAsync();
