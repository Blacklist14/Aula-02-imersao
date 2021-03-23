
const pokemons = [
    {
        nome: "Pikachu",
        img: "/img/Pikachu.png"
    },
    {
        nome: "Charmander",
        img: "img/Charmander.png"
    },
    {
        nome: "bulbasaur",
        img: "img/dck5gvr-d1a822f4-cb27-46b3-a0ad-5538b486b6f5.png"
    },
    {
        nome: "Lugia",
        img: "img/1200px-249Lugia.webp"
    },
    {
        nome: "Gengar",
        img: "img/094.png"
    },
    {
        nome: "Charizard",
        img: "img/Charizard-PNG-Free-Download.png"
    },
    {
        nome: "Sceptile",
        img: "IMG/254-Sceptile.png"
    },
    {
        nome: "Mega Garchomp",
        img: "img/XYArt_Mega_Garchomp.webp"
    }
]
 

var img = document.querySelector(".imagem")
    function clica() {
    
        numero = Math.floor(Math.random() * pokemons.length)
        img.setAttribute("src",pokemons[numero].img)
    
    }

function certo(){
    var nomex = document.querySelector(".nomes").value
    var rex = document.getElementById("res")
        if(nomex.length){
            if(nomex.toLowerCase() == pokemons[numero].nome.toLowerCase()){
                rex.innerHTML="Acertou meu chapa!!"
                rex.style.backgroundImage = "url(/img/d575eb6b1eab9a45-.gif)"
            }
            else{
                rex.innerHTML="ERROUUUUUUUUUU!!"
                rex.style.backgroundImage = "url(/img/c97475272c3bc82d75657420a82ebb8eee9ce069_00.gif)"
            }
        }
}
