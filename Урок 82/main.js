

// =============================================================

//     const users = ['John', 'Alex', 'Anna', 'Max']
// function chekForCopyItem (array, item) {
//     for( let i = 0; i < array.length; i++) {
//         if(array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return 'There is no such item in the array'
// }

// console.log(chekForCopyItem(users, `Alex`));

// ========================================================================

    
    // ===================================================================

    // function calculateNumber(initialValue) {
        //     let x = initialValue;
        //     x = x + 100;
        //     x = x / 5;
        //     return x;
        // }
        // const result = calculateNumber(100)
// const result1 = calculateNumber(100000)
// console.log(result);
// console.log(result1);

// =====================================================================

// function calculateCircleArea (circleRadius) {
// const area = 3.14 * circleRadius ** 2;
// return area;
// } 
// const circleArea1 = calculateCircleArea(5) 
// console.log(circleArea1);
// const circleArea2 = calculateCircleArea(9) 
// console.log(circleArea2);


// =========================================================================

// function sumNumber (firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }

// const result = sumNumber(3, 10)
// console.log(result)
// console.log(sumNumber(-2, 2));

// ===============================================================================

// const users = ['Anna', 'Grey', 'Max', 'John']

// function chekForCopyItem (array, item) {
// for(let i = 0; i < array.length; i++) {
//     if(array[i] === item) {
//         return `There is copy of the ${item} in array`
//     }
// }
// return `There is no such item in the array`
// }
// console.log(chekForCopyItem(users, 'Alex'));

// ==============================================================================

function user (name) {
    return `Hello ${name}`
}
console.log(user('Alex'));

// ================================================================================

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    function num (number) {
        for(let i = 0; i < number.length; i++) {
            if(number[i] >= 10) {
                console.log(number[i]);
            }
        }   
    }
    num(numbers)

//  =====================================================================================

function calculate1(num1, num2, operator) {
    return num1 + num2
}
console.log(calculate1(2, 3, `plus`));

// =======================================================================================

function calculate2(num3, num4, operator) {
    return num3 - num4
}
console.log(calculate2(2, 3, `minus`));

// =====================================================================================

function calculate3(num5, num6, operator) {
    return num5 / num6
}
console.log(calculate3(2, 3, `division`));

// ======================================================================================

function calculate4(num7, num8, operator) {
    return num7 * num8
}
console.log(calculate4(2, 3, `multuplication`));

// =======================================================================================

