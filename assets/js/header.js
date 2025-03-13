document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const headerElement = document.getElementById("header");

  if (!headerElement) {
    console.error("Không tìm thấy phần tử #header");
    return;
  }

  if (currentUser) {
    console.log("Đã đăng nhập, tải headerLogined");
    loadHeaderLogined();
  } else {
    console.log("Chưa đăng nhập, tải headerNotLogin");
    loadHeaderNotLogin();
  }
});

function loadHeaderLogined() {
  document.getElementById("header").innerHTML = `
    <div class="avatar-container" onclick="toggleMenu()">
      <img src="${
        JSON.parse(localStorage.getItem("currentUser")).avatar
      }" alt="Avatar" class="avatar" />
      <div class="dropdown-menu" id="dropdownMenu">
        <div class="menu-title">
          <strong id="fullNameMenu">${
            JSON.parse(localStorage.getItem("currentUser")).name
          }</strong>
        </div>
        <div class="menu-item">
          <a href="./account-detail.html">👤 Thông tin tài khoản</a>
        </div>
        <div class="menu-item">
          <a href="/saved-news.html">🔖 Tin bài đã lưu</a>
        </div>
        <div class="menu-item">
          <a id="logoutBtn">↩️ Thoát tài khoản</a>
        </div>
      </div>
    </div>
  `;
  document.getElementById("logoutBtn").addEventListener("click", logout);
}

function loadHeaderNotLogin() {
  document.getElementById("header").innerHTML = `
    <div class="category-item">
      <img src="./assets/img/account.svg" alt="Account" />
      <h2><a href="#" onclick="showPopup()">ĐĂNG NHẬP</a></h2>
    </div>
  `;
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    // Cập nhật tên và avatar lên menu nếu có
    if (currentUser.name) {
      document.getElementById("fullNameMenu").innerText = currentUser.name;
      document.getElementById("submenuUsername").innerText = currentUser.name;
    }

    if (currentUser.avatar) {
      document.querySelector(".avatar-container img").src = currentUser.avatar;
      document.getElementById("submenuAvatar").src = currentUser.avatar;
    }
  } else {
    console.warn("Chưa có currentUser trong localStorage");
  }
});

//Search
function searchGoogle(event) {
  event.preventDefault();
  let query = document.getElementById("search-input").value;
  if (query.trim() !== "") {
    let searchUrl = `https://www.google.com/search?q=site:www.yourwebsite.com "${query}"`;
    window.open(searchUrl, "_blank"); // Mở trong tab mới
  }
}
