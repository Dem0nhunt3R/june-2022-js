//Всі функції повинні бути описані стрілочним типом!!!!


// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

const getMinNum = (...args) => {
    let min = args[0];

    for (let i = 1; i < args.length; i++) {
        if (min > args[i]) {
            min = args[i];
        }
    }

    return min;
}

console.log(getMinNum(1, -97687, -3));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

const getMaxNum = (...args) => {
    let max = args[0];

    for (let i = 1; i < args.length; i++) {
        if (max < args[i]) {
            max = args[i];
        }
    }

    return max;
}

console.log(getMaxNum(1, -97687, -3));

// - створити функцію яка повертає найбільше число з масиву

const getMaxNumOfArr = (arr) => {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    return max;
}

console.log(getMaxNumOfArr([1, 2, 3, 4, 512, 1, 15555511, 3213, 12312312, 123123, -23232323]));
;

// - створити функцію яка повертає найменьше число з масиву

const getMinNumOfArr = (arr) => {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }

    return min;
}

console.log(getMinNumOfArr([3213213, -1, 213213, 123123, 32435, 342654, 78, 6586784, 67]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const getArrSum = (arr) => {
    let sum = 0;

    for (const element of arr) {
        sum += element;
    }

    return sum;
}


console.log(getArrSum([1, 2, 10]));