const url ="https://pokeapi.co/api/v2/pokemon/";
const $parentElement =document.getElementById('cards-display');

const fetchApi = async(url) => {
    try {
        $parentElement.innerHTML= `<span class="loader"></span>`;
        let res =await fetch(url);
        let json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        return json;
    } catch (error) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = `error: ${error.message}`;
        parentElement.appendChild(errorMsg);
    }  
}

const pokemonList = async() =>{
    const pokemonAPI = await fetchApi("https://pokeapi.co/api/v2/pokemon/");
    return pokemonAPI.results;
}

(async()=>{
    

})()

const pokemonData = async()=>{
    const list= await pokemonList();
    let listURL =await eachPokeURL(list);
    let pokemonInfo = [];
    for (i=0;i<listURL.length;i++){
        let indivpokemon =await fetchApi(listURL[i]);
        pokemonInfo.push(indivpokemon);
    }
    return pokemonInfo;
}

const eachPokeURL = async(List)=>{
    let pokemonURL=[];
    List.map(x =>{
        pokemonURL.push(x.url);
    });
    return pokemonURL
}

const cardDisplay = async()=>{
    await pokemonData();
    //! Start the cards dislay here
    /*
    $template += `
                <div class="card">
                    <div class="card-text">
                        <p><b>${pokemon.name}</b></p>
                        <img class="heart" src="./assets/heart-svgrepo-com.svg" alt="heart"/>
                    </div>

                    <img class="pokemon-img" src="${pokemon.sprites.front_default}" alt="${pokemon.name}" >
                
                    <div class="card-text">
                        <p><b>${pokemon.base_experience}</b></p>
                        <button class= "buy-button">Buy</button>
                    </div>
                </div>
                `;
                */
}

