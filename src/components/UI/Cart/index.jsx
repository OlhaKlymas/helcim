import {throttle} from 'lodash';

import {useState} from 'react';
import {Link} from 'react-router-dom';

import classes from './Cart.module.scss';
import Arrow from '../Arrow';

const Cart = props => {
    const[isSwipe, setIsSwipe] = useState(false);
    const[isActive, setIsActive] = useState(false);

    const throttledTouchMove = throttle(() => {
        console.log('onTouchMove', isSwipe, isActive)
        setIsSwipe(true)
    }, 1000);

    const throttledTouchEnd = throttle(() => {
        console.log('onTouchEnd', isSwipe, isActive)
        window.innerWidth < 1025 && !isSwipe && setIsActive(!isActive)
    }, 1000);

    return (
        <article
            className={`${classes.cart} ${isActive && classes.cartActive}`}
            onTouchStart={() => setIsSwipe(false)}
            onTouchMove={() => throttledTouchMove()}
            onTouchEnd={() => throttledTouchEnd()}
        >
            <div className={`${classes.side} ${classes.front}`}>
                <img src={props.item.img} alt={props.item.title} className={classes.frontImg} />
                <p className={classes.frontTitle}>{props.item.title}<span className='text-pink'>.</span></p>
            </div>
            <div className={`${classes.side} ${classes.back}`}>
                <p className={classes.backTitle}>{props.item.title}<span className='text-pink'>.</span></p>
                <div className={classes.backContent}>
                    {props.item.data.map((row, index) => (
                        <div key={index} className={classes.row}>
                            <div className={classes.number}>{row.number}</div>
                            <div className={classes.head}>{row.head}</div>
                        </div>
                    ))}
                </div>
                <Link to={props.item.link} className={classes.arrow}>
                    <Arrow />
                </Link>                
            </div>
        </article>
    )
}

export default Cart;
