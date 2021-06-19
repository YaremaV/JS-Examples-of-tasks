// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
    
//     numbers.forEach((element) => {
//         if (element > value) {
//       filteredNumbers.push(element)
//   }})
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach( (number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));



// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//     firstArray.forEach(function (element) {
//         if (secondArray.includes(element)) {
//             commonElements.push(element)
//         }
//     })
//     return commonElements;
// }
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });
  
//     return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


// ============== Стрелочные функции как коллбеки ================
// const calculateTotalPrice = (orderedItems) =>{
//   let totalPrice = 0;

//   orderedItems.forEach((item) =>{totalPrice += item});
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// ==============Чистые функции===============
// const changeEven = (numbers, value) => {
//     // Пиши код ниже этой строки
//     return numbers.map(number => {
//         if (number % 2 === 0) {
//             return number+value   
//         }
//         return number
//     })
//     // Пиши код выше этой строки
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// ==============COD WArs==============
// function findSum(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i += 1){
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// function findSum(n) {
//   return Array.from({length: n}, (a, b) => b+1)
//     .reduce(function(curSum, val) {
//       return !(val % 5 && val % 3) ? curSum + val : curSum;
//     }, 0)
// }
// console.log(findSum(5));
// console.log(findSum(10));

// function minValue(values) {
  
//   const newArr= values
//     .sort()
//     .filter((value, index, array) =>
//       array.indexOf(value) === index);
//   return Number(newArr.join(''))
// }
// console.log(minValue([1, 3, 1]));
// console.log(minValue([5, 7, 5, 9, 7]));
// console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]));


// function minMax(arr){
  
// }
// console.log(minMax([1,2,3,4,5]));
// console.log(minMax([2334454,5]));
// console.log(minMax([1]));


// ============Метод map()=============
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);


// =============map() и массив объектов===========
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
// const titles = books.map(book => book.title);
//   console.log(titles)


// ================ Метод flatMap() =================
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
// const genres = books.flatMap(book => book.genres);
//   console.log(genres)

// ============Методы filter и find============
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number%2===0);
// const oddNumbers = numbers.filter(number => number%2!==0);


// =============Фильтрация уникальных элементов============
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((book,index,array) => array.indexOf(book) === index);
// console.log(allGenres);
// console.log(uniqueGenres);


// ================ filter() и массив объектов ===================
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);


// ============ Пользователи с цветом глаз ===============
 const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
]

// const getUsersWithEyeColor = (users, color) => {
//  return users.filter(user =>  user.eyeColor === color )
// };
// console.log(getUsersWithEyeColor(users, 'green'));
// console.log(getUsersWithEyeColor(users, 'blue'));
// console.log(getUsersWithEyeColor(users, 'brown'));

// ============= Пользователи в возрастной категории ===============
// const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter(user => user.age >=minAge && user.age <= maxAge)

// };

// ================ Пользователи с другом ==============
// const getUsersWithFriend = (users, friendName) => {
//    return users.filter(user => user.friends.includes(friendName))
// };

// const getFriends = (users) => {
//   return users.flatMap((user) => user.friends).filter((elem, index, arr) => arr.indexOf(elem) === index);
// };
// console.log(getFriends(['Sharron Pace', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman']))


// ============== reduce =============
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc, value) => {
//  return acc + value;
// }, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;


// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((acc,player) => {
//   return acc + player.playtime / player.gamesPlayed
// }, 0);

// console.log(totalAveragePlaytimePerGame)

// ===================== Общий баланс пользователей ==============
// const calculateTotalBalance = users => {
//    return users.reduce((acc, user) => {
//     return acc + user.balance
//    },0)
// };
// console.log(calculateTotalBalance(users))

// ============== Общее количество друзей ====================
// const getTotalFriendCount = users => {
//   return users.reduce((acc,user) => {
//      return acc+user.friends.length
//    },0)
  
// };

// console.log(getTotalFriendCount(users))


// =========== Метод sort() ================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();


// ================ Свой порядок сортировки чисел ===============
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);


// ============= Свой порядок сортировки строк ===============
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
// const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));
  
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);


// ================Сортировка объектов ============
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author))
// const sortedByReversedAuthorName =[... books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
// const sortedByAscendingRating = [...books].sort((firstBook,secondBook) => firstBook.rating - secondBook.rating);
// const sortedByDescentingRating = [...books].sort((firstBook,secondBook) => secondBook.rating - firstBook.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// ================= Сортировка по балансу ===================
// const sortByAscendingBalance = users => {
//    return [...users].sort((a,b) => a.balance - b.balance)
// };
// console.log(sortByAscendingBalance(users))

// ============ Сортировка по количеству друзей =================
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a,b)=> b.friends.length - a.friends.length)
// };
// console.log(sortByDescendingFriendCount(users))

// =============== Сортировка по имени ===============
// const sortByName = users => {
//    return [...users].sort((a,b) => a.name.localeCompare(b.name))
// };
// console.log(sortByName(users))

// ============== Цепочки методов (чейнинг, chaining) ================
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .sort((a ,b) => a.author.localeCompare(b.author))
//   .map((book) => book.author);
// console.log(names)

// ============= Пользователи и друзья =================
// const getNamesSortedByFriendCount = users => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .filter((user, index, arr) => arr.indexOf(user) === index)
//     .map((user) => user.name)
// };
// console.log(getNamesSortedByFriendCount(users))

// ============= Имена друзей =============
// const getSortedFriends = users => {
//   return [...users]
//     .flatMap((user) => user.friends)
//     .filter((user, index, arr) => arr.indexOf(user) === index)
//     .sort((a, b) => a.localeCompare(b))
    
// };
// console.log(getSortedFriends(users))

// ============== Общий баланс ================
// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter((user) => user.gender === gender)
//     .reduce((acc, user) => { return acc+ user.balance}, 0)
    
    
// };
// console.log(getTotalBalanceByGender(users, 'male'))
// console.log(getTotalBalanceByGender(users,'female'))