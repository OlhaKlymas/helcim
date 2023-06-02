import map from './../../images/hero/map.png';
import home from './../../images/hero/map-home.svg';
import HeroMapWay from './HeroMapWay';

const HeroMap = () => {
    return (
        <div className='hero__map'>
            <div className='hero__map-wrapper'>
                <img src={map} alt='map' />
                <HeroMapWay />
                <img src={home} alt='home' className='hero__map-home' />
            </div>
            <p className='hero__map-text'>Estimated arrival: 6:06PM</p>
        </div>
    )
}

export default HeroMap;
