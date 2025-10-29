const express = require("express");
const app = express();
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*"); 
   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.get("/conf", (req, res) => {
    if(process.env.MODE == 1){
        res.json({e:1,u:'https://google.com/'}); 
    }else{
        res.json({e:0,u:'https://google.com/'}); 
    }
});
app.listen(5000, () => {
  console.log("Running on port 5000!");
});
