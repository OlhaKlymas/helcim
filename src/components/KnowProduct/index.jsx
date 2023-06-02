import {useState, useEffect} from 'react';

import KnowProductDesktop from './KnowProductDesktop';
import KnowProductMobile from './KnowProductMobile';

const KnowProduct = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    });

    return (
        <>
            {
                windowWidth > 1024 ? 
                <KnowProductDesktop /> : 
                <KnowProductMobile />
            }
        </>
    )
}

export default KnowProduct;
