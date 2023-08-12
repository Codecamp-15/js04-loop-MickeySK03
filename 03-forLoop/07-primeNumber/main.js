
for(let n = 2;n<=100;n++){
    //only 1 Number
    let isPrime = true; //flag
    for(let divider = 2; divider <n; divider++) {
        //divider 2,3,4,5,...,n-1
        if(n% divider ==0) {
        isPrime = false;
        //break; //เอาไว้ใช้้กับข้อมูลที่มีจำนวนมาก
        //n=2 ..5/2==2.5 =>isPrime = true
        //n=3 ..5/3=>1.6 =>isPrime = true
        //n=4 ..5/4=>1.25 =>isPrime = true
    }
}
    if(isPrime) console.log(n);
}
//if(isPrime) console.log('number ${n} is prime number);
//else console.log('number ${n}) not prime number');
