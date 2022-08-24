var exArr = [];

function addNumb() {
  var numb = +document.getElementById("addArray").value;
  exArr.push(numb);

  document.getElementById("showArr").innerHTML = exArr;
}

function ex1() {
  var sum = 0;
  for (var i = 0; i <= exArr.length - 1; i++) {
    if (exArr[i] >= 0) {
      sum += exArr[i];
    } else {
      continue;
    }
    document.getElementById("ex1").innerHTML = sum;
  }
}

function ex2() {
  var total = 0;
  for (var i = 0; i <= exArr.length - 1; i++) {
    if (exArr[i] > 0) {
      total += 1;
    } else {
      continue;
    }
  }
  document.getElementById("ex2").innerHTML = total;
}

function ex3() {
  var min = exArr[0];
  for (var i = 0; i <= exArr.length - 1; i++) {
    if (exArr[i] < min) {
      min = exArr[i];
    }
  }
  document.getElementById("ex3").innerHTML = min;
}

function ex4() {
  var postMin = exArr[0];
  for (var i = 0; i <= exArr.length - 1; i++) {
    if (exArr[i] < postMin && exArr[i] >= 0) {
      postMin = exArr[i];
    }
  }
  document.getElementById("ex4").innerHTML = postMin;
}

function ex5() {
  var lastEven = "";
  for (var i = exArr.length; i >= 0; i--) {
    if (exArr[i] % 2 === 0) {
      lastEven = exArr[i];
      break;
    }
  }
  document.getElementById("ex5").innerHTML = lastEven;
}

function ex6() {
    // var local1 = +document.getElementById("first").value;
    // var local2 = +document.getElementById("second").value;
    var changeLocal = 0;
    if (local1 != local2) {
        changeLocal = exArr[local1];
        exArr[local1] = exArr[local2];
        exArr[local2] = changeLocal; 

        console.log(exArr)
    }
    document.getElementById("ex6").innerHTML = exArr;
}

function ex7() {
    for (var k = 0; k < exArr.length - 1; k++) {
        for (var i = 0; i < exArr.length - 1; i++) {
            if (exArr[i] > exArr[i + 1]) {
                var temp = exArr[i];
                exArr[i] = exArr[i + 1];
                exArr[i + 1] = temp;
            }
        }
    }
       
    document.getElementById("ex7").innerHTML = exArr;
}