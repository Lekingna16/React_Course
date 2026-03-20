import { useEffect, useState } from "react"

function SearchItem({ handleSearch }) {






    return (
        <div className="flex justify-center my-4 gap-6">
            <input type="text" placeholder="Enter title item..." className="w-200 outline rounded-xl px-2" onChange={(e) => handleSearch(e.target.value)} />
            <button className="bg-green-500 rounded-xl text-amber-50 p-2">Add a item</button>
        </div>
    )
}

export default SearchItem