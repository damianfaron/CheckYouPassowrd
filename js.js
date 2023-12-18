const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;


const showPasswor = () => {
    if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(special) && pass.value.match(numbers)) {
        p.textContent = 'Masz świetne hasło'
        p.style.color = 'green'
    } else if (
        pass.value.length > minValue && pass.value.match(letters)  && pass.value.match(numbers)
    ) {
        p.textContent = 'Dobre hasło'
        p.style.color = 'gold'
    } else  {
        p.textContent = 'Słabe hasło'
        p.style.color = 'red'
    }
    
}

const checkPassword = () => {
    if (pass.value !== '') {
        showPasswor()
    } else {
        p.textContent = 'Nie podałeś hasła'
        p.style.color= ''
    }
}

pass.addEventListener('keyup', checkPassword)