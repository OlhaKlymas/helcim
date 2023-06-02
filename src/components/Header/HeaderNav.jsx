import {NavLink} from 'react-router-dom';

const HeaderNav = props => {
    const activeClassName = 'nav__link--active';
    
    return (
        <nav className='header__nav nav'>
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
    )
}

export default HeaderNav;
