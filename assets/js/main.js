// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // 1. Load header + footer includes
  document.querySelectorAll("[data-include]").forEach(el => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then(res => res.text())
      .then(data => {
        el.innerHTML = data;
      })
      .catch(err => console.error("Include error:", err));
  });

  // 2. Dark mode toggle
  const toggle = document.createElement("button");
  toggle.id = "darkModeToggle";
  toggle.textContent = localStorage.getItem("theme") === "dark" ? "☀️" : "🌙";
  document.body.appendChild(toggle);

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggle.textContent = isDark ? "☀️" : "🌙";
  });

  // 3. Custom cursor
  const cursor = document.createElement("div");
  cursor.className = "cursor";
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  document.addEventListener("mousedown", () => cursor.classList.add("click"));
  document.addEventListener("mouseup", () => cursor.classList.remove("click"));

  // Disable cursor on touch devices
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    cursor.style.display = "none";
    document.body.style.cursor = "auto";
  }
});
document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("mouseenter", () => cursor.classList.add("hover-link"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("hover-link"));
});
document.addEventListener("contextmenu", e => e.preventDefault());
