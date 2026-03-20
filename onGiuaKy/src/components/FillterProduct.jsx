

function FillterProduct({ items, handleFilter }) {

    let categories = new Set(items.map((item) => item.category))
    let cateList = Array.from(categories)

    return (
        <div className="my-5 outline rounded-xl p-2">
            <select name="items" id="items" onChange={(e) => handleFilter(e.target.value)}>
                <option value="all">All items</option>
                {cateList.map((category) => {
                    return (
                        <option value={category} key={category}>{category}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default FillterProduct