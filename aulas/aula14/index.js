const titulo1 = documento.querySelector("#Objeto1")
const titulo2 = documento.querySelector("#Objeto2")
const titulo3 = documento.querySelector("#Objeto3")
const titulo4 = documento.querySelector("#Objeto4")
const titulo5 = documento.querySelector("#Objeto5")

fetch("./index.json")
.then(response => response.json())
.then(mochila => {
    
    titulo1.innerHTML = mochila.objeto1;
    titulo2.innerHTML = mochila.objeto2;
    titulo3.innerHTML = mochila.objeto3;
    titulo4.innerHTML = mochila.objeto4;
    titulo5.innerHTML = mochila.objeto5;

})