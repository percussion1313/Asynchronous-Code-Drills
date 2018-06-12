//Async
/*let newNumber = [];

addNumber = () => {
    let i = Math.floor(Math.random() * 10);
    console.log(i);
    newNumber.push(i);
}
addNumber();



multiply = () => {
    newNumber *= 4;
    console.log(newNumber)
}

setTimeout(() => {
    multiply();
}, 2000);

//Callbacks
//Word 3 and 2 will be last due to setTimeout();
getWords = () => {
    console.log('Word 1');
    setTimeout(() => {
        console.log('Word 2');
    }, 2000);
    setTimeout(() => {
        console.log('Word 3');
    }, 1000);
    console.log('Word 4');
}

getWords();*/



/*countdown = (num, callback) => {
    setTimeout(function () {
        console.log(num);
        num--
        if (num === 0) {
            return callback();
        }
    }, 1000);
}

done = () => {
    console.log('DONE')
}

countdown(10, done)*/

//Promises
globalVar = true;
err = 'This did not work correctly';

orderChickenSandwich = () => {
    return new Promise((resolve, reject) => {
        let newFood = {
            sandwich: 'chicken',
            veggies: 'lettuce'
        }
        if (globalVar === true) {
            resolve(newFood);
        }
        else {
            reject(err)
        }
    }
    );
}



let orderFood = () => orderChickenSandwich().then(function (resolve) {
    console.log(resolve)
}, (err) => {
    console.log(err);
})

orderFood();