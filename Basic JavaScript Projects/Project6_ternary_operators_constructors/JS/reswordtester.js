
function Employee(FName, LName, Age, for) { //using reserved word as variable
    this.Employee_FName = FName; //
    this.Employee_LName = LName;
    this.Employee_Age = Age;
    this.Employee_Post = for;  // using 'for' as such  is a no-no
}
var Tom = new Employee("Tom", "Brown", 22, "Programmer");  // try to make some instances 
var Janet = new Employee("Janet", "Eastmen", 30, "Sales Manager");
var Robin = new Employee("Robin", "Landis", 32, "VP Marketing");
function GetEmployee() {  //total fail because of use of reserved word 'for' above
    console.log("made it this far");   //moral of the story - don't use reserved words other than intended.
    document.getElementById("New_and_This").innerHTML =
        Robin.Employee_FName + " " + Robin.Employee_LName + " is the "
        + Robin.Employee_Post + " and is " + Robin.Employee_Age +
        " years old.";
}