const navBar = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', (e) => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
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
