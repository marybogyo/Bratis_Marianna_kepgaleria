window.addEventListener("load", init);

const kepgaleria = [
  "kepek/folyo.jpg",
  "kepek/fak.jpg",
  "kepek/madar.jpg",
  "kepek/part.jpg",
  "kepek/virag.jpg",
];

let kepIdx = 0;

function init() {
  const kepekHelye = document.getElementsByClassName("art");
  let htmlszoveg = kihelyez(kepgaleria, kepekHelye);
  kepekHelye[0].innerHTML += htmlszoveg;
  const KISKEPEK = document.querySelectorAll("article div img");
  for (let index = 0; index < KISKEPEK.length; index++) {
    KISKEPEK[index].addEventListener("click", function () {
      kattintaskezelo(index);
    });
  }

  let balgomb = document.getElementsByClassName("bal");
  balgomb[0].addEventListener("click", balGomb);
  let jobbgomb = document.getElementsByClassName("jobb");
  jobbgomb[0].addEventListener("click", jobbGomb);
}

function kihelyez(kepgaleria, kepekHelye) {
  let htmlszoveg = "";
  for (let index = 0; index < kepgaleria.length; index++) {
    htmlszoveg += `<div><img src= ${kepgaleria[index]} ></div>`;
  }
  htmlszoveg += "";
  console.log(htmlszoveg);
  return htmlszoveg;
}

function kattintaskezelo(i) {
  console.log(event.target);
  console.log(event.target.src);
  const NAGYKEP = document.querySelectorAll("section img");
  console.log(NAGYKEP);
  NAGYKEP[0].src = kepgaleria[i];
  kepIdx = i;
}

function jobbGomb() {
  kepIdx += 1;

  if (kepIdx == kepgaleria.length) {
    kepIdx = 0;
  }

  kattintaskezelo(kepIdx);
  //const NAGYKEP = document.querySelectorAll("section img");
  //NAGYKEP[0].src = kepgaleria[kepIdx];
}

function balGomb() {
  kepIdx -= 1;

  if (kepIdx < 0) {
    kepIdx = kepgaleria.length - 1;
  }

  kattintaskezelo(kepIdx);
  //const NAGYKEP = document.querySelectorAll("section img");
  //NAGYKEP[0].src = kepgaleria[kepIdx];
}
