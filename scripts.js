const passwordLengthInput = document.getElementById('password-length');
const includeLowercase = document.getElementById('include-lowercase');
const includeUppercase = document.getElementById( 'include-uppercase');
const includeNumbers = document.getElementById(' include-numbers');
const includeSpecial = document.getElementById(' include-special');
const generateBtn = document.getElementById(' generate-btn' );
const generatedPasswordInput = document.getElementById( 'generated-password');
const copyBtn = document.getElementById(' copy-btn' );

function generatePassword() {
    const length = parseInt (passwordLengthInput.value);
    const lowercase = 'abedefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
    const numbers = '0123456789';
    const special = '1a#S%*6*()-_=+00|::,.0?/';

    let characterPool = '';

    if (includeLowercase.checked) {
        characterPool += lowercase;
    }
    if (includeUppercase.checked) {
        characterPool += uppercase;
    }
    if (includeNumbers.checked) {
        characterPool += numbers;
    }
    if (includeSpecial.checked) {
        characterPool += special;
    }

    if (characterPool === '') {
        alert ('Выберите хотя бы один тип символов!');
        return;
    }
}


    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math. random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    generatedPasswordInput.value = password; {
}
function copyPassword() {
    generatedPasswordInput.select();
    document.execCommand ('copy');
    alert ('Пароль скопирован в буфер обмена!');
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener ('click', copyPassword);