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

for (let a = 0; a < Array.length; a++) {
    for (let b = 0; b < Array.length; b++) {
        for (let c = 0; c < Array.length; c++) {
            for (let d = 0; d < Array.length; d++) {
                for (let e = 0; e < Array.length; e++) {
                    for (let f = 0; f < Array.length; f++) {
                        for (let g = 0; g < Array.length; g++) {
                            for (let h = 0; h < Array.length; h++) {
                                for (let i = 0; i < Array.length; i++) {
                                    for (let j = 0; j < Array.length; j++) {
                                        for (let k = 0; k < Array.length; k++) {
                                            for (let l = 0; l < Array.length; l++) {
                                                for (let m = 0; m < Array.length; m++) {
                                                    for (let n = 0; n < Array.length; n++) {
                                                        for (let o = 0; o < Array.length; o++) {
                                                            for (let p = 0; p < Array.length; p++) {
                                                                for (let q = 0; q < Array.length; q++) {
                                                                    for (let r = 0; r < Array.length; r++) {
                                                                        for (let s = 0; s < Array.length; s++) {
                                                                            for (let t = 0; t < Array.length; t++) {
                                                                                for (let u = 0; u < Array.length; u++) {
                                                                                    for (let v = 0; v < Array.length; v++) {
                                                                                        for (let w = 0; w < Array.length; w++) {
                                                                                            for (let x = 0; x < Array.length; x++) {
                                                                                                for (let y = 0; y < Array.length; y++) {
                                                                                                    for (let z = 0; z < Array.length; z++) {
                                                                                                        // do stuff
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

let length = 9;
while (length < 10) {
    console.log(length);
    length = 10;
}

// letter counter