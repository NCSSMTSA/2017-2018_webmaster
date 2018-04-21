function closeSidebar() {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("hamburgerButton").style.visibility = "visible";
}

function openSidebar() {
  document.getElementById("sidebar").style.display = "inline-block";
  document.getElementById("hamburgerButton").style.visibility = "hidden";
}
