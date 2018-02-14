let num = prompt('Введіть число от 1 до 3-х (1-Taba, 2-Sharm, 3-Hurgada)');
let res;
switch (num) {
  case "1" : res = "Taba" ; break;
  case "2" : res = "Sharm"; break;
  case "3"  : res = "Hurgada"  ; break;
  default  : res = "Ви ввели число по якому немає варіанту курорту"    ;
}

console.log(`Ви вибрали курорт ${res}!`) 
