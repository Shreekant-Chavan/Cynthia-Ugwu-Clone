const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstPageAnimation() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    tl.to('.boundingelem', {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1,
        delay: -1,
        stagger: 0.2
    })

    tl.from('#herofooter', {
        y: -10,
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -1
    })
}


var timeout;

function circleMouseSkew() {

    var xscale = 1;
    var yscale = 1;

    var prevx = 0;
    var prevy = 0;


    window.addEventListener('mousemove', function(dets) {
        clearTimeout(timeout);
        
        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - prevx);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - prevy);
        
        prevx = dets.clientX;
        prevy = dets.clientY;

        circleMouseFollower(xscale,yscale);

        timeout = setTimeout(function(){
            document.querySelector('#mini-circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        }, 100);
    })
}


function circleMouseFollower(xscale, yscale) {
    window.addEventListener('mousemove', function(dets) {
        document.querySelector('#mini-circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
    })
}


circleMouseSkew();
circleMouseFollower();
//firstPageAnimation();


document.querySelectorAll(".elem").forEach(function (elem) {
    elem.addEventListener("mousemove", function(dets){
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1.inOut,
        });
    });
});