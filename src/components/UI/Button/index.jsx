import {Link} from 'react-router-dom';

import classes from './Button.module.scss';

const Button = props => {
    return (
        <>{
            props.link ? 
            <Link 
                to={props.link} 
                className={`${classes.btn} ${classes[props.className]}`}
            >
                {props.value}
            </Link> :
            <button className={`${classes.btn} ${classes[props.className]}`}>
                {props.value}
            </button>
        }</>
    )
}

export default Button;
