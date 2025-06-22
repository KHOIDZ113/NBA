const shoes = [
  {
    name: "Nike Air Zoom BB NXT",
    color: "Đen & Đỏ",
    gender: "Nam",
    size: "41-45",
    image: "https://sneakerdaily.vn/wp-content/uploads/2023/09/Giay-Nike-Air-Zoom-BB-NXT-Dangerous-CK5707-001-1.jpg",
    price: "3.200.000₫"
  },
  {
    name: "Adidas Harden Vol.6",
    color: "Trắng & Xanh",
    gender: "Nam & Nữ",
    size: "38-46",
    image: "https://authentic-shoes.com/wp-content/uploads/2023/04/screenshot_2023.03.18_15.44.58.851_a08112534c694cde83d82316c16a0a9e-300x300.png",
    price: "2.800.000₫"
  },
  {
    name: "Puma MB.01 Rick and Morty",
    color: "Xanh lá & Đỏ",
    gender: "Nam",
    size: "40-44",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3KNK7to5Qd8K5bezMf0ymsfM5SMCmGl5yw&s",
    price: "4.100.000₫"
  },
  {
    name: "Nike LeBron 20 'Time Machine'",
    color: "Hồng & Xanh",
    gender: "Nam",
    size: "42-47",
    image: "https://i.ebayimg.com/images/g/19QAAOSwoIRjVgWs/s-l1200.jpg",
    price: "5.200.000₫"
  },
  {
    name: "Under Armour Curry Flow 10",
    color: "Trắng & Xanh biển",
    gender: "Nam",
    size: "41-45",
    image: "https://underarmour.scene7.com/is/image/Underarmour/3026293-100_DEFAULT?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
    price: "3.800.000₫"
  },
  {
    name: "Adidas D.O.N. Issue #3",
    color: "Đỏ & Trắng",
    gender: "Nam",
    size: "40-45",
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b6e15b316f774722b4f4ae4a0054080b_9366/D.O.N._Issue_3_Shoes_White_GY2829_01_standard.jpg",
    price: "2.400.000₫"
  },
  {
    name: "Nike KD 15 'Brooklyn Courts'",
    color: "Tím & Xanh",
    gender: "Nam",
    size: "41-46",
    image: "https://i.ebayimg.com/images/g/aJYAAOSwn7Nj3~ps/s-l400.jpg",
    price: "4.500.000₫"
  }
];

const shoeList = document.getElementById("shoeList");

shoes.forEach((shoe) => {
  const card = document.createElement("div");
  card.className = "shoe-card";
  card.innerHTML = `
    <img src="${shoe.image}" alt="${shoe.name}">
    <div class="shoe-info">
      <h3>${shoe.name}</h3>
      <p>${shoe.price}</p>
    </div>
  `;
  card.addEventListener("click", () => {
    localStorage.setItem("selectedShoe", JSON.stringify(shoe));
    window.location.href = "shoedetail.html";
  });
  shoeList.appendChild(card);
});

// Tìm kiếm theo tên giày
document.getElementById('searchInput').addEventListener('input', function () {
  const keyword = this.value.toLowerCase();
  const cards = document.querySelectorAll('.shoe-card');
  shoes.forEach((shoe, index) => {
    const match = shoe.name.toLowerCase().includes(keyword);
    cards[index].style.display = match ? 'block' : 'none';
  });
});


