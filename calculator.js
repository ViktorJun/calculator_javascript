'use strict';

let first_num = window.prompt('Введите первое число');
console.log('Вы ввели: ' + first_num);

let operation = window.prompt('Введите операцию');
console.log('Вы выбрали операцию: ' + operation);

let second_num = window.prompt('Введите второе число');
console.log('Вы ввели: ' + second_num);


if (first_num !== null && second_num !== null) {
    first_num = Number(first_num);
    second_num = Number(second_num);
    if (!isNaN(first_num) && !isNaN(second_num)) {
        console.log('Ваш пример: '+ first_num + operation + second_num);
        if (operation === '+') {
            let res_plus = first_num + second_num;
            console.log(first_num + operation + second_num + '=' + res_plus);
        } else if (operation === '-') {
            let res_minus = first_num - second_num;
            console.log(first_num + operation + second_num + '=' + res_minus);
        } else if (operation === '/') {
            if (second_num !== 0) {
                let res_division = first_num / second_num;
                console.log(first_num + operation + second_num + '=' + res_division);
            }
            else {
                console.log('Деление на ноль невозможно')
            }
        } else if (operation === '*'){
            let res_multiplication = first_num * second_num;
            console.log(first_num + operation + second_num + '=' + res_multiplication);
        }
        else {
            console.log('Оператор введен некорректно')
        }
    }
    else {
        console.log('Числа введены некорректно')
        }

} else {
    console.log('Отмена');
}