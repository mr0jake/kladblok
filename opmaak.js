// alert("this  is een alertbox!!")


var user = prompt("Please enter your name");
//alert(user);

// var age = prompt ("please enter your age");

// if (isNaN(age) == false ){
// 	var color = prompt ("please give me your favorite color");
// } else {
// 	var age = prompt ("please enter your age");	

// }

var age = "";
while (isNaN(age) == true || age == ""){
	age = prompt("please enter your age");
}

var color = prompt("please give me your favorite color");

 
function hallo(name, age, color){
 alert ("Hi, " + name +" nice to know that you're " + age + " years old.\n"+"Now i know that you like the color "+color+"\nWelkom to my site. \n" + "Click to continue" );
	// body...
}

hallo(user, age, color);

var person = {
 name: user, age: age, 
 favColor: color, height: 199
};


var x = person.name;
var y = person.age;
var q = person.color;

document.write ("visitor name: "+ x + "<br/> age: "+y)

document.write("<br>")

function peeps(vis, num, color) {
    this.vis = vis;
    this.num = num;
    this.favColor = color;
    this.yearOfBirth = bornYear;
}
function bornYear() {
    return 2017 - this.num;
}

var p = new peeps("A", age);
var user = new peeps(user, age, color);
// var p2 = new peeps("Amy", 21, "red");

document.write("<br>")
document.write(p.yearOfBirth());
document.write("\n")
document.write(user.vis);
document.write("\n")
document.write(user.num);
document.write("\n")
document.write(user.favColor);
document.write("\n")


/* var result = confirm("Do you really want to leave this page?");
if (result == true) {
  alert("Thanks for visiting");
}
else {
  alert("Thanks for staying with us");
}

//dlkjds

// hallo("wander");

function sayHello(name) {
   alert("Hi, " + name);
}

sayHello("David");
//Alerts "Hi, David" */