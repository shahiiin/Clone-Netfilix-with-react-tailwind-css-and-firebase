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


    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='w-full h-[550px] bg-gradient-to-r from-black'>
                    <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} className="w-full h-full object-fit" />
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main