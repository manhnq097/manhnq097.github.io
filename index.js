var WIDTH_PAGE = document.documentElement.clientWidth || document.body.clientWidth;
const pagesBlock = document.querySelector('.pages');
const pages = [...document.querySelectorAll('.page')];
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
let index = 0;
pagesBlock.style.width = `${WIDTH_PAGE * pages.length}px`;
window.addEventListener('resize', () => {
    WIDTH_PAGE = document.documentElement.clientWidth || document.body.clientWidth;
    pagesBlock.style.width = `${WIDTH_PAGE * pages.length}px`;
    pagesBlock.style.transform = `translateX(-${WIDTH_PAGE * index}px)`
});
const next = () => {
    if (index < pages.length - 1) {
        index += 1;
        pagesBlock.style.transform = `translateX(-${WIDTH_PAGE * index}px)`
    };
    if (index == 0) {
        prevBtn.classList.add('disable');
    } else {
        prevBtn.classList.remove('disable');
    }
    if (index == pages.length - 1) {
        nextBtn.classList.add('disable');
    } else {
        nextBtn.classList.remove('disable');
    }
};

const prev = () => {
    if (index > 0) {
        index -= 1;
        pagesBlock.style.transform = `translateX(-${WIDTH_PAGE * index}px)`
    }
    if (index == 0) {
        prevBtn.classList.add('disable');
    } else {
        prevBtn.classList.remove('disable');
    }
    if (index == pages.length - 1) {
        nextBtn.classList.add('disable');
    } else {
        nextBtn.classList.remove('disable');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (index == 0) {
        prevBtn.classList.add('disable');
    }
})

nextBtn.addEventListener('click', () => {
    next();
});

prevBtn.addEventListener('click', () => {
    prev();
});