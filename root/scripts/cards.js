/*--------------Dom handle-----------------*/
const $parentElement =document.getElementById('cards-display');
const moreCardsButton =document.querySelector('.more-button');
const numberCards =document.querySelector('.number');
const pokemonTypeFilters = document.querySelectorAll('.filter-option');


/*-----------Global variables--------------*/
let offset;
let offsetType;
let number;
let pokemonTypes= ['all','normal','fighting','flying','ground','rock','bug','ghost','steel','fire','water'];
let type='all';

const url ="https://pokeapi.co/api/v2/pokemon/";

/* CODE */

const initGlobal= ()=>{
    offset=0;
    $template = ``;
    number =20;
    numberCards.textContent=`${number} cards`;
    return (offset,number)
}
initGlobal();

/*----------------------------filter pokemon---------------------------------------*/

const filterPokemon=(position)=>{
    type= pokemonTypeFilters[position].textContent;
        initGlobal();
        cardDisplay();
    
}

let filteredPokemon =async(type)=>{
    urltype=`https://pokeapi.co/api/v2/type/${type}/`;  
    const pokemonAPI = await fetchApi(urltype);
    const pokeList =[];
    await pokemonAPI.pokemon.map(x =>{
        pokeList.push(x.pokemon);
    });
    console.log(pokeList);
    let limitedPokelist=pokeList.slice(offset,offset+20);
    return limitedPokelist;
}

pokemonTypeFilters[0].addEventListener('click',()=>filterPokemon(0));
pokemonTypeFilters[1].addEventListener('click',()=>filterPokemon(1));
pokemonTypeFilters[2].addEventListener('click',()=>filterPokemon(2));
pokemonTypeFilters[3].addEventListener('click',()=>filterPokemon(3));


/*--------------------------------------Cards display------------------------------------------------- */
const fetchApi = async(url) => {
    try {
        $parentElement.innerHTML= `<span class="loader"></span>`;
        $parentElement.style.width="auto";
        let res =await fetch(url);
        let json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        $parentElement.style.width="90%";
        return json;
    } catch (error) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = `error: ${error.message}`;
        $parentElement.appendChild(errorMsg);
    }  
}

const pokemonList = async(offset,type) =>{
    let urltype=``;
    if(type==='all'){
        urltype=`${url}?offset=${offset}`;
        const pokemonAPI = await fetchApi(urltype);
        return pokemonAPI.results;
    }else{
        return filteredPokemon(type);
    }

}
const eachPokeURL = async(List)=>{
    let pokemonURL=[];
    List.map(x =>{
        pokemonURL.push(x.url);
    });
    return pokemonURL
}

const pokemonData = async()=>{
    const list= await pokemonList(offset,type);
    let listURL =await eachPokeURL(list);
    let pokemonInfo = [];
    for (i=0;i<listURL.length;i++){
        let indivpokemon =await fetchApi(listURL[i]);
        pokemonInfo.push(indivpokemon);
    }
    return pokemonInfo;
}


const cardDisplay = async()=>{
    let pokemon = await pokemonData();
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


/*--------------------------more cards------------------------------------- */


moreCardsButton.addEventListener('click', (event) =>{
    offset +=20;
    number +=20;
    cardDisplay();
    numberCards.textContent=`${number} cards`;
    event.preventDefault();
})

/*---------------------------move filters------------------------------------*/

