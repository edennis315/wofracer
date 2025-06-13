const express = require('express');
const app = express();
const cors = require("cors");
const port = 3000;
const pool = require("./db");

app.use(cors());
app.use(express.json());

//Routes

//get all quotes and high scores

app.get("/quotes", async (req, res) => {
    try {
        const allQuotes = await pool.query("SELECT * FROM quote");
        res.json(allQuotes.rows);
    } catch (err) {
        console.error(err.message)
    }
})

//get a random quote

app.get("/quotes/random", async (req, res) =>{
    try {
        const randomQuote = await pool.query("SELECT * FROM quote ORDER BY RANDOM() LIMIT 1");
        res.json(randomQuote.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//post a quote

app.post("/quotes", async (req, res) =>{

    try {
        const { quote } = req.body;
        const newQuote = await pool.query("INSERT INTO quote (quote) VALUES ($1) RETURNING *", [quote]);
        res.json(newQuote.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//post a high score

app.patch("/quotes/highscores/:id", async (req, res) =>{
    try {
        const {score} = req.body;
        const newHighScore = await pool.query("UPDATE quote SET high_score = ($1) WHERE quote_id = ($2)", [score, req.params.id]);
        res.json(newHighScore.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})
