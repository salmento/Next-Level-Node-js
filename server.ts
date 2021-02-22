import express from 'express';
const app = express();

app.get('/', (req, res)=>{
  res.json({message: 'Hello Word'})
});

app.post('', (req, res)=>{
  res.json({message: 'The date was successfully save'})
});

app.listen(3000,  ()=>console.log("Server is running!") )