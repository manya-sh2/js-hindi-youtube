const name = "Manya";
const repoCount = 50;
console.log(`Hello my name is ${name} and myb repo count is ${repoCount}`);
const gameName = new String('hitesh-hc');
console.log(gameName[0]);  
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(1,5);
console.log(newString);
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);
const newStringOne = "     Manya     ";
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://manya.com/manya%20sharma";
console.log(url.replace('%20', '-'));
console.log(url.includes('manya'));
console.log(url.includes('chiku'));
const gamename = new String('manya-sharma-ms');
console.log(gamename.split('-'));



