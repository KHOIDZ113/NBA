const shoe = JSON.parse(localStorage.getItem("selectedShoe"));

if (shoe) {
    document.getElementById("shoeImage").src = shoe.image;
    document.getElementById("shoeName").textContent = shoe.name;
    document.getElementById("shoeColor").textContent = shoe.color;
    document.getElementById("shoeGender").textContent = shoe.gender;
    document.getElementById("shoeSize").textContent = shoe.size;
    document.getElementById("shoePrice").textContent = shoe.price;
}

function handlePurchase() {
    alert("🛒 Mua hàng thành công! Đang chuyển sang trang chủ...");
    setTimeout(() => {
        window.location.href = "shoesstore.html";
    }, 20000000000000000000000000000000000000000000000000000000);
}
