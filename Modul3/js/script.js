const keyboard  = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '\/'],
];
let firstWord = [keyboard[1][5],keyboard[0][2],keyboard[1][8],keyboard[1][8],keyboard[0][8]];
console.log(firstWord.join(''))
let secondWord = [keyboard[1][6],keyboard[1][0],keyboard[2][3],keyboard[1][0],keyboard[1][1],keyboard[2][2],keyboard[0][3],keyboard[0][7],keyboard[0][9],keyboard[0][4]];
console.log(secondWord.join(''))
let thirdWord = [keyboard[0][4],keyboard[0][3],keyboard[1][0],keyboard[0][7],keyboard[2][5],keyboard[0][2],keyboard[0][3]];
console.log(thirdWord.join('')) 
