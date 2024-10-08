const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const news = require("./data/news.json");
const categories = require("./data/categories.json");
const books = require("./data/books.json");


app.use(cors());

app.get("/",(req, res)=>{
    res.send("Bookshop Backend Server Running");
})

app.get("/news",(req, res)=>{
    res.send(news);
})

app.get("/books",(req, res)=>{
    res.send(books);
})

app.get("/categories",(req,res)=>{
    res.send(categories)
})

app.listen(port,()=>{
    console.log(`Bookshop Backend Server Running on ${port}`);
})


