import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderBurgerMenu from './HeaderBurgerMenu';
import HeaderUser from './HeaderUser';

const Header = () => {
    const navigation = [
        {
            name: 'about',
            link: '/'
        },
        {
            name: 'careers',
            link: '/careers'
        },
        {
            name: 'our teams',
            link: '/teams'
        },
        {
            name: 'couriers',
            link: '/couriers'
        },
        {
            name: 'location',
            link: '/location'
        }
    ];

    return (
        <header className='header'>
            <HeaderLogo />
            <HeaderNav navigation={navigation} />
            <HeaderUser />
            <HeaderBurgerMenu navigation={navigation} />
        </header>
    )
}

export default Header;
