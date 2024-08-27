///INTRODUCTION TO OBJECTS

const jonasArray=[
    "jonas",
    "shankar",
    2037-1991,
    "Teacher",
    ["Micheal","peter","steven"]
];

console.log(jonasArray);
console.log(typeof(jonasArray));

///declaring an object (literal)
const Array={
    name:"bhavani shankar",
    age:22,
    city:"vizag",
    job:"software engineer",
    friends:["virat","kohli","rohit"]
}
console.log(Array);
console.log(typeof(Array));


///////////Accessing Properties
////Dot vs Bracket


///////Dot///
console.log(Array.name);
console.log(Array.city);


///////Bracket///////

console.log(Array['name']);
console.log(Array['age','job']);


const key="Nmae";
console.log(Array["name" + key]);

const interstedIn=prompt("what do you want to know jonas?\n\ 1.choose among: \n\ 1.name \n\ 2.city");
if(Array[interstedIn]){
    console.log(Array[interstedIn])
}
else{
    console.log("invali request")
}

///////////////   Adding the properties to the objects
//// Dot & Bracket

Array.location="srikakulam";
Array['website']="http://www.google.com";
console.log(Array.location);
console.log(Array['website']);

