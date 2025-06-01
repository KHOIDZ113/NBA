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
            image: "https://images2.thanhnien.vn/zoom/1200_630/528068263637045248/2023/12/10/406470800356403973746108424891982175917022n-17021878736951863905483-128-0-693-1080-crop-17021881169211004601429.jpg"
        },
        {
            title: "Cuộc đua MVP nóng lên",
            description: "Shai Gilgeous-Alexander ghi 51 điểm trong chiến thắng 137-128 trước Houston Rockets sáng ngày 4/3",
            image: "https://cdnmedia.webthethao.vn/uploads/2025-03-04/shai-gilgeous-alexander-nikola-jokic-mvp-ghi-51-diem-5.jpg"
        },
        {
            title: "Kỳ tích thị trường chuyển nhượng NBA 2023",
            description: "Các đội bóng đã chi hơn 1 tỷ đô la Mỹ trong 1 tiếng đầu của thị trường chuyển nhượng cầu thủ tự do NBA năm 2023",
            image: "https://cdnmedia.webthethao.vn/uploads/2023-07-01/chuyen-nhuong-nba-free-agency-ngay-1-cover-2.jpg"
        },
        {
            title: "Những ngôi sao tương lai của bóng rổ thế giới",
            description: "Victor Wembanyama và Chet Holmgren là hai ngôi sao đang rất được kỳ vọng tại NBA",
            image: "https://cdn-images.vtv.vn/thumb_w/640/562122370168008704/2023/12/31/photo-1-17040480299211341135439.jpg"
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
