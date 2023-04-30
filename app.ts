import express from 'express'
import path from 'path';

const port = Number(process.env.PORT) || 3000;

const app = express()

// log
app.all("*", (req: any, res: any, next: any) => {
  console.log(req.method, req.path);
  next();
});

// static files
app.use(express.static(path.resolve("public")));

// API
app.get("/data.json", (req: any, res: any) => {
  const data = {
    date: new Date(),
    message: "Hello World!",
  };
  res.json(data);
});



app.get('/xlsx', (req: any, res: any) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  // res.send('GETパラメータ取得: ');

  const xlsx = require('xlsx');
  
  const book = xlsx.readFile('./Scoreboard.xlsm');
  const worksheet = book.Sheets['設定'];

  const startColumn = 15;
  const startRow = 3;
  const endColumn = 16;
  const endRow = 29;

  // const cellAddress = xlsx.utils.encode_range({ s: { c: startColumn, r: startRow}, e: { c: endColumn, r: endRow } });
  let teamDesign: string[] = [];
  for (let x = startColumn; x < endColumn; x++) {
    for (let y = startRow; y < endRow; y++) {
      let cellAddress = xlsx.utils.encode_cell({ c: x, r: y })
      teamDesign.push(worksheet[cellAddress]);
    }
  }
  res.send(teamDesign);
});


// start
app.listen(port, () => console.log("Listening at", port));
