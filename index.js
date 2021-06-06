const WIDTH_PAGE = document.documentElement.clientWidth || document.body.clientWidth;
const pagesBlock = document.querySelector('.pages');
const pages = [...document.querySelectorAll('.page')];
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
let index = 0;
pagesBlock.style.width = `${WIDTH_PAGE * pages.length}px`;

const next = () => {
    if (index < pages.length - 1) {
        index += 1;
        pagesBlock.style.transform = `translateX(-${WIDTH_PAGE * index}px)`
    };
    if (index == 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'flex';
    }
    if (index == pages.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'flex';
    }
};

pagesBlock.addEventListener('touchmove', () => {
    console.log("hihi")
})

const prev = () => {
    if (index > 0) {
        index -= 1;
        pagesBlock.style.transform = `translateX(-${WIDTH_PAGE * index}px)`
    }
    if (index == 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'flex';
    }
    if (index == pages.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'flex';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (index == 0) {
        prevBtn.style.display = 'none';
    }
})

nextBtn.addEventListener('click', () => {
    next();
});

prevBtn.addEventListener('click', () => {
    prev();
});