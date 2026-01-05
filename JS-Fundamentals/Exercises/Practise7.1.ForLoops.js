
// Tasks for FOR LOOP
// 1. Print numbers from 1 to 5
console.log("Task1-Print numbers from 1 to 5")
for (let print = 1; print <= 5; print++) {
    console.log(print) 
}

// 2. Print numbers from 1 to 10 but only odd numbers
console.log("Task2-Print only odd numbers:")
for (let oddNumber = 1; oddNumber <= 10; oddNumber += 2) {
    console.log(oddNumber)
}

// 3.Print numbers from 2 to 10 but only even numbers
console.log('Task3-Print only even numbers:')
for (let evenNumbers = 2; evenNumbers <= 10; evenNumbers += 2) {
    console.log(evenNumbers)
}

// 4.Print “Hello World!” 5 times
console.log('Task4-Print "Hello World!" 5 times:')
for (let printWorld = 0; printWorld < 5; printWorld ++) {
    console.log('Hello World!')
}

// 5.Array – print each element
console.log('Task5-Array - print each element:')
const fruits = ["apple", "banana", "cherry"];
for (element = 0; element < fruits.length; element ++){
    console.log(fruits[element])
}

// 6.Array – print length of each element
console.log('Task6-Array - print length of each element:')
const fruits2 = ["apple", "banana", "cherry"];
for (element2 = 0; element2 < fruits2.length; element2 ++){
    console.log(fruits2[element2].length)
}