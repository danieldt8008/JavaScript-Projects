// let's see if you can legally vote!
function votecheck_function() {  //Check age for ok to vote
    var Age, OkToVote;  //Some variables
    Age = document.getElementById("Age").value;   //Get the users age
    console.log(Age);  //write to the cosole for debugging
    OkToVote = (Age > 17) ? "!" : " when 18 years old.";  //tritary operation
    document.getElementById("Vote").innerHTML = "You can vote" + OkToVote; //compose answer and write to html file
    console.log(Age);   //write to the cosole for debugging
    console.log(OkToVote);   //write to the cosole for debugging
}