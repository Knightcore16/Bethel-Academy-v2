// Initialize the Owl Carousel for Hero
$(document).ready(function(){
    $('.hero-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      mouseDrag: false,
      dots:false,
      autoplayTimeout: 5000
    });
  });

  // Initialize the Owl Carousel for news
 $(document).ready(function() {

  "use strict";

  var fullHeight = function() {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function(){
      $('.js-fullheight').css('height', $(window).height());
    });
  };

  fullHeight();

  var carousel = function() {
    $('.featured-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 30,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav: true,
      autoplayHoverPause: false,
      items: 1,
      navText: ["<span class='icon-arrow-left'></span>", "<span class='icon-arrow-right'></span>"],
      responsive:{
        0:{
          items: 1
        },
        600:{
          items: 2
        },
        1000:{
          items: 3
        }
      }
    });
  };

  carousel();

});

// Initialize the Owl Carousel for Events
var Lowl = $("#events");

Lowl.owlCarousel({
  items: 1,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 3
    },
    979: {
      items: 2
    },
    1199: {
      items: 3
    }
  },
  loop: true,
  margin: 0,
  rtl: true,
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  smartSpeed: 800,
  nav: false,
  dots:true,
  navText: [
    "<span class='icon-arrow-left'></span>",
    "<span class='icon-arrow-right'></span>"
  ],
  animateOut: 'fadeOut',
  animateIn: 'fadeIn'
});

$(".prev").click(function() {
  Lowl.trigger('next.owl.carousel');
});

$(".next").click(function() {
  Lowl.trigger('prev.owl.carousel');
});


const testimonialCards = document.querySelectorAll('.card-header');
const testimonialImage = document.querySelector('.circle-img img');

testimonialCards.forEach(card => {
  card.addEventListener('click', () => {
    if (card.getAttribute('aria-expanded') === 'true') {
      testimonialImage.style.marginBottom = '0px';
    } else {
      testimonialImage.style.marginBottom = '70px';
    }
  });
});

function adjustImageMargin() {
  if (window.innerWidth >= 768) {
    testimonialImage.style.marginBottom = '200px';
    testimonialImage.style.marginTop = '-25px';
  } else {
    testimonialImage.style.marginBottom = '0px';
    testimonialImage.style.marginTop = '0px';

  }
}

testimonialCards.forEach(card => {
  card.addEventListener('click', adjustImageMargin);
});

window.addEventListener('resize', adjustImageMargin);


  (function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
  

  
  })()
