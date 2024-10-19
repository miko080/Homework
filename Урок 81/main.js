// const num = [1, 2, 3, 4, 5]
// // num[2] = 9

// // console.log(num);

// for(let i = 0; i < num.length; i++) {
//     console.log(num[i] + 1);
// }

// ====================================================

const num = [1, 2, 3, 4, 5, 6, 7, 8]
for(let i = 1; i < num.length; i = i + 2) {
    console.log(num[i]);
}

// ====================================================

const rainbowColor = ['red', 'blue', 'purple', 'yellow', 'blue', 'orange', 'green']
for(let i = 6; i => rainbowColor.length; i--){
    console.log(rainbowColor[i]);
    if(i === 0){
        break
    }
}