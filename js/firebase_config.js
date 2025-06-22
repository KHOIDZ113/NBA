// Firebase config + init
const firebaseConfig = {
  apiKey: "AIzaSyDYsOaPf4cUK11ntd3nG4hmgfIiWvoTGvM",
  authDomain: "nbaproject-41edd.firebaseapp.com",
  projectId: "nbaproject-41edd",
  storageBucket: "nbaproject-41edd.firebasestorage.app",
  messagingSenderId: "251998912835",
  appId: "1:251998912835:web:c79d75d70002443e8aeff6",
  measurementId: "G-09Q7WMFVBN"
};
firebase.initializeApp(firebaseConfig);

// Đợi DOM load xong mới add sự kiện
document.addEventListener('DOMContentLoaded', function () {

  // Đăng ký tài khoản
  const signupButton = document.getElementById("signupButton");
  if (signupButton) {
    signupButton.addEventListener('click', function () {
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
      const username = document.getElementById("signup-username").value;
      const avatar = document.getElementById("signup-avatar").value;

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User registered:", user);
          alert("Đăng ký thành công! Đang chuyển về trang đăng nhập...");
          window.location.href = "login.html";
          return user.updateProfile({
            displayName: username,
            photoURL: avatar,
          });
        })
        .catch((error) => {
          console.error(error.message);
          alert("Lỗi đăng ký: " + error.message);
        });
    });
  }

  // Đăng nhập tài khoản
  const loginButton = document.getElementById("login-button");
  if (loginButton) {
    loginButton.addEventListener("click", function () {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed in:", user);
          alert("Đăng nhập thành công! Đang chuyển về trang chủ...");
          window.location.href = "index.html";
        })
        .catch((error) => {
          console.error(error.message);
          alert("Lỗi đăng nhập: " + error.message);
        });
    });
  }

  // Đăng xuất
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      firebase.auth().signOut()
        .then(() => {
          console.log("User signed out.");
          alert("Đã đăng xuất.");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error signing out:", error);
          alert("Lỗi khi đăng xuất: " + error.message);
        });
    });
  }

  // Đăng nhập với Google
  const loginGoogleBtn = document.getElementById("logInGoogleButton");
  if (loginGoogleBtn) {
    loginGoogleBtn.addEventListener("click", function () {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          console.log("User signed in with Google:", user);
          alert("Đăng nhập Google thành công!");
          // Xử lý sau đăng nhập
        })
        .catch((error) => {
          console.error("Google sign-in error:", error.message);
          alert("Lỗi đăng nhập Google: " + error.message);
        });
    });
  }

});
