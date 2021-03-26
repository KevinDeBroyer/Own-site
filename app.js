const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    navLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-active');
        navLinks.forEach(setStyleLink)
      })
    });
  
    burger.addEventListener('click', () => {
      // Toggle Nav
      nav.classList.toggle('nav-active');
      
      // animate navlinks
     
      // burger animation
      burger.classList.toggle('toggle');
    });
  }
  
  
  navSlide();