document.addEventListener("DOMContentLoaded", () => {
    // ================== QUẢN LÝ TÀI KHOẢN ==================
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const user = JSON.parse(localStorage.getItem("user"));
    const authLinks = document.getElementById("auth-links");
    const userInfo = document.getElementById("user-info");
    const userAvatarImg = document.getElementById("user-avatar-img");
    const userName = document.getElementById("user-name");

    if (isLoggedIn === "true" && user) {
        authLinks.style.display = "none";
        userInfo.style.display = "flex";
        userAvatarImg.src = user.avatar;
        userName.textContent = user.username;
    }

    // Xử lý đăng xuất
    document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
        window.location.reload();
    });

    // ================== QUẢN LÝ TIN TỨC ==================
    const newsData = [
        {
            title: "Lakers giành vé vào vòng Playoff",
            description: "Lakers chính thức có mặt ở vòng Playoff sau chiến thắng kịch tính đêm qua.",
            image: "https://byvn.net/Cbhc"
        },
        {
            title: "Cuộc đua MVP nóng lên",
            description: "Nhiều ngôi sao đang cạnh tranh quyết liệt cho danh hiệu MVP mùa này.",
            image: "https://byvn.net/9In6"
        },
        {
            title: "Thị trường chuyển nhượng biến động",
            description: "Các đội bóng thực hiện những thương vụ chuyển nhượng quan trọng trước giai đoạn cuối mùa giải.",
            image: "https://byvn.net/cXCF"
        },
        {
            title: "Tân binh gây ấn tượng",
            description: "Một ngôi sao trẻ đang tạo dấu ấn mạnh mẽ ngay trong mùa giải đầu tiên tại NBA.",
            image: "https://byvn.net/e4WR"
        }
    ];

    const newsList = document.getElementById("news-list");
    const modal = document.getElementById("news-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close-btn");

    // Hiển thị danh sách tin tức
    newsData.forEach((news, index) => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");

        newsItem.innerHTML = `
            <img src="${news.image}" alt="News Image">
            <span>${news.title}</span>
            <button onclick="showNews(${index})">Xem chi tiết</button>
        `;

        newsList.appendChild(newsItem);
    });

    // Hiển thị modal khi bấm "Xem chi tiết"
    window.showNews = (index) => {
        modalTitle.textContent = newsData[index].title;
        modalImage.src = newsData[index].image;
        modalDescription.textContent = newsData[index].description;
        modal.style.display = "flex";
    };

    // Đóng modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
