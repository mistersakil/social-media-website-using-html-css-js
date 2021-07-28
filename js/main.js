const body = document.body;
const header = document.querySelector("#header");
const main = document.querySelector("#main");
const leftSidebar = document.querySelector("#leftSidebar");
const rightSidebar = document.querySelector("#rightSidebar");
const createNewPost = document.querySelector(".main .container .post");
const publishedPost = document.querySelectorAll(".postPublished");
/* Navbar sticky */
// const logoImg = document.querySelector(".header .row .left .logo .img");
// const profilePic = document.querySelector(".header .row .right .profile .img");
// const navLink = document.querySelectorAll(".header .row .center .nav .link");
// const scrollEventHandler = function () {
//   if (window.scrollY > 100) {
//     isSticky(header);
//     isSticky(logoImg);
//     isSticky(profilePic);
//     isSticky(navLink);
//   }
//   if (window.scrollY == 0) {
//     isSticky(header, false);
//     isSticky(logoImg, false);
//     isSticky(profilePic, false);
//     isSticky(navLink, false);
//   }
// };
// const isSticky = (element, add = true) => {
//   let check = (item = element) => {
//     add ? item.classList.add("sticky") : item.classList.remove("sticky");
//   };
//   if (element.length) {
//     element.forEach((item) => {
//       check(item);
//     });
//   } else {
//     check();
//   }
// };

// window.onscroll = () => {
//   scrollEventHandler();
// };

/* Navbar sticky */

/**   Setting Menu Toggler **/

const settingMenuBox = document.querySelector(".header .row .navSetting ");
const settingsMenuIcon = document.querySelector("#settingsMenuIcon");

settingsMenuIcon.onclick = function (event) {
  event.stopPropagation();
  settingMenuBox.classList.toggle("active");
};
body.onclick = function () {
  if (settingMenuBox.classList.contains("active")) {
    settingMenuBox.classList.remove("active");
  }
};
/**   End: Setting Menu Toggler **/

/**  Theme toggler  **/
const themeChangeIcon = document.querySelector("#themeChangeIcon");
themeChangeIcon.onclick = function () {
  const dark = "dark";
  this.title = this.title === "Light Theme" ? "Dark Theme" : "Light Theme";
  this.classList.toggle(dark);
  body.classList.toggle(dark);
  header.classList.toggle(dark);
  main.classList.toggle(dark);
  leftSidebar.classList.toggle(dark);
  rightSidebar.classList.toggle(dark);
  createNewPost.classList.toggle(dark);
  //   publishedPost.classList.toggle(dark);
  for (i = 0; i < publishedPost.length; i++) {
    publishedPost[i].classList.toggle(dark);
  }
};

/**  End: Theme toggler  **/
