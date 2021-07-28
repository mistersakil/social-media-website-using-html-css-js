const body = document.body;
/* Navbar sticky */
// const header = document.querySelector("#header");
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

/**   navSetting Menu Toggler **/

const settingMenuBox = document.querySelector(".header .row .navSetting ");
const settingsMenuIcon = document.querySelector("#settingsMenuIcon");

settingsMenuIcon.onclick = function (event) {
  event.stopPropagation();
  settingMenuBox.classList.toggle("active");
};
body.onclick = function () {
  console.log("body click");
  //   navSettingMenuBox.classList.toggle("active");
  if (settingMenuBox.classList.contains("active")) {
    settingMenuBox.classList.remove("active");
  }
};
