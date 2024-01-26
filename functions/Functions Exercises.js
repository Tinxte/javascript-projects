function makeLine(size) {
    let line = "";
    for (let i = 0; i < size; i++) {
    line +="#";
   }   return line;
}

// console.log(makeLine(5));


// function makeSquare(size) {
//     let row = "";
//     let square = "";
//     for (let i = 0; i < size; i++) {
//         row += "#";
//     } for (let j = 0; j < size; j++) {
//     square += ("\n") + row
//     }
//     return square.slice(1);
// }

// console.log(makeSquare(5));


// function makeRectangle(width, height) {
//     let row = "";
//     let rectangle = "";
//         for (let i = 0; i < arguments[0]; i++) {
//             row += "#";
//         } for (let j = 0; j < arguments[1]; j++) {
//         rectangle += ("\n") + row
//         }
//         return rectangle.slice(1);
//     }
    
//     console.log(makeRectangle(2,3));


    // function makeDownwardStairs(height) {
    //     let stairs = "";
    //     for (i = 0; i < height; i++) {
    //         stairs += (makeLine(i +1) + '\n');
    //     }
    //     return stairs 
    // }

    // console.log(makeDownwardStairs(5));


function makeSpaceLine(numSpaces, numChars) {
        let output = "";
        let spaces = "";
        let chars = "";
        for (i = 0; i < numSpaces; i++){
            spaces += " ";
        } for (j = 0; j < numChars; j++) {
            chars += "#";
        } return (spaces + chars + spaces);
    }

// console.log(makeSpaceLine(3, 5));


function makeIsoscelesTriangle(height) {
    let triangle = "";
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return triangle.slice(0, -1)
}

// console.log(makeIsoscelesTriangle(5));


function makeDiamond(height) {
    let diamond = makeIsoscelesTriangle(height)
    let reversed = diamond.split('\n').reverse().join('\n')
    // for (let i = 0; i < height; i++) {
    //     reversed += 
    // }
    return (diamond + '\n' + reversed)
}

console.log(makeDiamond(5));