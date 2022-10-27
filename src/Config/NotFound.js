import {useEffect} from 'react'
import {useNavigate}from "react-router-dom"

export function Notfound() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => { 
                navigate("/")
         }, 3000)
    }, [])
    
  return (
    <div className='text-danger text-center fs-1'>Not Found 404</div>
  )
}
