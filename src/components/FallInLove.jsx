import earth from './../images/fallInLove/earth.svg';
import bg from './../images/fallInLove/bg.png';

const FallInLove = () => {
    return (
        <section className='fall-in-love'>
            <div className='fall-in-love__container'>
                <div className='fall-in-love__fluid container-fluid'>
                    <div className='fall-in-love__content container-fluid__content container-text'>
                        <img src={earth} alt='earth' className='fall-in-love__img' />
                        <div className='fall-in-love__text'>
                            <h2>Fall in love with our culture<span className='text-purple'>.</span></h2>
                            <p>Just as a chef meticulously selects the finest ingredients, we curate a team of talented individuals who bring diverse skills, passions, and perspectives to the table. Just as a well-coordinated kitchen operates smoothly, our teams support each other and collaborate seamlessly. We strive to create a nourishing atmosphere, where creativity and innovation is the secret ingredient.</p>
                        </div>
                    </div>
                </div>
                <div className='fall-in-love__image-content'>
                    <img src={bg} alt='background' className='fall-in-love__image' />
                </div>
            </div>
        </section>
    )
}

export default FallInLove;
