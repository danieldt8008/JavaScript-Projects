function make_dictionary() {   //name and define a function
    var Module1624 = {  //define a set of Key Value Pairs
        Name: "Memory Module 16K",
        Weight: 12,
        Cost: "$1,124.00",
        Cost: "$21.00",  //duplicate KVP takes on second value
        Stock: 342,
        Location: "B12.4"
    };
    delete Module1624.Cost; //delete of the KVPs
    document.getElementById("Dictionary").innerHTML = Module1624.Cost;  //print the deleted KVP and get "undefined"
}