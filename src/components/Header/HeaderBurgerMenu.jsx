import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import HeaderUser from './HeaderUser';

const HeaderBurgerMenu = props => {
    const [isActive, setIsActive] = useState(false);
    
    const activeClassName = 'nav__link--active';

    return (
        <div className={
            isActive ? 
            'header__burger-menu burger-menu burger-menu--active' : 
            'header__burger-menu burger-menu'
            }>
            <div 
                className='burger-menu__lines'
                onClick={() => setIsActive(!isActive)}
            >
                <span className='burger-menu__line'></span>
                <span className='burger-menu__line'></span>
                <span className='burger-menu__line'></span>
            </div>
            <nav className='burger-menu__nav nav'>
                <HeaderUser />
                <ul className='nav__list'>
                    {props.navigation.map((item, index) => (
                        <li key={index} className='nav__item'>
                            <NavLink 
                                to={item.link}
                                className={({ isActive }) =>
                                    isActive ? `nav__link ${activeClassName}` : 'nav__link'
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default HeaderBurgerMenu;
