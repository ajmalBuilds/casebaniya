document.querySelector('.hamburger input').addEventListener('mousedown', function(e) {
  e.preventDefault();
  this.blur();
});
function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function toggleNav(){
    var checkbox = document.getElementById("hamburgerCheckbox");
    if (checkbox.checked) {
        openNav();
    } else {
            closeNav();
    }
}
