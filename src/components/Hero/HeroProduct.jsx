import Button from '../UI/Button';
import productImg from './../../images/hero/product.png';

const HeroProduct = () => {
    return (
        <div className='hero__product'>
            <div className='hero__product-img'>
                <img src={productImg} alt='product' />
            </div>
            <div className='hero__product-content'>
                <p>1x Prosciutto e Funghi</p>
                <hr className='hero__product-divider' />
                <Button value='Add to Cart' className='btn--orange' />
            </div>
        </div>
    )
}

export default HeroProduct;
