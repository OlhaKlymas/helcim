import Indicator from '../Indicator';

import classes from './ProgressBar.module.scss';

const ProgressBar = props => {
    return (
        <div className={classes.progressBar}>
            {props.statuses.map((item, index) => {
                return <Indicator 
                    key={index}
                    text={item} 
                    status={index < props.step - 1 ? 'fill' : index === props.step - 1 ? 'checked' : 'empty'}
                />
            })}
            <div className={classes.backProgressLine}>
                <span 
                    className={classes.progressLine} 
                    style={{width: props.width}}></span>
            </div>   
        </div>     
    )
}

export default ProgressBar;
