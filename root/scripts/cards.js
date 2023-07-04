/*--------------Dom handle-----------------*/
const $parentElement =document.getElementById('cards-display');

/*-----------Global variables--------------*/

let indexPage=0;
const url ="https://pokeapi.co/api/v2/pokemon/";

/*--------------------------------------Cards display------------------------------------------------- */
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
        $parentElement.appendChild(errorMsg);
    }  
}

const pokemonList = async() =>{
    const pokemonAPI = await fetchApi(url);
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
    let pokemon = await pokemonData();
    let $template = ``;

    for (i=0;i<20;i++){
        $template += `
        <div class="card">
            <div class="card-text">
                <h6><b>${pokemon[i].name}</b></h6>
                <img class="heart" src="./assets/heart-svgrepo-com.svg" alt="heart"/>
            </div>
            <img class="pokemon-img" src="${pokemon[i].sprites.other['official-artwork'].front_default}" alt="${pokemon[i].name}" >
            <div class="card-text">
                <p><b>${pokemon[i].base_experience}</b></p>
                <button class= "buy-button">Buy</button>
            </div>
        </div>
        `;
        $parentElement.innerHTML=$template;
    }
}

cardDisplay();
