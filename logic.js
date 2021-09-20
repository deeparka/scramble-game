const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");

let play = false;
let newWords = "";
let ranWords = "";
let sWords = [
  "examination",
  "committee",
  "bifunctional",
  "cofunction",
  "functionality",
  "horizontal",
  "vertically"
];

const createNewWords = () => {
  let ranNum = Math.floor(Math.random() * sWords.length);
  //console.log(ranMum);
  let newTempWords = sWords[ranNum];
  //console.log(newTempWords);
  return newTempWords;
};

const scrambleWords = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let element = arr[i];
    //console.log(element);
    let j = Math.floor(Math.random() * (i + 1));
    //console.log(i);
    //console.log(j);

    arr[i] = arr[j];
    arr[j] = element;
  }
  return arr;
};

btn.addEventListener("click", () => {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle("hidden");
    newWords = createNewWords();
    randWords = scrambleWords(newWords.split("")).join("");
    //console.log(randWords.join(""));
    msg.innerHTML = `Guess the word: ${randWords}`;
  } else {
    let tempWord = guess.value;
    if (tempWord === newWords) {
      //console.log("correct");
      play = false;
      msg.innerHTML = `Yay! you are right. It is \"${newWords}"`;
      btn.innerHTML = "Guess next word";
      guess.classList.toggle("hidden");
      guess.value = "";
    } else {
      //console.log("incorrect");
      msg.innerHTML = `Oops! you are wrong. Try again. \"${randWords}"`;
      guess.value = "";
    }
  }
});
