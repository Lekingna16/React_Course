import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(url)

                if (!res.ok) {
                    throw new Error('fetch failed')
                }
                const jsonData = await res.json()
                setData(jsonData)

            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }

        }

        fetchData()

    }, [url])
    return { data, error, loading }
}

export default useFetch