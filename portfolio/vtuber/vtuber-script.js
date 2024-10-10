const h2line = document.querySelectorAll('.h2line'); 
const h2 = document.querySelectorAll('h2');
const h2P = document.querySelectorAll('.h2-flex p');


// h2 ================================
const showH2 = (entries, obs) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate({
                opacity: [0, 1],
                translate: ['0 50%', 0],
                
            }, {
                duration: 600,
                easing: 'ease-out',
                fill: 'forwards',
            });
            obs.unobserve(entry.target);
        };

    });
};

const h2Observer = new IntersectionObserver(showH2);
h2.forEach((h2) => {
    h2Observer.observe(h2);
});


// h2Line ==============================
const showLine = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate({
                opacity: [0, 1],
                translate: ['-100% 0', 0],
            }, {
                duration: 600,
                delay: 200,
                easing: 'ease-out',
                fill: 'forwards',
            });
            obs.unobserve(entry.target);

        };

    });

};

const lineObserve = new IntersectionObserver(showLine);
h2line.forEach((h2line) => {
    lineObserve.observe(h2line);
});


// h2P =================================
const showH2P = (entries, obs) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate({
                opacity: [0, 1],
                translate: ['0 50px', 0],
                
            }, {
                duration: 600,
                delay: 100,
                easing: 'ease-out',
                fill: 'forwards',
            });
            obs.unobserve(entry.target);

        };

    });
};

const h2PObserver = new IntersectionObserver(showH2P);
h2P.forEach((h2P) => {
    h2PObserver.observe(h2P);
});

