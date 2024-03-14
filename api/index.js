import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.json("Hello Stocks is there!!");
})

app.listen(3000, () => {
  console.log("Server is runnig on port 3000");
});
