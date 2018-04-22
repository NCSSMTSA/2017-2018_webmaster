function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
}

function openSidebar() {
  document.getElementById("sidebar").style.width = "15em";
}

document.addEventListener('DOMContentLoaded', function() {
   AOS.init();
}, false);

window.addEventListener('load', AOS.refresh);
