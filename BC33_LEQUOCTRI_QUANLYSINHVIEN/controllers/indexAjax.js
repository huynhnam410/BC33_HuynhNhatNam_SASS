//Code các chức năng thao với dữ liệu từ backend

//----------------------GET: lấy thống tin từ server về và hiển thị lên table tbody ------------------------------------

function getDataSinhVienApi() {
  var promise = axios({
    url: "https://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
    method: "GET",
  });

  //Thành công thì làm ?
  promise.then(function (result) {
    console.log("result", result.data);
    //gọi hàm để từ dữ liệu tạo ra thẻ tr trên tbody
    renderSinhVien(result.data);
  });

  //thất bại
  promise.catch(function (error) {
    console.log(error);
  });
}

//sau khi giao diện load xong thì sẽ tự động thực thi các hàm trong functio này
window.onload = function () {
  //gọi api lấy data từ backend
  getDataSinhVienApi();
  //
};

/**
 * Hàm này sẽ nhận vào 1 array (sinhVien) và trả ra output là string <tr>....</tr>
 * @param {*} arrSinhVien arrSinhVien là mảng các object sinhVien [sinhVien1,sinhVien2,...]
 * @returns trả ra 1 giá trị là 1 htmlString '<tr>...</tr> <tr>...</tr>'
 */
function renderSinhVien(arrSinhVien) {
  //param : input :arrSinhVien
  var html = ""; //output: string html
  for (var i = 0; i < arrSinhVien.length; i++) {
    var sv = arrSinhVien[i]; //Mỗi lần duyệt lấy ra 1 object sinhVien từ mảng {maSinhVien:'1',tenSinhVien:'...',...}
    html += `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.soDienThoai}</td>
                <td>${sv.loaiSinhVien}</td>
                <td>
                    <button class="btn btn-primary mr-2" onclick="chinhSua('${sv.maSinhVien}')">Sửa</button>
                    <button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')">Xoá</button>
                </td>
            </tr>
        `;
  }
  document.querySelector('tbody').innerHTML = html;
}


/*
--------------POST: thêm dữ liệu vào server
---------------------------------
 */


document.querySelector('#btnXacNhan').onclick = function () {
    //Lấy thông tin input từ người dùng: tạo ra format backend yêu cầu
    var sinhVien = new SinhVien ();
    sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
    sinhVien.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sinhVien.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sinhVien.email = document.querySelector('#email').value;
    sinhVien.soDienThoai = document.querySelector('#soDienThoai').value;
    sinhVien.diemToan = document.querySelector('#diemToan').value;
    sinhVien.diemLy = document.querySelector('#diemLy').value;
    sinhVien.diemHoa = document.querySelector('#diemHoa').value;
    
    console.log('sinhVien',sinhVien);

    //gọi api đưa dữ liệu về server
    var promise = axios ({
        url:'https://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
        method:'POST',
        data: sinhVien //dữ liệu gửi về server format BE quy định
    });

    promise.then(function(result){
        console.log(result.data);
        getDataSinhVienApi();
    });

    promise.catch(function(error){
        console.log(error);
    });

}