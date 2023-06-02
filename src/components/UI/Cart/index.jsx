import {Link} from 'react-router-dom';

import classes from './Cart.module.scss';
import Arrow from '../Arrow';

const Cart = props => {
    return (
        <article className={classes.cart}>
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
