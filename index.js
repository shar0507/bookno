import express from "express"
import mysql from "mysql"
import cors from "cors"

const app=express()

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"bipothai",
    database:"bookstore"
})

app.use(express.json());
app.use(cors())


app.get("/", (req, res)=>{
    res.json("hello")
})

app.get("/books",(req, res)=>{
    const q="select * from booksdata"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res)=>{
    const q= "insert into booksdata (`title`,`desc`,`price`) values (?)";
    const values=[req.body.title, req.body.desc, req.body.price]

    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err);
        return res.json("Book created successfully")
    })
})

app.delete("/books/:id", (req,res)=>{
    const bookId=req.params.id
    const q="delete from booksdata where id=?"
    db.query(q,[bookId],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been deleted successfully")
    })
})
app.listen(8800, ()=>{
    console.log("Connected to backend")
})
//npm init -y
//npm i express mysql nodemon
//node index.js
//npm i axios
//npm i cors
//npm i react-router-dom