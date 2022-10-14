let ipText = document.querySelector(".ipText");
let count = 5;
let coun = 5;

let bton = document.querySelector(".bton");
let bton1 = document.querySelector(".bton1");
let error = document.querySelector(".error");
let errorH = document.querySelector(".errorH");
let playerOne = document.querySelector(".plyerOne");
let info = document.querySelector(".info");
let ipNum = document.querySelector(".ipNum");
let playerHolder = document.querySelector(".playerHolder");

let ipText2 = document.querySelector(".ipText2");
let ipNum2 = document.querySelector(".ipNum2");
let bton2 = document.querySelector(".bton2");
let bton22 = document.querySelector(".bton22");
let playerTwo = document.querySelector(".plyerTwo");

let ipText3 = document.querySelector(".ipText3");
let ipNum3 = document.querySelector(".ipNum3");
let bton3 = document.querySelector(".bton3");
let bton33 = document.querySelector(".bton33");
let playerThree = document.querySelector(".plyerThree");

let playerOne1 = document.querySelector(".plyerOne1");
let playerOne2 = document.querySelector(".plyerOne2");
let playerOne3 = document.querySelector(".plyerOne3");

bton.addEventListener("click", function () {
  let x = ipText.value.split(" ").join("");
  let p = x / x;
  console.log(p);

  if (x.length != 0 && p != 1) {
    console.log(ipText.value);
    error.style.display = "none";
    info.style.display = "block";
    ipNum.style.display = "block";
    ipText.style.display = "none";
    bton.style.display = "none";
    bton1.style.display = "block";
    playerOne.innerHTML = ipText.value.toUpperCase();
  } else {
    error.style.display = "block";
    errorH.innerHTML = "Enter Your Name Bro";
  }
});

bton1.addEventListener("click", function () {
  if (ipNum.value >= 1 && ipNum.value <= 10) {
    playerHolder.innerHTML = "Second Player";
    ipNum.style.display = "none";
    bton1.style.display = "none";
    ipText2.style.display = "block";
    bton2.style.display = "block";
    error.style.display = "none";
  } else {
    error.style.display = "block";
    errorH.innerHTML = "Enter any Value between 1-10";
  }
});

bton2.addEventListener("click", function () {
  let y = ipText2.value.split(" ").join("");
  let i = y / y;

  if (y.length != 0 && i != 1) {
    console.log(ipText2.value);
    error.style.display = "none";
    ipNum2.style.display = "block";
    ipText2.style.display = "none";
    bton2.style.display = "none";
    bton22.style.display = "block";
    playerTwo.innerHTML = ipText2.value.toUpperCase();
  } else {
    error.style.display = "block";
    errorH.innerHTML = "Enter Your Name Bro";
  }
});

bton22.addEventListener("click", function () {
  if (ipNum.value == ipNum2.value) {
    playerOne1.innerHTML = "Lost";
    playerOne1.style.display = "block";
    playerOne2.innerHTML = "Win";
    ipNum2.style.display = "none";
    ipText3.style.display = "block";
    playerHolder.innerHTML = "Third Player";
    error.style.display = "none";
    bton22.style.display = "none";
    bton3.style.display = "block";
  } else {
    count--;
    if (count != 0) {
      error.style.display = "block";
      errorH.innerHTML = " Your Chance: " + count;
      playerHolder.innerHTML = "Try again ";
    } else {
      playerOne2.innerHTML = "Lost";
      playerOne1.innerHTML = " Win";
      playerOne1.style.display = "none";

      playerHolder.innerHTML = "Game Over";
      errorH.innerHTML = " Your Chance: 0";

      ipNum2.style.display = "none";
      ipText3.style.display = "block";
      playerHolder.innerHTML = "Third Player";
      error.style.display = "none";
      bton22.style.display = "none";
      bton3.style.display = "block";
    }
  }
});

bton3.addEventListener("click", function () {
  let z = ipText3.value.split(" ").join("");
  let q = z / z;

  if (z.length != 0 && q != 1) {
    console.log(ipText2.value);
    error.style.display = "none";
    ipNum3.style.display = "block";
    ipText3.style.display = "none";
    bton3.style.display = "none";
    bton33.style.display = "block";
    playerThree.innerHTML = ipText3.value.toUpperCase();
  } else {
    error.style.display = "block";
    errorH.innerHTML = "Enter Your Name Bro";
  }
});

bton33.addEventListener("click", function () {
  if (ipNum.value == ipNum3.value) {
    playerOne3.innerHTML = "Win";
    playerOne1.innerHTML = "Lost";
    playerOne1.style.display = "Block";
    playerHolder.innerHTML = "Game Over";
    error.style.display = "none";
    bton33.style.display = "none";
    ipNum3.style.display = "none";
  } else {
    coun--;
    if (coun != 0) {
      error.style.display = "block";
      errorH.innerHTML = " Your Chance: " + coun;
      playerHolder.innerHTML = "Try again ";
    } else {
      playerOne1.innerHTML += " ";
      playerOne1.style.display = "block";

      playerOne3.innerHTML = "Lost";
      playerHolder.innerHTML = "Game Over";
      error.style.display = "none";
      bton33.style.display = "none";
      ipNum3.style.display = "none";
    }
  }
});
