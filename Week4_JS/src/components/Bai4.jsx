import { useEffect, useState } from "react"

const Bai4 = () => {

  const url = 'https://jsonplaceholder.typicode.com/posts'
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [result, setResult] = useState([])

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          setData(data)
          setResult(data)
        })
    }
    fetchData()
  }, [])

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
    console.log(e.target.value)
  }

  useEffect(() => {

    const search = () => {
      const filter = data.filter((item) => {
        return item.title.includes(searchValue)
      })

      setResult(filter)
    }

    search()

  }, [searchValue])

  return (

    <div>
      <input type="text" placeholder="Enter the title" value={searchValue} onChange={(e) => handleSearch(e)} />

      {result.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        )
      })}



    </div>
  )
}

export default Bai4
