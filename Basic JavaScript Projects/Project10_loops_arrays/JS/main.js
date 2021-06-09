function call_loop() {  //count to 190
    var i = 0;
    // var n = 0;
    var text_line = ""; //text var to contain numbers
    while (i < 190) {  //while loop counter
        i++;
        text_line = text_line + (i + " ");  // add number with a space to string
    }
    document.getElementById("Loop").innerHTML = text_line;  // displY NUMBERS
    var n = text_line.length; // method to find length of string
    document.getElementById('String_Length').innerHTML = ("# Characgters in above String: " + n);  //display number chars in string
}

function for_Loop() {
    var Instruments = ["Gong", "Tuba", "Violin", "Flute", "Cornet", "Harp", "Bugle", "Drums", "Cymbal"]; //create an array of instruments
    var Inst_List = ""; // text var
    var i;  //counter var
    for (i = 0; i < Instruments.length; i++) {  // stuff each instrument into string with breaks in between
        Inst_List += Instruments[i] + "<br>";
    }
    Inst_List += ("<br>" + i + " Total Instruments");  // display instruments and instrument count
    document.getElementById("List_of_Instruments").innerHTML = Inst_List;
}

function array_Function() {
    var Instruments = ["Gong", "Tuba", "Violin", "Flute", "Cornet", "Harp", "Bugle", "Drums", "Cymbal"];
    Instruments[10] = "Piano";  //add a new instrument to the array
    document.getElementById("Array").innerHTML = "The third & forth instruments are: " + "<br>" + Instruments[2] + "<br>" + Instruments[3];  //display specific instruments by array index
}

var test = "This is a test!";  //
var line1 = "Your motorcycle <br>"
function constant_function() {
    let line1 = "My motorcycle ";  //create an object and assitn values
    const Motor_cycle = { mfg: "Honda", Year: "1996", Disp: "500" };
    Motor_cycle.Disp = "900";
    Motor_cycle.Color = "Red";
    document.getElementById("Constant").innerHTML = line1 + " is a " + Motor_cycle.mfg +  // create a string concatenating object elements
        " is " + Motor_cycle.Color + " and has a " + Motor_cycle.Disp + "cc engine.";
    document.getElementById("Scope_test").innerHTML = test;  //display string
}

function Return_test(x) {  // function calls cube functions which returns cube of argument passed it
    document.getElementById("Cube_return").innerHTML = "The cube of " + x + " is " + cube_function(x);  //display result

    function cube_function(y) { // cube aggument and return result to calling function
        return y * y * y;
    }
}

let motorcycle = {  //create object and assign values
    make: "Honda ",
    model: "CBR-900RR ",
    year: "1996 ",
    color: "red ",
    description: function () {
        return "My bike is a " + this.year + this.color + this.make + this.model;  //concatinate srting from object elements
    }

};
document.getElementById("motorcycle_object").innerHTML = motorcycle.description(); //display result

function generate_odds() {  //generate string of odd numbers using 'continue' to skip even numbers
    var text_line = "";
    var i;
    for (i = 1; i < 40; i++) {
        if (i % 2 == 0) { continue; }  //skip even nums
        text_line += " " + i; //build result string
    }
    document.getElementById("odd_nums").innerHTML = text_line;  //display result
}

function count_up() {
    var x = document.getElementById("count_to").value;  //get user value to caount up to
    var text_line = "";  // initalize result string
    console.log(x); //debug
    for (i = 1; i <= 100; i++) {  // count up loop
        if (i > x) { break; }  //stop if we have reched user input number
        text_line += " " + i;  //build string of number as we count
    }
    document.getElementById("count_limit").innerHTML = text_line;  // display count
}