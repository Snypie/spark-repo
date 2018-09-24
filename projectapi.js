
let state = {
    tier: '',
    queue: '',
    leagueid: '',
    name: '',
    entrieds: [
        {
        hotStreak: '',
        wins: '',
        veteran: '',
        losses: '',
        rank: '',
        playerOrTeamName: '',
        inactive: '',
        playerOrTeamId: '',
        freshBlood: '',
        leaguePoints: ''
        }
    ]
}

const apiUrl = 'https://na1.api.riotgames.com/lol/league/v3/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=RGAPI-6537e196-1c0c-4274-a32f-9af43048e7a1';
// const apiKey = 'RGAPI-936b7cb5-f720-42d8-acf0-8c7ac89a5838';
// let leagueType = '/lol/league/v3/challengerleagues/by-queue/{queue}';


let getQuoteUsingAsync = async function() {
    try {
        fetch(apiUrl, {

            mode: 'no-cors'
        
        });
        
        // state = await response.json();
    } catch (err) {
        console.log('Something went wrong. :(');
        console.log(err);
    }
}

getQuoteUsingAsync();