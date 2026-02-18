import '../css/Reponsive.css'
import ProductCard from './ProductCard'
import logo from '../assets/Image 72.png'

const ProductList = () => {

    return (
        <div className="container">
            <ProductCard image={logo} name={'Product 1'} price={3000} className='product' />
            <ProductCard image={logo} name={'Product 2'} price={6000} className='product' />
            <ProductCard image={logo} name={'Product 3'} price={9000} className='product' />

        </div>
    )
}

export default ProductList