function toggleThemes() {
    const themes = document.getElementById("themes");
    themes.classList.toggle("open");
  }

  function toggleSkills(id) {
    const skillBox = document.getElementById(id);
    skillBox.classList.toggle("open");
  }
  
  function toggleComputer() {
    const section = document.getElementById("computerThemes");
    section.classList.toggle("open");
  }