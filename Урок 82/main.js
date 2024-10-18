// function sumNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber

// }

//     const result = sumNumbers(3 ,10)
//     console.log(result);
//     console.log(sumNumbers(-2, 5));

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


function createHTMLElement(tag, id, text) {
    const element = document.createElement(tag);
    if(id) {
        element.id = id;
    }
    element.innerText = text;

    return element;
}
document.addEventListener("DOMContentLoaded", () => {
    const h1Element = createHTMLElement('h1', 'just texxxxxxxt');
    console.log(h1Element);
    document.body.append(h1Element);
});

