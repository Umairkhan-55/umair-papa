const express=require('express')
const PORT = process.env.PORT || 3000;
const app=express()

app.get('/',(req, res) => {
  return res.send("Welcome to Calm kaaj");
});

app.listen(PORT, () => 
  console.log(`Server running on PORT ${PORT}`));
