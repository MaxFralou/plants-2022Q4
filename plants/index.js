console.log(` Score: 85 / 75\n
- [x] The layout valid 768px (24/24)\n
- [x] The layout valid 380px (24/24)\n
- [x] No horizontal scroll bar (15/15)\n
- [x] Adaptive menu is implemented (22/22)`);

const burger = document.querySelector('.burger-btn')
const menu = document.querySelector('.header')
const navArea = document.querySelector('.list-nav')

burger.addEventListener('click', function () {
    menu.classList.toggle('active');
})

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target)) {
        menu.classList.remove("active");
    }
})

navArea.addEventListener('click', function () {
    menu.classList.remove("active");
})

const GARDENS_BTN = document.getElementById('gardens-btn')
const LAWN_BTN = document.getElementById('lawn-btn')
const PLANTING_BTN = document.getElementById('planting-btn')
const ex1 = document.getElementById('ex-1')
const ex2 = document.getElementById('ex-2')
const ex3 = document.getElementById('ex-3')
const ex4 = document.getElementById('ex-4')
const ex5 = document.getElementById('ex-5')
const ex6 = document.getElementById('ex-6')


GARDENS_BTN.addEventListener('click', function () {
    if (PLANTING_BTN.classList.contains('click-btn')
        && LAWN_BTN.classList.contains('click-btn')) {
        alert("Sorry, you can't select three buttons")
    } else if (
        ex2.classList.contains('click-gardens') &&
        ex3.classList.contains('click-gardens') &&
        ex4.classList.contains('click-gardens') &&
        ex6.classList.contains('click-gardens')) {
        ex2.classList.toggle('click-gardens')
        ex3.classList.toggle('click-gardens')
        ex4.classList.toggle('click-gardens')
        ex6.classList.toggle('click-gardens')
        GARDENS_BTN.classList.toggle('click-btn')
    } else if (ex1.classList.contains('click-gardens') &&
        ex2.classList.contains('click-gardens') &&
        ex4.classList.contains('click-gardens') &&
        ex5.classList.contains('click-gardens') &&
        ex6.classList.contains('click-gardens')) {
        ex1.classList.remove('click-gardens')
        ex5.classList.remove('click-gardens')
        GARDENS_BTN.classList.toggle('click-btn')
    } else if (
        ex2.classList.contains('click-gardens') &&
        ex4.classList.contains('click-gardens') &&
        ex6.classList.contains('click-gardens')) {
        ex1.classList.add('click-gardens')
        ex5.classList.add('click-gardens')
        GARDENS_BTN.classList.toggle('click-btn')
    } else if (ex3.classList.contains('click-gardens')) {
        ex1.classList.toggle('click-gardens')
        ex5.classList.toggle('click-gardens')
        GARDENS_BTN.classList.toggle('click-btn')
    } else {
        ex2.classList.toggle('click-gardens')
        ex3.classList.toggle('click-gardens')
        ex4.classList.toggle('click-gardens')
        ex6.classList.toggle('click-gardens')
        GARDENS_BTN.classList.toggle('click-btn')
    }
})

LAWN_BTN.addEventListener('click', function () {
    if (PLANTING_BTN.classList.contains('click-btn')
        && GARDENS_BTN.classList.contains('click-btn')) {
        alert("Sorry, you can't select three buttons")
    } else if (ex1.classList.contains('click-gardens') &&
        ex2.classList.contains('click-gardens') &&
        ex4.classList.contains('click-gardens') &&
        ex5.classList.contains('click-gardens') &&
        ex6.classList.contains('click-gardens')) {
        ex1.classList.toggle('click-gardens')
        ex2.classList.toggle('click-gardens')
        ex4.classList.toggle('click-gardens')
        ex5.classList.toggle('click-gardens')
        ex6.classList.toggle('click-gardens')
        LAWN_BTN.classList.toggle('click-btn')
    } else if (ex3.classList.contains('click-gardens') &&
        ex2.classList.contains('click-gardens') &&
        ex4.classList.contains('click-gardens') &&
        ex6.classList.contains('click-gardens')) {
        LAWN_BTN.classList.toggle('click-btn')
        ex3.classList.remove('click-gardens')
    } else if (ex2.classList.contains('click-gardens') &&
        ex4.classList.contains('click-gardens') &&
        ex6.classList.contains('click-gardens')) {
        LAWN_BTN.classList.toggle('click-btn')
        ex3.classList.add('click-gardens')
    } else if (ex1.classList.contains('click-gardens') &&
        ex5.classList.contains('click-gardens')) {
        LAWN_BTN.classList.toggle('click-btn')
        ex3.classList.toggle('click-gardens')
    } else {
        ex1.classList.toggle('click-gardens')
        ex2.classList.toggle('click-gardens')
        ex4.classList.toggle('click-gardens')
        ex5.classList.toggle('click-gardens')
        ex6.classList.toggle('click-gardens')
        LAWN_BTN.classList.toggle('click-btn')
    }
})

PLANTING_BTN.addEventListener('click', function () {
    if (LAWN_BTN.classList.contains('click-btn')
        && GARDENS_BTN.classList.contains('click-btn')) {
        alert("Sorry, you can't select three buttons")
    } else if (ex1.classList.contains('click-gardens') &&
        ex3.classList.contains('click-gardens') &&
        ex5.classList.contains('click-gardens')) {
        ex1.classList.toggle('click-gardens')
        ex3.classList.toggle('click-gardens')
        ex5.classList.toggle('click-gardens')
        PLANTING_BTN.classList.toggle('click-btn')
    } else if (ex2.classList.contains('click-gardens') &&
        ex3.classList.contains('click-gardens') &&
        ex4.classList.contains('click-gardens') &&
        ex6.classList.contains('click-gardens')) {
        ex2.classList.remove('click-gardens')
        ex4.classList.remove('click-gardens')
        ex6.classList.remove('click-gardens')
        PLANTING_BTN.classList.toggle('click-btn')
    } else if (ex3.classList.contains('click-gardens')) {
        ex2.classList.add('click-gardens')
        ex4.classList.add('click-gardens')
        ex6.classList.add('click-gardens')
        PLANTING_BTN.classList.toggle('click-btn')

    } else if (ex1.classList.contains('click-gardens') &&
        ex2.classList.contains('click-gardens') &&
        ex4.classList.contains('click-gardens') &&
        ex5.classList.contains('click-gardens') &&
        ex6.classList.contains('click-gardens')) {
        ex2.classList.remove('click-gardens')
        ex4.classList.remove('click-gardens')
        ex6.classList.remove('click-gardens')
        PLANTING_BTN.classList.toggle('click-btn')
    } else if (ex1.classList.contains('click-gardens') &&
        ex5.classList.contains('click-gardens')) {
        ex2.classList.add('click-gardens')
        ex4.classList.add('click-gardens')
        ex6.classList.add('click-gardens')
        PLANTING_BTN.classList.toggle('click-btn')
    } else {
        ex1.classList.toggle('click-gardens')
        ex3.classList.toggle('click-gardens')
        ex5.classList.toggle('click-gardens')
        PLANTING_BTN.classList.toggle('click-btn')
    }
})

const ACCORDION_BTNS_BASICS = document.querySelector(".accord-pic");
const ACCORDION_BTNS_STANDART = document.querySelector(".accord-pic2");
const ACCORDION_BTNS_PRO = document.querySelector(".accord-pic3");
const basicContent = document.querySelector(".basic-content")
const standartContent = document.querySelector(".standart-content")
const proContent = document.querySelector(".pro-content")

ACCORDION_BTNS_BASICS.addEventListener('click', function () {
    if (standartContent.classList.contains('is-open') ||
        proContent.classList.contains('is-open')) {
        standartContent.classList.remove('is-open') ||
            proContent.classList.remove('is-open')
        ACCORDION_BTNS_STANDART.classList.remove('click-btn-accordion')
        ACCORDION_BTNS_PRO.classList.remove('click-btn-accordion')
    }
    basicContent.classList.toggle('is-open')
    ACCORDION_BTNS_BASICS.classList.toggle('click-btn-accordion')
})

ACCORDION_BTNS_STANDART.addEventListener('click', function () {
    if (basicContent.classList.contains('is-open') ||
        proContent.classList.contains('is-open')) {
        basicContent.classList.remove('is-open') ||
            proContent.classList.remove('is-open')
        ACCORDION_BTNS_BASICS.classList.remove('click-btn-accordion')
        ACCORDION_BTNS_PRO.classList.remove('click-btn-accordion')
    }
    standartContent.classList.toggle('is-open')
    ACCORDION_BTNS_STANDART.classList.toggle('click-btn-accordion')
})

ACCORDION_BTNS_PRO.addEventListener('click', function () {
    if (basicContent.classList.contains('is-open') ||
        standartContent.classList.contains('is-open')) {
        basicContent.classList.remove('is-open') ||
            standartContent.classList.remove('is-open')
        ACCORDION_BTNS_BASICS.classList.remove('click-btn-accordion')
        ACCORDION_BTNS_STANDART.classList.remove('click-btn-accordion')
    }

    proContent.classList.toggle('is-open')
    ACCORDION_BTNS_PRO.classList.toggle('click-btn-accordion')
})
