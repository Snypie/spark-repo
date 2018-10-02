const load = function() {    
    for(let i = 0; i < 5; i++) {
        let transCard = document.getElementsByClassName('cardCon')[i];
        // let transCardBack = document.getElementsByClassName('cardback')

        // transCard.classList.add('hidden');

        


        setTimeout(() => transCard.classList.remove('hidden'), 500*i);
    }
}

load();