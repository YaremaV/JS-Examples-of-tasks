// ==================Функция-конструктор======================
// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// console.log(new Car('Audi', 'Q3', 36000));
// console.log(new Car('BMW', 'X5', 58900));
// console.log(new Car('Nissan', 'Murano', 31700));
// console.log(new Car('TEsla', 'X', 75000));
// console.log(new Car())


// ===================Свойство prototype=======================
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function(){
//  return this.price; 
// }

// Car.prototype.changePrice = function(newPrice){
//  return this.price = newPrice; 
// }

// new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

// ==============Хранилище==============
// function Storage(items) {
//  this.items = items;
// };

// Storage.prototype.getItems = function() {
//  return this.items;
// };

// Storage.prototype.addItem = function(newItem){
//   this.items.push(newItem);
// };

// Storage.prototype.removeItem = function(item){
 
//     for (const key of this.items) {
//    if(key === item) {
//      this.items.splice(this.items.indexOf(key),1)
//    };
//   };
// };

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// ================Конструктор строк=====================
//  function StringBuilder(baseValue) {
//     this.value = baseValue;
// };



// StringBuilder.prototype.getValue = function () {
//     return this.value ;
// };
// StringBuilder.prototype.padEnd = function (str) {
//     this.value += str;
    
// };
// StringBuilder.prototype.padStart = function (str) {
//     this.value =str + this.value
// };

// StringBuilder.prototype.padBoth = function (str) {
//     this.value=str+this.value+str
// };

// const builder = new StringBuilder('.');
// console.log(builder)
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


// ===================Конструктор класса====================
// class Car {
//  brand;
//  model;
//  price;
  
//   constructor({brand,model,price}){
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   };
// };
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));


// =====================Приватные свойства #======================
// class Car {
//   #brand;
//   constructor({brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand(){
//     return this.#brand;
//   }
//   changeBrand(newBrand){
//     this.#brand = newBrand;
//   }
// }
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));


// =================Конструктор строк==================
// class Storage{
//   #items
  
//   constructor(items){
//     this.#items = items;
//   }
  
//   getItems(){
//     return this.#items;
//   }
//   addItem(newItem){
//   this.#items.push(newItem);
//   }
//   removeItem(item){
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
//   }
// }
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// ==============Конструктор строк 2.0=================
// class StringBuilder{
//     #value;
//     constructor(baseValue) {
//         this.#value = baseValue;
//     }

//     getValue() {
//         return this.#value;
//     }
//     padEnd(str) {
//         this.#value += str;
//     }
//     padStart(str) {
//         this.#value = str + this.#value;
//     }
//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }
// }


//===============Геттеры и сеттеры==================
// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }
//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }


// ==============Статические свойства================
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//      if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//     return this.#price;
     
   
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// ===============Статические методы================
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {

//     if(price > this.#MAX_PRICE){
//      return 'Внимание! Цена превышает допустимую.';
//     } else{
//       return 'Всё хорошо, цена в порядке.';
//     };
//   };
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.


// ===============Наследование классов===============
// class User {
//   email;
 
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки
// class Admin extends User {
//   static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' }
// }


// ==================Конструктор дочернего класса=================
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static accessLevel;
//   constructor({email, accessLevel}){
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   // Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

// ============Методы дочернего класса==============
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
//  blacklistedEmails = [];
  
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
  
//   blacklist(email) {
//     this.blacklistedEmails.push(email)
//   }
  
//   isBlacklisted(email){
//     if(this.blacklistedEmails.includes(email)){
//       return true;
//     } else {
//       return false
//     }
   
//   }


//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });
// console.log(mango)
// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 