var isVip = false

// toan tu so sanh

console.log (5==4);
// so sanh bang
console.log(4!=4)
// so sanh khac

console.log(5 >4)

console.log(5 <4)

console.log(5 >=4)

console.log(5 <=4)

console.log( 4 ==="4")
// so sanh xem co bang nhau k

console.log(4 !=="4")
// so sanh co khac nhau k


// TOAN TU LOGIC ! ,&& ,||

console.log(!!isVip)

console.log(5>4 && 2===3)
// ca hai cai deu phai dung
console.log(5>4 || 3===2)
// 1 trong 2 cai dung



// if(bieu thuc dieu kien){
    // code chay khi dung dieu kien

// }else{
    // code se chay khi sai dieu kien
// }

var d=4

if(d<0){
d=-d
console.log(d)
}else{
    console.log(d,"da la so duong")
}

var oneH=100000
var timework=60
var ot=oneH* (1.5)
var total;

if(timework<=40){
    console.log("so tien luong la",oneH*timework)
}else{
    total=40*oneH +(timework-40)*oneH*1.5
   
}
console.log("tong lg",total);




var ten="Dacin"
var toan=0
var ly =0
var hoa=7
var tbm=(toan+ly+hoa)/3
console.log(tbm)

if(tbm>=8.5){
    console.log('hsg')
}
else if(tbm>=6.5 && tbm<8.5)
{
    console.log('hsk')
}else if(tbm>=5 && tbm<6.5){
    console.log('hstb')
}else if(tbm<5){
    console.log('hsy')
}


var coca;
var amount=120;
var price=10000
var totalamount;


if(amount>100){
totalamount=price*50+(price*50+0.92)+(amount-100)*88/100
} else if(amount>50){
    totalamount=price*50+(amount-50)*92/100
} else if(amount<50){
    totalamount=price*amount
}
console.log(totalamount)
