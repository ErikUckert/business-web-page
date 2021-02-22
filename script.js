// get dom elements
const divContact = document.getElementById("contact");
const divImprint = document.getElementById("imprint");
const divData = document.getElementById("data");

// Used to toggle the menu on small screens when clicking on the menu button
function hideNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
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