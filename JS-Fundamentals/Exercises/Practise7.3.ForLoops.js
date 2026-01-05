// Set 3 - another For Loop practise

// TASK 1:
// Print numbers from 10 to 15
for (let Task1 = 10; Task1 < 16; Task1++)
    console.log("Task1: " + Task1)

// TASK 2:
// Print numbers from 3 to 7
for (let Task2 = 3; Task2 < 8; Task2++)
    console.log("Task2: " + Task2)

// TASK 3:
// Print "JS" 4 times
for (let Task3 = 0; Task3 < 4; Task3++)
    console.log("Task3: " + "JS")

// TASK 4:
// Print numbers from 0 to 20, but increase by 5 each time
for (let Task4 = 0; Task4 < 21; Task4 += 5)
    console.log("Task4: " + Task4)

// TASK 5:
// Given an array of animals, print each animal
// Example array: ["dog", "cat", "horse"]
var animals = ["dog", "cat", "horse"]
for (let Task5 = 0; Task5 < 3; Task5++)
    console.log("Task5: " + animals[Task5])

// TASK 6:
// Print numbers from 1 to 10
for (let Task6 = 1; Task6 < 11; Task6++)
    console.log("Task6: " + Task6)

// TASK 7:
// Print numbers from 10 to 1
for (let Task7 = 10; Task7 > 0; Task7--)
    console.log("Task7: " + Task7)

// TASK 8:
// Print all even numbers from 2 to 20
for (let Task8 = 2; Task8 < 21; Task8 += 2)
    console.log("Task8: " + Task8)

// TASK 9:
// Given an array of fruits, print each fruit
// Example array: ["apple", "banana", "orange", "kiwi"]
var fruits = ["apple", "banana", "orange", "kiwi"]
for (let Task9 = 0; Task9 < fruits.length; Task9++)
    console.log("Task9: " + fruits[Task9])

// TASK 10:
// Given an array of numbers, print only the numbers less than 10
// Example array: [3, 12, 7, 25, 8, 15]
var numbers = [3, 12, 7, 25, 8, 15]
for (let Task10 = 0; Task10 < numbers.length; Task10++) {
    if (numbers[Task10] < 10) {
        console.log("Task10: " + numbers[Task10])
    }
}

// TASK 11:
// Print all numbers from 1 to 15, but print "Fizz" instead of the number if it’s divisible by 3
for (let Task11 = 1; Task11 < 16; Task11++) {
    if (Task11 % 3 === 0) {
        console.log("Task11: " + "Fizz")
    } else {
        console.log("Task11: " + Task11)
    }
}

// TASK 12:
// Print all numbers from 1 to 20, but **skip numbers divisible by 4**
for (let Task12 = 1; Task12 < 21; Task12++) 
    if (Task12 % 4 !== 0) {
           console.log("Task12: " + Task12)
}