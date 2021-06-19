// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// console.log(apartment);


// =================Вычисляемые свойства================
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
  
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName] : "jqueryismyjam",
  
// };
// console.log(credentials)


// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key])
// }

// console.log(keys);
// console.log(values);

// ========================Метод hasOwnProperty()=======================
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city centre';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
    
//   }
// }
// console.log(keys);
// console.log(values);


// ====================Задача. Подсчёт свойств=======================

// function countProps(object) {
//   let propCount = 0;
  
//   for (const key in object) {
//     propCount = Object.keys(object).length;
//   }
//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({name: "Mango", age: 2}));
// console.log(countProps({mail: "poly@mail.com", isOnline: true, score: 500}));

// =================Метод Object.keys()============================
// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
// values.push(apartment[key])
// }
// console.log(keys);
// console.log(values);

// ===========Метод Object.values()===============
// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// ======================Задача. Расходы на зарплату=======================
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
  
//   for (const value of values) {
//     totalSalary+=value
//   }

//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// ==========================Массив объектов==================
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {

//   if (color.hex) {
//     hexColors.push(color.hex);
//   } 
//     rgbColors.push(color.rgb)
// }
// console.log(hexColors);
// console.log(rgbColors);

// =================Поиск объекта по значению свойства====================
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
  
//   for (const product of products) {
  
//     if (productName === product.name) {
//       return product.price;
//     }
    
// }

// return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// ===================Коллекция значений свойства======================
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// console.table(products)

// function getAllPropValues(propName) {
  
//   const arrProducts = [];

//   for (const product of products) {
    
//     if (propName === "name") {
//      arrProducts.push(product.name)
//     } else if (propName==="price") {
//       arrProducts.push(product.price)
//     } else if (propName === "quantity") {
//       arrProducts.push(product.quantity)
//    }
//   }

//   return arrProducts;
// }


// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


// =====================Общая стоимость товара============
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
  
//   let totalPrice = 0;

//   for (const product of products) {
    
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
    
//   }
//   return totalPrice;

// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));


// Глубокая деструктуризация
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {today: {low: lowToday,
//                high: highToday,
//                icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//     tomorrow: { low: lowTomorrow,
//         high: highTomorrow,
//         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, } = forecast;


// =============Spread================
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(worstScore);
// console.log(bestScore);


// ==================Операция spread при создании нового объекта=====
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = {...defaultSettings, ...overrideSettings};
// console.log(finalSettings);


// ============Карточки задач===========
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
  
//     const newObj = {
//         completed: false,
//         category: 'General',
//         priority: 'Normal'
//     }

//     const {text} = data;
//     const finalObj = {...newObj, ...data}
//     return finalObj;
// }
// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));


// ==============REST===============
// function add(...args) {
//     let sum = 0;
//     for (const arg of args) {
//         sum += arg;
//     }
//     return sum;
    
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));


// =============сбор частей аргументов функции==================
// function addOverNum(firstNumber, ...otherNumbers) {
//   let total = 0;

//   for (const number of otherNumbers) {
    
//     if(number > firstNumber) {
//     total += number;
//     }
//   }

//   return total;
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));


// ========Массив совпадений=========
// function findMatches(array, ...otherNumbers) {
//   const matches = []; // Don't change this line

//     for (const number of otherNumbers) {

//         if (array.includes(number)) {
//             matches.push(number);
//         }
//     }
  
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));


// Методы объекта
// const bookShelf = {
  
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`
//   },
  
// };

// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));


// Доступ к свойствам объекта в его методах
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {

//       const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
      
//     return bookShelf;
//   },
  
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));


// Лавка зелий «У старой жабы»
// const atTheOldToad = {
 
// potions : [],
  
// };


// const atTheOldToad = {
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  
//   getPotions() {
//     return this.potions;
//   }
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions())

// Добавляем новое зелье
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],

//   addPotion(potionName) {
//     return this.potions.push(potionName);
//   },
// };
// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Power potion'));

// Удаляем зелье
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
  
//     const indexPotions = this.potions.indexOf(potionName);
//     this.potions.splice(indexPotions, 1);

//   },
// };

// Обновляем зелье
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
 
// const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);
      
//    return potionIndex;

//   },
// };
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));


// Расширяем инвентарь

//  const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Potion ${potionName} is already equipped!`;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
    
//     for (const potion of this.potions) {
      
//       if (potion.name === potionName) {
//         const indexPotion = this.potions.indexOf(potion);
//         this.potions.splice(indexPotion, 1);
//         return this.potions;
//       }
      
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
    
//     for (const potion of this.potions) {
      
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return this.potions;
        
//       }
//     }
//    return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
      

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));