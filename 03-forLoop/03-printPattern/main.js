//console.log พิมพ์ได้แถวละครั้ง


// for(let i=1;i<=4;i++) {
//     let str ='';
//     for(let j=1;j<=i;j++){
//         str = str + 'x';
//     }
//     console.log(str);
// }

let str ='';
for(let i =1;i<=4;i++) {
    for(let j =1;j<=4;j++){
        if(j<=i) str+='x';
    }
    str += '\n';
}
console.log(str);
