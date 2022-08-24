var email = "lequoctri1994@gmail.com";
var age = 28;

// a, b, c : tham sô đầu vào của hàm
function calcSum(a, b, c){
    var sum = a + b + c;
    return sum;
}

var res1 = calcSum(2, 3, 5);

console.log(res1);

// calcSum(5, 6, 19);

//phạm vi truy cập của biến (global scope vs function scope)

/***
 * INPUT: 
 * điểm ưu tiên khu vực, điểm ưu tiên đối tượng, điều kiện đậu
 * 
 * PROGESS: 
 * nhập điểm 3 môn, điểm ưu tiên, cho biết thi sin hđauạ hay rớt
 * 
 * OUTPUT:
 * log kết quả ra màn hình
 */

// nhận vào khu vực => điểm ưu tiên
function calcAreaGrade(area){
    if(area === "A"){
        return 2;
    }
    if(area === "B") {
        return 1;
    }
    if(area === "C") {
        return 0.5;
    }
    return 0;
}

function calcStudentTypeGrade(studentType){
    if(studentType === 1){
        return 2.5;
    }
    if(studentType === 2){
        return 1.5;
    }
    if(studentType === 3){
        return 1;
    }
    return 0;
}

function ex1(){
    // code logic kiểm tra thí sinh đậu hay rớt
  var standardGrade = 23;
  var sub1 = 6;
  var sub2 = 8;
  var sub3 = 10;
  var area = "A";
  var studentType = "1";

  //tính điểm ưu tiên theo khu vực
  var area = calcAreaGrade(area)

  //tính kiểm ưu tiên theo đối tượng
  var studentType = calcStudentTypeGrade(studentType)

  var totalGrade = sub1 + sub2 + sub3 + area + studentType;
  
  if(totalGrade >= standardGrade){
    console.log("Đậu", totalGrade)
  } else { 
    console.log("Rớt", totalGrade)
  }

}
ex1()


/***
 * INPUT:
 * số kw, quy tắc tính tiền trên các mốc kw
 * 
 * PROGESS:
 * nhập số kw và tính số tiền phải phải trả
 * 
 * OUTPUT:
 * log số tiền phải trả ra màn hình
 */

function ex2 (){
    var fullName = "Lê Quốc Trị";
    var kw = 250;
    var totalPrice;

    if (kw <= 50){
        totalPrice = 500 * kw;
    } else if(kw <= 100){
        totalPrice = 500 * 50 + (kw - 50 ) * 650;
    } else if(kw <= 200){
        totalPrice500 = 500 * 50 + (kw - 50) * 650 + (kw - 100) * 850;
    } else if(kw <= 350){
        totalPrice = 500 * 50 + (kw - 50) * 650 + (kw - 100) * 850 + (kw - 200) * 1100;
    } else{
        totalPrice = 500 * 50 + (kw - 50) * 650 + (kw - 100) * 850 + (kw - 200) * 1100 + (kw - 350) * 1300;
    }

    console.log("Tổng tiền tính được:", totalPrice.toLocaleString()  )
}

ex2()

/***
 * INPUT:
 * họ tên, tổng thu nhập, số người phụ thuộc
 * 
 * PROGRESS:
 * tính thu nhập chịu thuế, tính và xuất thuế thu nhập cá nhân
 * 
 * OUTPUT:
 * in thuế thu nhập cá nhân ra màn hình
 */

function ex3 (){
    var fullName = "Lê Quốc Trị";
    var totalIncome = 120000000;
    var dependentPerson = 3;
    var incomeTaxes = totalIncome - 4000000 - (3 * 1600000)
    var personalIncomeTax;

    if (incomeTaxes <= 60000000){
        personalIncomeTax = incomeTaxes * 5 / 100;
    } else if (incomeTaxes <= 120000000){
        personalIncomeTax = incomeTaxes * 10 / 100;
    } else if (incomeTaxes <= 210000000){
        personalIncomeTax = incomeTaxes * 15 / 100;
    } else if (incomeTaxes <= 384000000){
        personalIncomeTax = incomeTaxes * 20 / 100;
    } else if (incomeTaxes <= 624000000){
        personalIncomeTax = incomeTaxes * 25 / 100;
    } else if (incomeTaxes <= 960000000){
        personalIncomeTax = incomeTaxes * 30 / 100;
    } else {
        personalIncomeTax = incomeTaxes * 35 / 100;
    }

    console.log("Tổng số thuế thu nhập cá nhân của Lê Quốc Trị là:", personalIncomeTax.toLocaleString() )
}

ex3()