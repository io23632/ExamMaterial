const result = document.querySelector("#result");

function calculate(){
    result.textContent = ""; // Clear previous results
    for (let i = 1; i <= 9; i++) {
        const newResult = `${i} x ${i} = ${i * i}`;
        result.textContent += `${newResult}\n`;
    }
    result.textContent += "Finished";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (result.textContent = ""));

/*

This code calculates squares for the numbers from 1 to 9, and writes out the result. The core of the code is the for loop that performs the calculation.

Let's break down the for (let i = 1; i < 10; i++) line into its three pieces:

let i = 1: the counter variable, i, starts at 1. Note that we have to use let for the counter, because we're reassigning it each time we go round the loop.
i < 10: keep going round the loop for as long as i is smaller than 10.
i++: add one to i each time round the loop.
Inside the loop, we calculate the square of the current value of i, that is: i * i. We create a string expressing the calculation we made and the result, and add this string to the output text. We also add \n, so the next string we add will begin on a new line. So:

1.During the first run, i = 1, so we will add 1 x 1 = 1.
2.During the second run, i = 2, so we will add 2 x 2 = 4.
3.And so on…
4.When i becomes equal to 10 we will stop running the loop and move straight to the next bit of code below the loop, printing out the Finished! message on a new line.


*/