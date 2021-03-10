/*This script file is the main script for the Mixed Messages project.

Goal:  When runing the script it will generate and return a random message

*/

//variables

const getPrompt = document.querySelector('.clickme');
const giveResult = document.querySelector('.result');

//message bank objects
const starter = {
  1: `Today is not a good day to `,
  2: `Today is a good day to `,
  3: `Next week would be better to `,
  4: `Tomorrow might be a better day to `,
  5: `You may want to wait until next week to `,
};

const task = {
  1: `plan a trip `,
  2: `get a workout in `,
  3: `go for a run `,
  4: `catch up on sleep `,
  5: `go to the beach `,
  6: `cross some items off of your to-do list `,
  7: `get your shopping done `,
  8: `make a budget `,
  9: `clean your place `,
  10: `run those errands `,
  11: `read a book `,
  12: `study a new language `,
};

const focus = {
  1: `for yourself.`,
  2: `for work.`,
  3: `with your family.`,
  4: `with a friend.`,
  5: `with a group of friends.`,
};

//This is the main fuction.
function generateRandomMessage () {

  let startLength = objLength(starter);
  let taskLength = objLength(task);
  let focusLength = objLength(focus);

  let a = getRandomInt(1, startLength);
  let b = getRandomInt(1, taskLength);
  let c = getRandomInt(1, focusLength);

  let phrase = getPhrase(a, b, c);

  console.log(`Here is your productivity prompt to get started:`);
  return phrase;

};

console.log(generateRandomMessage());

//support function to generate random numbers in a range.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
};


//support function and message bank.
function getPhrase (startnum, tasknum, focusnum) {

  //assigns the values from each object to a variable.
  let partA = starter[startnum];
  let partB = task[tasknum];
  let partC = focus[focusnum];

  return `${partA}${partB}${partC}`;

};


function objLength(obj) {
  var count = 0;

  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          ++count;
  }

  return count;
}

getPrompt.addEventListener('click', ()=>{
  let message = generateRandomMessage();
  giveResult.innerHTML = `<p class="message">${message}</p>`;
  const displayResult = giveResult.querySelector('.message');
});
