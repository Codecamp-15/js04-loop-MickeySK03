console.log('learn counting loop');

console.log('Starting......');
//() = parenthesis = วงเล็บ
//{} = bracket = ปีกกา
//[] = square bracket = ก้ามปู

// for (let i=0;i<3;i++) {
//     console.log('>>Hello');
//     console.log(i);
// }

//ex2 FizzBuzz
// for (let i=1;i<=20;i=i+1) {
//     if(i%3===0&&i%5===0)console.log('FizzBuzz');
//     else if (i%3===0) continue; //ไม่แสดงค่าที่หาร3ลงตัว
//     else if (i%5===0) console.log('Buzz');
//     else console.log(i);
// }
//continue หมายถึงให้run loopรอบถัดไป

//ex3
// for (let i=1;1<=20;i++){
        //i=2log(2),log(event)
        //if (i%2 ==0) console.log(1);
        //else continue;//update ค่าและเร่ิมต้น Loop รอบถัดไป
        //console.log('even');
// }

//ex4 concat String
// let str='';
// for(let i =1; i<=10;i++) {
//     //Guard
//     if(i%3==0) continue;
//     str +=i;
    //"" + 1 =>"1"
    //"1" + 2 =>"12"
// }

//ex5 remove vowel (a,e,i,o,u)
//let src = "codecamp";
//let res = ""//cdmp
//src.length =>8
//src[0] => c
//src[1] => o

// for(let i=0;i<src.length;i++) {
//     let c = src[i];
//     if(c == 'a'||c=='e'||c=='i'||c=='o'||c=='u') continue;
//     res = res+src[i];

    //''+src[0] == ''+'c' => 'c'
    //'c'+src[1] == 'c'+'0' => 'co'
    
// }
    //console.log(res);

//ADVANCE :Nested
    for (let i = 2;i<=3;i++){
        console.log(`เริ่มท่องสูตรคูณแม่ ${i}`);
       for (let j =1;j<=12;j++){
        console.log(`${i}*${j} = ${i*j}`);
       }
       console.log('\n');
    }

    console.log('end...');