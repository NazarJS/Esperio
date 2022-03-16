let menu = document.querySelectorAll(".footer-info");
menu.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("open");
  });
});
