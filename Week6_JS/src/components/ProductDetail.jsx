import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function ProductDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    return (
        <div>
            <h1>Product Detail</h1>
            <p>Product ID: {id}</p>
            <button onClick={() => navigate('/checkout')}>Mua hàng</button>
        </div>
    )
}

export default ProductDetail