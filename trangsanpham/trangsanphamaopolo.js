function hienThiDanhSachSanPhamQuan() {
    let luutrusanpham = JSON.parse(localStorage.getItem('luutrusanpham')) || [];
    let danhSachSanPham = document.getElementById("danhsachsanphamquan");
    danhSachSanPham.innerHTML = '';
    let row = document.createElement('div');
    row.classList.add('product-row');

    let sanPhamQuan = luutrusanpham.filter(sanPham => sanPham.loaisanpham.toLowerCase() === "áo polo");
    for (let i = 0; i < sanPhamQuan.length; i += 3) {
        let row = document.createElement('div');
        row.classList.add('product-row');

        for (let j = i; j < i + 3 && j < sanPhamQuan.length; j++) {
            let sanpham = sanPhamQuan[j];
            let productCell = document.createElement('div');
            let productCell1 = document.createElement('div');
            let productCell2 = document.createElement('div');
            productCell.classList.add('product-cell');
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
            productButton = document.createElement('a');
            productButton.classList.add('chitiet-btn');
            productButton.textContent = 'Chi tiết';
            productButton.onclick = () =>{
                localStorage.setItem('sanPhamChiTiet', JSON.stringify(sanpham));
                window.location.href = '../ChiTiet/chitietsanpham.html';
            }
            productCell.appendChild(hinhSanPham);
            productCell1.appendChild(tenSanPham);
            productCell1.appendChild(giaSanPham);
            productCell1.appendChild(productButton);
    
            productCell2.appendChild(productCell);
            productCell2.appendChild(productCell1);
            row.appendChild(productCell2);
        }

        danhSachSanPham.appendChild(row);
    }
}
window.onload = function(){
    hienThiDanhSachSanPhamQuan()
};