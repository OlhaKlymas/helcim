import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scrollFadeIn = (trigger, el, direction, value, reverse) => {
    gsap.fromTo(el, {
        [direction]: value,
        autoAlpha: 0,
        stagger: 0.3,
        duration: 0.5
    }, {
        scrollTrigger: {
            trigger: trigger,
            start: '-10% top',
            toggleActions: `play none none ${reverse}`
        }, 
        [direction]: 0,
        autoAlpha: 1,
        stagger: 0.3,
        duration: 0.5
    });
};

export const fadeIn = (el, value) => {
    gsap.from(el, {
        yPercent: 50,
        autoAlpha: 0,
        duration: 1,
        delay: value
    });
};
