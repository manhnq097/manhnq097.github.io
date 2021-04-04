const toggleSwitch = document.querySelector('#darkModeSwitch');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
function switchTheme(e) {
    if (e.target.checked) {
       document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme);

const menuItem = document.querySelectorAll('.menu-item a');
const section = document.querySelectorAll('section');
let section1 = 0;
let section2 = 0;
let section3 = 0;
let section4 = 0;
let section5 = 0;
let section6 = 0;
let section7 = 0;
let menu1;
let menu2;
let menu3;
let menu4;
let menu5;
let menu6;
window.addEventListener('DOMContentLoaded',() => {
    headerStyle();
    clickToScroll();
    window.addEventListener('resize', () => {
        headerStyle();
        clickToScroll();
    });
    window.addEventListener('scroll', () => {
        headerStyle();
        menuItem.forEach((e, i) => {
            i = i +1;
            menuItem.forEach((e) => {
                e.classList.remove('active');
            })
            if(i == 1) {
                menu1 = e;
            } else if(i == 2){
                menu2 = e;
            } else if(i == 3){
                menu3 = e;
            } else if(i == 4){
                menu4 = e;
            } else if(i == 5){
                menu5 = e;
            } else if(i == 6){
                menu6 = e;
            }
        })
        if(window.pageYOffset <= section2) {
            menu1.classList.add('active');
        } else if(window.pageYOffset >= section2 && window.pageYOffset < section3) {
            menu2.classList.add('active');
        } else if(window.pageYOffset >= section3 && window.pageYOffset < section4) {
            menu3.classList.add('active');
        } else if(window.pageYOffset >= section4 && window.pageYOffset < section5) {
            menu4.classList.add('active');
        } else if(window.pageYOffset >= section5 && window.pageYOffset < section6) {
            menu5.classList.add('active');
        } else if(window.pageYOffset >= section6) {
            menu6.classList.add('active');
        }
    });
});
function clickToScroll() {
    section.forEach((e, i) => {
        i = i +1;
        if(i == 1) {
            section1 = e.offsetTop;
        } else if (i == 2) {
            section2 = e.offsetTop;
        } else if (i == 3) {
            section3 = e.offsetTop;
        } else if (i == 4) {
            section4 = e.offsetTop;
        } else if (i == 5) {
            section5 = e.offsetTop;
        } else if (i == 6) {
            section6 = e.offsetTop;
        }else if (i == 7) {
            section7 = e.offsetTop;
        }
    })
    menuItem.forEach((e, i) => {
        i = i +1;
        e.addEventListener('click', function() {
            menuItem.forEach(function(e) {
                e.classList.remove('active');
            })
            e.classList.add('active');
            if(i == 1) {
                window.scroll(0, 0);
            } else if (i == 2) {
                window.scroll(0, section2);
            } else if (i == 3) {
                window.scroll(0, section3);
            } else if (i == 4) {
                window.scroll(0, section4);
            } else if (i == 5) {
                window.scroll(0, section5);
            } else if( i == 6) {
                window.scroll(0, section6);
            }else if( i == 7) {
                window.scroll(0, section6);
            }
        })
    })
}

headerStyle = () => {
    let header = document.querySelector('header');
    let headerHeight = header.offsetHeight;
        if(window.pageYOffset >= headerHeight) {
            header.classList.add('scroll');
        }else {
            header.classList.remove('scroll');
        }
    let contentWidth = document.querySelector('.main-content').offsetWidth;
    header.style.width = `${contentWidth}px`
}