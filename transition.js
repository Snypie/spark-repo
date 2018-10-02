const load = function() {
    const container = document.getElementById('container');
    
    for(let i = 0; i < 5; i++) {
        element.classList.add('item');
        element.classList.add('hidden');
        element.innerText = data[i].item;
        container.appendChild(element);

        setTimeout(() => element.classList.remove('hidden'), 500*i);
    }
}

load();