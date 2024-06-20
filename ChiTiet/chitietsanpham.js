function taisanpham() {
    const sanPhamChiTiet = JSON.parse(localStorage.getItem('sanPhamChiTiet'));
            document.getElementById("ten").textContent = sanPhamChiTiet.tensanpham;
            document.getElementById("gioithieu").textContent = sanPhamChiTiet.mota;
            document.getElementById("giatien").textContent = "Giá: " + sanPhamChiTiet.gia;
            document.getElementById("hinh").src = sanPhamChiTiet.urlhinhanh;
            document.getElementById("chitiet").textContent = sanPhamChiTiet.motachitiet;
}
window.onload = function(){
    taisanpham();
}