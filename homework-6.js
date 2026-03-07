// N.3  Создать оъект с моими данными
const userInfo = {
  name: "Muhammad",
  lastName: "Gadisov",
  age: 20,
  city: "Makhachkala",
  country: "Russia",
  car: "Priora",
};
console.log(userInfo);

// N.4  Создать объект, хранящий данные об автомобиле, добавить дополнительное свойство - владелец авто, значением которого будет ОБЪЕКТ, описанный в пункте №3
const car = {
  brand: "Lada",
  model: "Priora",
  year: 2012,
  color: "black",
  transmission: "Manual",
};
car.owner = userInfo;

// N.5 Написать функцию которая аргументом будет принимать объект, описанный в пункте №4.
// Она проверяет, есть ли в объекте свойство "максимальная скорость", если нет - добавляет его и задает значение, если есть - прекращает выполнение (ничего не делает)
function addMaxSpeed(obj) {
  if (!obj.maxSpeed) {
    obj.maxSpeed = "250km";
  }
}

addMaxSpeed(car);

console.log(car);

// N.6 Написать функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.
function showObjectProperty(mainObject, keyName) {
  console.log(mainObject[keyName]);
}
showObjectProperty(car, "brand");

// N.7 Создать массив, который содержит названия продуктов (просто строки)
const products = ["bread", "apples", "bananas", "eggs"];

// N.8 Создать массив из объектов в котором объект представляет собой книгу. после добавить еще одну книгу в конце списка
const fictions = [
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "Grey",
    genre: "Dystopia",
  },
  {
    title: "Великий Гэтсби",
    author: "Ф. Скотт Фицджеральд",
    year: 1925,
    coverColor: "Blue",
    genre: "Novel",
  },
  {
    title: "Бойцовский клуб",
    author: "Чак Паланик",
    year: 1996,
    coverColor: "Orange",
    genre: "Thriller",
  },
];
fictions.push({
  title: "Интерстеллар",
  author: "Кип Торн",
  year: 2014,
  coverColor: "Black",
  genre: "Sci-Fi",
});

// N.9 создать еще один массив и объединить его с прошлым
const potterUniverse = [
  {
    title: "Гарри Поттер и Тайная комната",
    author: "Дж. К. Роулинг",
    year: 1998,
    coverColor: "Green",
    genre: "Fantasy",
  },
  {
    title: "Гарри Поттер и узник Азкабана",
    author: "Дж. К. Роулинг",
    year: 1999,
    coverColor: "Purple",
    genre: "Fantasy",
  },
  {
    title: "Гарри Поттер и Кубок огня",
    author: "Дж. К. Роулинг",
    year: 2000,
    coverColor: "Blue",
    genre: "Fantasy",
  },
];
const addedBooks = [...fictions, ...potterUniverse];
console.log(addedBooks);

// N.10 Написать функцию, которая принимает массив сущностей с задания №9.  если книга выпущена позже 2000 года, устанавливаем true (да, это редкий), нет - false (значит это не редкий).
const getRarity = (booksArray) => {
  return booksArray.map((book) => {
    return {
      ...book,
      isRare: book.year > 2000,
    };
  });
};

const updatedPotterUniverse = getRarity(potterUniverse);
console.log(updatedPotterUniverse);
