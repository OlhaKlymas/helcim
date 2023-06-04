import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const detailWithImage = (textBlock, imgBlock, images, details) => {   
    details.forEach((detail, index) => {
        let animation = '';

        if(index === 0) {
            gsap.set(images[index], {yPercent: 0});
            animation = gsap.timeline()
                .to(images[index], {yPercent: -110});
            ScrollTrigger.create({
                trigger: detail,
                start: 'center center',
                end: 'bottom top',
                animation: animation,
                scrub: true
            })
        } else if(index === details.length - 1) {
            gsap.set(images[index], {yPercent: 100});
            animation = gsap.timeline()
                .to(images[index], {yPercent: -10});
            ScrollTrigger.create({
                trigger: detail,
                start: 'top-=150 center',
                end: 'bottom center',
                animation: animation,
                scrub: true
            })
        } else {
            gsap.set(images[index], {yPercent: 100});
            animation = gsap.timeline()
                .to(images[index], {yPercent: -110});
            ScrollTrigger.create({
                trigger: detail,
                start: 'top-=150 center',
                end: 'bottom top',
                animation: animation,
                scrub: true
            })
        }
    })
};
