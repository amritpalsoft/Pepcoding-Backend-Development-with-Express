const express=require('express');

const app=express();

app.listen(3000,()=>{
    console.log('listening on 3000');
});

app.get('/',(req,res)=>{
    res.send('hello amrit')
})

app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root:__dirname})
})

//redirecting page, if aboutus is not found 
//then it will redirect to about page 
app.get('/aboutus',(req,res)=>{
    res.redirect('/about');
})

app.use((req,res)=>{
    res.status(404).sendFile('404.html',{root:__dirname})
})
