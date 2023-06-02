import {useState, useEffect} from 'react';

import Button from './../UI/Button';
import ProgressBar from './../UI/ProgressBar';

const HeroOrder = () => {
    const [step, setStep] = useState(3);

    const statuses = [
        'We got your order',
        'You confirmed your order',
        'We’re packing your order',
        'We’re delivering your order'
    ];
    
    const changeStep = () => {
        setTimeout(() => {
            setStep(step < 4 ? step + 1 : 1);
        }, 2000);
    }
    
    useEffect(() => {
        changeStep();
    })

    return (
        <>
            <div className='hero__order-wrapper'>
                <p className='hero__order-title'>Get ready for your order!</p>
                <ProgressBar 
                    statuses={statuses}
                    step={step}
                    width={`${90 / 3 * (step - 1)}%`}
                />                
            </div>
            <Button value='Track your Order' className='btn--orange' />
        </>
    )
}

export default HeroOrder;
