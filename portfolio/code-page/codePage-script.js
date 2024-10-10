// ヘッダー読み込み ==================
const topBack = document.querySelector('#sub-header a');
const h2 = document.querySelector('h2');
const line = document.querySelector('.line');const headerP = document.querySelector('header p');



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
headerP.animate({
    translate: ['50% 0', '0 0'],
    opacity: [0, 1],
}, {
    duration: 1200,
    delay: 600,
    easing: 'ease',
    fill: 'forwards',
});


// 本文 ===========================
const h3 = document.querySelectorAll('h3');
for (let i = 0; i < h3.length; i++) {
    h3[i].animate({
        opacity: [0, 1],
        translate: ['0 50px', 0],
    },{
        duration: 400,
        delay: 300 + i * 100,
        easing: 'ease-out',
        fill: 'forwards',
    })
};

const table = document.querySelectorAll('table');
for (let i = 0; i < table.length; i++) {
    table[i].animate({
        opacity: [0, 1],
        translate: ['0 100px', 0],
    },{
        duration: 600,
        delay: 400 + i * 200,
        easing: 'ease-out',
        fill: 'forwards',
    })

}

const comment = document.querySelector('.comment');
comment.animate({
    opacity: [0, 1],
    translate: ['0 100px', 0],
},{
    duration: 600,
    delay: 800,
    easing: 'ease-out',
    fill: 'forwards',
});

const side = document.querySelector('#main-side');
side.animate({
    opacity: [0, 1],
    translate: ['200px 0', 0],
},{
    duration: 700,
    delay: 600,
    easing: 'ease-out',
    fill: 'forwards',
});



const backOption = {
    duration: 600,
    easing: 'ease',
    fill: 'forwards',
};

// 戻る ===========================
topBack.addEventListener('click', () => {

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
headerP.animate({
    translate: ['0', '50% 0'],
    opacity: [1, 0],
    }, backOption);


// 本文 =========================
for (let i = 0; i < h3.length; i++) {
    h3[i].animate({
        opacity: [1, 0],
        translate: [0, '0 50px'],
    }, backOption)
};

for (let i = 0; i < table.length; i++) {
    table[i].animate({
        opacity: [1, 0],
        translate: [0, '0 100px'],
    }, backOption)

}

comment.animate({
    opacity: [1, 0],
    translate: [0, '0 100px'],
}, backOption);

side.animate({
    opacity: [1, 0],
    translate: [0, '200px 0'],
}, backOption);


setTimeout(function() {

    const url = '../code.html';
    
        window.location.href = url;
    }, 600);

});

