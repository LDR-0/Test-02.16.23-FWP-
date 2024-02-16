//1 задание
const names = ['Иван, реальный пацан, шарит за мемы', 'Дева Мария', 'Алексей, не придумал', 'Ольга Хельга', 'Сергей, опытный', 'Анна Генриетта'];

names.forEach((name) => {
    console.log(`Привет, ${name}`);
});

// 2 задание
const numbers = [1, 2, 3, 4, 5];

const multipliedNumbers = numbers.map((number) => {
    return number * 10;
});

console.log(multipliedNumbers);

// 3 задание
const numbers1 = [5, 12, 8, 130, 44];

const filteredNumbers = numbers1.filter((number) => {
    return number > 10;
});

console.log(filteredNumbers);

//4 задание
const mapet = [
    { name: 'Иван', age: 23 },
    { name: 'Мария', age: 18 },
    { name: 'Алексей', age: 32 },
    { name: 'Ольга', age: 24 },
    { name: 'Сергей', age: 17 },
    { name: 'Анна', age: 21 }
  ];
const filteredAndMappetPeople = mapet
  .filter((person) => person.age > 18)
  .map((person) => `${person.name} (${person.age} лет)`);

console.log(filteredAndMappetPeople);
// 5 задание
const sales = [
    { product: 'Телефон, смартфон, айфон', price: 50000, power: 1 },
    { product: 'Чехол, зачем когда есть защитное стекло?', price: 1500, power: 2 },
    { product: 'Зарядное устройство, за 2500? Лучше на алике пб заказать', price: 2500, power: 1 }
  ];  
const totalSalesAmount = sales.reduce((total, sale) => total + (sale.price * sale.power), 0);

console.log(`Общая стоимость продаж: ${totalSalesAmount}, кто-то получит премию`);
