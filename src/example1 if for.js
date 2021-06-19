// const shouldRenew = confirm('хотите продлить подписку?');
// console.log(shouldRenew);

// let quantity = prompt('введите данные');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = '50px';
// elementWidth = Number .parseInt(elementWidth);
// console.log('elementWidth', elementWidth);

// let salary = 1200.567;
// salary = salary .toFixed(1);
// salary = Number(salary);

// console.log(salary);

// const num = 27;

// const result = num > 25 && num < 30;
// console.log(result);

// let price = 200;
// const sub = 'premium';

// if (sub === 'free') {
//     price = 500;
// } else if (sub === 'premium') {
//     price = 200;
// } else if (sub === 'pro') {
//     price = 1000;
// }
    
// console.log(price);
// console.log(typeof price);

// const num =  1;

// let price;

// switch (num) {
//     case 1:
//         price = 20;
//         break;
    
//     case 2:
//         price = 30;
//         break;
    
//     case 3:
//         price = 50;
//         break;
    
//     case 4:
//         price = 70;
//         break;
// }
// console.log(price);

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?
// console.log(a, b, c, d);

// let a = 2;

// let x = 1 + (a *= 2);
// console.log(a, x); 4;5


// let name = prompt('Какое «официальное» название JavaScript?');
// if (name === 'ECMAScript') {
//     alert('Верно!');
// } else  {
//     alert('Не знаете? ECMAScript');
// }

// let userNumber = prompt('Введите любое число');

// if (userNumber > 0) {
//     alert(1);
// } else if (userNumber < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }
    
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if (totalSpent >= 50000 ){
//   discount = GOLD_DISCOUNT;
// } else if (totalSpent >= 20000 && totalSpent <= 50000) {
//   discount = SILVER_DISCOUNT;
// } else if (totalSpent >= 5000 && totalSpent <= 20000){
//   discount = BRONZE_DISCOUNT ;
// } else{
//   discount = BASE_DISCOUNT ;
// }
//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

// function checkStorage(available, ordered) {
//   let message = (available < ordered) ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
     
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));


// function getSubscriptionPrice(type) {
//   let price;   
//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }
//   return price;
// }

// console.log(getSubscriptionPrice("professional"))

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// console.log(getNameLength("Poly"));
// getNameLength("Harambe");
// getNameLength("Billy");
// getNameLength("Joe");


// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

/*=============slice()================ */
// function getSubstring(string, length) {
//   const substring = string.slice(0,length); // Change this line

//   return substring;
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 0));
// console.log(getSubstring("Hello world", 11));


// function formatMessage(message, maxLength) {
//   let result;
 
//     result = message.length > maxLength ? message.slice(0, maxLength) + "..." : message;
  
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));


/*========toLowerCase======== */
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));


/*========includes ========= */
// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }
// console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));
// console.log(checkForName("Egor Kolbasov", "Zhenya"));
// console.log(checkForName("Vadim Nekrasov", "Vadim"));


// function checkForSpam(message) {
//   let result;
  
// result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale");
  
//   return result;
// }
// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));