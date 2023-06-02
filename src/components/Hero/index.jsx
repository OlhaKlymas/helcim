import {useRef, useEffect} from 'react';

import {parallax} from './../../animation/parallax';
import {scrollFadeIn} from './../../animation/fadeIn';
import {fadeIn} from './../../animation/fadeIn';

import Button from './../UI/Button';
import HeroMap from './../Hero/HeroMap';
import HeroOrder from './../Hero/HeroOrder';
import HeroProduct from './../Hero/HeroProduct';

import phone from './../../images/hero/phone.png';

const Hero = () => {
    const heroBlockRef = useRef(null);
    const mapRef = useRef(null);
    const productRef = useRef(null);
    const orderRef = useRef(null);
    const phoneRef = useRef(null);
    const btnRef = useRef(null);
    const headRef = useRef(null);

    useEffect(() => {
        const heroBlock = heroBlockRef.current;
        const map = mapRef.current;
        const product = productRef.current;
        const order = orderRef.current;
        const phone = phoneRef.current;
        const btn = btnRef.current;
        const head = headRef.current;

        parallax(heroBlock, map, -20, 100);
        parallax(heroBlock, product, 15, 100);
        parallax(heroBlock, order, 5, 100);
        scrollFadeIn(heroBlock, phone, 'yPercent', 50, 'none');
        fadeIn(btn, 2);
        fadeIn(head, 3);
    });

    return (
        <section className='container-wide hero' ref={heroBlockRef}>
            <div className='hero__container'>
                <h1 ref={headRef}>The cravings you want, when you want<span className='text-pink'>.</span></h1>
                <span ref={btnRef}>
                    <Button value='Go feed your hunger' className='btn--pink' />
                </span>
                <div className='hero__pictures'>
                    <div className='hero__picture hero__picture--map' ref={mapRef}>
                        <HeroMap />
                    </div>
                    <div className='hero__picture hero__picture--product' ref={productRef}>
                        <HeroProduct />
                    </div>
                    <div className='hero__order' ref={orderRef}>
                        <HeroOrder />
                    </div>
                    <div className='hero__phone' ref={phoneRef}>
                        <img src={phone} alt='phone' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
