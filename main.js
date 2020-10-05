//// IF - Else statements , old enough or not



var gender = "male";
var age = 19;

if (gender === "male")
{
    if (age > 20){
        console.log(`You are a ${gender} and old enough.`)
    }
    else{
        console.log("You not old enough")
    }
}

if (gender==="female"){
    if (age > 20){
        console.log(`You are a ${gender} and old enough.`)
    }
    else{
        console.log("You not old enough")
    }
}



// IF - Else statements with different operators  && || 


var x = 20;
var y = 50;

if (x===10 ){
    console.log("IF, in line1 is truthy!")
}else
    {
        (console.log("Else statement, truthy"))
    }



if (x===20 && y<100 ){
    console.log("IF, line 2, statement is truthy!")
}
else{
    console.log("ELse truthy and if statement falsy")
}


if (x===10 || y<10 ){
    console.log("IF,in line 3 is truthy!")
}else{
    console.log("Else truthy ")
}



// Switch, less if statements, is that donald?
var cartooncharacter = "Donald Duck" ;

switch (cartooncharacter) {
    case "Mickey Mouse":
        console.log("Its mickey mouse ")
        break;

    case "Simpson":
        console.log("Its simpson")
        break;

    case "family guy":
        console.log("Its family guy")

    case "Donald Duck":
        console.log("Its Donald Duck")
}













/////LOOPS ITERATIONS



/// Array
const names = ["Smári", "Pedro", "Jonni", "Sesar", "Harry"];


//Console logs all the names in the list with for loop
for(name of names){
    console.log(name);
}

//Console logs all the names with template literal and placeholders

for(name of names){
console.log(` This is all the names :  ${names}`);
}


//Check for Sesar if hes there, then console logs "YESS he´s on the list"
for(name of names){
if (name === "Sesar"){
    console.log( "YESS he´s on the list");

}




}

for(name of names)
{

    console.log(name);
    if (name === "Pedro")
    {
        console.log( "YESS he´s on the list, and the list stops, by his name with (break)!");
        //breaks the loop or stops the name Pedro
        break;
    }
}





//while , loads 100times until it stops.

let loading = 0;


while(loading < 100) 
{
    console.log("website is still loading");

    loading++;
}











//Iterate


//console log it adds one after each for loop, until it stops at less then 16
var tala;
for ( tala = 0; tala < 16; tala++){
    console.log (tala);

}



//Console logging all the Actor from the Array


var actors = [
    "John travolta",
    "Leonardo di caprio",
    "Brad Pitt",
    "Arnold S.",
    "George Clooney",
    "Johnny Depp",
    "Jaret Leto",
    "Jonah Hill",
    "Mark Wahlberg",
    "Denzel Washington",

];

for (i = 0; i < actors.length; i++){
    console.log(actors[i]);

}




// FOR IN -loop for objects,   (console login the values in the objects)

var capitals = { "Iceland" :"Reykjavik", "Holland" : "Amsterdam", "Germany": "Berlin", "Belgium" : "Brussel" };

for (let banana in capitals ){

    console.log("In", banana, "we have", capitals[banana]);

}