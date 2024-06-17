let submitButton = document.querySelector("button");

let textInput= document.querySelector(".text");
let numberInput= document.querySelector(".number");
let emailInput= document.querySelector(".email");
let dateInput= document.querySelector(".date");

submitButton.addEventListener("click", function() {
    let text = textInput.value;
    let number = numberInput.value;
    let email = emailInput.value;
    let date = dateInput.value;
    
    // 1. Update the four variables - text, number, email, and date.
    //  - Save the value of the four different inputs.
    //  - Go to the html to use the class names.
    console.log(text, number, email, date);
    


    // DO NOT CHANGE THIS CODE
    let resultsDiv = document.querySelector('#results');
    resultsDiv.innerHTML = "";
    resultsDiv.innerHTML += `<p>Text: ${text}</p>`;
    resultsDiv.innerHTML += `<p>Number: ${number}</p>`;
    resultsDiv.innerHTML += `<p>Email: ${email}</p>`;
    resultsDiv.innerHTML += `<p>Date: ${date}</p>`;

});
