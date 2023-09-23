document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const btn = document.querySelector('.btn');
    const inputValues = document.querySelectorAll('input');
    const errormsg = document.querySelectorAll('.error');

    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Store the initial input values
    const initialInputValues = Array.from(inputValues).map((input) => input.value);

    btn.addEventListener('click', (event) => {
        event.preventDefault();

        let hasEmptyField = false;

        inputValues.forEach((inputValue, index) => {
            if (inputValue.value.trim() === '') {
                errormsg[index].textContent = 'Field cannot be empty';
                errormsg[index].classList.remove('hidden');
                hasEmptyField = true;
            } else if (inputValue.getAttribute('type') === 'email' && !emailRegex.test(inputValue.value)) {
                errormsg[index].textContent = 'Invalid email format';
                errormsg[index].classList.remove('hidden');
                hasEmptyField = true;
            } else {
                errormsg[index].textContent = '';
                errormsg[index].classList.add('hidden');
            }
        });

        if (!hasEmptyField) {
            form.reset();
        } else {
            // Restore the initial input values for the fields with errors
            inputValues.forEach((input, index) => {
                if (input.value.trim() === '') {
                    input.value = initialInputValues[index];
                }
            });
        }
    });
});
