import {Children} from 'react';

import Header from './../../components/Header';
import Footer from './../../components/Footer';

const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <main className='main'>
                {Children.map(children, child =>
                    <>{child}</>
                )}
            </main> 
            <Footer />
        </>
    );
};

export default MainLayout;
