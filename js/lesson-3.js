//1
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// Array.method((element) => {return element*2})
// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map((number) => number ** 2);
// console.log(doubleNumbers);
//yakwo potribno dodati ymovy const doubleNumbers = numbers.map((number) => {
//    if (number % 2=== 0) {
//        return number **2;
//    }
//   return number;
//    });

//const getDoubleNumbers =(array) => {
//    return array.map((el)=>{return el**2});
//}
//console.log(getDoubleNumbers)
console.log([1, 1, 3, 4, 3].filter((el, idx, arr) => arr.indexOf(el) === idx)); //znahodgenya ynikalnih elementiv

//2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];
const data1 = data.flatMap((date) => date.values);
console.log(data1);

//3
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

const people = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];

const hasUnder20 = people.some((person) => person.age < 20);
console.log(hasUnder20);

//4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const allNumber = numbers.every((number) => number % 2 === 0);
// console.log(allNumber);

//5
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const numberFind = numbers.find((number) => number % 2 !== 0);
// console.log(numberFind);

//6
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];
numbersArray.sort((a, b) => a - b);
console.log(numbersArray);

//7
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];
// const arr = (stringArr) => {
//   return stringArr.toSorted((a, b) => a.localComoare(b));
// };
// console.log(arr(stringArr));
//podivites video

//9
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const user = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];
const filteredUsers = user.filter((user) => user.age > 20);

console.log(filteredUsers);
// const getUser = (obj) => obj.filter(el => el.age > 20);

// console.log(getUser(user));

//10
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((sum, number) => {
//   return (sum += number);
// }, 0);

// console.log(sum);
