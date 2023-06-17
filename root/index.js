const url ="https://pokeapi.co/api/v2/pokemon/";

//const url = 'https://rickandmortyapi.com/api/character/'
const parentElement =document.getElementById('cards-display');

const fetchApi = async(url) => {
    try {
        const res =await fetch(url);
        const data = await res.json();
        let card =document.createElement('div');
        let cardTextSup =document.createElement('div');
        let cardTextInf =document.createElement('div');
        let pokeName = document.createElement('p');
        let cardHeart = document.createElement('img');
        let pokeImage = document.createElement('img');
        let cardPower = document.createElement('p');
        let buyButton = document.createElement('button');
        
        card.className='card';
        cardTextSup.className='card-text';
        cardTextInf.className='card-text';
        cardHeart.className='heart';
        cardHeart.src="./assets/heart-svgrepo-com.svg";
        cardHeart.alt='heart';
        pokeImage.className='pokemon-img';
        buyButton.textContent='buy';
        buyButton.className='buy-button';
        //console.log(data);
        pokeName.textContent=data.name;
        pokeImage.src=data.sprites.other.dream_world.front_default;
        pokeImage.alt= data.name;
        cardPower.textContent=`EXP:${data.base_experience}`;
        parentElement.appendChild(card);
        card.appendChild(cardTextSup);
        card.appendChild(pokeImage);
        card.appendChild(cardTextInf);
        cardTextSup.appendChild(pokeName);
        cardTextSup.appendChild(cardHeart);
        cardTextInf.appendChild(cardPower);
        cardTextInf.appendChild(buyButton);

    } catch (error) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = `error: ${error.message}`;
        debugger;
        parentElement.appendChild(errorMsg);
    }    
}


for (let i =1; i<=20;i++){
        
        
        fetchApi(url+i);
        
        //TODO: change for every card
        /*
        pokeName.textContent=data.name;
        pokeImage.src=data.sprites.other.dream_world.front_default;
        pokeImage.alt= data.name;
        cardPower.textContent=data.base_experience;
        */


}