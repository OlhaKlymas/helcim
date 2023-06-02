import {Link} from 'react-router-dom';

const resorces = [
    {
        name: 'About us',
        link: '/'
    },
    {
        name: 'Careers',
        link: '/careers'
    },
    {
        name: 'Sustainability',
        link: '/sustainability'
    },
    {
        name: 'Merchant Stories',
        link: '/merchant_stories'
    },
    {
        name: 'Our Reviews',
        link: '/reviews'
    },
    {
        name: 'Customer Portal',
        link: '/customer_portal'
    },
    {
        name: 'Cookies',
        link: '/cookies'
    },
    {
        name: 'Partner with us',
        link: '/partner'
    },
    {
        name: 'Media & Press',
        link: '/media&press'
    }
];

const info = [
    {
        name: 'Our Pricing',
        link: '/pricing'
    },
    {
        name: 'Partnering with us',
        link: '/partnering'
    }
];

const terms = [
    {
        name: 'Privacy Policy',
        link: '/privacy_policy'
    },
    {
        name: 'Terms of Service',
        link: '/terms_of_service'
    },
    {
        name: 'Acceptable Use',
        link: '/acceptable_use'
    }
];

const contactSales = '555-555-5555';
const contactSupport = '555-555-5555';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container-text footer__container'>
                <div className='footer__column'>
                    <div className='footer__row'>
                        <div className='footer__title'>Contact Us</div>
                        <ul className='footer__list'>
                            <li className='footer__list-item'>Contact Sales</li>
                            <li className='footer__list-item'>
                                <Link to={`tel:${contactSales}`}>{contactSales}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__row'>
                        <div className='footer__title'>Support</div>
                        <ul className='footer__list'>
                            <li className='footer__list-item'>Support Articles</li>
                            <li className='footer__list-item'>Contact Support</li>
                            <li className='footer__list-item'>
                                <Link to={`tel:${contactSupport}`}>{contactSupport}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer__column'>
                    <div className='footer__row'>
                        <div className='footer__title'>More Resources</div>
                        <ul className='footer__list'>
                            {resorces.map((item, index) => (
                                <li key={index} className='footer__list-item'>
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='footer__column'>
                    <div className='footer__row'>
                        <div className='footer__title'>Info</div>
                        <ul className='footer__list'>
                            {info.map((item, index) => (
                                <li key={index} className='footer__list-item'>
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='footer__row'>
                        <div className='footer__title'>Terms & Policies</div>
                        <ul className='footer__list'>
                            {terms.map((item, index) => (
                                <li key={index} className='footer__list-item'>
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
