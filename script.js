// get dom elements
const divNavBar = document.getElementById("navbar");
const divNav = document.getElementById("nav");
const divContact = document.getElementById("contact");
const divImprint = document.getElementById("imprint");
const divData = document.getElementById("data");

// Used to toggle the menu on small screens when clicking on the menu button
function hideNav() {
    if (divNav.className.indexOf("w3-show") == -1) {
      divNav.className += " w3-show";
    } else { 
      divNav.className = divNav.className.replace(" w3-show", "");
    }
  }

  // functions for toggle info sections
  function hideContact() {
    if (divContact.style.display === "none") {
      divContact.style.display = "block";
      divImprint.style.display = "none";
      divData.style.display = "none";
    } else {
      divContact.style.display = "none";
    }
  }

  function hideImprint() {
    if (divImprint.style.display === "none") {
      divImprint.style.display = "block";
      divContact.style.display = "none";
      divData.style.display = "none";
    } else {
      divImprint.style.display = "none";
    }
  }

  function hideData() {
    if (divData.style.display === "none") {
      divData.style.display = "block";
      divImprint.style.display = "none";
      divContact.style.display = "none";
    } else {
      divData.style.display = "none";
    }
  }

  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    divNavBar.style.top = "0";
  } else {
    divNavBar.style.top = "-160px";
  }
  prevScrollpos = currentScrollPos;
}