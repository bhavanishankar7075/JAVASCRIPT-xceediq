/* let person={
    name:"bhavani shankar",
    age:28,
    city:"vijayawada",
    
};
console.log(person); */



/////array with access names

/* let person={
    name:"bhavani shankar",
    age:28,
    city:"vijayawada",
    
};
console.log(person.name);
console.log(person['age']);


///vaiable as a key

let key="name";
console.log(person.key)
console.log(person[key1]) */


//object destructuring

/* let person={
    name:"bhavani shankar",
    age:28,
    city:"vijayawada",
    
};
let {name,age,city}=person;
console.log(name);
console.log(age); */

///update object proprties

let person={
    name:"bhavani shankar",
    age:28,
    city:"vijayawada",
    habits:["playing chess","singing"]

    car:{
        name:"audi";
    }








    run:function(){
        console.log("start running")
    }
   
};
person.run();
console.log(person.name);
console.log(person['habits']);
person.gender="Male";
person.name="abhi";
console.log(person);
























 /*console.log(person.habits);
person.name="prbhas";
person.gender="male";
console.log(person.name);
console.log(person.age);
console.log(person); */





