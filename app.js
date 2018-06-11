let newNumber = [];

addNumber = () => {
    let i = Math.floor(Math.random()*10);
    console.log(i);
    newNumber.push(i);
}
addNumber();



multiply = () => {
    newNumber *= 4;
    console.log(newNumber)
}

multiply() 

setTimeout(() => {
    multiply();
   }, 2000);


