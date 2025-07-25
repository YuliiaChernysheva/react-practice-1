// 1. Створіть інтерфейс Container, що містить:

// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.
// 2.  Створіть два контейнери:

// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.
// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.

// 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.

// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).

// Примітка:

// Контейнер має підтримувати тільки один тип елементів.

interface Container<T> {
  items: T[];
  addItems: (item: T) => void;
  getItem: (index: number) => T;
}

const numberContainer: Container<number> = {
  items: [5, 10, 15],
  addItems(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};
console.log(numberContainer);

const stringContainer: Container<string> = {
  items: ["test1", "test2"],
  addItems(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};
console.log(stringContainer);

const getLastElement = <T>(array: T[]): T => {
  return array[array.length - 1];
};

getLastElement<number>(numberContainer.items);
