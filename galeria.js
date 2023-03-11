window.addEventListener("load", init);
const kepgaleria = ["kepek/folyo.jpg", "kepek/fak.jpg", "kepek/madar.jpg", "kepek/part.jpg", "kepek/virag.jpg"]
function init(){
    
    const kepekHelye = document.getElementsByClassName("art")
    let htmlszoveg = kihelyez(kepgaleria, kepekHelye)
    kepekHelye[0].innerHTML += htmlszoveg
    const KISKEPEK = document.querySelectorAll("article div img")
    for (let index = 0; index < KISKEPEK.length; index++) {
        KISKEPEK[index].addEventListener("click", function(){
            kattintaskezelo(index)
        });
    }
   
}
function kihelyez (kepgaleria, kepekHelye){
    let htmlszoveg = ""
    for (let index = 0; index < kepgaleria.length; index++) {
        htmlszoveg +=`<div><img src= ${kepgaleria[index]} ></div>`
    }
    htmlszoveg +=""
    console.log(htmlszoveg)
    return htmlszoveg

}

function kattintaskezelo(i){
   console.log(event.target)
   console.log(event.target.src)
   const NAGYKEP=document.querySelectorAll("section img")
   console.log(NAGYKEP)
   NAGYKEP[0].src=kepgaleria[i];
}
