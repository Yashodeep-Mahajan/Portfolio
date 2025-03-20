function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Test

function toggleCategoryContent(category) {
  const categoryContent = document.getElementById(`${category}-content`);
  const arrow = document.querySelector(`#${category} .expand-arrow`);
  if (categoryContent.style.display === "none") {
    categoryContent.style.display = "block";
    arrow.textContent = "▲";
  } else {
    categoryContent.style.display = "none";
    arrow.textContent = "▼";
  }
}
