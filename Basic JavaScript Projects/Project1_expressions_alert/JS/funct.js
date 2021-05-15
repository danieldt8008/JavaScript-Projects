function My_First_Function() {   //name and define a function
    var str = "Some RED Text";   //define a var and assign a string
    var result = str.fontcolor("red");  //fontcolor method on variable srt
    document.getElementById("Red_Text").innerHTML = result;  //HTML element gets result value with id of "Red_Text"
}