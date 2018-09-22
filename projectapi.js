
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

const apiUrl = 'https://na1.api.riotgames.com/lol/league/v3/challengerleagues/by-queue/RANKED_SOLO_5x5api_key=RGAPI-936b7cb5-f720-42d8-acf0-8c7ac89a5838';
// const apiKey = 'RGAPI-936b7cb5-f720-42d8-acf0-8c7ac89a5838';
// let leagueType = '/lol/league/v3/challengerleagues/by-queue/{queue}';


let getQuoteUsingAsync = async function() {
    try {
        const response = await fetch(apiUrl);
        state = await response.json();
        updateContent();
    } catch (err) {
        console.log('Something went wrong. :(');
        console.log(err);
    }
}

getQuoteUsingAsync();