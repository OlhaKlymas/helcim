import classes from './Switch.module.scss';

const Switch = () => {
    return (
        <div className={classes.switch}>
            <input type='radio' className={`${classes.input} ${classes.inputOn}`} name='fruit' value='pick-up' id='on' />	
            <input type='radio' className={`${classes.input} ${classes.inputOff}`} name='fruit' value='pick-up' id='off' />
            <div className={classes.wrapper}>
                <label htmlFor='on' className={`${classes.label} ${classes.labelOn}`}></label>	
                <label htmlFor='off' className={`${classes.label} ${classes.labelOff}`}></label>
                <span className={classes.indicator}></span>
            </div>
        </div>
    )
}

export default Switch;
