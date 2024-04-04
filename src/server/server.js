import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use('/login',(req,res) => {
  res.send({
    token: 'token123'
  })
})

const PORT = 8080;

app.listen(PORT,() => console.log("Server is working on PORT: ",PORT))
