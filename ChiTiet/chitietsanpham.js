function taisanpham() {
    const sanPhamChiTiet = JSON.parse(localStorage.getItem('sanPhamChiTiet'));
            document.getElementById("ten").textContent = sanPhamChiTiet.tensanpham;
            document.getElementById("gioithieu").textContent = sanPhamChiTiet.mota;
            document.getElementById("giatien").textContent = "Giá: " + sanPhamChiTiet.gia;
            document.getElementById("hinh").src = sanPhamChiTiet.urlhinhanh;
}
window.onload = function(){
    taisanpham();
}
function doimau(size){
    switch(size){
        case "m":
            document.getElementById("m").classList.add("psizeactive");
            document.getElementById("l").classList.remove("psizeactive");
            document.getElementById("xl").classList.remove("psizeactive");
            document.getElementById("xxl").classList.remove("psizeactive");
            break;
        case "l":
            document.getElementById("m").classList.remove("psizeactive");
            document.getElementById("l").classList.add("psizeactive");
            document.getElementById("xl").classList.remove("psizeactive");
            document.getElementById("xxl").classList.remove("psizeactive");
            break;
        case "xl":
            document.getElementById("m").classList.remove("psizeactive");
            document.getElementById("l").classList.remove("psizeactive");
            document.getElementById("xl").classList.add("psizeactive");
            document.getElementById("xxl").classList.remove("psizeactive");
            break;
        case "xxl":
            document.getElementById("m").classList.remove("psizeactive");
            document.getElementById("l").classList.remove("psizeactive");
            document.getElementById("xl").classList.remove("psizeactive");
            document.getElementById("xxl").classList.add("psizeactive");
            break;
    }
}