document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("codeInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      checkCode();
    }
  });
});

function checkCode() {
  const correctCode = "goodbyeworld!";
  const input = document.getElementById("codeInput").value;
  const error = document.getElementById("errorMsg");

  if (input === correctCode) {
    document.cookie = "secretAccess=true; max-age=3600; path=/";

    window.location.href = "confession/index.html";
  } else {
    error.style.display = "block";
  }
}