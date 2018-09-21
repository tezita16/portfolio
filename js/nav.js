function navClick() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//this code makes the navbar responsive
$( document ).ready(function() {
  let mainNav=document.getElementById('main-nav');
  let navbarToggle=document.getElementById('navbar-toggle');
  let navbar = document.getElementById("nav");

  navbarToggle.addEventListener('click',function(){
      if(this.classList.contains('active')){
          mainNav.style.display="none";
          this.classList.remove('active');
          navbar.className = "navbar";
      }
      else{
          mainNav.style.display="flex";
          this.classList.add('active');
      }
  });
  $( ".nav-links" ).click(function() {
    mainNav.style.display="none";
  });
  var docWidth = document.documentElement.offsetWidth;
});
