// get dom elements
var divContact = document.getElementById("hideContact");
var divImprint = document.getElementById("hideImprint");
var divData = document.getElementById("hideData");

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
    } else {
      divContact.style.display = "none";
    }
  }

  function hideImprint() {
    var x = document.getElementById("hideImprint");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("hideContact").style.display = "none"
    } else {
      x.style.display = "none";
    }
  }