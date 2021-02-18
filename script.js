// Used to toggle the menu on small screens when clicking on the menu button
function hideNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }

  function hideContact() {
    var x = document.getElementById("hideContact");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function hideImprint() {
    var x = document.getElementById("hideImprint");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }