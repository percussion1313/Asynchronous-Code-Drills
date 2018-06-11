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



countdown = (num, callback) => {
    for (n = num; num > 0; num--) {
        console.log(num)
    }
    return callback();
}

done = () => {
    console.log('DONE')
}

countdown(10, done)
