//Challenge 5 solution
let str = "27456";
let arr = str.split("");
const result = arr.map((i) => {
  let num = parseInt(i, 10);
  return num > 5 ? 1 : 0;
}); 
console.log(result.join(""));