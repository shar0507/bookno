import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Books(){

    const[books, setBooks]=useState([])

    useEffect(()=>{
        const fetchAllBooks=async()=>{
            try{
                const res=await axios.get("http://localhost:8800/books")
                //console.log(res.data)
                setBooks(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    },[])


    const handleDelete = async(id)=>{
        try{
            await axios.delete("http://localhost:8800/books/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div>
            <h1>Book Shop</h1>
            <div>
                {books.map(book=>(
                    <div key={book.id}>
                        {/* {book.cover && <img src={book.cover} alt=""></img>} */} 
                        <h2>{book.title}</h2>
                        <p>{book.desc}</p>
                        <span>{book.price}</span>
                        <button onClick={()=>handleDelete(book.id)}>Delete</button>
                    </div>
                ))}
                <button><Link to="/add">Add new Book</Link></button>
            </div>
            
        </div>
    )
}