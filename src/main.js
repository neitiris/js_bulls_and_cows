let generatedNum = 0;
let bull = 0;
let cow = 0;
let check = true;

window.onload = function () {
  onStart();
};

function onStart() {
  const numArr = [];
  while (numArr.length < 4) {
    let num = Math.floor(Math.random() * 9).toString()
    if (numArr.indexOf(num) < 0) {
      numArr.push(num)
    }
  }
  generatedNum = numArr.join('');
  console.log('generatedNum', generatedNum)
}


function checkInput() {
  const input = document.getElementById("user__input").value; //винесення констант з функції ламає код
  const setText = document.getElementById("result__text-area");

  function charCheck(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.split(str[i]).length - 1 > 1) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < input.length; i++) {
    if (
      input.charCodeAt(i) < 48
      || input.charCodeAt(i) > 57
      || input.length !== 4 || charCheck(input)
    ) {
      setText.innerHTML += "Type only " + 4 + " different numbers!\n\n";
      check = false;
      break;
    }
  }

  if (check) {
    bull = 0;
    cow = 0;

    for (let i = 0; i < generatedNum.length; i++) {
      for (let k = 0; k < input.length; k++) {
        if ((generatedNum[i] === input[k]) && (i === k)) {
          bull++;
        } else if ((generatedNum[i] === input[k]) && (i !== k)) {
          cow++;
        }
      }
    }

    if (bull === 0 && cow === 0) {
      console.log(bull + " bull(s), " + cow + " cow(s)!");
      setText.innerHTML += "try again\n\n";
    } else if (bull === 4) {
      setText.innerHTML += 4 + " bulls! you won the game!!!\nclick restart to play again\n\n";
    } else {
      setText.innerHTML += input + " : ";
      setText.innerHTML += (bull + " bull(s), " + cow + " cow(s)!\n\n");
    }
  }
  check = true;
}

function reload() {
  onStart();
  document.getElementById("result__text-area").innerHTML = "";
}
