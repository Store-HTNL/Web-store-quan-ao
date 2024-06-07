function sanphamcantim(){
    let luutrusanpham = JSON.parse(localStorage.getItem('luutrusanpham')) || [];
    let danhSachSanPham = document.getElementById('danhsachsanphamcantim');
    let timkiem = document.getElementById('sanphamcantim').value;
    danhSachSanPham.innerHTML = '';
    let loaisanpham = luutrusanpham.filter(sanPham => sanPham.sanpham == timkiem);
    let tensanpham = luutrusanpham.findIndex(sanPham => sanPham.tensanpham == timkiem);
    if(tensanpham != -1){
        let row = document.createElement('div');
        row.classList.add('product-row');
        let sanpham = document.createElement('div');
        sanpham.classList.add('product-cell2');
        sanpham.innerHTML = `
            <div class="product-cell"><img class="pic1" src="${luutrusanpham[tensanpham].urlhinhanh}"></div>
            <div>
                <h3 class="name">${luutrusanpham[tensanpham].tensanpham}</h3>
                <p class="price">${luutrusanpham[tensanpham].gia}</p>
                <a class="chitiet-btn" href="trangsanpham.html">Chi tiết</a>
            </div>
        `;
        row.appendChild(sanpham);
        danhSachSanPham.appendChild(row);
        return;
    }
    else{
        for (let i = 1; i < loaisanpham.length; i += 3) {
            let row = document.createElement('div');
            row.classList.add('product-row');

            for (let j = i; j < i + 3 && j < loaisanpham.length; j++) {
                let sanpham = loaisanpham[j];
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
                    window.location.href = '/Đồ Án/TrangChu/chitietsanpham.html';
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
}
window.onload = function(){
};