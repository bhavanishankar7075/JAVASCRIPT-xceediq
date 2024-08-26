// intro to array

const friend1="bhavani";
const friend2="shankar";
const friend3="virat";


const friends=["bhavani","shankar",28,20,"virat kohli"];
console.log(friends);
console.log(friends[1]);
console.log(friends.lastIndexOf("peter"));
console.log(friends.length-1);


friends[3]="bob";
friends[4]="alice";
console.log(friends);


let firstNmae="jonas";
const jonas=["firstName","bhavani",2037-1991,"teacher".friends];
console.log(jonas[3][4]);

///coding exercise
const calAge=function (birthYear){
    return 2037-birthYear;
}
const years=[1990,1997,2002,2010,2018];
const age1=calcAge(years[0]);

const ages=[
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[2]),
    calcAge(years[3])
];
console.log(ages);

///////
//basic array operations (mrthods)

const friends=["prbhas","kohli","rohit"];
console.log(friends);

//add elements

const newLength=friends.push("ajay");
/// remove elements
friends.pop();
console.log(friends);



friends.unshift('bob',"mike");
friends.log(friends);


friends.shift();
console.log(friends);

console.log(friends.includes("bob"));

if(friends.includes("mike")){
    console.log("yes bob included");
}

/////coding exercise


const calcTip=function(bill){
    return bill>=50&& bill<=300 ? bill *0.15:bill*0.2
}
const bills=[125,55,44];
console.log(bills);

const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
console.log(tips);

const totals=[bills[0] + tips[0], bills[1], bills[2],bills[3]];
console.log(totals);



