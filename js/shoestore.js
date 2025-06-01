const shoes = [
    { name: "Nike Air Zoom BB NXT", color: "Đen & Đỏ", gender: "Nam", size: "41-45", image: "https://sneakerdaily.vn/wp-content/uploads/2023/09/Giay-Nike-Air-Zoom-BB-NXT-Dangerous-CK5707-001-1.jpg" },
    { name: "Adidas Harden Vol.6", color: "Trắng & Xanh", gender: "Nam & Nữ", size: "38-46", image: "https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2024/01/giay-the-thao-adidas-harden-stepback-3-white-aqua-gw4215-mau-trang-xanh-65b34c446af9e-26012024130804.jpg" },
    { name: "Puma Court Rider", color: "Hồng Neon", gender: "Nữ", size: "36-42", image: "https://www.jordan1.vn/wp-content/uploads/2023/09/378613_01.png_2df52466e29f4bf19fcaa3eea33b8443-300x296.png" },
    { name: "Under Armour Curry Flow", color: "Xanh Navy", gender: "Nam", size: "40-46", image: "https://www.jordan1.vn/wp-content/uploads/2023/09/3022893_409.png_77c2f15034cf4fa3b92f07195024f407.png" },
    { name: "Jordan Why Not 0.4", color: "Đen", gender: "Nam", size: "42-47", image: "https://authentic-shoes.com/wp-content/uploads/2023/04/54128156_85995f5a768a4eca951de5c8ee5c7339.png" },
    { name: "Peak Lou Williams", color: "Xám & Đỏ", gender: "Nam", size: "41-44",  image: "https://cdn.yousport.vn/Media/Products/160819030531843/peak-lou-williams-e91351a6.jpg" },
    { name: "ANTA KT5", color: "Trắng", gender: "Nam", size: "42-46", image: "https://thegioigiaythethao.vn/images/Upload/images/Giay-nike/giay-nike-kyrie-infinity-ep-dc9134-400/giay-nike-kyrie-infinity-ep-dc9134-400%20(4).jpg" },
    { name: "Li-Ning Wade All City", color: "Đỏ & Đen", gender: "Nam", size: "41-45", image: "https://authentic-shoes.com/wp-content/uploads/2023/07/Screenshot_2023.08.09_13.14.29.175.png" },
    { name: "Nike LeBron Witness", color: "Trắng & Vàng", gender: "Nam", size: "40-44", image: "https://authentic-shoes.com/wp-content/uploads/2023/04/screenshot_2023.02.28_12.58.34.589_9b3299ca25e2419a86bde82aaf41a901.png" },
    { name: "Adidas D Rose 11", color: "Xanh biển", gender: "Nam", size: "41-45", image: "https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/01/gia-y-the-thao-adidas-d-rose-11-fy9988-ma-u-xanh-63be2c706901f-11012023102640.jpg" },
    { name: "New Balance Two WXY", color: "Xanh rêu", gender: "Nam", size: "42-45", image: "https://www.glab.vn/storage/products/2024/05/10/663dbba8a3597.jpg" },
    { name: "Nike Kyrie Infinity", color: "Tím & Đen", gender: "Nam & Nữ", size: "39-44", image: "https://authentic-shoes.com/wp-content/uploads/2023/05/Nike-Kyrie-8-Infinity-Regal-Purp.png" },
    { name: "Under Armour Lockdown 5", color: "Trắng & Đen", gender: "Nam", size: "41-45", image: "https://authentic-shoes.com/wp-content/uploads/2023/04/3023949-13-under-armour-white-original-imafyy3hagnqcedj_64c74283b75941ff846cfaef2e4964d9.png" },
    { name: "Puma MB.01", color: "Cam Neon", gender: "Nam", size: "40-44", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIRt9_AAE5TcXqXCVq5ZZw35i_iKYO2u4gg&s" },
    { name: "ANTA Shock The Game", color: "Xanh ngọc", gender: "Nam", size: "42-46", image: "https://giaybongro.vn/upload/images/anta/KT4_low_g/5586_1553375882.jpg" },
    { name: "Nike Precision 5", color: "Đen tuyền", gender: "Nam", size: "41-44", image: "https://bizweb.dktcdn.net/100/347/092/products/f9599faf-0739-4c3d-8214-34396233f114.jpg?v=1679425972437" },
    { name: "Adidas Pro Bounce", color: "Trắng & Cam", gender: "Nam", size: "40-44", image: "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2022/07/gia-y-the-thao-adidas-pro-bounce-2018-low-white-fw0903-62cd3e2757e62-12072022162559.jpg" },
    { name: "Peak Streetball Master", color: "Đỏ & Trắng", gender: "Nam", size: "41-45", image: "https://product.hstatic.net/200000940675/product/e39115a-13_31cffb21993f4c1cb908ac8e6de4a592.jpg" },
    { name: "Li-Ning Sonic 9", color: "Tím than", gender: "Nam", size: "41-46", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4xvkvi5YJNwyMWWsBZ648iO3P6sVVb1o4Q&s" },
    { name: "Nike GT Jump", color: "Vàng & Xanh", gender: "Nam & Nữ", size: "38-45", image: "https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2024/10/giay-the-thao-nike-gt-jump-dj9431-300-phoi-mau-size-45-5-6718a5e2d9f46-23102024142938.jpg" }
];

const shoeList = document.getElementById('shoeList');
const detailSection = document.getElementById('detailSection');

shoes.forEach((shoe, index) => {
    const btn = document.createElement('button');
    btn.className = "shoe-button";
    btn.textContent = shoe.name;
    btn.onclick = () => showDetail(index);
    shoeList.appendChild(btn);
});

function showDetail(index) {
    const shoe = shoes[index];
    document.getElementById('shoeName').textContent = shoe.name;
    document.getElementById('shoeColor').textContent = shoe.color;
    document.getElementById('shoeGender').textContent = shoe.gender;
    document.getElementById('shoeSize').textContent = shoe.size;
    document.getElementById('shoeImage').src = shoe.image;
    document.getElementById('shoeImage').alt = shoe.name;
    detailSection.style.display = 'block';
}

function closeDetail() {
    detailSection.style.display = 'none';
}

// Tìm kiếm
document.getElementById('searchInput').addEventListener('input', function () {
    const keyword = this.value.toLowerCase();
    const buttons = document.querySelectorAll('.shoe-button');
    shoes.forEach((shoe, index) => {
        buttons[index].style.display = shoe.name.toLowerCase().includes(keyword) ? 'block' : 'none';
    });
});
