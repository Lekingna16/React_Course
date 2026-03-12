import { useEffect, useState } from "react"

function Filter() {
    const [posts, setPosts] = useState([])
    const [postsFilter, setPostFilter] = useState([])
    const [keyword, setKeyword] = useState("")
    const [error, setError] = useState([])

    const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response) {
                    throw new Error(response.status)
                }
                return response.json()
            })
            .then((data) => {
                setPosts(data)
            })
            .catch((error) => {
                setError(error)
            })
    }, [])

    const getPostsByTitle = (value) => {
        const postList = posts.filter((post) => post.title.includes(value))

        setPostFilter(postList)
    }


    return (
        <div>
            <input type="text" placeholder="Enter the title..."
                onChange={(e) => {
                    setKeyword(e.target.value)
                    const value = e.target.value
                    getPostsByTitle(value)
                }}
            />

            {keyword && postsFilter.map((post) => {
                return (
                    <div key={post.id}>
                        <p>{post.title}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default Filter