import '../css/ProductCard.css'


const ProductCard = ({ image, name, price }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} className='product-image' />
            <h2 className='product-name'>{name}</h2>
            <p className="product-price">{price}</p>
            <button className="btn-buy">Add to card</button>
        </div>
    )
}

export default ProductCard