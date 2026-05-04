import React, { useEffect, useState } from 'react'

const FetchInitData = () => {
    const [sach, setSach] = useState([])
    const url = "https://jsonplaceholder.typicode.com/posts"
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json()
            setSach(data)
        }

        fetchData()
    }, [])

    return (
        <div>
            {sach.map((item) => {
                return (
                    <div key={item.id}>{item.title}</div>
                )
            })}

        </div>
    )
}

export default FetchInitData