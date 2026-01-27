# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript
console.log("hitesh")

const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id == 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  })
})

```

## Project 2

```Javascript
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault();
  //by default submit ya to get hota h ya post hota h mtlb khi to jaati h uski value lekin humko aisa kn chahiye to hum by default iski action jo h usko bnd kr rhe h

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  
  if(height < 0 || height === '' || isNaN(height)){
    results.innerHTML = 'Please enter a valid height'
  }
  else if(weight < 0 || weight === '' || isNaN(weight)){
    results.innerHTML = 'Please enter a valid weight'
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span> ${bmi} <br> </span>`
    if(bmi < 18.6){
      results.appendChild(document.createTextNode("Underweigth"))
    }
    if(bmi >= 18.6  && bmi <= 24.9){
      results.appendChild(document.createTextNode("Normal"))
    }
    if(bmi > 24.9){
      results.appendChild(document.createTextNode("Overweigth"))
    }
  }
})

```

## Project 3

```Javascript
const clock = document.querySelector('#clock');

//isme time hamesha miliseconds m hota h aur iska syntax remeber krke rkhna h kyunki aksar glti hoti h
setInterval(function() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```

## Project 4

```Javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const submit = document.querySelector('#subt')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let playGame = true;
let prevGuess = [];
let cntGuess = 1;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number');
  }
  else if(guess < 1){
    alert('Please enter a number greater than 1');
  }
  else if(guess > 100){
    alert('Please enter a number less than 100');
  }
  else{
    prevGuess.push(guess);
    displayGuess(guess);
    if(cntGuess === 11){
      displayMessage(`Game Over. The random number was ${randomNumber}`);
      endGame();
    }
    else{
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage('You guessed it correct. Hurray!!!🤩');
    endGame();
  }
  else if(guess > randomNumber){
    displayMessage('you guessed it TOOOO high...👽');
  }
  else if(guess < randomNumber){
    displayMessage('you guessed it TOOOO low...👻');
  }
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess}   `;
  cntGuess++;
  remaining.innerHTML = `${11 - cntGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    cntGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - cntGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
```

## Project6

```Javascript
const randomColor = function(){
  let hex = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
// randomColor();
let intervalId = null;
const startChangingColor = function() {
  if(intervalId == null){
    intervalId = setInterval(changeColor, 1000)
  }
  function changeColor(){
    document.body.style.backgroundColor = randomColor();
  }
}
const stopChangingColor = function() {
  clearInterval(intervalId);
  intervalId = null;
}
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
```
