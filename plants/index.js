console.log(` Score: 85 / 75\n
- [x] The layout valid 768px (24/24)\n
- [x] The layout valid 380px (24/24)\n
- [x] No horizontal scroll bar (15/15)\n
- [x] Adaptive menu is implemented (22/22)`);

const burger = document.querySelector('.burger-btn')
const menu = document.querySelector('.header')
const navArea = document.querySelector('.list-nav')

burger.addEventListener('click', function(){
    menu.classList.toggle('active');
})

document.addEventListener('click', function(e) {
    if (!menu.contains(e.target)){
        menu.classList.remove("active");
    } 
})

navArea.addEventListener('click', function(){
    menu.classList.remove("active");
})
