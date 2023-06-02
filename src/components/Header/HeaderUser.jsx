import Button from '../UI/Button';

const HeaderUser = () => {
    return (
        <div className='header__user'>
            <Button value='Login' className='btn--outline' />
            <Button value='Sign Up' className='btn--purple' />
        </div>
    )
}

export default HeaderUser;
