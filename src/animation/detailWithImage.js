import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const detailWithImage = (textBlock, imgBlock, images, details) => {
    ScrollTrigger.create({
        trigger: textBlock,
        start: 'top top',
        end: 'bottom bottom',
        pin: imgBlock
    })
    
    details.forEach((detail, index) => {
        let animation = '';

        if(index === 0) {
            gsap.set(images[index], {yPercent: 0});
            animation = gsap.timeline()
                .to(images[index], {yPercent: -100});
            ScrollTrigger.create({
                trigger: detail,
                start: 'center center',
                end: '120% center',
                animation: animation,
                scrub: true
            })
        } else if(index === details.length - 1) {
            gsap.set(images[index], {yPercent: 100});
            animation = gsap.timeline()
                .to(images[index], {yPercent: 0});
            ScrollTrigger.create({
                trigger: detail,
                start: '-70% center',
                end: 'center center',
                animation: animation,
                scrub: true
            })
        } else {
            gsap.set(images[index], {yPercent: 100});
            animation = gsap.timeline()
                .to(images[index], {yPercent: -100});
            ScrollTrigger.create({
                trigger: detail,
                start: '-20% center',
                end: '120% center',
                animation: animation,
                scrub: true
            })
        }
    })
};
