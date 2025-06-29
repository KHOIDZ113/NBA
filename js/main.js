document.addEventListener("DOMContentLoaded", () => {
  // ================== QUẢN LÝ TÀI KHOẢN ==================
  firebase.auth().onAuthStateChanged((user) => {
    const authLinks = document.getElementById("auth-links");
    const userInfo = document.getElementById("user-info");
    const userAvatarImg = document.getElementById("user-avatar-img");
    const userName = document.getElementById("user-name");

    if (user) {
      console.log("User is signed in:", user);
      if (authLinks && userInfo && userAvatarImg && userName) {
        authLinks.style.display = "none";
        userInfo.style.display = "flex";
        userAvatarImg.src = user.photoURL || "https://via.placeholder.com/42";
        userName.textContent = user.displayName || "User";
      }
    } else {
      console.log("No user is signed in.");
      if (authLinks && userInfo) {
        authLinks.style.display = "flex";
        userInfo.style.display = "none";
      }
    }
  });

  // Xử lý đăng xuất
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      firebase.auth().signOut().then(() => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
        window.location.reload();
      });
    });
  }

  // ================== QUẢN LÝ TIN TỨC ==================
  const newsData = [
    {
      title: "Lakers giành vé vào vòng Playoff",
      description:
        "Lakers chính thức có mặt ở vòng Playoff sau chiến thắng kịch tính đêm qua.",
      image:
        "https://images2.thanhnien.vn/zoom/1200_630/528068263637045248/2023/12/10/406470800356403973746108424891982175917022n-17021878736951863905483-128-0-693-1080-crop-17021881169211004601429.jpg",
    },
    {
      title: "Cuộc đua MVP nóng lên",
      description:
        "Shai Gilgeous-Alexander ghi 51 điểm trong chiến thắng 137-128 trước Houston Rockets sáng ngày 4/3",
      image:
        "https://cdnmedia.webthethao.vn/uploads/2025-03-04/shai-gilgeous-alexander-nikola-jokic-mvp-ghi-51-diem-5.jpg",
    },
    {
      title: "Kỳ tích thị trường chuyển nhượng NBA 2023",
      description:
        "Các đội bóng đã chi hơn 1 tỷ đô la Mỹ trong 1 tiếng đầu của thị trường chuyển nhượng cầu thủ tự do NBA năm 2023",
      image:
        "https://cdnmedia.webthethao.vn/uploads/2023-07-01/chuyen-nhuong-nba-free-agency-ngay-1-cover-2.jpg",
    },
  ];

  const newsList = document.getElementById("news-list");
  const modal = document.getElementById("news-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const closeModal = document.querySelector(".close-btn");

  if (newsList) {
    newsData.forEach((news, index) => {
      const newsItem = document.createElement("div");
      newsItem.classList.add("news-item");

      const img = document.createElement("img");
      img.src = news.image;
      img.alt = "News Image";

      const title = document.createElement("span");
      title.textContent = news.title;

      const button = document.createElement("button");
      button.textContent = "Xem chi tiết";
      button.addEventListener("click", () => showNews(index));

      newsItem.appendChild(img);
      newsItem.appendChild(title);
      newsItem.appendChild(button);
      newsList.appendChild(newsItem);
    });
  }

  // Hiển thị modal khi bấm "Xem chi tiết"
  function showNews(index) {
    if (!modal || !modalTitle || !modalImage || !modalDescription) return;

    const news = newsData[index];
    modalTitle.textContent = news.title;
    modalImage.src = news.image;
    modalDescription.textContent = news.description;
    modal.style.display = "flex";
  }

  // Đóng modal
  if (closeModal && modal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});
