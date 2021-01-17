const express = require('express');
const body_parser = require('body-parser');
const db_manager = require('./persistence/dbmanager');

const app = express();


const port = 3000;

app.use(body_parser.urlencoded({extended:true}))

app.use(body_parser.json())

app.get('/',(req,res)=>{
    res.send('hello word!');
});

//CRUD
app.post('/user',(req,res)=>{
    db_manager.user_create(req,res)
})

//get
app.get('/user',(req,res)=>{
    db_manager.user_detail(req,res)
})
app.put('/user',(req,res)=>{
    db_manager.user_update(req,res)
})

app.delete('/user',(req,res)=>{
    db_manager.user_delete(req,res)
});

app.listen(port,()=>{
    console.log(`Example app listen at http://localhost:${port}`);
});

//Julio Roberto Olivares Perez 