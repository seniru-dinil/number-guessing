const myText = document.getElementById("text");
const chances = document.getElementById("chances");
const myStatus = document.getElementById("status");

let count = 3;
let randNumber = Math.floor(Math.random() * 10);

const myFunction = () => {
  let inputNumber = document.getElementById("myInput").value;
  console.log(`user${inputNumber} randomNumber${randNumber}`);
  document.getElementById("myInput").value = "";
  if (count === 1) {
    myText.innerText = `game over`;
    myStatus.innerText = ``;
    chances.innerText = `number was ${randNumber}`;
  } else {
    console.log(`user ${inputNumber} random ${randNumber}`);

    if (inputNumber < randNumber) {
      myStatus.innerText = `you are wrong`;
      myText.innerText = `number is greater than the input number`;
    } else if (inputNumber > randNumber) {
      myStatus.innerText = `you are wrong`;
      myText.innerText = `number is less than the input number`;
    } else if (inputNumber == randNumber) {
      myStatus.innerText = `you are right`;
      myText.innerText = ``;
    }
    chances.innerText = `chances left ${(count -= 1)}`;
  }
};

const resetFunction = () => {
  document.getElementById("myInput").value = "";
  randNumber = Math.floor(Math.random() * 10);
  count = 3;
  myStatus.innerText = ``;
  myText.innerText = `pick a number between 0 - 10`;
  chances.innerText = `chances left ${count}`;
};
