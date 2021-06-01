// function countdown() {
//     var seconds = document.getElementById("seconds").value;

//     function tick() {
//         seconds = seconds - 1;
//         timer.innerHTML = seconds;
//         setTimeout(tick, 1000);
//         if (seconds == -1) {
//             alert("Time's up!");
//         }
//     }
//     tick();
// }

function countdown() {
    var seconds = document.getElementById("seconds").value;  //Get timer seconds from user
    const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay)) //use the setTimeout Method and Promise obj to create delay
    document.getElementById("outoftime").innerHTML = "Timer";  //Place holcer for time status
    async function theLoop() {  //theLoop returns a promise
        for (let i = 1; i <= seconds; i++) {  // count up to number os seconds input my user
            await sleepNow(1000)  //wait for the 1000 ms prmoise
            console.log(i)  //debug
            timer.innerHTML = i;  //show user seconds count
            if (i == seconds) {  //have we timed out?
                console.log(i);  //debug
                document.getElementById("outoftime").innerHTML = "Time is up!";  //tell user timeout reached
            }
        }
    }
    theLoop()
}
