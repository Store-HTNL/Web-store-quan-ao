function themsanpham() {
    let masanpham = document.getElementById('masanpham').value;
    let tensanpham = document.getElementById('tensanpham').value;
    let sanpham = document.getElementById('sanpham').value;
    let phanloai = document.getElementById('phanloai').value;
    let urlhinhanh = document.getElementById('urlhinhanh').value;
    let mota = document.getElementById('mota').value;
    let thuonghieuSP = document.getElementById('thuonghieuSP').value;
    let SLtonkho = document.getElementById('SLtonkho').value;
    let SLthucte = document.getElementById('SLthucte').value;
    let gia = document.getElementById('gia').value;
    let luutrusanpham = JSON.parse(localStorage.getItem('luutrusanpham')) || [];
    let sanphamdaco = luutrusanpham.find(luutrusanpham => luutrusanpham.tensanpham === tensanpham);

    if (sanphamdaco) {
        document.getElementById("displayData").textContent = "Sản phẩm không hợp lệ hoặc đã tồn tại!";
        return;
    }

    luutrusanpham.push({ masanpham, tensanpham, sanpham, phanloai, urlhinhanh, mota, thuonghieuSP, SLtonkho, SLthucte, gia});

    localStorage.setItem('luutrusanpham', JSON.stringify(luutrusanpham));
    nutchuensanpham();
    updatesanpham();
    alert('Thêm thành công!');
}
window.onload = function() {
    updatesanpham();
    nutchuensanpham();
}
function updatesanpham(){
    let luutrusanpham = JSON.parse(localStorage.getItem('luutrusanpham')) || [];
    let danhSachSanPham = document.getElementById('danhSachSanPham');
    danhSachSanPham.innerHTML = '';

    luutrusanpham.forEach((sanpham) => {
        let listItem = document.createElement('li');
        listItem.textContent = sanpham.masanpham + ' ' + sanpham.tensanpham;
        danhSachSanPham.appendChild(listItem);
    });
}
function xoasanpham(){
    let macanxoa = document.getElementById('tencanxoa').value
    let luutrusanpham = JSON.parse(localStorage.getItem('luutrusanpham')) || [];
    let sanphamcanxoa = luutrusanpham.findIndex(luutrusanpham => luutrusanpham.tensanpham === macanxoa);

    if (sanphamcanxoa !== -1) {
        luutrusanpham.splice(sanphamcanxoa, 1);
        localStorage.setItem('luutrusanpham', JSON.stringify(luutrusanpham));
        updatesanpham()
        alert('Xoá sản phẩm thành công')
        return;
    }
    alert('Không tìm thấy sản phẩm!');
}
function nutchuensanpham(){
    let luutrusanpham = JSON.parse(localStorage.getItem('luutrusanpham')) || [];
    let nutchuyensanpham = document.getElementById("chuyensanpham");

    luutrusanpham.forEach((sanpham, index) => {
    let button = document.createElement("button");
    button.textContent = sanpham.tensanpham;
    button.addEventListener("click", () => taisanpham(index));
    nutchuyensanpham.appendChild(button);
    });
}
function taisanpham(index) {
    let luutrusanpham = JSON.parse(localStorage.getItem('luutrusanpham')) || [];
    let sanpham = luutrusanpham[index];
    document.getElementById("ten").textContent = sanpham.tensanpham;
    document.getElementById("gioithieu").textContent = sanpham.mota;
    document.getElementById("giatien").textContent = "Giá: " + sanpham.gia;
    document.getElementById("hinh").src = sanpham.urlhinhanh;
}

function chitietsanphambt(){
    taisanpham(0);
    let sanpham = document.getElementById('sanphamscreen');
    let quanly = document.getElementById('quanly');
    quanly.style.display = 'none';
    sanpham.style.display = 'block';
}
function quanlysanphambt(){
    let sanpham = document.getElementById('sanphamscreen');
    let quanly = document.getElementById('quanly');
    quanly.style.display = 'block';
    sanpham.style.display = 'none';
}