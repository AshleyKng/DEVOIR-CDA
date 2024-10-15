const {createServer} = require('node:http')
const express = require('express')
const app =express()
const port = 3000
const path = require('path')
app.use (express.json());
app.use (express.static('public'));
app.use (express.urlencoded({extended:true}));

app.post('/Page3.html', (req, res) => {
    if(req.body.password == '1234'){
        res.send('Connexion réussie !')
    }else{
        res.redirect('/Page3.html')
    }
    
    res.send('Formulaire traité')
});

app.get('/Page1.html', (req,res) => {
    res.sendFile(path.join(__dirname,'vue/Page1.html'))
})

app.get('/Page2.html', (req,res) => {
res.sendFile(path.join(__dirname,'vue/Page2.html'))
})

app.get('/Page3.html', (req,res) => {
    res.sendFile(path.join(__dirname,'vue/Page3.html'))
})

app.get('/Page4.html', (req,res) => {
    res.sendFile(path.join(__dirname,'vue/Page4.html'))
})

app.use((req,res) => {
    res.send("Page non trouvée..")
})