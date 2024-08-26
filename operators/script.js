let agejonas=39;
let ageJhons=27;
console.log(ageJhons>agejonas);
onslotchange.log(idFull);


/* let now=20337;
 */


//operators presedence

let now =2037;
const ageJonas=now-1991;
const agesarah=now-2018;
console.log(now-1991>now-2018);
let x,y;
x=y=25-10-5;


const averageAge=ageJonas+agesarah/2;
console.log(averageAge);


//coding challenge/exercise


//formula:BMI=mass/height**2=mass/(height*height)
//mass inkg and height in meter

const massMark=78;
const heightMark=1.69;

const massJohn=92;
const heightJhon=1.95;

const BMI=massMark/heightMark**2;
const BMIJhon=(heightJhon*heightJhon);

console.log(`BMIMARK:${BMIMark}`);
console.log(`BMIMARK:${BMIJhon}`);

//string and template literals
const firstName="Jonas";
const job="teacher";
/* const birthYear=1991;
 */const Year=2037;

const jonas="I\'m" + firstName + ", a " +(year-birthYear) + "year old working as a " +job + "!";
console.log(jonas);

 const jonas2=`I'am ${firstName} a ${year-birthYear} year old,working as a ${job}`;
console.log(jonas2);


//decision making statements

//if if else nested if else switch case


const age=15;
if(age>=18){
    console.log(`sara can start driving`);
}
else{
    const yearLeaft=18-age;
    console.log(`sara is too young.wait another ${yearLeaft} years!`)
}

//if else example

const birthYear=2012;
if(birthYear<=2000){
    century=20;
}
else{
    century=21;
}
console.log(century);

///////////

const massMark=78;
const heightMark=1.69;

const massJohn=92;
const heightJhon=1.95;
const BMI=massMark/heightMark**2;
const BMIJhon=(heightJhon*heightJhon);
if(BMIMark>BMIJhon){
    console.log(`Mark's BMI(${BMIMark} is not higer than jhons BMI${BMIJhon})`)
}


//type conversion and correction
//type conversion 


const inputYear="1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18 );


console.log(Number("Jonas"));

const jsVersion="1.0";
console.log(Number(jsVersion));

//coercion
console.log(`the js version:${jsVersion}`);
console.log('I am' + 23 +'year old');


let n='1' + 1

//template literals

console.log(`the jsVersion:${jsVersion}`);


////// true and falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(({}));
console.log(Boolean(''));


const money=100;
if(money){
    console.log(`dont spend it all!`);
}
else{
    console.log(`you should get a job!`);
}

let height=0;
if(height){
    console.log('YAY!height id defined')
}

else{
    console.log('height id UNDEFINED!');

}

// equality operators :== vs ===,!= vs !==

const age='18';
if(age === 18) console.log(`you just become adult!:D(strict)`);

const fav=Number(prompt("what id y r fav number"));
console.log(fav);


if(fav===23){
    console.log('cool 23 an amazing number');
}
else if(fav===7){
    console.log('7 is also cool number');
}
else if(fav===9){
    console.log('9 is also cool number');
}

else{
    console.log('number is not eithe 23 or 7 or 9')
}


///// logical operator:&&,||,!
const hasDriverLicence=true;
const hasGoodVision=true;


console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!(hasDriverLicence && hasGoodVision));


if(hasDriverLicence && hasGoodVision){
    console.log('sara able drive')
}
else{
    console.log("some one should drive...");
}

const isTired=false;
console.log(hasDriverLicence && hasGoodVision && isTired);


///switch statement

const day="friday";

switch(day){
    case "monday":
        console.log("plan your trip");
        console.log("go to coding meetup");
        break;

    case "tuesday":
        console.log("prepae theory videos");
        break;

    case "wednesday":
        break;    

}

////statement and exoression

/*3+5;
1991;
true && false && !false;
*/
if(23>19){
    const str ="23 is bigger!";
}

const me="jonas";
console.log(`i'm ${2037-1991} yrs old ${me}`)


///the conditional ternary operator:() ? ...:...;

const age=23;
console.log(age>=18 ? `the age ${age} is greater than 18 :the age ${age} is not greater than 18 `);


const bill=430;
const tip=bill<=300 && bill >=50 ? bill *0.15: bill*0.2;

console.log(`tip:${bill}`);
console.log(`tip:${tip}`);

