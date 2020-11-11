

//   oldVar = 'adsadas';

// function oldvarTest() {
//    var oldVar = 5;
//     console.log(oldVar)
// }


// oldvarTest();

// if (true) {
//     var test = true; // use "var" instead of "let"
//   }
  
// //   alert(test); // true, the variable lives after if

//   if (true) {
//       let testLet = true;
//   }

// //   alert(testLet)


//   var user = "Pete";

// var user = "John";

// alert(user)




// function sayHi() {
//     phrase = "Hello"; // (*)
  
//     if (false) {
//       var phrase;
//     }
  
//     alert(phrase);
//   }
//   sayHi();



//   function makeCounter() {
//     let count = 0;
  
//     return function() {
//       return count++;
//     };
//   }
  
//   let counter = makeCounter();
  
//   alert( counter() ); // 0
//   alert( counter() ); // 1
//   alert( counter() ); // 2


function say1() {
    let a = 1 ;
    let b = 2 ;

    return function() {
        console.log(a, b)
    }
}

let showNumber = say1();
console.log(showNumber)

console.dir(say1());
say1();
// showNumber();

function fasterCar() {
    bogati = 400 ;
    return function(newCar) {
       return newCar > bogati;
    }
}

let mercedes = fasterCar();
let BMW = fasterCar()
let myCar = fasterCar();

console.log(mercedes(250));
console.log(BMW(555));
console.log(myCar(89));


function addTo(num) {
    // let one  = 1;
    return function(one) {
        return  console.log(` ${num} + ${one} =` ,  num + one)
    }
}



console.dir(addTo())

const addToThree = addTo(3) 
const addToFive = addTo(1) 
addToThree(1); // 4
addToFive(5); // 6

people = [
    { name: "ahmed", age: 27 },
    { name: "Ali", age: 24 },
    { name: "Omar", age: 92},
    { name: 'Wakra', age: 16},
    { name: "ahmed", age: 25 },
    { name: "ahmed", age: 27 },
]

let filtering = people.filter( person => person.name == "ahmed" )
.filter( person =>person.age == 27)
.map( person => person.name )
console.log(filtering);