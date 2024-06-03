// Create a function fetchData that simulates fetching data from an API. The function should return a promise that resolves with a hardcoded array
// of objects after 2 seconds. Each object should represent a user with properties id, name, and age.

function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=> {
            const students = [
                {id: 1, name: 'Maynard James Keenan', age:60 },
                {id: 2, name: 'Danny Carey', age:63 },
                {id: 3, name: 'Adam Jones', age:59 },
                {id: 4, name: 'Justin Chancellor', age:52}
            ];
            resolve(students);
        }, 2000);
    });
}
fetchData().then(students => console.log(students));

// Create a function createCounter that returns an object with two methods: increment and getCount. The increment method should increase the 
// internal count by 1, and the getCount method should return the current count. Use a closure to maintain the internal count variable.

function create_counter() {
    let count = 0;
    return {
        increment: function() {
            count += 1;
        },
        getCount: function() {
            return count;
        }
    };
}
const counter = create_counter();

counter.increment();
console.log(counter.getCount()); 
counter.increment();
console.log(counter.getCount()); 

// Create a function processData that accepts an array of numbers and a callback function. The function should process each number in the array
// using the callback function and return a new array of processed numbers.

function process_data(numbers, callback) {
    return numbers.map(callback);
}

function double(num) {
    return num * 2;
}

const numbers = [2, 4, 6, 8, 10];
const result = process_data(numbers, double);

console.log(result); 

// Rewrite the fetchData function from Question 1 using async and await.

function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=> {
            const students = [
                {id: 1, name: 'Maynard James Keenan', age:60 },
                {id: 2, name: 'Danny Carey', age:63 },
                {id: 3, name: 'Adam Jones', age:59 },
                {id: 4, name: 'Justin Chancellor', age:52}
            ];
            resolve(students);
        }, 2000);
    });
}
async function displayData(){
    const students = await fetchData();
    console.log(students);   
}
displayData();

// Given an array of numbers, create a function that doubles each number using map.

const numbers_1 = [20,40,100,80,60];

const doubles = numbers_1.map((num) => num *2);
console.log(doubles);

// Given an array of numbers, create a function that filters out numbers less than 10 using filter.
function filter_numbers(numbers) {
    return numbers.filter(num => num < 10);
  }
  const number_1=[2, 8, 6, 14];
  console.log(filter_numbers(number_1)); 


  
  // Given an array of numbers, create a function that finds the first number greater than 15 using find.
  
  function find_numbers(numbers) {
    return numbers.find(num => num >15);
  }
  const number2=[10,20,30,40,50,60,70];
  console.log(find_numbers(number2));
  

  // Given an array of numbers, create a function that sums all numbers using reduce.
  function sum_numbers(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  const arr=[5, 6, 7, 9]
  console.log(sum_numbers(arr)); 
  
 
  // Given an array of user objects, write a function to transform this array into an object where the keys are user IDs and the values are 
  // the corresponding user objects.
  function transformToUserObject(users) {
    return users.reduce((obj, user) => {
        obj[user.id] = user;
        return obj;
    }, {});
  }
  
  const usersArray = [
    {id: 1, name: 'Maynard James Keenan', age:60 },
    {id: 2, name: 'Danny Carey', age:63 },
    {id: 3, name: 'Adam Jones', age:59 },
    {id: 4, name: 'Justin Chancellor', age:52}
  ];
  console.log(transformToUserObject(usersArray));
  
  
 
  // Create a Person class with a constructor that accepts name and age parameters. Add a method describe that returns a string describing the 
  // person.
  
  class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
  
    describe() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  const person = new Person('Ozzy', 25);
  console.log(person.describe()); 
  
  
  // Create a Student class that extends Person and adds a grade property. Add a method study that returns a string indicating the student is studying.
  class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
  
    describe() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
  
    study() {
        return `${this.name} is studying.`;
    }
  }
  const student = new Student('Oggy', 21, 'A');
  console.log(student.describe()); 
  console.log(student.study()); 
  
  
  // Modify the fetchData function to randomly reject the promise with an error message &quot;Failed to fetch data&quot;. Handle this error using .catch when calling the function.
  function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                const users = [
                    { id: 1, name: 'Luffy', age: 21 },
                    { id: 2, name: 'Zoro', age: 25 },
                    { id: 3, name: 'Sanji', age: 26 }
                ];
                resolve(users);
            } else {
                reject("Failed to fetch data");
            }
        }, 2000);
    });
  }
  
  fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
 
  // Modify the fetchData function with async/await to handle errors using try/catch blocks.
  async function fetchData() {
    try {
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    const users = [
                        { id: 1, name: 'Ozzy', age: 75 },
                        { id: 2, name: 'Tony', age: 76 },
                        { id: 3, name: 'Bill', age: 76 }
                    ];
                    resolve(users);
                } else {
                    reject("Failed to fetch data");
                }
            }, 2000);
        });
        console.log(data);
    } catch (error) {
        console.error(error);
    }
  }
  
  fetchData();
  
 
  // Given an array of users, where each user has a name and an array of hobbies, create a function that returns an array of all unique hobbies using reduce.
  
  function getUnique_hobbies(person) {
    return person.reduce((allHobb, person) => {
        person.hobbies.forEach(hob => {
            if (!allHobb.includes(hob)) {
                allHobb.push(hob);
            }
        });
        return allHobb;
    }, []);
  }
  const persons = [
    { name: 'Corey', hobbies: ['reading', 'playing', 'sleeping'] },
    { name: 'Mick', hobbies: ['singing', 'hiking'] },
    { name: 'Joet=y', hobbies: ['playing', 'dancing'] }
  ];
  console.log(getUnique_hobbies(persons)); 
