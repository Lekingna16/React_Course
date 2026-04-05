import { useEffect, useState } from "react";
function FetchAPI() {
    const url = '../../public/posts.json';

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setData(data)
            })
    }, [])

    return (
        <div>
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        <h3>Item {item.id}</h3>
                        <p>Title: {item.title}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default FetchAPI