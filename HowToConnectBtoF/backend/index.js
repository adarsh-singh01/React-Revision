import express from "express";

const app=express();

app.use(express.static('dist'))//ye middleware hai
//dist folder ko hi backemd me daal dena is bad practice but paise boht bach jaate hai
//now u can see the site on 3000 port
//everytime u make a change then again build it and replace new dist folder with old one


// app.get('/',(req,res)=>{
//     res.send('Server is ready')
// })

app.get('/api/jokes',(req,res)=>{
    const dadJokes = [
        {
            "id": 1,
            "question": "What did one pirate say to the other when he beat him at chess?",
            "answer": "Checkmatey"
        },
        {
            "id": 2,
            "question": "Why did I quit my job at the coffee shop the other day?",
            "answer": "It was just the same old grind over and over."
        },
        {
            "id": 3,
            "question": "Why should you never buy anything that has Velcro with it?",
            "answer": "It's a total rip-off."
        },
        {
            "id": 4,
            "question": "What is the most groundbreaking invention of all time?",
            "answer": "The shovel."
        }
    ]

    res.send(dadJokes)
})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`at port ${port}`)
})