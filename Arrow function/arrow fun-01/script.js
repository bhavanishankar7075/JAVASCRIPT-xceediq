//// arrow function/////

/* const yearsUntilRetirement=(birthYear,fullName)=>{
    const  age=2037-birthYear;
    const retirement=65-age;
    return `${fullName} retries in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991,'jonas'));
console.log(yearsUntilRetirement(1980,'boby'));
 */





///anonymous function/////
/* const yearsUntilRetirement=function (birthYear,fullName){
    const  age=2037-birthYear;
    const retirement=65-age;
    return `${fullName} retries in ${retirement} years`;


}
console.log(yearsUntilRetirement(1991,'jonas'));
console.log(yearsUntilRetirement(1980,'boby')); */




///function calling with other functions/////

/* function cutFruitePieces(fruit){
    return fruit *4;
}
function fruiteProcessor(apples,oranges){
    const applePieces= cutFruitePieces(apples);
    const orangesPieces=cutFruitePieces(oranges);
    const juice=`juice with ${applePieces} pieces of apple and ${orangesPieces} piece of orange`;
}
console.log(fruiteProcessor(2,3)); */




///reviewing function /////


const calcAge=function (birthYear){
    return 2037-birthYear;
}
const yearsUntilRetirement=function (birthYear,fullName){
    const age=calcAge(birthYear);
    console.timeLog(`age ${age}`);
    const retirement=65-age;
    console.log(`retirement:${retirement}`);
    if (retirement>0){
        return retirement;
    }
    else {
        console.log(`${fullName} retries in ${retirement} yeras`)
        return -1;
    }
}
console.log(yearsUntilRetirement(1991,'jonas'));
console.log(yearsUntilRetirement(1998,'john'));


///



