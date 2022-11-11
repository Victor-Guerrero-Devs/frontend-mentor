const burgerBtn = document.querySelector("#burger-icon");
const xBtn = document.querySelector("#x-icon");
const sideDrawerEle = document.querySelector(".side-drawer");
const backDropEle = document.querySelector(".backdrop");

const showSideDrawer = () => {
  sideDrawerEle.classList.add("show");
  backDropEle.style.display = "block";
};

const closeSideDrawer = () => {
  sideDrawerEle.classList.remove("show");
  backDropEle.style.display = "none";
};

burgerBtn.addEventListener("click", showSideDrawer);
xBtn.addEventListener("click", closeSideDrawer);
