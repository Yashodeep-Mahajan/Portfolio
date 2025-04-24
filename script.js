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

// function showTab(tabId) {
//   const contents = document.querySelectorAll(".tab-content");
//   contents.forEach((content) => {
//     content.style.display = "none";
//     content.style.marginTop = "0";
//   });
//   const activeTab = document.getElementById(tabId);
//   if (activeTab) {
//     activeTab.style.display = "block";
//     activeTab.style.marginTop = "2rem";
//   }
// }

function showTab(tabId) {
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => {
    content.style.display = "none";
    content.style.marginTop = "0";
  });

  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.style.display = "block";
    activeTab.style.marginTop = "2rem";
  }

  // Add expand class to documentation section
  const docSection = document.getElementById("documentation");
  if (docSection && !docSection.classList.contains("expand")) {
    docSection.classList.add("expand");
  }
}
