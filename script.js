// String

// Nubmer

// Boolean

// Array

// Object

// Function

// Null

// Undefined

// NaN

/* Variables */
// let, const

/*
let variable = 'string'
variable = 'none'

const a = 1;
const b = 5;

let result;

 const name = 'Игнат';
const isBalcon = false;
const isRoom = false;
const isKitchen = false;

if (isBalcon) {
    result = name + ' поссал на балконе'
} else if (isRoom) {
    result = name + ' поссал в комнате'
} else if (isKitchen) {
    result = name + ' поссал на кухне'
} else {
    result = name + ' нигде не ссал'
}
*/

/*
const name = prompt('Как тебя зовут?')
const year = prompt('В каком году ты родился?')
const date = new Date()
const currentYear = date.getFullYear()
const money = prompt('Сколько ты зарабатываешь в месяц?')
const age = currentYear - year
const cost = money * 12

alert(`Тебя зовут: ${name}. Тебе ${age}. В год ты зарабатываешь ${cost}`)
*/

function minus(a, b) {
    return a - b
}

function getMoney(money) {
    return money * 12
}

const people = {
    name: '',
    age: null,
    money: null
};

const peoples = [];

function submitHandler(event) {
    event.preventDefault()
    
    const form = event.currentTarget;
    const place = document.getElementById('getPeople')
    const alertMsg = document.querySelector('.alert')
    const date = new Date();
    let html = '';
    let error = false

    Array.from(form.querySelectorAll('input')).forEach(function (input) {
        if (input.value !== '') {
            if (input.getAttribute('name') === 'name') {
                people.name = input.value
            }
            if (input.getAttribute('name') === 'year') {
                people.age = minus(date.getFullYear(), input.value)
            }
            if (input.getAttribute('name') === 'money') {
                people.money = getMoney(input.value)
            }
        } else {
            error = true
            return;
        }

        input.value = ''
    })

    if (error) {
        alert('Заполните поля!')
        return;
    }

    peoples.push({
        name: people.name,
        age: people.age,
        money: people.money
    });

    peoples.forEach(function (people) {
        html += `
        <ul>
            <li><strong>Имя:</strong> ${people.name}</li>
            <li><strong>Возвраст:</strong> ${people.age}</li>
            <li><strong>В год:</strong> ${people.money}</li>
        </ul>
        `
    })

    place.innerHTML = html

    alertMsg.style.visibility = 'visible';
    alertMsg.style.opacity = '1';
    setTimeout(function() {
        alertMsg.style.visibility = 'hidden';
        alertMsg.style.opacity = '0';
    }, 2500)
}