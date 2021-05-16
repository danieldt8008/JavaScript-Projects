function prodFunction(x, y) {   //name and define a function
    var result = x * y; //calculation
    result += " is the procuct of  4 * 5"; //Concatinate the product wiht a string
    document.getElementById("prod").innerHTML = result;  //HTML element gets result of calculation
}