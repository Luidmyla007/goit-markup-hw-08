(() => {
    const refs = {
      openMenuBtn: document.querySelector(".menu-open"),
      closeMenuBtn: document.querySelector(".menu-close"),
      menu: document.querySelector(".mob-menu"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      document.body.classList.toggle("no-scroll");
      refs.menu.classList.toggle("is-hidden");
    }
  })();