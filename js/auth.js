document.addEventListener("DOMContentLoaded", () => {
    // Xử lý đăng ký
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const username = document.getElementById("signup-username").value.trim();
            const password = document.getElementById("signup-password").value.trim();
            const avatar = document.getElementById("signup-avatar").value.trim() || "https://heucollege.edu.vn/upload/2025/02/hinh-avatar-hoat-hinh-003.webp";

            if (username && password) {
                const user = { username, password, avatar };
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("isLoggedIn", "true");

                alert("Đăng ký thành công! Đang chuyển về trang chủ...");
                window.location.href = "index.html";
            }
        });
    }

    // Xử lý đăng nhập
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const username = document.getElementById("login-username").value.trim();
            const password = document.getElementById("login-password").value.trim();
            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser && username === storedUser.username && password === storedUser.password) {
                localStorage.setItem("isLoggedIn", "true");

                alert("Đăng nhập thành công! Đang chuyển về trang chủ...");
                window.location.href = "index.html";
            } else {
                alert("Sai tài khoản hoặc mật khẩu!");
            }
        });
    }

    // Ẩn/hiện mật khẩu
    document.querySelectorAll(".toggle-password").forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const passwordInput = toggle.previousElementSibling;
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                toggle.textContent = "🙈";
            } else {
                passwordInput.type = "password";
                toggle.textContent = "👁️";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    // Xử lý nút ẩn/hiện mật khẩu
    document.querySelectorAll(".toggle-password").forEach(toggle => {
        toggle.addEventListener("click", () => {
            const passwordInput = toggle.previousElementSibling;
            passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        });
    });

    // Xử lý đăng ký
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("signup-username").value;
            const password = document.getElementById("signup-password").value;
            const avatar = document.getElementById("signup-avatar").value || 
                "https://heucollege.edu.vn/upload/2025/02/hinh-avatar-hoat-hinh-003.webp";

            localStorage.setItem("user", JSON.stringify({ username, password, avatar }));
            alert("Đăng ký thành công! Hãy đăng nhập.");
            window.location.href = "login.html";
        });
    }

    // Xử lý đăng nhập
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;
            const user = JSON.parse(localStorage.getItem("user"));

            if (user && username === user.username && password === user.password) {
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "index.html";
            } else {
                alert("Sai thông tin đăng nhập!");
            }
        });
    }
});
