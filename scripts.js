// Task 1

let b = 'aaa@bbb@ccc';
    c = /@/g;

console.log('Task 1');
console.log(b.replace(c,'!'));
console.log('');

// Task 2

let date = '2025-12-31',
    date2 = date.split('-');

date = date2[2] + '/' + date2[1] + '/' + date2[0];

console.log('Task 2');
console.log(date);
console.log('');

// Task 3

let a = 'я учу javascript!';

console.log('Task 3');
console.log(a.substr(2,4) + a.substr(6,10));
console.log(a.substring(2, 6) + a.substring(6,16));
console.log(a.slice(2, 6) + a.slice(6,16));
console.log('');

// Task 4

let array = [4, 2, 5, 19, 13, 0, 10],
    arr = [];
    summ = 0;

for(i = 0; i < array.length; i++) {
    arr.push(Math.pow(array[i], 3));
    summ += arr[i];
}

console.log('Task 4');
console.log(Math.sqrt(summ));
console.log('');


// Task 5

function modul (d, e) {
    d = +prompt('Введите число 3 или 6');
    e = +prompt('Введите число 5 или 1');
    
    console.log(Math.abs(d - e));
}

console.log('Task 5');
modul();
console.log('');

// Task 6

function getData(data) {
    data = new Date();

    let year = data.getFullYear(),
        month = data.getMonth(),
        day = data.getDate(),
        hours = data.getHours(),
        minutes = data.getMinutes(),
        seconds = data.getSeconds();

    if (month < 10) {
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + day;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    return year + '-' +  month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    
}

console.log('Task 6');
console.log(getData());
console.log('');

// Task 7 

let f = 'aa aba abba abbba abca abea';

console.log('Task 7');
console.log(f.match(/a(b+)a/g));
console.log('');

// Task 8

function getNumber(number) {
    number = prompt('Введите номер телефона');

    let g = /\d{3}\s?[\s\(]?\s?(29|33|44)\s?[\)\s]?\s?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}/g;

    if(g.test(number) == true) {
        console.log('Алло');
    }  else {
        console.log('Абонент не абонент');
    }

}

getNumber();
