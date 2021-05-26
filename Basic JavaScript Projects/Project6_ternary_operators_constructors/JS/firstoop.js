function Vehicle(Make, Model, Year, Color) {  //Constructor function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  // Make some instances of Vehicle using Vechicle Function
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Eric = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {  //Function call from HTML returns data
    console.log("made it to myFunction");  //troubleshooting string to console
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Eric drives a " + Eric.Vehicle_Color + "-colored " + Eric.Vehicle_Model +
        " manufactured in " + Eric.Vehicle_Year + ".";  //send data back to html
}