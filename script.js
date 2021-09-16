const scrollToTopButton = document.getElementById("scroll");
const handleScroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopButton.style.display = "block"
  }
  else {
    scrollToTopButton.style.display = "none";
  }
};
const scrollToTop = () => {
  const distanceFromTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (distanceFromTop > 0) {
    window.scrollTo(0, 0);
  }
};
document.addEventListener("scroll", handleScroll);
scrollToTopButton.addEventListener("click", function (e) {
  e.preventDefault();
  scrollToTop();
});


const burger = document.getElementById('burger');
const burgerMenu = document.getElementById('burgermenu');
const headerBorder = document.getElementById('headerMain')

function burgerClick() {
  
  


}
burger.onclick = function(){
  if (burgerMenu.style.display === 'none') {
    $('#burgermenu').fadeIn();
    $('#burgerline').fadeIn();
    // headerBorder.style.borderBottom = '1px rgb(255, 29, 29) solid';
  } else {
    $('#burgermenu').fadeOut();
    $('#burgerline').fadeOut();
    // headerBorder.style.borderBottom = 'none';
  }
  
  
};
