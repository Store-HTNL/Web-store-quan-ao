function hienThiDanhSachSanPhamAo() {
    let luutrusanpham = JSON.parse(localStorage.getItem('luutrusanpham')) || [];
    let danhSachSanPham = document.getElementById("danhsachsanphamao");
    danhSachSanPham.innerHTML = '';
    let row = document .createElement('div');
    row.classList.add('product-row');
    
    let sanPhamAo = luutrusanpham.filter(sanPham => sanPham.sanpham === "áo");
    for (let i = 0; i < sanPhamAo.length && i < 3; i++) {
        let sanpham = sanPhamAo[i];
        let img = document.createElement('div');
        let productCell1 = document.createElement('div');
        let productCell2 = document.createElement('div');
        img.classList.add('img');
        productCell1.classList.add('product-cell1');
        productCell2.classList.add('product-cell2');

        let hinhSanPham = document.createElement('img');
        hinhSanPham.classList.add('pic1');
        hinhSanPham.src = sanpham.urlhinhanh;
        let tenSanPham = document.createElement('h3');
        tenSanPham.classList.add('name');
        tenSanPham.textContent = sanpham.tensanpham;
        tenSanPham.title = sanpham.tensanpham;
        let giaSanPham = document.createElement('p');
        giaSanPham.classList.add('price');
        giaSanPham.textContent = sanpham.gia;
         productButton = document.createElement('a');
        productButton.classList.add('chitiet-btn');
        productButton.textContent = 'Chi tiết';
        productButton.onclick = () =>{
            localStorage.setItem('sanPhamChiTiet', JSON.stringify(sanpham));
            window.location.href = '/ChiTiet/chitietsanpham.html';
        }

        img.appendChild(hinhSanPham);
        productCell1.appendChild(tenSanPham);
        productCell1.appendChild(giaSanPham);
        productCell1.appendChild(productButton);


        productCell2.appendChild(img);
        productCell2.appendChild(productCell1);
        row.appendChild(productCell2);
    }
    danhSachSanPham.appendChild(row);
}
function hienThiDanhSachSanPhamQuan() {
    let luutrusanpham = JSON.parse(localStorage.getItem('luutrusanpham')) || [];
    let danhSachSanPham = document.getElementById("danhsachsanphamquan");
    danhSachSanPham.innerHTML = '';
    let sanPhamQuan = luutrusanpham.filter(sanPham => sanPham.sanpham === "quần");
    let row = document.createElement('div');
    row.classList.add('product-row');

    for (let i = 0; i < sanPhamQuan.length && i < 3; i++) {
        let sanpham = sanPhamQuan[i];
        let img = document.createElement('div');
        let productCell1 = document.createElement('div');
        let productCell2 = document.createElement('div');
        img.classList.add('img');
        productCell1.classList.add('product-cell1');
        productCell2.classList.add('product-cell2');
        
        let hinhSanPham = document.createElement('img');
        hinhSanPham.classList.add('pic1');
        hinhSanPham.src = sanpham.urlhinhanh;
        let tenSanPham = document.createElement('h3');
        tenSanPham.classList.add('name');
        tenSanPham.textContent = sanpham.tensanpham;
        let giaSanPham = document.createElement('p');
        giaSanPham.classList.add('price');
        giaSanPham.textContent = sanpham.gia;
        let productButton = document.createElement('a');
        productButton.classList.add('chitiet-btn');
        productButton.textContent = 'Chi tiết';
        productButton.onclick = () =>{
            localStorage.setItem('sanPhamChiTiet', JSON.stringify(sanpham));
            window.location.href = '../ChiTiet/chitietsanpham.html';
        }
        
        img.appendChild(hinhSanPham);
        productCell1.appendChild(tenSanPham);
        productCell1.appendChild(giaSanPham);
        productCell1.appendChild(productButton);

        productCell2.appendChild(img);
        productCell2.appendChild(productCell1);
        row.appendChild(productCell2);
    }
    danhSachSanPham.appendChild(row);
}
window.onload = function(){
    hienThiDanhSachSanPhamAo()
    hienThiDanhSachSanPhamQuan()
};
