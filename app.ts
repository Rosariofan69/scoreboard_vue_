import { DefaultMemberModel } from './src/components/ts/model/member-info-model';
import express from 'express'
import path from 'path';

const port = Number(process.env.PORT) || 3000;
const app = express()
const xlsx = require('xlsx');
const book = xlsx.readFile('./Scoreboard.xlsm');

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

/**
 * メイン情報取得
 */
app.get('/getMainInfo', (req: any, res: any) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  const worksheet = book.Sheets['設定'];

  const startColumn = 11;
  let startRow = 3;
  let endRow = 11;

  let meinInfo: string[] = [];
  for (let y = startRow; y <= endRow; y++) {
    let cellAddress = xlsx.utils.encode_cell({ c: startColumn, r: y })
    meinInfo.push(worksheet[cellAddress].v);
  }

  res.send(meinInfo);
});

/**
 * デザイン取得
 */
app.get('/getDesign', (req: any, res: any) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  const worksheet = book.Sheets['設定'];

  const startColumn = 15;
  let startRow = 3;
  const endColumn = 16;
  let endRow = 34;

  let teamDesign: string[] = [];
  // チームごとのデザイン
  for (let x = startColumn; x <= endColumn; x++) {
    for (let y = startRow; y <= endRow; y++) {
      let cellAddress = xlsx.utils.encode_cell({ c: x, r: y })
      teamDesign.push(worksheet[cellAddress].v);
    }
  }

  // 共通デザイン
  startRow = 35;
  endRow = 51;
  for (let x = startRow; x <= endRow; x++) {
    let cellAddress = xlsx.utils.encode_cell({ c: startColumn, r: x })
    teamDesign.push(worksheet[cellAddress].v);
  }
  res.send(teamDesign);
});

/**
 * メンバー初期情報取得
 */
app.get('/getMember', (req: any, res: any) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });

  const xlsx = require('xlsx');
  
  const book = xlsx.readFile('./Scoreboard.xlsm');
  const teamName = req.query.Team;
  const worksheet = book.Sheets[teamName];

  const startColumn = 1;
  let startRow = 3;
  const endColumn = 16;
  let endRow = parseInt(req.query.LastRow) - 1;

  let memberData: DefaultMemberModel[] = [];
  for (let row = startRow; row <= endRow; row++) {
    let data: DefaultMemberModel = new DefaultMemberModel();
    for (let col = startColumn; col <= endColumn; col++) {
      let cellAddress = xlsx.utils.encode_cell({ c: col, r: row })
      
      if (worksheet[cellAddress] === undefined) {
        continue;
      }

      switch (col) {
        case 1:
          data.Id = worksheet[cellAddress].v;
          break;
        case 2:
          data.Number = worksheet[cellAddress].v;
          break;
        case 3:
          data.Name = worksheet[cellAddress].v;
          break;
        case 16:
          data.FullName = worksheet[cellAddress].v;
        default:
          break;
      }
    }
    if (data.Name != null) {
      data.RowNumber = row;
      memberData.push(data);
    }
  }

  res.send(memberData);
});

// start
app.listen(port, () => console.log("Listening at", port));