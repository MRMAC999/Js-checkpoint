// Write code below 💖
let num = Math.floor(Math.random()*10);

if (num == 5) {
  console.log("Heads",num);
} else {
  console.log("Tails",num);
}



// Write code below 💖
var hour = 10;

if (hour < 12) {
  console.log("Good morning",hour);
}



// Write code below 💖
var hour = 99;

if (hour < 12) {
  console.log("Good morning",hour);
}
else {
  console.log("Good afternoon",hour);
}



// Write code below 💖
var ph =  Math.floor(Math.random()*10);
if (ph > 7 ) {
    console.log("Basic",ph);
}
else if (ph < 7) {
    console.log("Acidic",ph);
}
else {
    console.log("Neutral",ph);
}



// Write code below 💖

const question = "Put question string here"

const randomNumber = Math.floor(Math.random() * 9) + 1

let answer = ""

if (randomNumber == 1){
  answer = 'Yes - definitely';
} else if (randomNumber == 2) {
  answer = 'It is decidedly so'
} else if (randomNumber == 3) {
  answer = 'Without a doubt'
} else if (randomNumber == 4) {
  answer = 'Reply hazy, try again'
} else if (randomNumber == 5) {
  answer = 'Ask again later'
} else if (randomNumber == 6) {
  answer = 'Better not tell you now'
} else if (randomNumber == 7) {
  answer = 'My sources say no'
} else if (randomNumber == 8) {
  answer = 'Outlook not so good'
} else if (randomNumber == 9) {
  answer = 'Very doubtful'
} else {
  answer = 'Error'
}

console.log("Question: ", question);
console.log("Answer:   ", answer);



// Write code below 💖

const aqi = 99;

if (aqi >= 0 && aqi <= 50) {
  console.log("Good");
} else if (aqi >= 51 || aqi <= 100) {
  console.log("Moderate");
} else if (aqi >= 101 || aqi <= 150) {
  console.log("Unhealthy (Sensitive Groups)");
} else if (aqi >= 151 || aqi <= 200) {
  console.log("Unhealthy");
} else if (aqi >= 201 || aqi <= 300) {
  console.log("Very Unhealthy");
} else {
  console.log("Hazardous");
}




// Write code below 💖

// 0 = Rock
// 1 = Paper
// 2 = Scissors

const player = 3;
computer = Math.floor(Math.random() * 3)

if (player === 0) {
  if (computer == 0) {
    console.log("Draw");
  } else if (computer === 1) {
    console.log("The computer won!");
  } else if (computer === 2) {
    console.log("The player won!");
  } else {
    console.log("An error occurred");
  }
} else if (player === 1) {
  if (computer === 0) {
    console.log("The player won!");
  } else if (computer === 1) {
    console.log("Draw");
  } else if (computer === 2) {
    console.log("The computer won!");
  } else {
    console.log("An error occurred");
  }
} else if (player === 2) {
  if (computer === 0) {
    console.log("The computer won!");
  } else if (computer === 1) {
    console.log("The player won!");
  } else if (computer === 2) {
    console.log("Draw");
  } else {
    console.log("An error occurred");
  }
} else {
  console.log("An error occurred");
}




// Write code below 💖

let randomNumber = Math.floor(Math.random() * 10);

while (randomNumber != 7) {
  console.log("Duck 🦆");
  randomNumber = Math.floor(Math.random() * 10);
}

console.log("Goose! 🦢");



// Write code below 💖

const luckyNumber = 7
let guess = Math.floor(Math.random() * 10) + 1;

while (guess != luckyNumber) {
  console.log(`${guess} is not it.`)
  guess = Math.floor(Math.random() * 10) + 1;
}

console.log(`You got it! The lucky number was ${luckyNumber}`);




// Write code below 💖

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 1) {
    continue;
  } else if (i == 42) {
    console.log(i);
    break;
  } else {
    console.log(i);
  }
}



// Write code below 💖

for (let i = 1; i <= 100; i++){
    if (i % 5 == 0 && i % 3 == 0 ){
    console.log("fizzbuzz");
}else if (i % 3 == 0 ){
    console.log("fizz");
}else if (i % 5 == 0 ){
    console.log("buzz");
}else {
    console.log(i);
}
}



// Write code below 💖

const myNYCDestinations = [
"🗽 Manhattan - Washington Square Park",
"🏟️ The Bronx - Yankee Stadium",
"🎡 Brooklyn - Coney Island",
"✈️ Queens - Astoria Park",
"🌉 Staten Island - Historic Richmond Town"
];

console.log(myNYCDestinations);



// Write code below 💖

let groceryList = ["🥛 Milk", "🥑 Avocado", "🥚 Eggs", "🍞 Bread"];

groceryList [2] = "🧈 Butter" ;
groceryList [4] = "🧼 Laundry Soap" ;

console.log(groceryList);




// Write code below 💖

const multipleNine = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < multipleNine.length; i++) {
  console.log(multipleNine[i] *9);
}





// Write code below 💖

const musicPlaylist = [
  "Tom Sawyer",
  "Sabotage",
  "I Wanna Dance With Somebody",
  "Don't Speak",
  "Bulls On Parade",
  "Thriller",
  "The Breaks",
  "Brick",
  "Aeroplane Over the Sea",
  "Tubthumping"
];







