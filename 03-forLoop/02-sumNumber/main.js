let sum = 0;
let sumEven = 0;
let sumOdd = 0;
let sumEvenSquare = 0;
let sumOddSquare = 0;
for(i=1;i<=100;i++){
    //console.log(i);
    sum += i;
    if(i%2===0){
        // console.log(i);
        sumEven += i;
        sumEvenSquare += i*i; //i**2 คือ i ยกกำลัง2
    }
    if (i%3===0){
        // odd +=i;
        sumOddSquare += i*i;
    }
    // else if(i%2) {
    //     //    console.log(i);
    //     odd += i;
    // }
    sumOdd = sum-sumEven;
    
}
console.log("sum");
console.log(sum);
console.log("even");
console.log(sumEven);
console.log("odd");
console.log(sumOdd);
console.log("ผลรวมของเลขที่หาร2ลงตัว");
console.log(sumEvenSquare);
console.log("ผลรวมของเลขที่หาร3ลงตัว");
console.log(sumOddSquare);
console.log("ผลลบเลขบกกำลัง");
console.log(sumEvenSquare-sumOddSquare);