

let fadingTime = function() {
    setTimeout(function(){ alert("Hello"); }, 3000);
}


let fadeIn = function() {
    let btn = document.querySelector('.js-btn');
    let el = document.querySelector('.js-fade');

    btn.addEventListener('click', function(e) {
    el.classList.remove('is-paused');
    });
}

fadeIn();