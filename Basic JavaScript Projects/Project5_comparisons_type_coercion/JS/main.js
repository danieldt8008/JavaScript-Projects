document.write("100" + 8 + "<br>"); //concatinate string and number Coercion

document.write(typeof "String" + "<br>"); //use typeof on string
document.write(typeof 8 + "<br>");  //typeof on number
var x = 123.123;  //assign x a number
document.write(typeof x + "<br>"); //type of on numberical variable
document.write(isNaN('hello') + " : Test isNaN on string<br>");  //use isNaN (is Not a Number) on a string
document.write(isNaN("44") + " : Test isNan on a number<br>");  //use isNaN on a number
function first_function() {   // function to test NaN
    document.getElementById("Test").innerHTML = 0 / 0;  //calculate 0/0 and get NaN
}
document.write(1.8E319 + "<br>"); //text of infinity
document.write(-1.8E319 + "<br>");  // test of -infinity

document.write((22.4 > 22.3) + "<br>");  //locgical operator
document.write((22.4 < 22.3) + "<br>");   // ditto
console.log(123 * 456);  //shows in console 
console.log(10 > 400);  //ditto
document.write("using the ==  <br>")  //little data for outout
var a = 9;  //assign  a number
document.write(a == a);  // testing the == operator
document.write("<br>");
document.write(a == 7);   // testing the == operator
document.write("<br>");
document.write("Demo of ===" + "<br>");  // testing the === operator
document.write(("zzz" === 'zzz') + "<br>");    // testing the == operator
document.write(("zzz" === 7) + "<br>");    // testing the == operator
document.write(('7' === 7) + "<br>");    // testing the == operator
document.write(("zzz" === 'xxx') + "<br>");   // testing the == operator
document.write("Demo of  && ||" + "<br>");   // testing the "and" and "or"
x = 10;      //assign a numbers
var y = 10;    //assign a numbers
var z = 10;     //assign a numbers
document.write(((x == y) && (y == z)) + "<br>");  // test the "and" logical operator
x = 5;    //assign a numbers
document.write(((x == y) && (y == z)) + "<br>");  // test the "and" logical operator
document.write(((x == y) || (y == z)) + "<br>");  // test the "or" logical operator
z = 7;     //assign z numbers
document.write(((x == y) || (y == z)) + "<br>");  // test the "of" logical operator
document.write("Demo of the NOT (!) operator" + "<br>");   // test the "not" logical operator
document.write(!((x == y) || (y == z)) + "<br>");   // test the "not" logical operator
document.write(!("True" && "True"));    // test the "not" logical operator
//  conrtol  /   will set up comment






