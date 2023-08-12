
console.log('learn while loop');
// ประเภทของloop
//1.Condition Loop ตัดสินใจว่าจะรับต่อไหม จาก Boolearn
//2.Counting Loop ตัดสินใจว่าจะทำต่อไหมจาก ตัวเลข
//3.List Loop   "...................." จากจำนวนของในรายการ

 console.log("starting");

//  let i = 0;

//  while (++i<=10) {
//     console.log(i);
//     // i++;
//  }//วนเลข1-10
//  console.log("end...");


// let i = 1;
//  while (++i<=10) {
//     console.log(i);
//     i++
// } //วนเลขคู่


// if (i%3==0){
    // console.log(i);
    // else if (i%5==0) {
    //     console.log(`${i}:High Five`);
    // }}


// if (i%5 ==0) {
//     console.log(`${1}:HighFive`);
//     else if (i%3==0){
//         console.log(i);
//     }}


//if (i%3 !=0) {
    // console.log(i);}

//FizzBuzz Problem
//Range :1-20;
//divided by 3 : PRINT Fizz
//divided by 5 : PRINT Buzz
//divided by 3 and 5 : PRINT FizzBuzz
//others : PRINT number

let i =1;
while (i<=20) {
    if(i%3 ===0 &&i%5===0)
    {  
        console.log('FizzBuzz');
    }
    else if (i%3===0) {
        console.log('Fuzz');
    }
    else if (i%5===0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}


console.log('end....');
