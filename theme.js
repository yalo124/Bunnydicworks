const themeSwitch = document.getElementById("theme-switch");
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("darkmode");
  }


  if (themeSwitch) {
    themeSwitch.onclick = () => {
      document.body.classList.toggle("darkmode");

      if (document.body.classList.contains("darkmode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    };
  }