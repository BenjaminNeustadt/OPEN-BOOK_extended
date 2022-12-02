const checkbox = document.getElementById('checkbox');
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  //change the theme of the website
  document.body.classList.toggle('dark')
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  //change the theme of the website
  document.body.classList.remove('dark')
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

checkbox.addEventListener('change', () => {
  // check the localstorage for current theme
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})

