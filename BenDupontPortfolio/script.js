// reveal function 
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }



//MOBILE NAV
var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");

//default to measure if/else from
nav.style.height = "50px";
main.style.marginTop = "50px";
for (i = 0; i < menu.length; i++){menu[i].style.marginTop="100px";};

close.addEventListener("click", function(){
  var menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
  menuIcon[i].classList.toggle("active");
  }   
});

function navToggle() {	
	//to close
	if (nav.style.height <= "275px") {
	nav.style.height = "50px";
	main.style.marginTop = "50px";
	
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
        //menu[i].style.opacity="0.0";
        menu[i].style.marginTop="100px";
	};
    	document.body.style.backgroundColor = "rgba(11, 25, 46, 1)";
	
	} 
	//to open
	else if (nav.style.height <= "50px") {
      nav.style.height = "275px";
      main.style.marginTop = "275px";
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
        //menu[i].style.opacity="1.0";
        menu[i].style.marginTop="0px";
	    };
    	document.body.style.backgroundColor = "rgba(11, 25, 46, 1)";
	
	}

};