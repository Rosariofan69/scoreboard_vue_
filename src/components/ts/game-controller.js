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
exports.GameController = void 0;
const constant_1 = require("./constant");
const game_model_1 = require("./model/game-model");
const excel_controller_1 = require("./excel-controller");
/**
 * 試合関連のコントローラークラス
 */
class GameController {
    /**
     * メンバー初期情報取得
     * @returns メンバー初期情報
     */
    GetMemberInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const excelController = new excel_controller_1.ExcelController();
            // データ取得
            const responseData = yield excelController.GetMainInfo();
            // 戻り値
            const returnData = new game_model_1.GameInfoModel();
            returnData.GameBaseInfo.VisiterTeamName = responseData[constant_1.GameInfoDivision.VisiterTeamName];
            returnData.GameBaseInfo.VisiterTeamText = responseData[constant_1.GameInfoDivision.VisiterTeamText];
            returnData.GameBaseInfo.VisiterLastRow = responseData[constant_1.GameInfoDivision.VisiterLastRow];
            returnData.GameBaseInfo.HomeTeamName = responseData[constant_1.GameInfoDivision.HomeTeamName];
            returnData.GameBaseInfo.HomeTeamText = responseData[constant_1.GameInfoDivision.HomeTeamText];
            returnData.GameBaseInfo.HomeLastRow = responseData[constant_1.GameInfoDivision.HomeLastRow];
            returnData.GameBaseInfo.InningLimit = responseData[constant_1.GameInfoDivision.InningLimit];
            returnData.GameBaseInfo.StatsAddition = responseData[constant_1.GameInfoDivision.StatsAddition];
            returnData.GameBaseInfo.HomePosition = responseData[constant_1.GameInfoDivision.HomePosition];
            return returnData;
        });
    }
}
exports.GameController = GameController;
//# sourceMappingURL=game-controller.js.map