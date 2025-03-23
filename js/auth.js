// =================== TOGGLE HIỆN/ẨN MẬT KHẨU ===================
document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', function () {
        const input = this.previousElementSibling;
        const type = input.type === 'password' ? 'text' : 'password';
        input.type = type;
        this.textContent = type === 'password' ? '👁️' : '🙈';
    });
});

// =================== ĐĂNG KÝ TÀI KHOẢN ===================
document.getElementById("signup-form")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value.trim();
    const avatarInput = document.getElementById("signup-avatar")?.value.trim();

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Kiểm tra nếu username đã tồn tại
    if (accounts.some(acc => acc.username === username)) {
        alert("Username đã tồn tại, vui lòng chọn username khác!");
        return;
    }

    // Nếu không có avatar, đặt avatar mặc định
    const avatar = avatarInput || "https://via.placeholder.com/40";

    // Lưu tài khoản vào localStorage
    accounts.push({ username, password, avatar });
    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("Đăng ký thành công! Chuyển đến trang đăng nhập...");
    window.location.href = "signin.html"; // Kiểm tra đường dẫn trang đăng nhập
});

// =================== ĐĂNG NHẬP TÀI KHOẢN ===================
document.getElementById("login-form")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const user = accounts.find(acc => acc.username === username && acc.password === password);

    if (user) {
        // Lưu tài khoản đăng nhập vào localStorage
        localStorage.setItem("currentUser", JSON.stringify(user));

        alert("Đăng nhập thành công!");
        window.location.href = "home.html"; // Kiểm tra đường dẫn trang Home
    } else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
});

// =================== HIỂN THỊ AVATAR TRÊN NAVBAR ===================
window.addEventListener("load", function () {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (user) {
        const avatarImg = document.createElement("img");
        avatarImg.src = user.avatar;
        avatarImg.alt = "Avatar";
        avatarImg.style.width = "40px";
        avatarImg.style.height = "40px";
        avatarImg.style.borderRadius = "50%";
        avatarImg.style.objectFit = "cover";
        avatarImg.style.marginLeft = "10px";

        const navbar = document.querySelector(".navbar") || document.getElementById("navbar");

        if (navbar) {
            navbar.appendChild(avatarImg);
        } else {
            console.error("Navbar không tìm thấy! Hãy kiểm tra HTML.");
        }
    }
});
