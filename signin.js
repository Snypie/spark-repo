const getData = async function() {
    
    /**
     * Using Fetch
     */
    const url = 'localhost:8080/';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // document.getElementById('title').innerText = data.name;
    
    const searchValue = document.getElementById('search-input-E').value;

    for(let url of data.povCharacters) {
        const charResponse = await fetch(url);
        const charData = await charResponse.json();
        const li = document.createElement('li');
        li.innerText = charData.name;
        document.getElementById('character-list').appendChild(li);
    }    
}

getData();