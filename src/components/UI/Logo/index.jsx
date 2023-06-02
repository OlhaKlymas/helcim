import {Link} from 'react-router-dom';

import logo from './logo.svg';

const Logo = () => {
    return (
        <Link to='/helcim'>
            <img 
                src={logo}
                alt='logo'
                className='logo'
            />
        </Link>
    )
}

export default Logo;
