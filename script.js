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


burger.onclick = function(){
  if (burgerMenu.style.display === 'none') {
    $('#burgermenu').fadeIn();
    $('#burgerline').fadeIn();
  } else {
    $('#burgermenu').fadeOut();
    $('#burgerline').fadeOut();
  }
};
const burgerlinks = document.querySelectorAll('#burgerlink')
burgerlinks.forEach(a=>  a.onclick = function(){
  $('#burgermenu').fadeOut();
    $('#burgerline').fadeOut();
})