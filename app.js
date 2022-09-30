const searchBtn = document.querySelector("#search-btn");
const searchButtonContent = document.querySelector("#search-btn div");


searchBtn.addEventListener("click", () => {
  searchButtonContent.classList.toggle("loading");
})