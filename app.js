"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = require("./src/components/ts/constant");
const member_info_model_1 = require("./src/components/ts/model/member-info-model");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const port = Number(process.env.PORT) || 3000;
const app = (0, express_1.default)();
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
    const xlsx = require('xlsx');
    const book = xlsx.readFile('./Scoreboard.xlsm');
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
    const xlsx = require('xlsx');
    const book = xlsx.readFile('./Scoreboard.xlsm');
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
    const startColumn = constant_1.ExcelColumnsName.Id;
    let startRow = 3;
    const endColumn = constant_1.ExcelColumnsName.FullName;
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
                case constant_1.ExcelColumnsName.Id:
                    data.Id = worksheet[cellAddress].v;
                    break;
                case constant_1.ExcelColumnsName.Number:
                    data.Number = worksheet[cellAddress].v;
                    break;
                case constant_1.ExcelColumnsName.Name:
                    data.Name = worksheet[cellAddress].v;
                    break;
                case constant_1.ExcelColumnsName.FullName:
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
/**
 * 打者成績取得
 */
app.get('/getBatterStats', (req, res) => {
    res.set({ 'Access-Control-Allow-Origin': '*' });
    const xlsx = require('xlsx');
    const book = xlsx.readFile('./Scoreboard.xlsm');
    const teamName = req.query.Team;
    const row = Number(req.query.Row);
    const worksheet = book.Sheets[teamName];
    let returnData = new member_info_model_1.BatterStatsModel();
    let atBat = '';
    let hit = '';
    for (let col = constant_1.ExcelColumnsName.Id; col <= constant_1.ExcelColumnsName.FullName; col++) {
        let cellAddress = xlsx.utils.encode_cell({ c: col, r: row });
        if (worksheet[cellAddress] === undefined) {
            continue;
        }
        switch (col) {
            case constant_1.ExcelColumnsName.Number:
                returnData.Number = worksheet[cellAddress].w;
                break;
            case constant_1.ExcelColumnsName.Avg:
                returnData.AVG = worksheet[cellAddress].w;
                break;
            case constant_1.ExcelColumnsName.AtBat:
                atBat = worksheet[cellAddress].w;
                break;
            case constant_1.ExcelColumnsName.Hit:
                hit = worksheet[cellAddress].w;
                break;
            case constant_1.ExcelColumnsName.HomeRun:
                returnData.HR = worksheet[cellAddress].w;
                break;
            case constant_1.ExcelColumnsName.Run:
                returnData.RBI = worksheet[cellAddress].w;
                break;
            case constant_1.ExcelColumnsName.OBP:
                returnData.OBP = worksheet[cellAddress].w;
                break;
            case constant_1.ExcelColumnsName.OPS:
                returnData.OPS = worksheet[cellAddress].w;
                break;
            case constant_1.ExcelColumnsName.SB:
                returnData.SB = worksheet[cellAddress].w;
                break;
            case constant_1.ExcelColumnsName.RC27:
                returnData.RC27 = worksheet[cellAddress].w;
                break;
            case constant_1.ExcelColumnsName.FullName:
                returnData.Name = worksheet[cellAddress].w;
            default:
                break;
        }
    }
    returnData.AB_H = atBat + ' - ' + hit;
    res.send(returnData);
});
// start
app.listen(port, () => console.log("Listening at", port));
//# sourceMappingURL=app.js.map