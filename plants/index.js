console.log(`Plants#3 Score: 125 / 100\n
- [x] When you click on the buttons:Gardens,Lawn,Planting the focus changes to services in the service section (50/50)\n
- [x] Accordion in the prices section implementation of 3 drop-down lists about services and prices (50/50)\n
- [x] In the contacts section select with a choice of cities is implemented (25/25)`);

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

// const ACCORDION_BTNS_BASICS = document.querySelector(".accord-pic");
// const ACCORDION_BTNS_STANDART = document.querySelector(".accord-pic2");
// const ACCORDION_BTNS_PRO = document.querySelector(".accord-pic3");
// const basicContent = document.querySelector(".basic-content")
// const standartContent = document.querySelector(".standart-content")
// const proContent = document.querySelector(".pro-content")

// ACCORDION_BTNS_BASICS.addEventListener('click', function () {
//     if (standartContent.classList.contains('is-open') ||
//         proContent.classList.contains('is-open')) {
//         standartContent.classList.remove('is-open') ||
//             proContent.classList.remove('is-open')
//         ACCORDION_BTNS_STANDART.classList.remove('click-btn-accordion')
//         ACCORDION_BTNS_PRO.classList.remove('click-btn-accordion')
//     }
//     basicContent.classList.toggle('is-open')
//     ACCORDION_BTNS_BASICS.classList.toggle('click-btn-accordion')
// })

// ACCORDION_BTNS_STANDART.addEventListener('click', function () {
//     if (basicContent.classList.contains('is-open') ||
//         proContent.classList.contains('is-open')) {
//         basicContent.classList.remove('is-open') ||
//             proContent.classList.remove('is-open')
//         ACCORDION_BTNS_BASICS.classList.remove('click-btn-accordion')
//         ACCORDION_BTNS_PRO.classList.remove('click-btn-accordion')
//     }
//     standartContent.classList.toggle('is-open')
//     ACCORDION_BTNS_STANDART.classList.toggle('click-btn-accordion')
// })

// ACCORDION_BTNS_PRO.addEventListener('click', function () {
//     if (basicContent.classList.contains('is-open') ||
//         standartContent.classList.contains('is-open')) {
//         basicContent.classList.remove('is-open') ||
//             standartContent.classList.remove('is-open')
//         ACCORDION_BTNS_BASICS.classList.remove('click-btn-accordion')
//         ACCORDION_BTNS_STANDART.classList.remove('click-btn-accordion')
//     }

//     proContent.classList.toggle('is-open')
//     ACCORDION_BTNS_PRO.classList.toggle('click-btn-accordion')
// })
const accordionBtns = document.querySelectorAll(".accordion");
const accordionContents = [
    document.querySelector(".basic-content"),
    document.querySelector(".standart-content"),
    document.querySelector(".pro-content")
];

accordionBtns.forEach((accordionBtn, index) => {
    accordionBtn.addEventListener("click", event => {
        const currentBtn = event.currentTarget;
        const currentContent = accordionContents[index];
        const openClass = "is-open";
        const activeClass = "click-btn-accordion";

        if (currentContent.classList.contains(openClass)) {
            currentContent.classList.remove(openClass);
            currentBtn.classList.remove(activeClass);
        } else {
            accordionContents.forEach(content => {
                content.classList.remove(openClass);
            });
            accordionBtns.forEach(btn => {
                btn.classList.remove(activeClass);
            });
            currentContent.classList.add(openClass);
            currentBtn.classList.add(activeClass);
        }
    })
});

const selectedItem = document.querySelector('.accordion-contacts');
const dropdownContent = document.querySelector('.dropdown-content');
const addressBlock = document.querySelector('.address-block');
const address = document.querySelector('.address');
const phone = document.querySelector('.phone');
const city = document.querySelector('.city');
const call = document.querySelector('.call');

selectedItem.addEventListener('click', () => {
    dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
});

dropdownContent.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.classList.contains('dropdown-item')) {
        return;
    }

    selectedItem.innerHTML = target.innerHTML;
    dropdownContent.style.display = 'none';

    addressBlock.style.display = 'flex';
    address.innerHTML = target.dataset.address;
    phone.innerHTML = target.dataset.phone;
    city.innerHTML = target.dataset.city;
    call.href = 'tel:' + target.dataset.phone;
    if (window.matchMedia("(max-width: 380px)").matches) {
        if (addressBlock.style.display == 'flex') {
            let contacts = document.querySelector('.contacts');
            contacts.style.backgroundImage = 'none';
        }
    }
});

