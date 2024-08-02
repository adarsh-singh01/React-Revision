import express from 'express'

const app= express()

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            "id": 1,
            "rate":"average",
            "question": "What did one pirate say to the other when he beat him at chess?",
            "answer": "Checkmatey"
        },
        {
            "id": 2,
            "rate":"best",
            "question": "Why did I quit my job at the coffee shop the other day?",
            "answer": "It was just the same old grind over and over."
        },
        {
            "id": 3,
            "rate":"worst",
            "question": "Why should you never buy anything that has Velcro with it?",
            "answer": "It's a total rip-off."
        },
        {
            "id": 4,
            "rate":"moderate",
            "question": "What is the most groundbreaking invention of all time?",
            "answer": "The shovel."
        }
    ]

//https://localhost:3000/api/jokes?type=best

    if(req.query.type){
        const filterJokes=jokes.filter(joke=>joke.rate.includes(req.query.type))
        res.send(filterJokes)
        return;
    }

    setTimeout(()=>{
        res.send(jokes)
    },3000)

})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server at ${port}`)
})