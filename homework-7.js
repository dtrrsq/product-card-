import { commentsSocialMedia } from "./comments.js";

/* Уровень 1
 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5. */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = numbers.filter((number) => number >= 5);

console.log(newArray);

// 3. Создать массив строк, проверить, есть ли в массиве какая-то определенная сущность
const furnitures = ["chair", "sofa", "table", "closet"];
const checkFurniture = furnitures.includes("sofa");

console.log(checkFurniture);

// 4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный
function reverseArray(array) {
  array.reverse();
}
reverseArray(numbers);
reverseArray(furnitures);

/* Уровень 2 
 7. Задание: Вывод комментариев с почтой в домене .com */
const filteredComments = commentsSocialMedia.filter((comment) =>
  comment.email.includes(".com"),
);

// 8. Перебрать массив
const sorteredIds = commentsSocialMedia.map((comment) => ({
  ...comment,
  postid: comment.di <= 5 ? 2 : 1,
}));
console.log(sorteredIds);

// 9. Оставить в объектах  только id и name
const sortedComments = commentsSocialMedia.map((comment) => ({
  id: comment.id,
  name: comment.name,
}));
console.log(sortedComments);

// 10. Перебираем массив, добавляем объектам свойство isInvalid
const processedComments = commentsSocialMedia.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length >= 180 ? true : false,
}));
console.log(processedComments);

/* Уровень 3 
 11. вывести массив почт с помощью reduce и map*/
const getEmails = commentsSocialMedia.reduce((acc, item) => {
  acc.push(item.email);
  return acc;
}, []);
console.log(getEmails);

const emailsByMap = commentsSocialMedia.map((comment) => comment.email);
console.log(emailsByMap);

// 12. перебрав массив с задания 11, привести его к строке.
const emailString = getEmails.toString();
const emailStringByJoin = getEmails.join(", ");
