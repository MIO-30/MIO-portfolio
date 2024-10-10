// ヘッダー読み込み ==================
const topBack = document.querySelector('#sub-header a');
const h2 = document.querySelector('h2');
const line = document.querySelector('.line');
const headerP = document.querySelector('p');

line.animate({
    translate: ['-200% 0', '0 0'],
    opacity: [0, 1],
},{
    duration: 1600,
    easing: 'ease',
    fill: 'forwards',
});
h2.animate({
    translate: ['100% 0', '0 0'],
    opacity: [0, 1],
}, {
    duration: 1000,
    delay: 500,
    easing: 'ease',
    fill: 'forwards',
});
topBack.animate({
    translate: ['-100% 0', '0 0'],
    opacity: [0, 1],
}, {
    duration: 800,
    delay: 500,
    easing: 'ease',
    fill: 'forwards',
});



const gridBox = document.querySelectorAll('.grid-box');

const link = document.querySelectorAll('a');

const backOption = {
    duration: 600,
    easing: 'ease',
    fill: 'forwards',
};


for (let i = 0; i < gridBox.length; i++) {

// grid-box にゅっ ==================
gridBox[i].animate({
    opacity: [0, 1],
    translate: ['0 100px', 0],
}, {
    duration: 600,
    delay: 400 + i * 200,
    easing: 'ease-out',
    fill: 'forwards',
})

};

for (let i = 0; i < link.length; i++) {

// リンク踏む =========================
link[i].addEventListener('click', () => {

// ヘッダー ======================
line.animate({
        translate: ['0', '-100% 0'],
        opacity: [1, 0],
    }, backOption);
h2.animate({
        translate: ['0', '100% 0'],
        opacity: [1, 0],
    }, backOption);
topBack.animate({
        translate: ['0', '-100% 0'],
        opacity: [1, 0],
    }, backOption);


// 本文 ==========================
for (let i = 0; i < gridBox.length; i++) {

gridBox[i].animate({
    opacity: [1, 0],
    translate: [0, '0 100px'],    
}, {
    duration: 400,
    delay: i * 100,
    easing: 'ease',
    fill: 'forwards'
});

};
    
setTimeout(function() {

const url = [
    'index.html',
    'code-page/vtuber.html',
    'code-page/aquarium.html',
    'code-page/portfolio.html',
];

    window.location.href = url[i];
}, 600);
    
    
});


};

