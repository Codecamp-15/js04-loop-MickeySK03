let sum=0;
let count=0;
let average=0
let isNan;

do{
    let num = prompt("enter another number");
    isNan = isNaN(num);
  if(num <= 0||isNan){
    break;
  }
  else {
    sum += Number(num);
    count++;
    average = sum/count;
  }
}while(true);
alert(`sum =${sum}`);
alert(`average =${average}`);
