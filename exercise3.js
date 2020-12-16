//Challenge 3 solution:
let str = "JoHn";
let upper = str.split('').filter(x=>x===x.toUpperCase()).length;
let lower = str.length- upper;
str = upper>lower?str.toUpperCase():str.toLowerCase();
console.log(str);