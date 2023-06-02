import classes from './InputText.module.scss';

const InputText = props => {
    return (
        <input 
            style={{width: props.width}}
            className={`${classes.input}`} 
            type='text' 
            placeholder={props.placeholder}
        />
    )
}

export default InputText;
