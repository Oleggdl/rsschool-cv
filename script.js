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
const burgerlinks = document.querySelectorAll('burgerlink')
burgerlinks.forEach(a=>  a.onclick = function(){
  $('#burgermenu').fadeOut();
    $('#burgerline').fadeOut();
})
console.log('150/150')
console.log('- вёрстка валидная (10/10)');
console.log('- вёрстка семантическая (20/20)');
console.log('- для оформления СV используются css-стили (10/10)');
console.log('- контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы (10/10)');
console.log('- вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется (10/10)');
console.log('- есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. Внешний вид адаптивного меню можно скопировать с макета музея (10/10)');
console.log('- на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) (10/10)');
console.log('- контакты для связи и перечень навыков оформлены в виде списка ul > li (10/10)');
console.log('- CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского (10/10)');
console.log('- CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js (10/10)');
console.log('- CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. (10/10)');
console.log('- CV выполнено на английском языке (10/10)');
console.log('- выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) (10/10)');
console.log('- есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (например, в документе Google Docs). (0/10)');
console.log('- дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) (10/10)');















