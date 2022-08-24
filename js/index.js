/**
 * PROJECT: STUDENT MANAGEMENT (CRUD)
 * Features:
 *     1. Thêm 1 sinh viên mới
 *     2. Hiển thị danh sách sinh viên
 *     3. Cập nhật sinh viên
 *     4. Xoá sinh viên
 *     5. Tìm kiếm mã sinh viên + tên
 * Design: ready
 * Phân tích lớp đối tượng: Student
 *    + id
 *    + name
 *    + email
 *    + dob
 *    + course
 *    + math
 *    + physic
 *    + chemistry
 *    + calcGPA()
 *
 */

var studentList = [];

function createStudent() {
  // 1. lấy thông tin từ input
  var studentId = document.getElementById("txtMaSV").value;
  var studentName = document.getElementById("txtTenSV").value;
  var studentEmail = document.getElementById("txtEmail").value;
  var studentDob = document.getElementById("txtNgaySinh").value;
  var studentCourse = document.getElementById("khSV").value;
  var studentMath = document.getElementById("txtDiemToan").value;
  var studentPhysic = document.getElementById("txtDiemLy").value;
  var studentChemistry = document.getElementById("txtDiemHoa").value;

  //   document.querySelector(".form-control")
  // document.querySelectorAll(".form-control")
  // document.getElementsByClassName("form-control")

  // 2. tạo đối tượng sinh viên

  var student = new Student(
    studentId,
    studentName,
    studentEmail,
    studentDob,
    studentCourse,
    studentMath,
    studentPhysic,
    studentChemistry
  );

  console.log(student);

  ///* ------------------------- Kiểm tra dữ liệu đầu vào ----------------------------------
  /*
    Kiểm tra rỗng
  */
    var valid = true;
    //.trim(): Loại bỏ khoảng trắng đầu và cuối của chuỗi Ví dụ:     => ''
    
    valid &= kiemTraRong(student.id,'#spanMaSV','Mã SV') & kiemTraRong(student.name,'#spanTenSV','Tên sinh viên') & kiemTraRong(student.email,'#spanEmailSV','email') & kiemTraRong(student.dob,'#spanNgaySinh','Ngày sinh') & kiemTraRong(student.math,'#spanToan','Điểm toán') & kiemTraRong(student.physic,'#spanLy','Điểm lý') & kiemTraRong(student.chemistry,'#spanHoa','Điểm hoá');

    if(!valid){
      return;
    }


  // 3. push đối tượng sinh viên vào danh sách
  studentList.push(student);
  //Gọi hàm tạo table sau khi thêm 1 sinh viên mới vào
  // console.table(studentList); 
  renderStudentList(studentList);

  //gọi hàm lưu vào localstorage sau khi thêm sinh viên
  saveLocalStorage(studentList, 'arrSV');
}
//             0                                  1                                    2
// [{maSinhVien:'1',tenSinhVien:'A',...},{maSinhVien:'2',tenSinhVien:'B',...},{maSinhVien:'3',tenSinhVien:'C',...}]
var name1 = 'Khải';
var string = `hello ${name1} đã đến hệ thống`;


/**
 * Đây là hàm nhận vào 1 mảng sinh viên object ([{},{},{}]) và trả về 1 htmlString
 * @param {*} arrSV : [{},{},{}] tham số là arr các object sinh viên
 * @return kết quả trả về là 1 string HTML các thẻ <tr></tr>
 */
function renderStudentList(arrSV) { //input : ??? [{maSinhVien:'1',tenSinhVien:'A',...},{maSinhVien:'2',tenSinhVien:'B',...},{maSinhVien:'3',tenSinhVien:'C',...}]
  var output = '';
  for (var index = 0; index < arrSV.length; index++) {
    var obSinhVien = arrSV[index];
    obSinhVien.calcGPA = function () {
      return (Number(this.math) + Number(this.physic) + Number(this.chemistry)) / 3;
    };
    var trSV = `
        <tr>
          <td>${obSinhVien.id}</td>
          <td>${obSinhVien.name}</td>
          <td>${obSinhVien.email}</td>
          <td>${obSinhVien.dob}</td>
          <td>${obSinhVien.course}</td>
          <td>${obSinhVien.calcGPA()}</td>
          <td>
            <button class="btn btn-danger" onclick="delStudent('${obSinhVien.id}')">Del</button>
            <button class="btn btn-primary" onclick="editStudent('${obSinhVien.id}')">Update</button>
          </td>
        </tr>
      `;

    output += trSV;
  }
  document.querySelector('tbody').innerHTML = output;
  return output;
}
//studentList = [{1},{2},{3}]
function editStudent(idClick) {
  var svEdit = null;
  for (var index = 0; index < studentList.length; index++) {
    if (studentList[index].id == idClick) {
      //Tại vị trí này tìm thấy idClick = id object trong mảng
      svEdit = studentList[index];
      break;
    }
  }
  if (svEdit !== null) {
    //Đưa dữ liệu lên các control input
    document.querySelector('#txtMaSV').value = svEdit.id;
    document.querySelector('#txtTenSV').value = svEdit.name;
    document.querySelector('#txtEmail').value = svEdit.email;
    document.querySelector('#txtNgaySinh').value = svEdit.ngaySinh;
    document.querySelector('#khSV').value = svEdit.course;
    document.querySelector('#txtDiemToan').value = svEdit.math;
    document.querySelector('#txtDiemLy').value = svEdit.physic;
    document.querySelector('#txtDiemHoa').value = svEdit.chemistry;
  }
}




function delStudent(idClick) { // input id: giá trị người dùng click
  //output: index    //                 0   1   2
  var indexDel = -1; // studentList = [{1},{2},{3}] studentList[2].name ='abc';
  for (var index = studentList.length - 1; index >= 0; index--) {
    //Mỗi lần duyệt lấy ra 1 phần tử của mảng so với input người dùng click
    if (studentList[index].id == idClick) {
      // indexDel = index; //Lưu lại vị trí id click = sinhVien có mã trùng với idClick
      // break; //thoát ra khỏi vòng lặp
      studentList.splice(index, 1);
    }
  }
  renderStudentList(studentList);

  // saveLocalStorage(studentList, 'arrSV');
  // if (indexDel !== -1) { //tìm thấy
  //   studentList.splice(indexDel, 1);
  //   //Gọi lại hàm render table mới
  //   //Lưu danh sách sau khi xoá vào storage
  // }
}


//Khi người dùng thay đổi sau đó bấm nút update 
function updateStudent() {
  var svUpdate = new Student();
  svUpdate.id = document.querySelector('#txtMaSV').value;
  svUpdate.name = document.querySelector('#txtTenSV').value;
  svUpdate.email = document.querySelector('#txtEmail').value;
  svUpdate.dob = document.querySelector('#txtNgaySinh').value;
  svUpdate.course = document.querySelector('#khSV').value;
  svUpdate.physic = document.querySelector('#txtDiemLy').value;
  svUpdate.chemistry = document.querySelector('#txtDiemHoa').value;
  svUpdate.math = document.querySelector('#txtDiemToan').value;
  console.log(svUpdate);
  //Duyệt qua từng object trong studentList tìm ra vị trí của object cần thay đổi
  //                 0      1      2
  //studentList = [{id:1},{id:2},{id:3}]
  let indexEdit = -1;
  for (var index = 0; index < studentList.length; index++) {
    if (studentList[index].id === svUpdate.id) {
      indexEdit = index; //1
      break;
    }
  }
  if (indexEdit !== -1) {
    //Nếu tìm thấy vị trí trong mảng thì lấy object trong mảng gán lại = object trên giao diện người dùng thay đổi
    // studentList[indexEdit] = svUpdate;
    studentList[indexEdit].name = svUpdate.name;
    studentList[indexEdit].email = svUpdate.email;
    studentList[indexEdit].dob = svUpdate.dob;
    studentList[indexEdit].course = svUpdate.course;
    studentList[indexEdit].physic = svUpdate.physic;
    studentList[indexEdit].chemistry = svUpdate.chemistry;
    studentList[indexEdit].math = svUpdate.math;
    //Gọi hàm rendertable truyền cho hàm mảng mới
    renderStudentList(studentList);
  }
}
/*
  Các phương thức của localstorage 
  + getItem('key'): Lấy ra giá trị theo key trong localstorage (tab Application)
  + setItem('key',giaTriLuu): Lưu vào storage 1 giá trị (phải là primitive value - string, number, boolean) với key là tên của storage.
  + removeItem('key'): Xoá đi giá trị trong localstorage theo key

  + JSON.stringify(object) => string : Chuyển đổi từ 1 object sang string loại bỏ phương thức (function)
  + string => JSON.parse(string): Chuyển đổi từ string (json) về object
  var sinhVien = {
    id:1,
    name:'Nguyễn Văn A'
  }
  '{id:1,name:"Nguyễn Văn A"}'
*/
/**
 * Hàm lưu trữ object({}) hoặc array ([]) vào localstorage
 * @param {*} ob Dữ liệu cần lưu 
 * @param {*} key keyName trong localstorage
 */

function saveLocalStorage(ob, key) { // {} , []
  var str = JSON.stringify(ob);
  localStorage.setItem(key, str);
}

/**
 * Hàm nhận vào keyName để lấy ra giá trị từ localstorage theo key đó
 * @param {*} key : tên của item trong localStorage
 * @returns trả về object được lấy ra theo key
 */

function getLocalStorage(key) {
  //Lấy dữ liệu từ localstorage ra (dữ liệu lấy là string)
  if (localStorage.getItem(key)) {
    var str = localStorage.getItem(key);
    //Parse dữ liệu về lại object
    var ob = JSON.parse(str);
    return ob;
  }
  return undefined;
}

//đợi html js load xong thì sẽ động thực thi
window.onload = function () {
  //Lấy ra array sinh viên từ localstorage gán vào studenList
  studentList = getLocalStorage('arrSV');
  console.log('studentList', studentList);
  if (studentList == undefined) {
    studentList = [];
  }
  debugger;
  renderStudentList(studentList);
}
// searchStudent();hoisting
var searchStudent = function () {  //expression function(Không hỗ hoisting)
  //input: tuKhoa : string
  var tuKhoa = document.querySelector('#txtSearch').value; //a
  tuKhoa = removeVietnameseTones(tuKhoa);// nguyễn => nguyen
  //output: ?? []: arraySinhVien
  var output = [];
  //process:
  //B1: duyệt qua từng phần tử của mảng 
  //B2: Kiểm tra tên có chứa từ khoá hay không
  //B3: Nếu có thì đưa object đó vào output
  //                  0        1         2
  // studentList = [{id,name},{id,name},{id,name}]
  for (var index = 0; index < studentList.length; index++) {
    // nguyễn văn a.search('a') => 11
    // nguyễn văn b.search('a') => -1
    // nguyễn văn c.search('a') => -1
    var tenSinhVien = removeVietnameseTones(studentList[index].name); // => nguyen van a.search(nguyen)
    if (tenSinhVien.search(tuKhoa) != -1 || studentList[index].id == tuKhoa) {
      //Tìm thấy => add object tại vị trí đó vào output
      output.push(studentList[index]);
    }
  }
  //Dùng output render ra table
  renderStudentList(output);
}
//Dom đến txtSearch cài đặt sự kiện oninput cho nó
document.querySelector('#txtSearch').oninput = searchStudent;
//Tìm kiếm
document.querySelector('#btnSearch').onclick = searchStudent;


function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
  return str;
}
