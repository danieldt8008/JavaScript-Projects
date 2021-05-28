function Concat_function() {  // string functions

    var Reply;
    var d = new Date();  // get the date/time using the Date method
    console.log(d); //debug
    console.log(typeof d);  //debug
    //document.getElementById("String_one").innerHTML = d;
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];  // array of month strings
    var month = months[d.getMonth()];  //extract the current month based on month number from Date() method
    console.log(month);  //debug
    var text1 = "This is the month of ";
    var text2 = "."
    var date_string = text1.concat(month, text2);  //put together a string using the concatination method that contains the current month
    document.getElementById("String_one").innerHTML = date_string; // display the string
    var date_line = d.toDateString().slice(0, 4);  //pull the date out d object as a string then slice out the day as text
    document.getElementById("Slice_one").innerHTML = "Today is: " + date_line;
    var upper_Date = date_line.toUpperCase();  //convert day name string to uppercase
    document.getElementById("Upper_one").innerHTML = "In caps TODAY IS: " + upper_Date;  //display
    var alphabet = "abcdefghijklmnopqrstubwxyz"  //le alphabet
    var loc = alphabet.search("t");  //find the locaton of the letter "t"
    document.getElementById("Srch_loc").innerHTML = "t is the " + (loc + 1) + "th letter in the alphabet"; //display the locatoin of the letter t (add one as we start at 0)
    var pi = 3.14159265359;  // pi 
    var str_pi = pi.toString();  // convvert num to string
    document.getElementById("Num_to_str").innerHTML = str_pi + " has a fractional prt of: ." + str_pi.slice(2, 9); //convert number to string then use slice method to slice out a chunk
    document.getElementById("precision").innerHTML = "Pi to 4 decimal places is: " + pi.toPrecision(5);  //use precisaion method to truncate Pi
    document.getElementById("Num_to_fixed").innerHTML = " Pi to 6 decimal places: " + pi.toFixed(6); // use toFixed method
    const stringObj = new String("stringer");  //create an object
    console.log(stringObj);  //display it in on the colsole
    console.log(typeof stringObj);  //display the type on the console
    console.log(stringObj.valueOf());  // make primitive value of object
    console.log(typeof stringObj.valueOf());  //display type of primitive mmmmmmmmmmm very intersting!! 
}
