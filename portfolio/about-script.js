// ヘッダー読み込み ==================
const topBack = document.querySelector('#sub-header a');
const h2 = document.querySelector('h2');
const line = document.querySelector('header .line');
const contLine = document.querySelectorAll('#about-main .line');
const side = document.querySelector('#about-side');
const menuBtn = document.querySelectorAll('button');
const main = document.querySelector('#about-main');
const h3 = document.querySelectorAll('h3');
const contP = document.querySelectorAll('.cont p');



// 読み込みふわっ ===============================
line.animate({
    translate: ['-200% 0', '0 0'],
    opacity: [0, 1],
},{
    duration: 1600,
    easing: 'ease',
    fill: 'forwards',
});
for (let i = 0; i < contLine.length; i++) {

contLine[i].animate({
    translate: ['-200% 0', '0 0'],
    opacity: [0, 1],
},{
    duration: 1600,
    easing: 'ease',
    fill: 'forwards',
});

};
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
side.animate({
    opacity: [0, 1],
}, {
    duration: 1000,
    delay: 800,
    easing: 'ease',
    fill: 'forwards',
});
for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].animate({
        translate: ['0 50%', '0 0'],
        opacity: [0, 1],
    }, {
        duration: 500,
        delay: 900 + i * 100,
        easing: 'ease',
        fill: 'forwards',
    });
}
main.animate({
    opacity: [0, 1],
}, {
    duration: 800,
    delay: 700,
    easing: 'ease',
    fill: 'forwards',
});
for (let i = 0; i < h3.length; i++) {
    h3[i].animate({
        translate: ['0 30%', '0 0'],
        opacity: [0, 1],
    }, {
        duration: 500,
        delay: 800 + i * 100,
        easing: 'ease',
        fill: 'forwards',
    });
};
for (let i = 0; i < contP.length; i++) {
    contP[i].animate({
        translate: ['0 50%', '0 0'],
        opacity: [0, 1],
    }, {
        duration: 500,
        delay: 1000 + i * 100,
        easing: 'ease',
        fill: 'forwards',
    });
};


// メニューボタン押し ===============================
const checked = document.querySelector('.checked');

const btn1 = document.querySelector('#menu-btn1');
const btn2 = document.querySelector('#menu-btn2');
const btn3 = document.querySelector('#menu-btn3');

const myself = document.querySelector('#myself');
const skill = document.querySelector('#skill');
const comment = document.querySelector('#comment');



btn1.addEventListener('click', () => {
    checked.classList.remove('skill-check-btn');
    checked.classList.remove('comment-check-btn');
    myself.style.display = 'grid';
    skill.style.display = 'none';
    comment.style.display = 'none';

    myself.animate({
        opacity: [0, 1],
    }, {
        duration: 800,
        easing: 'ease',
        fill: 'forwards',
    });
    for (let i = 0; i < contLine.length; i++) {

        contLine[i].animate({
            translate: ['-200% 0', '0 0'],
            opacity: [0, 1],
        },{
            duration: 1000,
            easing: 'ease',
            fill: 'forwards',
        });
        
    };
    for (let i = 0; i < h3.length; i++) {
        h3[i].animate({
            translate: ['0 30%', '0 0'],
            opacity: [0, 1],
        }, {
            duration: 500,
            easing: 'ease',
            fill: 'forwards',
        });
    };
    for (let i = 0; i < contP.length; i++) {
        contP[i].animate({
            translate: ['30% 0', '0 0'],
            opacity: [0, 1],
        }, {
            duration: 800,
            easing: 'ease',
            fill: 'forwards',
        });
    };
    
});

btn2.addEventListener('click', () => {
    checked.classList.add('skill-check-btn');
    checked.classList.remove('comment-check-btn');
    myself.style.display = 'none';
    skill.style.display = 'grid';
    comment.style.display = 'none';

    skill.animate({
        opacity: [0, 1],
    }, {
        duration: 800,
        easing: 'ease',
        fill: 'forwards',
    });
    for (let i = 0; i < contLine.length; i++) {

        contLine[i].animate({
            translate: ['-200% 0', '0 0'],
            opacity: [0, 1],
        },{
            duration: 1000,
            easing: 'ease',
            fill: 'forwards',
        });
        
    };
    for (let i = 0; i < h3.length; i++) {
        h3[i].animate({
            translate: ['0 30%', '0 0'],
            opacity: [0, 1],
        }, {
            duration: 500,
            easing: 'ease',
            fill: 'forwards',
        });
    };
    for (let i = 0; i < contP.length; i++) {
        contP[i].animate({
            translate: ['30% 0', '0 0'],
            opacity: [0, 1],
        }, {
            duration: 800,
            easing: 'ease',
            fill: 'forwards',
        });
    };

});

btn3.addEventListener('click', () => {
    checked.classList.add('comment-check-btn');
    checked.classList.remove('skill-check-btn');
    myself.style.display = 'none';
    skill.style.display = 'none';
    comment.style.display = 'grid';

    comment.animate({
        opacity: [0, 1],
    }, {
        duration: 800,
        easing: 'ease',
        fill: 'forwards',
    });
    for (let i = 0; i < contLine.length; i++) {

        contLine[i].animate({
            translate: ['-200% 0', '0 0'],
            opacity: [0, 1],
        },{
            duration: 1000,
            easing: 'ease',
            fill: 'forwards',
        });
        
    };
    for (let i = 0; i < h3.length; i++) {
        h3[i].animate({
            translate: ['0 30%', '0 0'],
            opacity: [0, 1],
        }, {
            duration: 500,
            easing: 'ease',
            fill: 'forwards',
        });
    };
    for (let i = 0; i < contP.length; i++) {
        contP[i].animate({
            translate: ['30% 0', '0 0'],
            opacity: [0, 1],
        }, {
            duration: 800,
            easing: 'ease',
            fill: 'forwards',
        });
    };

});





topBack.addEventListener('click', () => {

    const backOption = {
        duration: 600,
        easing: 'ease',
        fill: 'forwards',
    };

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
    side.animate({
        translate: ['0', '-50px 0'],
        opacity: [1, 0],
        }, {
        duration: 500,
        delay: 100,
        easing: 'ease',
        fill: 'forwards',
        });
    main.animate({
        translate: ['0', '100px 0'],
        opacity: [1, 0],
        }, {
            duration: 400,
            delay: 200,
            easing: 'ease',
            fill: 'forwards',
        });


    // 遷移遅延 ===========================================
    setTimeout(function() {

    const url = 'index.html';
        window.location.href = url;
    }, 600);

});

