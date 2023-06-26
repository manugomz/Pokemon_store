const url ="https://pokeapi.co/api/v2/pokemon/";

const $parentElement =document.getElementById('cards-display');

const fetchApi = async(url) => {
    
    try {
        $parentElement.innerHTML= `<span class="loader"></span>`;
        const res =await fetch(url);
        const data = await res.json();


    } catch (error) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = `error: ${error.message}`;
        debugger;
        parentElement.appendChild(errorMsg);
    }    
}

for (let i =1; i<=20;i++){     
        fetchApi(url+i);
}