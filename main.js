let menuOpen = document.getElementById('menu-open');
let menuClose = document.getElementById('menu-close');



// click event for mobile menu open
menuOpen.addEventListener('click',function(){
    let hiddenMenu =  document.getElementById('mobile-hidden-menu');
    hiddenMenu.style.display = 'block';
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';
    darkBackGround.style.display = 'block';
});

// click event for mobile menu close
menuClose.addEventListener('click',function(){
    let hiddenMenu =  document.getElementById('mobile-hidden-menu');
    hiddenMenu.style.display = 'none';
    menuOpen.style.display = 'block';
    menuClose.style.display = 'none';
    darkBackGround.style.display = 'none';
});