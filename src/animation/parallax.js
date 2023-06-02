import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const parallax = (trigger, el, x, y) => {
    gsap.to(el, {
        xPercent: x,
        yPercent: y,
        ease: 'none',
        scrollTrigger: {
            trigger: trigger,
            scrub: true
        }, 
    });
};
