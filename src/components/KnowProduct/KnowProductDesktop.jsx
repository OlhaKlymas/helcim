import {useRef, useEffect} from 'react';
import {detailWithImage} from './../../animation/detailWithImage';

import Button from './../UI/Button';
import InputText from './../UI/InputText';
import Switch from './../UI/Switch';
import Select from './../UI/Select';

import slide1 from './../../images/knowProduct/slide1.png';
import slide2 from './../../images/knowProduct/slide2.png';
import slide3 from './../../images/knowProduct/slide3.png';

const KnowProductDesktop = () => {
    const select = [
        {
            label: 'some text 1',
            value: '1'
        },
        {
            label: 'some text 2',
            value: '2'
        },
        {
            label: 'some text 3',
            value: '3'
        }
    ];

    const textBlockRef = useRef(null);
    const imgBlockRef = useRef(null);
    const detailsRef = useRef(null);

    useEffect(() => {
        const textBlock = textBlockRef.current;
        const imgBlock = imgBlockRef.current;
        const images = [...imgBlockRef.current.children];
        const details = [...detailsRef.current.children];
        detailWithImage(textBlock, imgBlock, images, details);
    });

    return (
        <section className='know-product' ref={textBlockRef}>
            <div className='container'>
                <div className='know-product__container'>
                    <div className='know-product__block'>
                        <div className='know-product__block-wrapper' ref={imgBlockRef}>
                            <div className='know-product__image-content'>
                                <div className='know-product__image'>
                                    <img src={slide1} alt='slide1' className='know-product__img' />
                                    <form className='know-product__form'>
                                        <div className='know-product__progress'>
                                            <span className='active'></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className='know-product__field'>
                                            <label className='know-product__field-label'>Name</label>
                                            <InputText placeholder='Gordon Ramsay' />
                                        </div>
                                        <div className='know-product__field'>
                                            <label className='know-product__field-label'>Address</label>
                                            <InputText />
                                            <InputText width='47%' />
                                            <InputText width='47%' />
                                        </div>
                                        <div className='know-product__btns'>
                                            <Button className='btn--outline' value='Close' />
                                            <Button className='btn--pink-dark' value='Continue' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='know-product__image-content'>
                                <div className='know-product__image'>
                                    <img src={slide2} alt='slide2' className='know-product__img' />
                                    <form className='know-product__form'>
                                        <div className='know-product__progress'>
                                            <span></span>
                                            <span className='active'></span>
                                            <span></span>
                                        </div>
                                        <div className='know-product__field'>
                                            <div className='know-product__field-head'>Pick up service</div>
                                            <Switch />
                                        </div>
                                        <div className='know-product__field'>
                                            <label className='know-product__field-label'>Preparation Time</label>
                                            <Select name='preparationTime' options={select} />
                                        </div>
                                        <div className='know-product__field'>
                                            <label className='know-product__field-label'>Time Interval</label>
                                            <Select name='timeInterval' options={select} />
                                        </div>
                                        <div className='know-product__btns'>
                                            <Button className='btn--outline' value='Close' />
                                            <Button className='btn--pink-dark' value='Continue' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='know-product__image-content'>                            
                                <div className='know-product__image'>
                                    <img src={slide3} alt='slide3' className='know-product__img' />
                                    <form className='know-product__form'>
                                        <div className='know-product__progress'>
                                            <span></span>
                                            <span></span>
                                            <span className='active'></span>
                                        </div>
                                        <div className='know-product__field'>
                                            <div className='know-product__field-head'>Add your products</div>
                                        </div>
                                        <div className='know-product__field'>
                                            <InputText placeholder='Prosciutto e Funghi' width='63%' />
                                            <InputText placeholder='$21.00' width='30%' />
                                        </div>
                                        <div className='know-product__field'>
                                            <InputText width='63%' />
                                            <InputText width='30%' />
                                        </div>
                                        <div className='know-product__field'>
                                            <InputText width='63%' />
                                            <InputText width='30%' />
                                        </div>
                                        <div className='know-product__btn'>
                                            <Button className='btn--pink-dark' value='Add more products' />
                                        </div>
                                    </form>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className='know-product__text-wrapper'>
                        <div className='know-product__text' ref={detailsRef}>
                            <div className='know-product__content'>
                                <h3>Know our product<span className='text-pink-dark'>.</span> Know our customers<span className='text-pink-dark'>.</span></h3>
                                <p>By immersing ourselves in our product, we gain valuable insights that allow us to anticipate our customers' needs, address their pain points, and exceed their expectations. See how easy it is for businesses to partner with us!</p>
                            </div>
                            <div className='know-product__content'>
                                <h3>Customers have full control from the start<span className='text-pink-dark'>.</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Vestibulum tristique scelerisque ut est tortor id tempus ultrices. Velit feugiat lacinia morbi amet id. Ac sed a et montes. Tellus sit fringilla placerat arcu consectetur massa. Tellus adipiscing eget dolor aliquet morbi dignissim semper. Nullam amet ut egestas a nibh elit vitae at. Nam elit orci.</p>
                            </div>
                            <div className='know-product__content'>
                                <h3>Add your favourite products<span className='text-pink-dark'>.</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Tincidunt congue non malesuada dui. Iaculis quis consectetur a sed convallis sed ut. Risus mauris mauris eget dictumst cras. Tellus euismod sed id enim erat morbi pellentesque in. Quis mauris nisi dictum nibh libero luctus volutpat nunc pellentesque. At lobortis in libero.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KnowProductDesktop;
