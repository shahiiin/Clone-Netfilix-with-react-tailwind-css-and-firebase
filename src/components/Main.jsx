import axios from 'axios'
import { useEffect, useState } from 'react'
import request from "../Request"


const Main = () => {

    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(request.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    console.log(movie, 'aa')

    return (
        <div>Main</div>
    )
}

export default Main