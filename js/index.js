let banners= ["./img/nave.png", "./img/minions.jpg"]
let cont = 0;

function trocaBanner(){
    cont = (cont+1)%2;
    document.querySelector("#imgbanner").src = banners[cont]
}

setInterval(trocaBanner, 1000)