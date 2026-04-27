import React, { useState } from 'react'

export const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(0)
    const handleAddProduct = () => {
        setQuantity(quantity + 1)
    }

    const handleRemoveProduct = () => {
        setQuantity((pre) => pre > 0 ? pre - 1 : 0)
    }
    return (
        <div className='product-card'>
            <img src={product.img} alt="" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h3>{product.price}</h3>
            <div className="button">
                <button onClick={handleAddProduct}>+</button>
                <p>{quantity}</p>
                <button onClick={handleRemoveProduct}>-</button>
            </div>

        </div>
    )
}
