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