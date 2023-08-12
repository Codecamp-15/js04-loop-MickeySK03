//Program-1 : Input-User-1

//let ansNumber = prompt("Enter your magic number")

// let isNull = ansNumber === null;
// let isEmpty = ansNumber.trim() === '';
// let isNaN = isNaN(ansNumber);

// let isValid = ansNumber === null || ansNumber.trim() === '' || isNaN(ansNumber);
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) >99;
// let isInRange = Number(ansNumber) >=1 && Number(ansNumber) <= 99;

//     if(isValide) {
//         alert('Invalid Input');
//     }else if (outOfRange){
//         alert("Invalid Range")
//     }else if (isInRange){
//         alert("Try to guess number")
//     }

let ansNumber ='';
let isEmpty;
let isNan;
let outOfRange;

do {
    ansNumber = prompt('Enter your magic number') || ''; //null || ""
    isEmpty = ansNumber.trim() === '';
    isNan = isNaN(ansNumber);
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
    if(isEmpty || isNan){
        alert('Invalid Input, Try 1-99');
    }else if(outOfRange){
        alert('Invalid Range, Try 1-99');
    }
}while(isEmpty||isNan);

//Program 2 Guess number

let guessNumber;

do {
    guessNumber = prompt('Enter your answer'||'');
    isEmpty = guessNumber.trim() === '';
    isNan = isNaN(guessNumber);
    outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
    if(isEmpty || isNan){
        alert('Invalid Input, Try 1-99');
    }else if(outOfRange){
        alert('Invalid Range, Try 1-99');
    }else if (+guessNumber > +ansNumber){
        alert('Too High');
    }else if (+guessNumber < +ansNumber){
        alert('Too Low');
    }else if (+guessNumber == +ansNumber){
        alert('Correct');
    }
}while(+guessNumber != +ansNumber); //+for number
cd