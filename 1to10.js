// 1. Összegezd a numbers tömb számait

const numbers = [5, 10, 15, 20, 25];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("amount:", sum);

// 2. Számold meg, hány darab "a" betű van a string változóban
const string = "JavaScript alapokkal kezdünk";

let count = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] === "a") {
    count++;
  }
}
console.log("amount of a=", count);

// 3. Írd ki minden számról, hogy páros vagy páratlan
const numArray = [12, 5, 7, 8, 10, 13];
for (let i = 0; i < numArray.length; i++) {
  const currentNum = numArray[i];

  if (currentNum % 2 === 0) {
    console.log(currentNum + "Even");
  } else {
    console.log(currentNum + "Odd");
  }
}



// 4. Számold meg, hány darab pozitív szám van a listában

const mixedNumbers = [3, -4, 0, 12, -1, 9];
let count2 = 0;
for (let i = 0; i <mixedNumbers.length; i++) {
  if ( mixedNumbers[i]>0){
    count2++;
  }
}

console.log("Pozitív számok darabszám:", count2);

// 5. Számold ki a tömb számainak az átlagát

const grades = [80, 90, 75, 100, 85];

let sum2 = 0;

for (let i = 0; i < grades.length; i++) {
  sum2 += grades[i]; 
}

const average = sum2 / grades.length;

console.log("Átlag:", average);

// 6. Találd meg a legnagyobb számot a tömbben


const randomNumbers = [23, 56, 12, 89, 34];
let maxNumber = 0;
for(i=0; i < randomNumbers.length; i++) {
  const number = randomNumbers[i];
  if(number>maxNumber) {
    maxNumber = number
  }
}
console.log(maxNumber);



// 7. Számold meg, hány szó van a mondatban (szóközök mentén szétválasztva)

const sentence = "A JavaScript egy népszerű nyelv a webfejlesztéshez";

const worsd = sentence.split(" ");
const wordCount = worsd.length;
console.log(wordCount);



// 8. Írd ki az összes string hosszát a tömbből

const animals = ["kutya", "macska", "egér", "teknős", "papagáj"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i].length);
}


// 9. Írd ki csak azokat a számokat, amik 5-tel oszthatók
const bigNumbers = [10, 14, 25, 30, 33, 50, 71];
for(let i =0; i< bigNumbers.length; i++){
  if(bigNumbers[i] % 5 === 0){
    console.log(bigNumbers[i]);
  }
}




// 10. Számold meg, hány darab nagybetű van a szövegben
const messyText = "VeGyEsBEtŰKkel ÍrT SzÖvEg";
let count1 = 0;

for(let i = 0; i < messyText.length; i++) {
  const char = messyText[i];
  if(char === char.toUpperCase() && char !== char.toLowerCase()) {
    count1++;
  }
}
console.log("Nagybetűk száma:",count1)