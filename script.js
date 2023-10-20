
// responsive navigation start

// var nav = document.querySelector('#nav');
// var btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
//   nav.classList.toggle('active');
// });

var nav = document.querySelector('#nav');
var btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  nav.classList.toggle('active');
});


// typed js

new Typed('#tinku',{
  strings: [
    'Graphic Design',
    'Web Design',
    'Web Developer',
    'Responsive web Design'
  ],
  typeSpeed: 140,
  backspeed: 100,
  loop: true
});


// responsive navigation end

//Javascript for Navigation effect on scroll start

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
  header.style.transition = '.5s';
  header.style.width = "100%";
  header.style.height = "70px";
});

// window.addEventListener("scroll", function () {
//   let header = document.querySelector('header');
//   header.classList.toggle('sticky', window.scrollY > 0);
// });

// =================== start portfolio_box =========================

$('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer'
  }
});


// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  $('.grid').isotope({ filter: filterValue });
});


// iso-top

$(window).on('load', function () {
  var $container = $('.portfolioContainer');
  var $filter = $('#filter');
  $container.isotope({
    filter: '*',
    layoutMode: 'masonry',
    animationOptions: {
      duration: 750,
      easing: 'linear'
    }
  });
  $filter.find('a').click(function () {
    var selector = $(this).attr('data-filter');
    $filter.find('a').removeClass('active');
    $(this).addClass('active');
    $container.isotope({
      filter: selector,
      animationOptions: {
        animationDuration: 750,
        easing: 'linear',
        queue: false,
      }
    });
    return false;
  });
});


// back to top btn

var item = document.getElementById('back-to-top-btn');

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        item.style.display = "block";
    }
    else {
        item.style.display = "none";
    }
});


item.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

});