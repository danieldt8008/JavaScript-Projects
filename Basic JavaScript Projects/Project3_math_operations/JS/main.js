function sum_function(x, y) {   //name and define a function
    var answer = x + y; //calculation
   var result = "The sum of 122 + 456 is " + answer; //Concatinate string with sum
    document.getElementById("math").innerHTML = result;  //HTML element gets result of calculation
}
 
function subtraction_function() {   //name and define a function
    var difference = 456 - 123; //advanced math calculation
   var return_string = "The difference of 456 - 123 is " + difference; //Concatinate string wiht difference
    document.getElementById("subtract").innerHTML = return_string;  //HTML element gets result of calculation
}

function multiply_function() {   //name and define a function
    var prod = 456 * 123; //do the math
   var prod_string = "The product of 456 * 123 is " + prod; //Concatinate string with product
    document.getElementById("multiply").innerHTML = prod_string;  //HTML element gets result of calculation
}

function division_function() {   //name and define a function
    var quot = 456 / 123; //figger out that quotient
   var div_string = "The quotient of 456 / 123 is " + quot; //Concatinate string with quotient
    document.getElementById("divide").innerHTML = div_string;  //HTML element gets result of calculation
} 

function circle_area(radius) {  //name and define a function
    var cir_area = Math.PI * radius * radius;  //calculate the area of a cricle
    var area_string = "The area of a circle of radius 123 is " + cir_area; //Concatinate string wiht area
    document.getElementById("area").innerHTML = area_string;  //HTML element gets result of calculation
}

function misc_math() {  //name and define a function
    var x = 23 * 456 / 789 + 246 - 135;  // do some random mixed up math
    var math_string = "123 * 456 / 789 + 246 - 135 = " + x; //Concatinate string with random math result
    document.getElementById("misc").innerHTML = math_string;  //HTML element gets result of calculation
}

function modu_math() {   //name and define a function
    var mod = 456 % 123;  //remainder calc
    var mod_string = "The remainder of 456 / 123 is: " + mod; //Concatinate string with remainder
    document.getElementById("modulu").innerHTML = mod_string;  //HTML element gets result of calculation
}

function neg_math() {   //name and define a function
    var x = 123; //assign value
    y = -x; //unary operator to made it neg
    var neg_string = "The negative of 123 is: " + y; //Concatinate string wiht neg
    document.getElementById("negative").innerHTML = neg_string;  //HTML element gets result of calculation
}

function incdec_math() {   //name and define a function
    var x = 99; //
    var y = 10000;  //
    x++;  //increment x
    y--;  //decrement y
    var incdec_string = "Incrementing 99 and decrementing 10000 : " + x + " and " + y; //Concatinate string with results
    document.getElementById("incdec").innerHTML = incdec_string;  //HTML element gets result of calculation
}

function rand_math() {    //name and define a function
    var x = (Math.random() * 1000);  //generate a ramdom number 0 - 1000
    var rand_string = "A random between 0 and 1000 is: " + x; //Concatinate string wiht Mr Random
    document.getElementById("rand").innerHTML = rand_string;  //HTML element gets result of calculation
}