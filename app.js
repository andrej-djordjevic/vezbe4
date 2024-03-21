let listaDestinacija=document.getElementById("lista-destinacija");
console.log(listaDestinacija);

let naslov=document.getElementsByClassName("title");
console.log(naslov);

let element=document.getElementsByTagName("li");
console.log(element);

let wrap=document.querySelector("#wrapper");
console.log(wrap);

let destinacije=document.querySelectorAll(".naziv");
console.log(destinacije);

console.log("PARENT NODE Lise destinacije je:",listaDestinacija.parentNode);
console.log("CHILD NODE Lise destinacije su:",listaDestinacija.childNodes);
//childNodes - vraca sve elemente
//children - vraca samo tagove HTML elemenata

let banner=document.querySelector("#page-banner");
console.log("NODE name je:",banner.nodeName);
console.log("NODE type je:",banner.nodeType);
console.log("NODE value je:",banner.nodeValue);

let destinacija1=document.querySelector(".naziv");
destinacija1.textContent="Grad Svetlosti";
// destinacija1.innerHTML="<b>Grad</b> Svetlosti";

let dugmici=document.querySelectorAll(".obrisi");
console.log(dugmici);

Array.from(dugmici).forEach(function(dugme){
    dugme.addEventListener("click",function(e){
        const li=e.target.parentNode;
        let ul=li.parentNode;
        ul.removeChild(li);



    })
})