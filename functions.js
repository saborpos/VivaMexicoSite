// When the user scrolls the page, execute myFunction 
window.onscroll = function () { stickyMenu() };
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyMenu() {
	// Get the navbar
var navbar = document.getElementById("NavLinks");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
  if (window.pageYOffset > sticky) {
    navbar.classList.add("fixed-top")
    //document.getElementById("NavInfo").style.display = 'none';
  } else {
    navbar.classList.remove("fixed-top");
    //document.getElementById("NavInfo").style.display = 'block';
  }
}

//Ver Menu en el Home, ocultar el boton y colocar el nuevo boton
function ViewMenu() {
    document.getElementById("Dishes").style.display = "inherit";
    document.getElementById("ViewMenuBtn").style.display = 'none';
    document.getElementById("HideMenuBtn").style.display = 'inline-block';
}
//Ocultar Menu en el Home, ocultar el boton y colocar el nuevo boton
function HideMenu() {
    document.getElementById("Dishes").style.display = "none";
    document.getElementById("HideMenuBtn").style.display = 'none';
    document.getElementById("ViewMenuBtn").style.display = 'inline-block';
}