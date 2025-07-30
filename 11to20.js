// 11. Írd ki a string összes karakterét külön sorba
const text = "frontend";

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

// 12. Számold meg, hány darab szám nagyobb, mint 50
const values = [23, 67, 89, 12, 34, 55, 78];
let count = 0;
for (let i = 0; i < values.length; i++) {
  if (values[i] > 50) {
    count++;
  }
}
console.log("50 nél nagyobb számok:", count);

// 13. Írd ki az összes szót nagybetűvel a tömbből
const colors = ["piros", "kék", "zöld", "sárga"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i].toUpperCase());
}

// 14. Írd ki a számokat fordított sorrendben (ne használj .reverse-t!)
const nums = [1, 2, 3, 4, 5];
for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}

// 15. Számold meg, hány darab szó kezdődik "m" betűvel
const words = ["macska", "kutya", "madár", "egér", "méh"];
let count1 = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i][0 === "m"]) {
    count++;
  }
}
// 16. Írd ki csak azokat a számokat, amik páratlanok ÉS nagyobbak 10-nél
const numberList = [5, 11, 14, 17, 22, 25, 9];
for (let i = 0; i < numberList.length; i++) {
  const num = numberList[i];
  if (num % 2 !== 0 && num > 10) {
    console.log(num);
  }
}

// 17. Számold meg, hány darab karakter van a stringben, ami nem szóköz
const sentence2 = "Ez egy rövid mondat";

let count2 = 0;
for (let i = 0; i < sentence2.length; i++) {
  if (sentence2[i] !== " ") {
    count2++;
  }
}
console.log("Nem szóköz karakterek száma:", count);

// 18. Számold ki, hogy a tömbben szereplő számok közül mennyi az összegük, ha azok oszthatók 3-mal
const data = [3, 5, 9, 12, 20, 21];
let count3 = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] % 3 === 0) {
    count3 += data[i];
  }
}
console.log("3-mal osztható számok összege:", count3);

// 19. Írd ki azokat a szavakat, amelyek hosszabbak 5 karakternél
const shoppingList = ["kenyér", "tej", "tojás", "szalámi", "paradicsom"];

for(let i = 0; i <shoppingList.length; i++)
    if(shoppingList[i].length > 5){
        console.log(shoppingList[i])
    }


// 20. Számold meg, hány darab kisbetűs betű van a stringben
const mixedString = "LoRem IPSum DoLor sit AMeT";


let count4 = 0;

for (let i = 0; i < mixedString.length; i++) {
  const char = mixedString[i];

  if (char === char.toLowerCase() && char !== char.toUpperCase()) {
    count++;
  }
}

console.log("Kisbetűk száma:", count);


