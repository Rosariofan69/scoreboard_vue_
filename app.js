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
const xlsx = require('xlsx');
const excel = require('exceljs');
const xlsxPopulate = require('xlsx-populate');
// const book = xlsx.readFile('./Scoreboard.xlsm');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
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
    let endRow = 42;
    let teamDesign = [];
    // チームごとのデザイン
    for (let x = startColumn; x <= endColumn; x++) {
        for (let y = startRow; y <= endRow; y++) {
            let cellAddress = xlsx.utils.encode_cell({ c: x, r: y });
            teamDesign.push(worksheet[cellAddress].v);
        }
    }
    // 共通デザイン
    startRow = 43;
    endRow = 59;
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
                    data.Id = String(worksheet[cellAddress].v);
                    break;
                case constant_1.ExcelColumnsName.Number:
                    data.Number = String(worksheet[cellAddress].v);
                    break;
                case constant_1.ExcelColumnsName.Name:
                    data.Name = String(worksheet[cellAddress].v);
                    break;
                case constant_1.ExcelColumnsName.Avg:
                    data.BatterStats.AVG = String(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.AtBat:
                    data.BatterStats.Atbat = Number(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.Hit:
                    data.BatterStats.Hit = Number(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.Double:
                    data.BatterStats.Double = Number(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.Triple:
                    data.BatterStats.Triple = Number(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.HomeRun:
                    data.BatterStats.HomeRun = Number(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.TotalBases:
                    data.BatterStats.TotalBases = Number(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.RBI:
                    data.BatterStats.RBI = Number(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.OBP:
                    data.BatterStats.OBP = String(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.OPS:
                    data.BatterStats.OPS = String(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.SO:
                    data.BatterStats.SO = Number(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.BB:
                    data.BatterStats.BB = Number(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.HBP:
                    data.BatterStats.HBP = Number(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.SacBunt:
                    data.BatterStats.SacBunt = Number(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.SacFly:
                    data.BatterStats.SacFly = Number(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.SB:
                    data.BatterStats.SB = Number(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.CS:
                    data.BatterStats.CS = Number(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.DP:
                    data.BatterStats.DP = Number(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.RC27:
                    data.BatterStats.RC27 = String(worksheet[cellAddress].w);
                    break;
                case constant_1.ExcelColumnsName.FullName:
                    data.FullName = String(worksheet[cellAddress].v);
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
 * 打者成績更新
 */
app.post('/updateBatterStats', jsonParser, (req, res) => {
    res.set({ 'Access-Control-Allow-Origin': '*' });
    let result = false;
    xlsxPopulate.fromFileAsync('./Scoreboard.xlsm').then(workbook => {
        try {
            const postData = req.body;
            const row = Number(postData.Row) + 1;
            const teamName = postData.Team;
            const plusData = postData.PlusData;
            const sheet = workbook.sheet(teamName);
            let afterData = null;
            // 打数
            if (plusData.AtBat == 1) {
                afterData = Number(sheet.cell(row, constant_1.ExcelColumnsNamePopulate.AtBat).value()) + plusData.AtBat;
                sheet.cell(row, constant_1.ExcelColumnsNamePopulate.AtBat).value(afterData);
            }
            // 安打
            if (plusData.Hit == 1) {
                afterData = Number(sheet.cell(row, constant_1.ExcelColumnsNamePopulate.Hit).value()) + plusData.Hit;
                sheet.cell(row, constant_1.ExcelColumnsNamePopulate.Hit).value(afterData);
            }
            // 二塁打
            if (plusData.Double == 1) {
                afterData = Number(sheet.cell(row, constant_1.ExcelColumnsNamePopulate.Double).value()) + plusData.Double;
                sheet.cell(row, constant_1.ExcelColumnsNamePopulate.Double).value(afterData);
            }
            // 三塁打
            if (plusData.Triple == 1) {
                afterData = Number(sheet.cell(row, constant_1.ExcelColumnsNamePopulate.Triple).value()) + plusData.Triple;
                sheet.cell(row, constant_1.ExcelColumnsNamePopulate.Triple).value(afterData);
            }
            // 本塁打
            if (plusData.HomeRun == 1) {
                afterData = Number(sheet.cell(row, constant_1.ExcelColumnsNamePopulate.HomeRun).value()) + plusData.HomeRun;
                sheet.cell(row, constant_1.ExcelColumnsNamePopulate.HomeRun).value(afterData);
            }
            // 打点
            if (plusData.RBI >= 1) {
                afterData = Number(sheet.cell(row, constant_1.ExcelColumnsNamePopulate.RBI).value()) + plusData.RBI;
                sheet.cell(row, constant_1.ExcelColumnsNamePopulate.RBI).value(afterData);
            }
            // 三振
            if (plusData.SO == 1) {
                afterData = Number(sheet.cell(row, constant_1.ExcelColumnsNamePopulate.SO).value()) + plusData.SO;
                sheet.cell(row, constant_1.ExcelColumnsNamePopulate.SO).value(afterData);
            }
            // 四球
            if (plusData.BB == 1) {
                afterData = Number(sheet.cell(row, constant_1.ExcelColumnsNamePopulate.BB).value()) + plusData.BB;
                sheet.cell(row, constant_1.ExcelColumnsNamePopulate.BB).value(afterData);
            }
            // 死球
            if (plusData.HBP == 1) {
                afterData = Number(sheet.cell(row, constant_1.ExcelColumnsNamePopulate.HBP).value()) + plusData.HBP;
                sheet.cell(row, constant_1.ExcelColumnsNamePopulate.HBP).value(afterData);
            }
            // 犠打
            if (plusData.SacBunt == 1) {
                afterData = Number(sheet.cell(row, constant_1.ExcelColumnsNamePopulate.SacBunt).value()) + plusData.SacBunt;
                sheet.cell(row, constant_1.ExcelColumnsNamePopulate.SacBunt).value(afterData);
            }
            // 犠飛
            if (plusData.SacFly == 1) {
                afterData = Number(sheet.cell(row, constant_1.ExcelColumnsNamePopulate.SacFly).value()) + plusData.SacFly;
                sheet.cell(row, constant_1.ExcelColumnsNamePopulate.SacFly).value(afterData);
            }
            // 盗塁
            if (plusData.SB == 1) {
                afterData = Number(sheet.cell(row, constant_1.ExcelColumnsNamePopulate.SB).value()) + plusData.SB;
                sheet.cell(row, constant_1.ExcelColumnsNamePopulate.SB).value(afterData);
            }
            // 盗塁死
            if (plusData.CS == 1) {
                afterData = Number(sheet.cell(row, constant_1.ExcelColumnsNamePopulate.CS).value()) + plusData.CS;
                sheet.cell(row, constant_1.ExcelColumnsNamePopulate.CS).value(afterData);
            }
            // 併殺打
            if (plusData.DP == 1) {
                afterData = Number(sheet.cell(row, constant_1.ExcelColumnsNamePopulate.DP).value()) + plusData.DP;
                sheet.cell(row, constant_1.ExcelColumnsNamePopulate.DP).value(afterData);
            }
            // 書き込み
            workbook.toFileAsync('./Scoreboard.xlsm').then(function () {
                result = true;
                res.send(result);
            });
        }
        catch (_a) {
            result = false;
            res.send(result);
        }
    });
});
// start
app.listen(port, () => console.log("Listening at", port));
//# sourceMappingURL=app.js.map