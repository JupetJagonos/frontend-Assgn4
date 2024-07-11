
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');
    const headerWelcome = document.getElementById('welcome');
    const result = document.getElementById('result');

        // Add submit event listener to the form
        form.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();

            // Get the values of the Form
            const firstNameValue = document.getElementById('in_fName').value;
            const lastNameValue = document.getElementById('in_lName').value;
            const humberIdValue = document.getElementById('in_id').value;
            

            // Get the label (text) of the selected option
            const programSelect = document.getElementById('in_program');
            const selectedOption = programSelect.options[programSelect.selectedIndex];
            const selectedOptionLabel = selectedOption.textContent;

            // For the Radio Button
            const fieldset = document.getElementById('caption_project');
            // Find all radio buttons within the fieldset
            const radioButtons = fieldset.querySelectorAll('input[type="radio"]');
            let selectedValue = '';
            // Loop through each radio button
            radioButtons.forEach(function(radio) {
                // Check if the radio button is checked
                if (radio.checked) {

                    selectedValue = radio.value;
                }
            });

            if(selectedValue === ''){
                fieldset.style.background = 'red';
                return;
            }

        // Get the value of the input field with id="in_id"
        const idInput = document.getElementById('in_id');
        const idValue = idInput.value.trim();

        // Define the regex pattern for validation (case insensitive)
        const idPattern = /^[Nn]\d{8}$/;

        // Check if the input value matches the pattern
        if (!idPattern.test(idValue)) {
            // If it doesn't match, prevent form submission
            event.preventDefault();
            // Optionally, display an error message or alert
            alert('Humber ID must start with "N" or "n" followed by 8 digits.');
            // Optionally, focus on the input field for correction
            idInput.focus();

        }


            const result__Fname = document.getElementById('result__Fname');
            const result__Lname = document.getElementById('result__Lname');
            const result__id = document.getElementById('result__id');
            const result__program = document.getElementById('result__program');
            const result__project = document.getElementById('result__project');

            //Assigning Values for Result Display
            result__Fname.textContent = firstNameValue;
            result__Lname.textContent = lastNameValue;
            result__id.textContent = humberIdValue;
            result__program.textContent = selectedOptionLabel;
            result__project.textContent = selectedValue;


            headerWelcome.style.display = 'none';
            form.style.display = 'none';
            result.style.display = 'block';


        });
    

    
});