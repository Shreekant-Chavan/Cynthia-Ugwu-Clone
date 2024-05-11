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


function circleMouseFollower() {
    window.addEventListener('mousemove', function(dets) {
        document.querySelector('#mini-circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}

circleMouseFollower();
firstPageAnimation();