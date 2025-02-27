console.log("This is a game");
let bgMusic = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

const checkWin = () => {
  let boxtexts = document.querySelectorAll(".boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach(e => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
      boxtexts[e[1]].innerText !== ""
    ) {
        document.querySelector(".info").innerHTML = boxtexts[e[1]].innerText + " Won";
        isGameOver = true;
        document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "200px";
        boxtexts[e[0]].style.color = "green";
        boxtexts[e[1]].style.color = "green";
        boxtexts[e[2]].style.color = "green";
        gameover.play();
    }
  });
};

// Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isGameOver) {
        document.getElementsByClassName("info")[0].innerText = turn + "'s turn";
      }
    }
  });
});

// Reset logic

let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxText");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  document.getElementsByClassName("info")[0].innerText = turn + "'s turn";
  document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px";

});
