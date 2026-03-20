import ProductItem from "./ProductItem"


function ProductList({ items, handleDelete }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {items.map((item) => {
                return (
                    <div key={item.id}>
                        <ProductItem item={item} handleDelete={handleDelete} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList