import MainLayout from './../layouts/MainLayout/MainLayout';
import Hero from './../components/Hero';
import KnowProduct from './../components/KnowProduct';
import FindYouBelong from './../components/FindYouBelong';
import FallInLove from './../components/FallInLove';

import './../styles/pages/home.scss';

const HomePage = () => {
return (
    <div className='home-page'>
        <MainLayout>
            <Hero />
            <KnowProduct />
            <FindYouBelong />
            <FallInLove />
        </MainLayout>
    </div>
    );
}

export default HomePage;
