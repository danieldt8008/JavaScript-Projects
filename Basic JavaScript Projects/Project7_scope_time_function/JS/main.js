var xglobal = 100;
function Scope_Test1() {  // Testing scope of vars
    var ylocal = 50;  //add local to global var - all good
    document.write(xglobal + ylocal + " see error message in: Console");
}
function Scope_Test2() {  // Testing scope of vars
    //  var ylocal = 250;
    document.write(xglobal + ylocal + "<br>"); //add global to "non-local" out-of-scope var = no workie
    console.log(xglobal, ylocal);  // see error in console "Uncaught reference error ylocal not defined"
}
function test_if() {  //send greeting dependgin on hour of the day
    var Hour = 0;
    Hour = (new Date().getHours());  //method to get hour of day
    console.log(Hour); //debug
    if ((Hour >= 7) && (Hour <= 11)) {
        document.getElementById("If_Test").innerHTML = "Good Morning!";  //send result to html
    }
    if ((Hour >= 12) && (Hour <= 16)) {
        console.log("afternoon"); // debug
        document.getElementById("If_Test").innerHTML = "Good Afternoon!";  //send result to html
    }
    if ((Hour >= 17) && (Hour <= 22)) {
        document.getElementById("If_Test").innerHTML = "Good Evening!";  //send result to html
    }
    if ((Hour >= 23) && (Hour <= 6)) {
        document.getElementById("If_Test").innerHTML = "Zzzzzzzzzzzzzzz";  //send result to html
    }
}

function test_rand() {  // random number generator 
    var x = 0;
    x = Math.floor((Math.random() * 100) + 1);  //generate a random whole number between 1 and 100
    console.log(x);  // debug
    if (x >= 50) {  // is the random number >= 50 or no
        document.getElementById("Rand_Num").innerHTML = "Your Random Number:" + x + " is greater than or equal to 50"; // test num and return 
    } else {
        document.getElementById("Rand_Num").innerHTML = "Your Random Number:" + x + " is less than 50"; // test num and return 
    }
}
function Num_Function() { //Generate a random number between 1 and 10 and have user try to guess that number
    var x = 0;
    var Number = 0;
    console.log(x, Number);  // debug
    Number = document.getElementById("Numb").value;  //get guess from user *** "value" must be lowercase!!!
    x = Math.floor((Math.random() * 10) + 1);  // generate a random # 1 - 10
    console.log(x, Number);  // debug
    if (Number == x) {  //if user guesses correctly: 
        document.getElementById("Num_Guess").innerHTML = "Congradulations!! You are correct!!!";
    } else {  // user guesses incorrecly 
        document.getElementById("Num_Guess").innerHTML = "That was not the number, it was:" + x;
    }
}

function Time_function() {  // display greeting based on time of day  (didn't I just do this??)
    var Time = new Date().getHours();  //get hour of the day 
    var Reply;  // variable
    console.log(Time);  // debug
    if (Time < 12 == Time > 0) {  //Clever way to do an "AND" more or less; both are never false at once
        Reply = "It is Morning time!";
    } else if (Time >= 12 == Time < 18) {    // If both true == will be true 
        Reply = "It is afternoon";
    } else {  //all other times
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;  //greeting to user
}
