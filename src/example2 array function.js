//======= «Ранний возврат» — это концепт написания функций таким образом, что ожидаемый положительный результат возвращается в конце,
//======= когда остальной код в случае расхождения с целью функции должен завершить ее выполнение настолько раньше, насколько возможно.


// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
    
//   if (password === ADMIN_PASSWORD) {
//    return "Welcome!";
//   } 
//   return "Access denied, wrong password!";
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// function checkStorage(available, ordered) {
//   // Change code below this line
  
// if (ordered === 0) {
//     return "Your order is empty!";
// }
// if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
// } 

//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

/*=========Индекс последнего элемента============  */
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// function getExtremeElements(array) {

// //   const firstElement = array[0];
// //   const lastElementIndex = array.length - 1;
// //   const lastElement = array[lastElementIndex];
// //   return [firstElement, lastElement]
    
    
// const firstItem = array[0];
// const lastItem = array[array.length-1];

//  const objOutput = {
//    first : firstItem,
//    last : lastItem
//   };

// return objOutput;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// const numbers = [12, 34, 3, 56, 67, 65, 33, 99];
// let bigestNumber = numbers[0];

// for (const number of numbers) {
//     if (number > bigestNumber) {
//         bigestNumber = number;
//     }
// }

// console.log(`bigestNumber: `, bigestNumber)

// var myArray = ['Rodel', 'Mike', 'Ronnie', 'Betus'];

// function firstAndLast(array) {

// var firstItem = myArray[0];
// var lastItem = myArray[myArray.length-1];

//  var objOutput = {
//    first : firstItem,
//    last : lastItem
//   };

// return objOutput;
// }

// var display = firstAndLast(myArray);

// console.log(display);



/*=======Сервису гравировки украшений нужна функция, 
которая бы автоматически считала цену гравировки, 
в зависимости от количества слов и цены за слово.======== */

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
    
//     const quantityWords = message.split(" ").length;
//     totalPrice = quantityWords * pricePerWord;
//     return totalPrice;
//    // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));


// function slugify(title) {
//   // Change code below this line

// const slug = title.toLowerCase().split(' ').join('-');

//     return slug;
//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


/*=======SLICE=========== */
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
// console.table(fruits);



/*=====композиция массивов====== */
// function makeArray(firstArray, secondArray, maxLength) {

//   let newArray = firstArray.concat(secondArray).slice(0, maxLength);
  

//   return newArray;
// }
  
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


/*===========FOR============== */
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

/*=====сумма чисел=====*/
// function calculateTotal(number) {
 
//   let sum = 0;

//   for (let i = 0; i <= number; i+=1) {
//     sum += i;
//   }

//   return sum;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+=1) { 
//   const fruit = fruits[i]; 
//   console.log(fruit);
// }


// function calculateTotalPrice(order) {
//   let total = 0;
  
// for(const value of order){
//   total +=value;
// }
  
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// function findLongestWord(string) {
  
//   const arrWords = string.split(' ');
//   console.log(arrWords)
//   let longWord = arrWords[0];

//   for (i = 0; i < arrWords.length; i += 1) {
    
//     if (longWord[i].length > arrWords[0].length){
      
//     }
//     return longWord;
//   }
// }


// ======= поиск самого длинного слова ============
// function findLongestWord(string) {
  
//   const arrString = string.split(" ");
//   console.log(arrString)
//   let maxWordLength = arrString[0];

//   for (let i = 0; i < arrString.length ; i += 1){
    
//     if (maxWordLength.length < arrString[i].length) {
//       maxWordLength = arrString[i];  
//     }
//   }
//    return maxWordLength
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));


// ========= массив всех целых чисел от значения min до max =====
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
  
//   for (let i = min; i <= max; i += 1){
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));


// ============ фильтрация массива чисел ===========
// function filterArray(numbers, value) {
   
//   const arrNumbers = [];

//   for (number of numbers) {
//     if (number > value) {
//       arrNumbers.push(number);
//     }
//   }

// return arrNumbers
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));


// ============= Метод includes() ================
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));


// function getCommonElements(array1, array2) {
  
//   const newArray = [];

//   for (i = 0; i <= array1.length - 1; i += 1) {
    
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i])
//     }
//   }

//   return newArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


// ============= Задача: чётные числа ================
// function getEvenNumbers(start, end) {

// const arr =[];
  
//   for (let i = start; i <= end; i += 1){
//     if (i % 2 === 0) {
//       arr.push(i);
//     }
//   }

//   return arr;
// }
  
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));


// ============ Оператор break ==============
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);


// function includes(array, value) {

//   for (i = 0; i <= array.length; i += 1){
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));