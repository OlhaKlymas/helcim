import classes from './Select.module.scss';

const Select = props => {
    return (
        <div className={classes.wrapper}>
            <select name={props.name} className={classes.select}>
                {props.options.map((item, index) => 
                    <option key={index} value={item.value}>{item.label}</option>
                )}
            </select>
        </div>
    )
}

export default Select;
