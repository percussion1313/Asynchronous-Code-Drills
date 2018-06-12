//Async
let newNumber = [];

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

getWords();




function countdown(num,callback) {

    var countdownTimer = setInterval(function() {
        console.log(num);
        num--
        if (num <= 0) {
            clearInterval(countdownTimer);
            return callback();
        }
    }, 1000);
}

done = () => {
    setTimeout(() => {
        console.log('Done')
    }, 1000) 
}

countdown(10, done); 

//Promises
globalVar = true;
err = 'This did not work correctly';

orderChickenSandwich = () => {
    return new Promise((resolve, reject) => {
        if (globalVar === true) {
            let newFood = {
                sandwich: 'chicken',
                veggies: 'lettuce'
            }
            resolve(newFood);
        } else {
            reject(err)
        }
    }
    );
}



let orderFood =  orderChickenSandwich();

orderFood.then(function (resolve) {
    console.log(resolve)
}, (err) => {
    console.log(err);
})

//Promise Chaining

let num = 1

let newResult = function () {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(num), 2000);
    }).then((result) => {
        console.log(result);
        return result * 2;
    }).then((result) => {
        setTimeout(() => console.log(result), 2000);
        return result * 4;
    }).then((result) => {
        setTimeout(() => console.log(result), 4000);
        return result * 6;
    }).then((result) => {
        setTimeout(() => console.log(result), 6000);
    });
}

newResult()