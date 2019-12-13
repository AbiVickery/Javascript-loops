// var arr = [1,2,3,4]

// console.log(arr[0]);

// Array.forEach((el, idx) => {
//     console.log (idx, el);
//     // do stuff
//     debugger;
// });

let food = [
    { name:'pizza'},
    { name:'bread'},
    { name:'butter'},
    { name:'milk'}
]
food.forEach((el, id) => {
    console.log(idx, el);
    // do stuff
    // create the el
    // append el the page
    // attach an event listener to el
    debugger
});

/*

    <li><a data-idx="1" href="">pizza</a></li>
    <li><a data-idx="2" href="">bread</a></li>
    <Li><a data-idx="3" href="">butter</a></li>
    <li><a data-idx="4" href="">milk</a></li>

*/

// for (liet i = 0; i < Array.length; i++) {
//     const element
// }


while (false) {
    // do stuff;
    // wont run while false
}

do {
    // do stuff;
    // will run even while false
} while (false);



let hello = true;
let goodbye = false;
while (hello) {
    if(goodbye) { // true
        hello = false;
    }
    // debugger
    // user click on page
    goodbye = true;
    console.log('here');
}

do {
    if(goodbye) {
        hello = false;
    }
    // debugger
    // user click on page
    // do stuff
} while (hello);

const person = {
    name: 'Abigail',
    age: 19,
    address: {
        street: '5432 Carolwood drive',
        city: 'Jackson',
        state: 'Mississippi',
        zip: 39211
    }
}

for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];
        console.log(key, element);
        // how can i get street???
        // log street???
        // console.log(person.address[1]);
        if (key == 'address') {
            // console.log(person.address[1]);
            // debugger
            let address = value;
            console.log(address.street);
        }
    }
}

let food = [
    'pizza',
    'bread',
    'butter',
    'milk'
]
for (const value of food) {
    console.log(value);
}

let string = 'hello';
for (const letter of string) {
    console.log(letter);
}

for (const key in food) {
    if (food.hasOwnProperty(key)) {
        // console.log(key);
        if (key == 1) {
            break;
        }
    }
    console.log(key);
}

const iterable = 'boo';

for  (const value of iterable) {
    console.log(value);
}

// BREAK, CONTINUE

for (const key in food) {
    if (key == 1) {
        continue;
    }
    console.log('key', key);
}
for (const value of person) {
    console.log(value);
}

// var data = [
//     ['Abigail','Vickery'],
//     ['Abby','Curry']
// ];
// var counter = 0;
// for (let i = 0; i < 10; i++) {
//     // do stuff
// }



let length = 9;
while (length < 10) {
    console.log(length);
    length = 10;
}

// letter counter
// hello -> h: 1, e: 1, l: 2, o: 1

// for (let letter of string) {
//     letter = letter.toLowerCase();
//     if (letter.match(/[a-z])) {
//         if (letterCount.hasOwnProperty(letter)) {
//             letterCount[letter]
//         }
//     }
// }