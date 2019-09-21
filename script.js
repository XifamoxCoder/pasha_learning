// String

// Number

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
*/
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

function sum(a, b) {
    return a + b;
}

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


class Calculator {

    constructor(selector, operation, fieldsCount) {
        this.selector = selector
        this.operation = operation
        this.fields = fieldsCount
    }

    plus(a, b) {
        return a + b
    }

    minus(a, b) {
        return a - b
    }
    
    delenie(a, b) {
        return a / b
    }

    ymnozhinie(a, b) {
        return a * b
    }

    builder(element = null) {
        let el = element
        if (!element) {
            el = document.getElementById(this.selector)
        }
        if (!el) {
            throw new Error('Element not found!')
        }

        el.classList.add('calc-block')

        if (this.fields < 2) {
            throw new Error('Calculator cannot building. Needed fieldCount props more 2')
        }

        for (let i = 0; i < this.fields; i++) {
            const input = document.createElement('input')
            input.classList.add('form-control', 'calc-field')
            input.type = 'number'

            const span = document.createElement('span')
            span.innerHTML = this.operation
            el.append(input)
            el.append(span)
        }
        el.lastElementChild.innerHTML = '='
        const resultInput = document.createElement('input')
        resultInput.classList.add('form-control', 'calc-field', 'result')
        resultInput.disabled = true
        el.append(resultInput)
    }

    calucate() {
        const element = document.getElementById(this.selector)
        if (!element) {
            throw new Error('Element not found!')
        }
        this.builder(element)
        const innerElement = element.querySelector('.result')
        const inputs = element.querySelectorAll('input')
        const inputsNumber = [];
        const sum = {};
    
        Array.from(inputs).forEach(input => {
            if (input.type === 'number') {
                inputsNumber.push(input)
            }
        });
    
        if (inputsNumber.length) {
            inputsNumber.forEach((input, idx) => {
                input.onkeyup = event => {
                    const value = event.currentTarget.value
                    sum[idx] = value
                    const result = Object.values(sum).map(i => +i).reduce((a, b) => {
                        switch (this.operation) {
                            case '+':
                                return this.plus(a, b)
                                break;
                            case '-':
                                return this.minus(a, b)
                                break;
                            case '/':
                                return this.delenie(a, b)
                                break;
                            case '*':
                                return this.ymnozhinie(a, b)
                                break;
                            default: throw new Error('Operand not found')
                        }
                    })
                    innerElement.value = result;
                }
            })
        }
    }
}

const calc1 = new Calculator('calculator', '+', 5)
const calc2 = new Calculator('calculator2', '-', 2)
const calc3 = new Calculator('calculator3', '/', 2)
const calc4 = new Calculator('calculator4', '*', 2)

calc1.calucate()
calc2.calucate()
calc3.calucate()
calc4.calucate()