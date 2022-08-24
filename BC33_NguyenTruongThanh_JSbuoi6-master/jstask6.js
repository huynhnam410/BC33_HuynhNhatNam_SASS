function baitap1() {
  var total = 0;
  var n = 0;
  while (total < 10000) {
    n++;
    total = total + n;
  }
  console.log(n);
  document.getElementById("resultBt1").innerHTML = n;
}

function baitap2() {
  var valueX = document.getElementById("txtN").value * 1;
  var valueN = document.getElementById("txtX").value * 1;
  var result = 0;
  for (var i = 1; i <= valueN; i++) {
    var N = i;
    console.log("Gia tri N:", N);
    var X = Math.pow(valueX, N);
    console.log("Gia tri X:", X);
    result += X;
    console.log("X^N=", result);
  }
  console.log("Tong cong:", result);
  document.getElementById("resultBt2").innerHTML = result;
}

function baitap3() {
  var value = document.getElementById("txtNum").value * 1;
  var totalEx = 1;
  for (var i = 1; i <= value; i++) {
    totalEx = totalEx * i;
  }
  console.log("Giai thua:", totalEx);
  document.getElementById("resultBt3").innerHTML = totalEx;
}

function baitap4() {
  var even = "Div chẳn";
  var odd = "Div lẻ";
  var contentDiv = "";
  for (var i = 1; i <= 10; i++) {
    contentDiv = i;
    if (i % 2 === 0 && i == 2) {
      contentDiv = even + " " + i;
      
      document.getElementById("even").innerHTML = contentDiv;
      document.getElementById("even").style.backgroundColor = "blue";
    } else if (i % 2 === 0 && i == 4) {
      contentDiv = even + " " + i;
      
      document.getElementById("even1").innerHTML = contentDiv;
      document.getElementById("even1").style.backgroundColor = "blue";
    } else if (i % 2 === 0 && i == 6) {
      contentDiv = even + " " + i;
      
      document.getElementById("even2").innerHTML = contentDiv;
      document.getElementById("even2").style.backgroundColor = "blue";
    } else if (i % 2 === 0 && i == 8) {
      contentDiv = even + " " + i;
      
      document.getElementById("even3").innerHTML = contentDiv;
      document.getElementById("even3").style.backgroundColor = "blue";
    } else if (i % 2 === 0 && i == 10) {
      contentDiv = even + " " + i;
      
      document.getElementById("even4").innerHTML = contentDiv;
      document.getElementById("even4").style.backgroundColor = "blue";
    } else if (i % 2 !== 0 && i == 1) {
      contentDiv = odd + " " + i;
      
      document.getElementById("odd").innerHTML = contentDiv;
      document.getElementById("odd").style.backgroundColor = "red";
    } else if (i % 2 !== 0 && i == 3) {
      contentDiv = odd + " " + i;
      
      document.getElementById("odd1").innerHTML = contentDiv;
      document.getElementById("odd1").style.backgroundColor = "red";
    } else if (i % 2 !== 0 && i == 5) {
      contentDiv = odd + " " + i;
      
      document.getElementById("odd2").innerHTML = contentDiv;
      document.getElementById("odd2").style.backgroundColor = "red";
    } else if (i % 2 !== 0 && i == 7) {
      contentDiv = odd + " " + i;
      
      document.getElementById("odd3").innerHTML = contentDiv;
      document.getElementById("odd3").style.backgroundColor = "red";
    } else {
      contentDiv = odd + " " + i;
      
      document.getElementById("odd4").innerHTML = contentDiv;
      document.getElementById("odd4").style.backgroundColor = "red";
    }
  }
}
