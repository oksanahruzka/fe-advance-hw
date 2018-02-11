const topLine = 'qwertyuiop[]';
const middleLine = 'asdfghjkl;''';
const bottomLine = 'zxcvbnm,./';

const countTopLine = topLine.length;
const countMiddleLine = middleLine.length;
const countBottomLine = bottomLine.length;

const firstSymbTopLine = topLine.charAt(0);
const lastSymbTopLine = topLine.charAt(11);
const firstSymbMiddleLine = middleLine.charAt(0);
const lastSymbMiddleLine = middleLine.charAt(10);
const firstSymbBottomLine = bottomLine.charAt(0);
const lastSymbBottomLine = bottomLine.charAt(9);

const firstSymbPosition = topLine.indexOf('[');
const secondSymbPosition = topLine.indexOf(']');

const answear = `Верхній ряд: "${topLine}" з кількістю символів "${countTopLine}",
                Середній ряд "${middleLine}" з кількістю символів "${countMiddleLine}",
                Нижній ряд "${bottomLine}" з кількістю символів "${countBottomLine}",
                Перший символ верхнього ряду "${firstSymbTopLine}" і останній символ "${lastSymbTopLine}",
                Перший символ середнього ряду "${firstSymbMiddleLine}" і останній символ "${lastSymbMiddleLine}",
                Перший символ нижнього ряду "${firstSymbBottomLine}" і останній символ "${lastSymbBottomLine}",
                Символ "[" знаходиться на "${firstSymbPosition}",
                Символ "]" знаходиться на "${secondSymbPosition}"`

console.log(answer);
