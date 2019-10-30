// Your code goes here

///// Event on "Fun Bus" header /////

// 'mouseover' //
const headerLogo = document.querySelector('.logo-heading');
headerLogo.addEventListener('mouseover', () => {
    headerLogo.textContent = 'The Magic School Bus';
})

// 'keydown' //
const magicBus = document.querySelector('.intro img');
document.addEventListener('keydown', (e) => {
    if (e.key === 'f') {
        magicBus.src = 'img/magic-school-bus.png';
    }
})

// 'wheel' //
magicBus.addEventListener('wheel', () => {
    console.log('You see me wheeling!');
})

// 'drag/dragend' //
const links = document.querySelectorAll('.nav-link');
magicBus.addEventListener('drag', (e) => {
    e.target.style.opacity = '.1';
})
magicBus.addEventListener('dragend', (e) => {
    e.target.style.opacity = '1';
})

// 'click' //
const welcomeHeader = document.querySelector('.intro h2');
welcomeHeader.addEventListener('click', (e) => {
    e.target.textContent = 'Welcome To The Magic School Bus';
})

// 'mousemove' //
const mouseMove = document.querySelector('.main-navigation');
mouseMove.addEventListener('mousemove', (e) => {
    mouseMove.style.backgroundColor = '#ffd800';
})

// 'resize' //
const windowResize = document.body;
window.addEventListener('resize', () => {
    windowResize.style.cssText = 'background-color: black; color: white; display: flex; justify-content: center; text-align: center; font-size: 10rem';
    windowResize.textContent = 'Too much magic for this screen size!'
})

// 'click' -- .stopPropagation() //
const signMeBg = document.querySelectorAll('.destination');
const btn = document.querySelectorAll('.btn');
signMeBg.forEach(item => {
    item.addEventListener('click', () => {
        item.style.backgroundColor = 'pink';
    })

    btn.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            item.textContent = 'YOU CLICKED ME!';
        })
    })
})

// 'dblclick' //
const selectFooter = document.querySelector('.footer p');
selectFooter.addEventListener('dblclick', () => {
    selectFooter.textContent = 'Copyright The Magic School Bus 2018';
})

// .preventDefault() //
links.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
    })
})