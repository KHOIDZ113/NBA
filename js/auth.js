// =================== TOGGLE HIỆN/ẨN MẬT KHẨU ===================
document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', function () {
        const input = this.previousElementSibling;
        input.type = input.type === 'password' ? 'text' : 'password';
        this.textContent = input.type === 'password' ? '👁️' : '🙈';
    });
});

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
        window.location.href = "index.html";
    } else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
});

// =================== HIỂN THỊ AVATAR VÀ ẨN NÚT ĐĂNG NHẬP ===================
window.addEventListener("load", function () {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const navbar = document.getElementById("navbar");

    if (user) {
        if (loginBtn) loginBtn.style.display = "none";
        if (signupBtn) signupBtn.style.display = "none";

        const avatarImg = document.createElement("img");
        avatarImg.src = user.avatar;
        avatarImg.alt = "Avatar";
        avatarImg.style.width = "40px";
        avatarImg.style.height = "40px";
        avatarImg.style.borderRadius = "50%";
        avatarImg.style.objectFit = "cover";
        avatarImg.style.marginLeft = "10px";
        avatarImg.style.cursor = "pointer";

        navbar.appendChild(avatarImg);
    }
});
