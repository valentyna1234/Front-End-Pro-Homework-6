//Getting values ​​from the user

//information about age
const age = Number(prompt( 'Введіть свій рік народження' ));
console.log(age);
switch (age) {
     case 0:
          alert("Шкода, що Ви не захотіли ввести рік свого народження.");
          ageResult = "Ви не захотіли вводити дату народження.";
          break;
     default:
          ageResult ="Тобі приблизно " + (2023 - age) + " років";
          console.log(ageResult)
     }

// information about city
const city = String(prompt( 'Введіть назву міста, в якому ви живете' ));
console.log(city);
switch (city) {
     case 'Київ':
         cityResult = "Ти живеш у столиці України";
         console.log("Ти живеш у столиці України");
         break;
     case 'Вашингтон':
         cityResult = "Ти живеш у столиці США";
         console.log("Ти живеш у столиці США");
         break;
     case 'Лондон':
         cityResult = "Ти живеш у столиці Великобританії";
         console.log("Ти живеш у столиці Великобританії");
         break;
     case '':
          alert("Шкода, що Ви не захотіли ввести назву свого міста.");
          cityResult = "Ви не захотіли вводити назву свого міста.";
         break;
     default:
          cityResult = "Ти живеш у місті " + city;
          console.log("Ти живеш у місті " + city);
     }
 
// information about sport
const sport = String(prompt('Введіть ваш улюблений вид спорту'));
console.log(sport);
switch (sport) {
     case 'Плавання':
          sportResult = "Круто! Хочеш стати як Михайло Романчук?";
          console.log("Круто! Хочеш стати як Михайло Романчук?");
          break;
     case 'Футбол':
          sportResult = "Круто! Хочеш стати як Ліонель Мессі?";
          console.log("Круто! Хочеш стати як Ліонель Мессі?");
          break;
     case 'Бокс':
          sportResult = "Круто! Хочеш стати як Володимир Кличко?";
          console.log("Круто! Хочеш стати як Володимир Кличко?");
          break;
     case '':
          alert("Шкода, що Ви не захотіли ввести улюбленний вид спотру.");
          sportResult = "Ви не захотіли вводити вид свого улюбленного спорту.";
          break;
     default:
          sportResult = sport + "?!" + " Круто! Успіхів тобі та натхнення!";
          console.log(sport + "?!" + " Круто! Успіхів тобі та натхнення!");
     }

alert(ageResult + "\n" + cityResult + "\n" + sportResult);





 
