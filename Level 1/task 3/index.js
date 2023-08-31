document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById('inputbox');
    let buttons = document.querySelectorAll('button');
    let string = '';
    let arr = Array.from(buttons);

    arr.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.textContent;

            if (buttonText === '=') {
                try {
                    string = eval(string);
                    if (string === Infinity) {
                        input.value = 'Infinity';
                    } else {
                        input.value = string;
                    }
                    string = '';
                } catch (error) {
                    input.value = 'Error';
                    string = '';
                }
            } else if (buttonText === 'C') {
                string = '';
                input.value = '';
            } else if (buttonText === 'DEL') {
                string = string.slice(0, -1);
                input.value = string;
            } else {
                string += buttonText;
                input.value = string;
            }
        });
    });
});
