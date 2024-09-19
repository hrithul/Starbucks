let menuOpen = document.getElementById('menu-open');
let menuClose = document.getElementById('menu-close');
let darkBackGround = document.getElementById('dark-background');



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



// Footer Chevrons  
// ========================

// about us
// ========

const aboutUsDown = document.getElementById('about-us-down');
const aboutUsUp = document.getElementById('about-us-up');
const aboutUs = document.getElementById('about-us');

// careers
// ========

const careersDown = document.getElementById('careers-down');
const careersUp = document.getElementById('careers-up');
const careers = document.getElementById('careers');


// social-impact
// ========

const socialImpactDown = document.getElementById('social-impact-down');
const socialImpactUp = document.getElementById('social-impact-up');
const socialImpact = document.getElementById('social-impact');


// for-business-partner
// ======================

const forBusinessPartnerDown = document.getElementById('for-business-partner-down');
const forBusinessPartnerUp = document.getElementById('for-business-partner-up');
const forBusinessPartner = document.getElementById('for-business-partner');

// order-and-pickup
// ======================

const orderAndPickUpDown = document.getElementById('order-and-pickup-down');
const orderAndPickUpUp = document.getElementById('order-and-pickup-up');
const orderAndPickUp = document.getElementById('order-and-pickup');

 

// about-us down event
// ===================
aboutUsDown.addEventListener('click',()=>{
aboutUs.style.display = 'block';
aboutUsUp.style.display = 'block';
aboutUsDown.style.display = 'none';

});


// about-us up event
// ===================
    aboutUsUp.addEventListener('click',()=>{
    aboutUs.style.display = 'none';
    aboutUsUp.style.display = 'none';
    aboutUsDown.style.display = 'block';
    });


// careers down event
// ===================
    careersDown.addEventListener('click',()=>{
    careers.style.display = 'block';
    careersUp.style.display = 'block';
    careersDown.style.display = 'none';
    
    });
    
    
// careers up event
// ===================
    careersUp.addEventListener('click',()=>{
        careers.style.display = 'none';
        careersUp.style.display = 'none';
        careersDown.style.display = 'block';
    });


// social-impact down event
// ===================
    socialImpactDown.addEventListener('click',()=>{
    socialImpact.style.display = 'block';
    socialImpactUp.style.display = 'block';
    socialImpactDown.style.display = 'none';
    
    });
    
    
// social-impact up event
// ===================
    socialImpactUp.addEventListener('click',()=>{
        socialImpact.style.display = 'none';
        socialImpactUp.style.display = 'none';
        socialImpactDown.style.display = 'block';
    });


// for-business-partner down event
// ===================
forBusinessPartnerDown.addEventListener('click',()=>{
    forBusinessPartner.style.display = 'block';
    forBusinessPartnerUp.style.display = 'block';
    forBusinessPartnerDown.style.display = 'none';
    
    });
    
    
// for-business-partner up event
// ===================
    orderAndPickUpUp.addEventListener('click',()=>{
        orderAndPickUp.style.display = 'none';
        orderAndPickUpUp.style.display = 'none';
        orderAndPickUpDown.style.display = 'block';
    });

// order-and-pickup down event
// ===================
orderAndPickUpDown.addEventListener('click',()=>{
    orderAndPickUp.style.display = 'block';
    orderAndPickUpUp.style.display = 'block';
    orderAndPickUpDown.style.display = 'none';
    
    });
    
    
// order-and-pickup up event
// ===================
    forBusinessPartnerUp.addEventListener('click',()=>{
        forBusinessPartner.style.display = 'none';
        forBusinessPartnerUp.style.display = 'none';
        forBusinessPartnerDown.style.display = 'block';
    });

