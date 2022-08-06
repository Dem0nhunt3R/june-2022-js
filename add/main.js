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

//- Дано натуральное число n. Выведите все числа от 1 до n.

const numLogger = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

numLogger(3);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в
// порядке убывания в противном случае.

const numLogger2 = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
}

numLogger2(6, 2);
numLogger2(2, 6);

//   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

const adjacentSwapper = (arr, i) => {
    let temp = arr[i + 1];
    arr[i + 1] = arr[i];
    arr[i] = temp;
    console.log(arr);
}

adjacentSwapper([9, 8, 0, 4], 0);

//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

const zeroMover = (arr) => {
    const zeroArr = [];
    const noZeroArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroArr[zeroArr.length] = arr[i];
        } else {
            noZeroArr[noZeroArr.length] = arr[i];
        }
    }

    return [...noZeroArr, ...zeroArr];
}


console.log(zeroMover([0,0,1,0,0,1323,0,0,1,0,0]));