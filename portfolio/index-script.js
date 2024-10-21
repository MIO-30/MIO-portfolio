// index ==============================================

const indexBtn = document.querySelectorAll('#index-menu a');

const imgList = [
    'img/illust/illust-1.png',
    'img/kurage.jpg',
    'img/my.jpg'
];

const backImg = document.querySelector('#back-img img');


for (let i = 0; i < indexBtn.length; i++) {

    indexBtn[i].addEventListener('mouseover', () => {

        backImg.animate({
            opacity: [0, 1],
        }, {
            duration: 1200,
            easing: 'ease-out',
            fill: 'forwards',
        });

        backImg.src = imgList[i];
    });
 
}


// 要素がにゅっと出てくる =====================================
const title = [
    document.querySelector('h1'),
    document.querySelector('#title p'),
];

const optionLoad = {
    duration: 800,
    delay: 700,
    easing: 'ease',
    fill: 'forwards',
};

// window.addEventListener('load', () => {

    // title ============================
    for (let i = 0; i < title.length; i++) {
        title[i].animate({
            opacity: [0, 1],
            translate: ['0 -50%', '0 0'],
        }, optionLoad);
    };

    // btn ===================================
    for (let i = 0; i < indexBtn.length; i++) {

        indexBtn[i].animate({
            opacity: [0, 1],
            translate: ['0 100%', '0 0'],
        }, {
            duration: 800,
            delay: 500 + i * 100,
            easing: 'ease',
            fill: 'forwards',
        });
    };

// });


// index画面遷移 =======================================
const link = document.querySelectorAll('a');

for (let i = 0; i < link.length; i++) {

link[i].addEventListener('click', () => {

    const optionLink = {
        duration: 500,
        easing: 'ease',
        fill: 'forwards',
    };

// title動き =====================================
    for (let i = 0; i < title.length; i++) {
        title[i].animate({
            opacity: [1, 0],
            translate: ['0 0', '0 -100%'],
        }, optionLink);
    };

    // ボタン動き ===================================
    for (let i = 0; i < indexBtn.length; i++) {

        indexBtn[i].animate({
            opacity: [1, 0],
            translate: ['0 0', '0 100%'],
        }, {
            duration: 500,
            delay: i * 100,
            easing: 'ease',
            fill: 'forwards',
        });
    };

    // 背景動き ===========================================
    backImg.animate({
        opacity: [1, 0],
        visibility: 'hidden',
    }, optionLink);


    // 遷移遅延 ===========================================
    setTimeout(function() {

        const url = [
            'illust.html',
            'code.html',
            'about.html',
        ];

        window.location.href = url[i];
    }, 800);

});

};



