const body = document.body;
const header = document.querySelector("#header");

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

/**  Theme Change toggler  **/

const themeChangeBtn = document.querySelector(".themeBtn");
themeChangeBtn.onclick = function (event) {
  event.preventDefault();
  event.stopPropagation();
  this.classList.toggle("active");
  body.classList.toggle("darkTheme");
  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
  } else if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") === "light") {
  body.classList.remove("darkTheme");
  themeChangeBtn.classList.remove("active");
} else if (localStorage.getItem("theme") === "dark") {
  body.classList.add("darkTheme");
  themeChangeBtn.classList.add("active");
} else {
  localStorage.setItem("theme", "light");
}

/**  End: Theme Change toggler  **/
