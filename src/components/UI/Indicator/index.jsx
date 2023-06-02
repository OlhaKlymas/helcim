import classes from './Indicator.module.scss';

const Indicator = props => {
    return (
        <div className={classes.item}>
            <span className={`${classes.circle} ${classes[props.status]}`}>
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.1301 0.401666L4.08948 6.43576L1.86995 4.21861C1.76234 4.11112 1.58786 4.11112 1.48023 4.21861L0.830708 4.86743C0.723097 4.97493 0.723097 5.14922 0.830708 5.25674L3.89461 8.31735C4.00222 8.42484 4.1767 8.42484 4.28434 8.31735L11.1693 1.43979C11.2769 1.3323 11.2769 1.158 11.1693 1.05049L10.5198 0.401666C10.4122 0.294171 10.2377 0.294171 10.1301 0.401666Z" fill="white"/>
                </svg>
            </span>
            <span className={classes.text}>
                {props.text}
            </span>
        </div>        
    )
}

export default Indicator;
