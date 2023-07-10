"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const member_info_model_1 = require("./src/components/ts/model/member-info-model");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const port = Number(process.env.PORT) || 3000;
const app = (0, express_1.default)();
const xlsx = require('xlsx');
const book = xlsx.readFile('./Scoreboard.xlsm');
// log
app.all("*", (req, res, next) => {
    console.log(req.method, req.path);
    next();
});
// static files
app.use(express_1.default.static(path_1.default.resolve("public")));
// API
app.get("/data.json", (req, res) => {
    const data = {
        date: new Date(),
        message: "Hello World!",
    };
    res.json(data);
});
/**
 * メイン情報取得
 */
app.get('/getMainInfo', (req, res) => {
    res.set({ 'Access-Control-Allow-Origin': '*' });
    const worksheet = book.Sheets['設定'];
    const startColumn = 11;
    let startRow = 3;
    let endRow = 11;
    let meinInfo = [];
    for (let y = startRow; y <= endRow; y++) {
        let cellAddress = xlsx.utils.encode_cell({ c: startColumn, r: y });
        meinInfo.push(worksheet[cellAddress].v);
    }
    res.send(meinInfo);
});
/**
 * デザイン取得
 */
app.get('/getDesign', (req, res) => {
    res.set({ 'Access-Control-Allow-Origin': '*' });
    const worksheet = book.Sheets['設定'];
    const startColumn = 15;
    let startRow = 3;
    const endColumn = 16;
    let endRow = 34;
    let teamDesign = [];
    // チームごとのデザイン
    for (let x = startColumn; x <= endColumn; x++) {
        for (let y = startRow; y <= endRow; y++) {
            let cellAddress = xlsx.utils.encode_cell({ c: x, r: y });
            teamDesign.push(worksheet[cellAddress].v);
        }
    }
    // 共通デザイン
    startRow = 35;
    endRow = 51;
    for (let x = startRow; x <= endRow; x++) {
        let cellAddress = xlsx.utils.encode_cell({ c: startColumn, r: x });
        teamDesign.push(worksheet[cellAddress].v);
    }
    res.send(teamDesign);
});
/**
 * メンバー初期情報取得
 */
app.get('/getMember', (req, res) => {
    res.set({ 'Access-Control-Allow-Origin': '*' });
    const xlsx = require('xlsx');
    const book = xlsx.readFile('./Scoreboard.xlsm');
    const teamName = req.query.Team;
    const worksheet = book.Sheets[teamName];
    const startColumn = 1;
    let startRow = 3;
    const endColumn = 16;
    let endRow = parseInt(req.query.LastRow) - 1;
    let memberData = [];
    for (let row = startRow; row <= endRow; row++) {
        let data = new member_info_model_1.DefaultMemberModel();
        for (let col = startColumn; col <= endColumn; col++) {
            let cellAddress = xlsx.utils.encode_cell({ c: col, r: row });
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
//# sourceMappingURL=app.js.map