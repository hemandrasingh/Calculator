let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;
        
        if (buttonText === '=') {
            try {
                input.value = eval(input.value); // Evaluate the expression
            } catch (error) {
                input.value = 'Error'; // Display 'Error' if evaluation fails
            }
        } else if (buttonText === 'AC') {
            input.value = ''; // Clear the input box
        } else if (buttonText === 'DEL') {
            input.value = input.value.slice(0, -1); // Delete the last character
        } else {
            input.value += buttonText; // Append the button text to the input box
        }
    });
});
