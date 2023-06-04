import Slider from 'react-slick';
import {useState, useRef, useEffect} from 'react';

import {scrollFadeIn} from './../animation/fadeIn';

import Cart from './UI/Cart';

import northAmerica from './../images/findYouBelong/northAmerica.svg';
import europe from './../images/findYouBelong/europe.svg';
import asia from './../images/findYouBelong/asia.svg';
import latinAmerica from './../images/findYouBelong/latinAmerica.svg';

const FindYouBelong = () => {
    const blockRef = useRef(null);
    const cartRefs = useRef([]);
    cartRefs.current = [];

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const belong = [
        {
            title: 'North America',
            img: northAmerica,
            link: '/north_america',
            data: [
                {
                    head: 'Openings',
                    number: 29
                },
                {
                    head: 'Categories',
                    number: 10
                }
            ]
        },
        {
            title: 'Europe',
            img: europe,
            link: '/europe',
            data: [
                {
                    head: 'Openings',
                    number: 29
                },
                {
                    head: 'Categories',
                    number: 10
                }
            ]
        },
        {
            title: 'Asia Pacific',
            img: asia,
            link: '/asia',
            data: [
                {
                    head: 'Openings',
                    number: 29
                },
                {
                    head: 'Categories',
                    number: 10
                }
            ]
        },
        {
            title: 'Latin America',
            img: latinAmerica,
            link: '/latin_america',
            data: [
                {
                    head: 'Openings',
                    number: 29
                },
                {
                    head: 'Categories',
                    number: 10
                }
            ]
        }
    ];
    
    const settings = {
        slidesToShow: 3.5,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.8,
                }
            },
            {
              breakpoint: 480,
              settings: {
                    slidesToShow: 1.2,
                }
            }
        ]
    };

    useEffect(() => {
        const block = blockRef.current;
        const cart = cartRefs.current;
        
        setAnimation(block, cart);

        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
            setAnimation(block, cart);
        });
    });

    const addToRefs = (el) => {
        if(el && !cartRefs.current.includes(el)) {
            cartRefs.current.push(el);
        }
    }

    const setAnimation = (block, cart) => {
        if(windowWidth > 1320) {
            scrollFadeIn(block, cart, 'x', -100, 'reverse');
        }
    }

    return (
        <section className='find-you-belong' ref={blockRef}>
            <div className='find-you-belong__container container'>
                <div className='find-you-belong__description container-text'>
                    <h2 className='find-you-belong__title'>Find where you belong<span className='text-red'>.</span></h2>
                    <p className='find-you-belong__info'>Join our team and be part of a dynamic community that spans continents, connects talents, and celebrates diversity.</p>
                </div>
                <div className='find-you-belong__carts'>
                    {windowWidth < 1320 ? 
                    <Slider {...settings}>
                        {belong.map((item, index) => (
                            <div key={index} className='find-you-belong__cart'>
                                <Cart item={item} />
                            </div>
                        ))}
                    </Slider> :
                        belong.map((item, index) => (
                            <div key={index} className='find-you-belong__cart' ref={addToRefs}>
                                <Cart item={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='find-you-belong__fluid container-fluid'>
                <div className='find-you-belong__quote container-fluid__content container-text'>
                    <p className='find-you-belong__quote-text'>
                        “As an intern, I've been given the chance to make an impact, to contribute my unique perspective, and to grow both personally and professionally.”
                    </p>
                    <p className='find-you-belong__quote-autor'>- James Allen, Product Design Intern</p>
                </div>
            </div>
        </section>
    )
}

export default FindYouBelong
