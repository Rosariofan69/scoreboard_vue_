"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelController = void 0;
const constant_1 = require("./constant");
/**
 * Excel関連のコントローラークラス
 */
class ExcelController {
    /**
     * メイン情報取得
     */
    GetMainInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('/getMainInfo', {
                mode: 'cors',
                method: 'GET'
            }).then(res => res.json());
            return response;
        });
    }
    /**
     * デザイン取得
     */
    GetDesign() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('/getDesign', {
                mode: 'cors',
                method: 'GET'
            }).then(res => res.json());
            return response;
        });
    }
    /**
     * 選手情報取得
     * @param getDivision ビジターorホーム
     * @param gameInfo 試合情報
     * @returns 選手情報
     */
    GetMember(getDivision, gameInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            let params;
            if (getDivision === constant_1.VisiterHomeDivision.Visiter) {
                params = {
                    Team: gameInfo.GameBaseInfo.VisiterTeamName,
                    LastRow: gameInfo.GameBaseInfo.VisiterLastRow.toString()
                };
            }
            else if (getDivision === constant_1.VisiterHomeDivision.Home) {
                params = {
                    Team: gameInfo.GameBaseInfo.HomeTeamName,
                    LastRow: gameInfo.GameBaseInfo.HomeLastRow.toString()
                };
            }
            const param = new URLSearchParams(params);
            const url = `/getMember?${param}`;
            const response = yield fetch(url, {
                mode: 'cors',
                method: 'GET',
            }).then(res => res.json());
            return response;
        });
    }
}
exports.ExcelController = ExcelController;
//# sourceMappingURL=excel-controller.js.map