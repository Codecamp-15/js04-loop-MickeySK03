let balance = 100000;
let interest =0;



console.log("ดอกเบี้ยรายปี");
for(let i=1;i<=10;i++){
    balance += interest;
    interest = balance*2.5/100;
    console.log(interest);
}
console.log("ยอดเงินฝากสะสม 10ปี เท่ากับ");
console.log(balance);
