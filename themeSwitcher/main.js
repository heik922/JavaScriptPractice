const colorThemes = document.querySelectorAll('[name="theme"]');

// store theme

const storedTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

colorThemes.forEach((theme) => {
  theme.addEventListener("click", () => {
    // id = pink , blue , yellow ...
    storedTheme(theme.id);
    console.log(theme.id);
  });
});

// apply theme

const getTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((option) => {
    if (option.id === activeTheme) {
      option.checked = true;
    }
  });
};

window.addEventListener("DOMContentLoaded", getTheme);
