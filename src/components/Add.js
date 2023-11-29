import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
export default function Add(){

    const[book, setBook]=useState({
        title:"",
        desc:"",
        price:null,
    })

    const navigate=useNavigate()

    const handleChange = (e)=>{
        setBook(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async(e) =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/books",book)
            navigate("/")
            
        }catch(err){
            console.log(err)
        }
    }


    return(
        <div>
            <h1>Add new Book</h1>
            <form>
                <input type="text" placeholder="title" onChange= {handleChange}name="title"></input>
                <input type="text" placeholder="desc" onChange= {handleChange}name="desc"></input>
                <input type="number" placeholder="price" onChange= {handleChange}name="price"></input>


            </form>
            <button onClick={handleClick}>Add</button>


        </div>
    )
}