
function Employee(FName, LName, Age, Post) {  //Constructor for Employee
    this.Employee_FName = FName;
    this.Employee_LName = LName;
    this.Employee_Age = Age;
    this.Employee_Post = Post;
}
var Tom = new Employee("Tom", "Brown", 22, "Programmer"); // make some instances of above function
var Janet = new Employee("Janet", "Eastmen", 30, "Sales Manager");
var Robin = new Employee("Robin", "Landis", 32, "VP Marketing");
function GetEmployee() {  //compose and send an Employee instance
    console.log("made it this far");  // Debug data to console
    document.getElementById("New_and_This").innerHTML =   // cancatenate string result & send to html
        Robin.Employee_FName + " " + Robin.Employee_LName + " is the "
        + Robin.Employee_Post + " and is " + Robin.Employee_Age +
        " years old.";
}

function Add_One() {  //nexted funciton sample
    var counter = 0;
    function Increment() {  //add 1 to var counter
        counter += 1;
    }
    Increment();  // call nested function
    document.getElementById("Nested_Function").innerHTML = counter;  //send result to html
}

