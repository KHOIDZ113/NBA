// =================== CẬP NHẬT NAVBAR VỚI AVATAR ===================
function updateNavbar() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const navbar = document.getElementById("navbar");

    if (user && navbar) {
        if (loginBtn) loginBtn.style.display = "none";
        if (signupBtn) signupBtn.style.display = "none";

        // Xóa avatar cũ (nếu có) để tránh chèn nhiều lần
        document.getElementById("user-avatar")?.remove();

        // Tạo avatar
        const avatarImg = document.createElement("img");
        avatarImg.id = "user-avatar";
        avatarImg.src = user.avatar;
        avatarImg.alt = "Avatar";
        avatarImg.style.cssText = `
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            margin-left: 10px;
            cursor: pointer;
        `;

        // Thêm tooltip hiển thị username khi hover
        avatarImg.title = `Xin chào, ${user.username}!`;

        navbar.appendChild(avatarImg);
    }
}

// =================== ĐĂNG KÝ TÀI KHOẢN ===================
document.getElementById("signup-form")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value.trim();
    const avatarInput = document.getElementById("signup-avatar")?.value.trim();

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    if (accounts.some(acc => acc.username === username)) {
        alert("Username đã tồn tại, vui lòng chọn username khác!");
        return;
    }

    const avatar = avatarInput || "https://via.placeholder.com/40";

    accounts.push({ username, password, avatar });
    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("Đăng ký thành công! Chuyển đến trang đăng nhập...");
    window.location.href = "login.html";
});

// =================== ĐĂNG NHẬP TÀI KHOẢN ===================
document.getElementById("login-form")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const user = accounts.find(acc => acc.username === username && acc.password === password);

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));

        alert("Đăng nhập thành công!");
        window.location.href = "index.html";  // Chuyển về trang chính
    } else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
});

// =================== GỌI HÀM CẬP NHẬT NAVBAR KHI LOAD TRANG ===================
window.addEventListener("load", updateNavbar);
