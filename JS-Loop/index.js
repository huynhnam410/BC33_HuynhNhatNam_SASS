// console.log('hello BC33')
// console.log('hello BC33')
// console.log('hello BC33')
// console.log('hello BC33')
// console.log('hello BC33')
// console.log('hello BC33')
// console.log('hello BC33')
// console.log('hello BC33')
// console.log('hello BC33')
// console.log('hello BC33')

// while
// do while
// for

// chung cho cả 3 vòng lặp :
//1. Điều kiện lặp
//2. Hành động cần thực hiện

// var  i = 10
// while(i < 10){
//     i = i + 1
//     console.log('Hello BC33')
// }

// while (i < 10){
//     var i = 0
//     i++
//     console.log('Hello BC33')
// }

// Bài tập 1

function demoWhile() {
    //B1: Lấy giá trị từ người dùng nhập vào input
    var value = document.getElementById('txtNum').value * 1
    // Number(value)
    // parseInt(value)
    // parseFloat(value)
    // console.log('value', value)
    // console.log({value})

    //B2: xác định điều kiện lặp
    var contentHtml = ''
    var i = 0
    while (i <= value) {
        // B3: Hành động cần thực hiện khi điều kiện đúng
        contentHtml += i + ' '
        // value = value - 1
        // value--
        i++ // i = i + 1
    }
    document.getElementById('resultBT1').innerHTML = contentHtml
}

function baiTap2() {
    var value = document.getElementById('textNumBT2').value * 1
    var contentHtml = ''
    var kq = 0
    while (value / 2 >= 1) {
        contentHtml += value / 2 + ' '
        value = value / 2
    }
    document.getElementById('resBT2').innerHTML = contentHtml
}

// do while
// var index = 100
// luôn luôn thực hiện hành động ít nhất 1 lần
// do{
//     console.log(index)
// }while(index > 1000)

// Bài tập 3:

function baiTap3() {
    var value = document.getElementById('textNumBT3').value * 1
    var i = 0
    var total = 0
    do {
        i++
        total += i
    } while (i < value)

    document.getElementById('resBT3').innerHTML = total
}

//for

// for(var i = 0; i <= 5; i= i + 2 ){
//     console.log(i)
// }










// Bài tập 4
function baiTap4() {
    var value = document.getElementById('textNumBT4').value * 1

    var contentHtml = ''
    for (var i = 0; i <= value; i = i + 2) {
        // if(i % 2 === 0){
        //     contentHtml += i + ' '
        // }
        contentHtml += i + ' '
    }

    document.getElementById('resBT4').innerHTML = contentHtml
}















// Vòng lặp lồng

var contentHtml1 = '' // biến global (biến khai báo ở ngoài function, ngoài cùng file) => dùng cho toàn bộ file từ sau khi khai báo biến

for (var i = 0; i < 5; i++) {
    //hành động của for - 1
    for (var j = 0; j < 5; j++) {
        // hành động của for - 2
        // console.log('BC33')
        contentHtml1 +='*' + ' ' // * * * * *
    }
    contentHtml1 += '\n'
}

console.log(contentHtml1)

// lệnh break

// var k = 0
// while(k <= 10){
//     console.log(k)
//     if(k >= 5){
//         break;
//     }
//     k++
// }

// lệnh continute

for(var i = 0;i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i)
    // console.log('hahah')
}

function demoReturn (){
    console.log('Lệnh trước khi return')
    if(true){
        return
    }
    console.log('Lệnh sau khi return')
}

demoReturn()