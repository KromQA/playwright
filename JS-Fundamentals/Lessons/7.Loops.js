
// Loops

console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");


// statement1- what we want to start the loop with
// statement2- how long run the loop and/or when to stop it
// statement3- what to do after each cycle of the loop
    // for(statement1; statement2; statement3){

    // }

for(let i=0; i<5; i++ ) {

    console.log('-----Hello World!' + i)
}

var cars = ["Kia", "Volvo", "Mercedes"]
//for of loop

for(let car of cars){
    console.log(car)
    if(car== "Volvo"){
        break
    }
}


//ES6 syntax for each

cars.forEach( car => {
    console.log(car)
})