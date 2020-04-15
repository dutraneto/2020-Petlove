"use strict";

// toggle accordion function for hiding checkboxes
(function toggleAccordion() {
  var acc = document.querySelectorAll(".accordion");
  var accordion = Array.from(acc);
  accordion.forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
    });
  });
})();
"use strict";

/*
* Carrousel slider based on
    https://fooobar.com/questions/17301564/multiple-carousels-on-one-page-not-working-single-carousel-works-great-2nd-carousel-disrupts-first
*/
var track = document.querySelector('.hero__carrousel-track'); // track slides from array

var slides = Array.from(track.children);
var nextButton = document.querySelector('.hero__carrousel-btn--right');
var prevButton = document.querySelector('.hero__carrousel-btn--left');
var dotsNav = document.querySelector('.hero__carrousel-nav'); // track dots from array

var dots = Array.from(dotsNav.children); // get a width value of a slider

var slideWidth = slides[0].getBoundingClientRect().width; // Arrange the slides next to one another

var setSlidePosition = function setSlidePosition(slide, index) {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition); // Move slide

var moveToSlide = function moveToSlide(currentSlide, targetSlide, targetDot, targetIndex) {
  var currentDot = dotsNav.querySelector('.current-slide');
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');

  if (targetIndex === 0) {
    prevButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
  } else if (targetIndex == slides.length - 1) {
    prevButton.classList.remove('hidden');
    nextButton.classList.add('hidden');
  } else {
    prevButton.classList.remove('hidden');
    nextButton.classList.remove('hidden');
  }
}; // when I click left, move slides to the left


prevButton.addEventListener('click', function (e) {
  var currentSlide = track.querySelector('.current-slide');
  var prevSlide = currentSlide.previousElementSibling;
  var slideIndex = slides.findIndex(function (slide) {
    return slide === prevSlide;
  });
  var targetDot = dots[slideIndex]; //move to the next slide

  moveToSlide(currentSlide, prevSlide, targetDot, slideIndex);

  if (prevSlide == currentSlide) {
    prevButton.classlist.add('hidden');
    moveToSlide(currentSlide, prevSlide, targetDot);
  }
}); // when I click right, move slides to the right

nextButton.addEventListener('click', function (e) {
  var currentSlide = track.querySelector('.current-slide');
  var nextSlide = currentSlide.nextElementSibling;
  var slideIndex = slides.findIndex(function (slide) {
    return slide === nextSlide;
  });
  var targetDot = dots[slideIndex]; //move to the next slide

  if (slideIndex != -1) moveToSlide(currentSlide, nextSlide, targetDot, slideIndex);
}); // when I click the nav indicators, move to that slide

dotsNav.addEventListener('click', function (e) {
  var targetDot = e.target.closest('button');
  if (!targetDot) return;
  var currentSlide = track.querySelector('.current-slide');
  var targetIndex = dots.findIndex(function (dot) {
    return dot === targetDot;
  });
  var targetSlide = slides[targetIndex];
  moveToSlide(currentSlide, targetSlide, targetDot, targetIndex);
});
"use strict";

/*
Code base on:
https://stackoverflow.com/questions/8653025/stop-fixed-position-at-footer
*/
(function limitSocialIconsHeight() {
  var iconsList = document.getElementsByClassName('page-single__follow-us')[0];
  var subscribe = document.getElementsByClassName('subscribe')[0];
  document.addEventListener('scroll', function () {
    var iconsListTop = iconsList.getBoundingClientRect().top;
    var subscribeTop = subscribe.getBoundingClientRect().top;
    var subscribeOffset = subscribe.offsetHeight;
    var iconsListOffSet = iconsList.offsetHeight;
    var iconsListSize = iconsList.getBoundingClientRect().height;
    var bodyScrollTop = document.body.scrollTop;

    if (iconsListTop + bodyScrollTop + iconsListOffSet >= subscribeTop + bodyScrollTop + subscribeOffset - iconsListSize // iconsListSize is the size of icons list in pixels
    ) {
        iconsList.classList.remove("follow-us--fixed");
        iconsList.classList.add("follow-us--absolute");
      } // When scrolls back, returns to its initial position


    if (bodyScrollTop + window.innerHeight + iconsListSize < subscribeTop + bodyScrollTop) {
      iconsList.classList.add("follow-us--fixed");
      iconsList.classList.remove("follow-us--absolute");
    }
  });
})();
"use strict";

// toggle menu
(function menuToggle() {
  var body = document.body;
  var menuBars = document.getElementsByClassName("menu-open")[0];
  var navMobile = document.getElementsByClassName("navbar")[0];
  var menuClose = document.getElementsByClassName("menu-close")[0];
  menuBars.addEventListener("click", function (e) {
    e.preventDefault();
    navMobile.classList.toggle("open");
    body.classList.toggle("no-scroll");
  });
  menuClose.addEventListener("click", function (e) {
    var _this = this;

    e.preventDefault();
    this.parentElement.classList.remove("open");
    this.parentElement.classList.add("close");
    body.classList.toggle("no-scroll"); // insert timer to remove class 'close' avoiding navbar animation on resizing window

    setTimeout(function () {
      _this.parentElement.classList.remove("close");
    }, 1000);
  });
})();
"use strict";

(function productToSelect() {
  var productToSelect = document.getElementsByClassName('img-to-select');
  var selectedProduct = document.getElementById('selected-img');
  var productToSelectArray = Array.from(productToSelect);
  productToSelectArray.forEach(function (img) {
    img.addEventListener('click', function (evt) {
      evt.preventDefault();
      selectedProduct.src = this.src;
    });
  });
})();
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// update prices on input range
function updatePriceLabels() {
  var ranges = document.querySelectorAll(".shopping-list__range input");
  var labels = document.querySelectorAll(".shopping-list__range .shopping-list__range-price label"); // const minValue = parseInt(ranges[0].min)
  // const maxValue = parseInt(ranges[0].max)

  var price1 = parseInt(ranges[0].value);
  var price2 = parseInt(ranges[1].value); // avoid lowest price overlaps highest

  price1 >= price2 ? ranges[1].value = price1 + 10 : null;
  price2 <= price1 ? ranges[0].value = price2 - 10 : null; // update price labels

  labels[0].innerHTML = "$ " + price1;
  labels[1].innerHTML = "$ " + price2;
}

(function resetFilters() {
  var reset = document.getElementsByClassName("filter-btn")[0];
  var ranges = document.querySelectorAll(".shopping-list__range input");
  var labels = document.querySelectorAll(".shopping-list__range .shopping-list__range-price label");
  var inputSearch = document.getElementById("search-brand");
  var controls = document.querySelectorAll(".checkbox-control input");
  reset.addEventListener("click", function (e) {
    // do not refresh
    e.preventDefault(); // reset ranges
    // ranges[0].value = "0"
    // ranges[1].value = "10000"

    labels[0].innerHTML = "$ ".concat(ranges[0].value = 0);
    labels[1].innerHTML = "$ ".concat(ranges[1].value = 10000); // reset input search

    inputSearch.value = ""; // reset all checkboxes

    var arrControl = _toConsumableArray(controls);

    arrControl.forEach(function (control) {
      control.checked = false;
    });
  });
})();