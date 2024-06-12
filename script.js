const input_box = document.getElementById("password");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const specialcharacters = document.getElementById("specialcharacters");
const copy_button = document.getElementById("copy");
const length_number= document.getElementById("number-length");

const lowercase_letters = "abcdefghijklmnopqrstuvwxyz";
const uppercase_letters = lowercase_letters.toUpperCase();
const symbols = "~!`@#$%^&*_-=+/?><.,|";

function generate_password() {
    let password_array = [];

    const useUppercase = uppercase.checked;
    const useLowercase = lowercase.checked;
    const useSymbols = specialcharacters.checked;

    if (!useUppercase && !useLowercase && !useSymbols) {
        for (let i = 0; i < length_number.value; i++) {
            const number = Math.floor(Math.random() * 10);
            password_array.push(number);
        }
    } else {
        if (useUppercase) {
            const uppercase_idx = Math.floor(Math.random() * uppercase_letters.length);
            password_array.push(uppercase_letters[uppercase_idx]);
        }
        if (useLowercase) {
            const lowercase_idx = Math.floor(Math.random() * lowercase_letters.length);
            password_array.push(lowercase_letters[lowercase_idx]);
        }
        if (useSymbols) {
            const symbols_idx = Math.floor(Math.random() * symbols.length);
            password_array.push(symbols[symbols_idx]);
        }

        while (password_array.length < length_number.value) {
            if (password_array.length < length_number.value) {
                const number = Math.floor(Math.random() * 10);
                password_array.push(number);
            } 
            if (useUppercase && password_array.length < length_number.value) {
                const uppercase_idx = Math.floor(Math.random() * uppercase_letters.length);
                password_array.push(uppercase_letters[uppercase_idx]);
            }
            if (useLowercase && password_array.length < length_number.value) {
                const lowercase_idx = Math.floor(Math.random() * lowercase_letters.length);
                password_array.push(lowercase_letters[lowercase_idx]);
            }
            if (useSymbols && password_array.length < length_number.value) {
                const symbols_idx = Math.floor(Math.random() * symbols.length);
                password_array.push(symbols[symbols_idx]);
            }
        }
    }

    password_array.sort(() => Math.random() - 0.5);
    input_box.value = password_array.join('');
}

copy_button.addEventListener('click', function() {
    const temp_input = document.createElement("textarea");
    temp_input.value = input_box.value;
    document.body.appendChild(temp_input);

    temp_input.select();
    document.execCommand("copy");

    document.body.removeChild(temp_input);

    const notification = document.getElementById("pop_up");
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
});

function next(){
    if (length_number.value < 15){
        const next_number= Number(length_number.value)+1
        length_number.value=next_number
    }
}

function previous(){
    if (length_number.value > 6){
        const next_number= Number(length_number.value)-1
        length_number.value=next_number
    }
}