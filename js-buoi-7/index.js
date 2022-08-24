// // var names = ["hieu", "dung", "tai", "hoang", "nguyen"];

// // console.log(names[1], names[3]);

// // thêm 1 phần tử vào cuối mảng
// // names.push("Khai");

// // thêm 1 phần tử vào đầu mảng
// // names.unshift("Chuong");

// // xoá 1 phần tử cuối mảng
// // names.pop();

// // xoá 1 phần tử đầu mảng
// // names.shift();

// // xoá phần tử ở vị trí bất kì
// // names.splice(2, 1);

// // thêm phần tử ở vị trí bất kì
// // names.splice(2, 0, "Khai");

// // cập nhật 1 phần tử
// // names[2] = "Anh";

// // console.log(names);

// var address = "53/24 Bùi Văn Ba,Tân Thuận Đông,Quận 7,Hồ Chí Minh";
// var addressArray = address.split(",");

// console.log(addressArray);

// var fullName = ["Đặng", "Trung", "Hiếu"];

// console.log(fullName.join(" "));

// // nối 2 mảng

// var num1 = [2, 4, 1, 3, 54];
// var num2 = [90, 98, 72];

// var num3 = num2.concat(num1);

// console.log(num3);

// // cắt mảng

// var names = ["hieu", "dung", "tai", "hoang", "nguyen"];

// var namesPage1 = names.slice(0, 3); // ["hieu", "dung", "tai"]

// console.log(namesPage1);

var numbers = [2, 1, 4, 6, 7, 5, 10, 8];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i], "là số chẵn");
  } else {
    console.log(numbers[i], "là số ler");
  }
}

// Ex1: cho một mảng số nguyên, tính tổng các số lẻ trong mảng
function ex1(arr) {
  //O(n)
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      sum += arr[i];
    }
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      sum += arr[i];
    }
  }
  console.log(sum);
}

ex1([3, 1, 2, 5, 6, 7, 1, 2]);

// Ex2: cho một mảng số nguyên, đếm có bao nhiêu số âm trong mảng
function ex2(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  console.log(count);
}

ex2([3, 1, 2, 5, -6, 7, -1, 2]);

// Ex3: cho một mảng số nguyên, tính trung bình giá trị các số trong mảng

// Ex4: cho một mảng số nguyên, tìm số lớn nhất và lớn nhì trong mảng
function ex4(arr) {
  var max = arr[0];
  var second = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] > second && arr[i] !== max) {
      second = arr[i];
    }
  }

  console.log(max, second);
}

ex4([3, 1, 2, 5, 6, 7, 1, 2]);

// Ex5: cho một mảng số nguyên, tìm số nhỏ nhất

// Ex6: cho một mảng số nguyên, in ra mảng đảo ngược. vd: [1,2,3] => [3,2,1]

function ex6(arr) {
  var reverseArr = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    // i =7 => arr[i] = 2 => push
    // i =6 => arr[i] = 1 => push
    reverseArr.push(arr[i]);
  }
  console.log(reverseArr);
}

ex6([1, 2, 5, 6, 7, 1, 2]);

// Ex7: cho một mảng số nguyên, kiểm tra xem trong mảng có 2 số bất kì có tổng là 10 không?

function ex7(arr) {
  // O(n^2)
  for (var i = 0; i < arr.length; i++) {
    // i = 0 =>  arr[i] = 1
    // i = 1 => arr[i] = 2
    for (var k = 0; k < arr.length; k++) {
      // k = 2 => arr[k]= 5
      // k = 3 => arr[k] =5
      if (arr[i] + arr[k] === 10) {
        console.log("Có");
        return true;
      }
    }
  }

  console.log("không có");
  return false;
}

ex7([1, 2, 5, 6, 7, 1, 8]);

// BIG O NOTATION: Độ phức tạp của thuật toán (operators)

function sum(a, b) {
  // O(1)
  var c = a + b;
  var d = a - b;
  return c;
}

sum(1000000, 2000000);

// Ex8: cho một mảng số nguyên được sắp xếp tăng dần, kiểm tra xem trong mảng
// có 2 số bất kì có tổng là 10 không?

function ex8(arr) {
  var i = 0;
  var k = arr.length - 1;

  while (i < k) {
    var sum = arr[i] + arr[k];

    if (sum === 10) {
      console.log("có");
      return;
    } else if (sum > 10) {
      k--;
    } else {
      i++;
    }
  }

  console.log("không có");
}

ex8([2, 3, 4, 5, 9, 10]);

// Ex9: Viết hàm chia bài cho 4 người chơi. Cho 4 mảng đại diện cho 4 người chơi
// var players = [ [], [], [], [] ];
// Và 1 mảng bài: var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S", "AS", "7H", "9K", "10D"]
// Yêu cầu viết code để chia cho mỗi player 3 lá theo luật, chia lần lượt mỗi người 1 lá
// Kết quả : [ ["4K","QH","AS"], ["KH", "KD","7H"], ["5C","2H","9K"], ["KA","10S","10D"] ]

function ex9() {
  var players = [[], [], [], []];
  var cards = [
    "4K",
    "KH",
    "5C",
    "KA",
    "QH",
    "KD",
    "2H",
    "10S",
    "AS",
    "7H",
    "9K",
    "10D",
  ];

  for (var i = 0; i < cards.length; i++) {
    var playerIndex = i % 4;
    players[playerIndex].push(cards[i]);
    // i = 0 => playerIndex = 0
    // i = 1 => playerIndex = 1
    // i = 2 => playerIndex = 2
    // i = 3 => playerIndex = 3
    // i = 4 => playerIndex = 0
  }

  console.log(players);
}

ex9();

// Ex10: Cho một mảng bất kì, sắp xếp tăng dần
// Sorting: interchange, selection, insertion, bubble sort, heap, quick sort, merge sort, radix sort...
function ex10(arr) {
  for (var k = arr.length - 1; k >= 0; k--) {
    // k = 5
    // k = 4
    // k = 3

    var isSwapped = false;

    for (var i = 0; i < k; i++) {
      // i = 0, 1,2,3,4
      // i =0,1,2,3
      // i =0 ,1,2

      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }

    if (!isSwapped) {
      console.log(arr);
      return;
    }
  }

  console.log(arr);
}

ex10([1, 2, 3, 4, 5, 6, 7, 8]);

// truthy / falsy :0, "", null, undefined, NaN, false

var a = 0;

if (a) {
  console.log("test");
}

var b = 10;
var c = 20;

function test() {
  // var d= 10;
  // var b = 50;
  console.log(b);
}

// test(); // => execute context [  d= 10  ]

function test2() {
  var b = 30;
  test();
}

test2();

// console.log(d);

// scope: global vs function (local) scope, lexical scope: nơi viết ra đoạn code sẽ quyết định biến nào đc phép xài
