/**
 * Navbar Functionality
 */
const navBar = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  const navLinks = document.querySelectorAll('.nav-links li');
  const burgerLines = burger.querySelectorAll('div');

  burger.addEventListener('click', (e) => {
    burgerLines.forEach((line, index) => {
      line.style.transition = 'all 0.5s ease';
    })

    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    nav.style.transition = 'all 0.4s ease-in';
  })

  navLinks.forEach((navItem, index) => {
    navItem.addEventListener('click', (e) => {
      let activeNav = document.querySelector('.nav-links li.active');
      if (activeNav) {
        activeNav.classList.remove('active');
      }

      burger.addEventListener('click', (e) => {
        activeNav = document.querySelector('li.active');
        if (activeNav) {
          activeNav.classList.remove('active');
        }
      })

      navItem.classList.add('active');
    });
  });

  const langSelect = document.querySelector('.nav-links .lang-select a img');
  const langList = document.querySelectorAll('.lang-select .lang-list li');

  langList.forEach((langItem, index) => {
    langItem.addEventListener('click', (e) => {
      let imgTag = langItem.querySelector('a img');
      let imgSrc = imgTag.getAttribute('src')
      langSelect.setAttribute('src', imgSrc)
    })
  })
}

/**
 * Slider Functionality
 */
const slide = () => {
  const carouselWidth = window.innerWidth;
  const carouselView = document.querySelector('.home-carousel-wrapper');
  const carouselItem = document.querySelectorAll('.carousel-container .home-hero');
  const carouselContainer = document.querySelector('.carousel-container');

  //Button
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');

  //Carousel setup
  carouselView.style.width = carouselWidth + 'px';
  carouselView.style.overflow = 'hidden';
  carouselContainer.style.width = carouselWidth * carouselItem.length + 'px';

  let counter = 1;
  carouselContainer.style.marginLeft = `0px`

  //Carousel Background Img
  carouselItem.forEach((homeHero, index) => {
    let dataImgSrc = homeHero.getAttribute('data-img-src');
    homeHero.style.width = carouselWidth + 'px';
    homeHero.style.backgroundImage = `url(${dataImgSrc})`;
  })

  //Button Listener
  nextBtn.addEventListener('click', (e) => {
    carouselContainer.style.transition = `margin 1s ease-in-out`;
    carouselContainer.style.marginLeft = `-${counter*carouselWidth}px`;
    counter++;
    checkCounter()
  })

  prevBtn.addEventListener('click', (e) => {
    carouselContainer.style.transition = `margin 1s ease-in-out`;
    counter--;
    carouselContainer.style.marginLeft = `${parseInt(carouselContainer.style.marginLeft) +carouselWidth}px`;
    checkCounter();
  })

  let checkCounter = () => {
    if (counter > carouselItem.length) {
      counter = 1;
      carouselContainer.style.marginLeft = `0px`;
    }
    if (counter < 1) {
      counter = carouselItem.length;
      carouselContainer.style.marginLeft = `-${carouselWidth * (counter - 1)}px`;
    }
  }
}

/**
 * Window Resize event handling
 */
window.addEventListener('resize', slide);

/**
 * Navbar and Slider Function Call
 */
slide();
navBar();
