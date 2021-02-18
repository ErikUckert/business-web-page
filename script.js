// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }

  function hideDiv() {
    var x = document.getElementById("hide");
    if (x.style.display === "none") {
        console.log(x.style.display)
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }