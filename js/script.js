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
    })
  })
}

navBar();
