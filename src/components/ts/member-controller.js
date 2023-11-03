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
exports.MemberController = void 0;
const constant_1 = require("./constant");
const excel_controller_1 = require("./excel-controller");
const member_info_model_1 = require("./model/member-info-model");
/**
 * メンバー関連のコントローラークラス
 */
class MemberController {
    constructor() {
        Object.defineProperty(this, "orderKeysDH", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ['LeadOff', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Pitcher']
        });
        Object.defineProperty(this, "orderKeys", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ['LeadOff', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth']
        });
    }
    /**
     * メンバー初期情報取得
     * @returns メンバー初期情報
     */
    GetMemberInfo(getDivision, gameInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const excelController = new excel_controller_1.ExcelController();
            // データ取得
            const responseData = yield excelController.GetMember(getDivision, gameInfo);
            // 戻り値
            const returnData = responseData;
            return returnData;
        });
    }
    /**
     * 出場メンバー一括取得
     * @param memberModel
     * @param input
     * @param defMemberList
     * @returns
     */
    GetBulkParticipationMemberData(member, input, defMemberList) {
        let returnData = new member_info_model_1.ParticipationMemberPerTeamModel;
        this.orderKeysDH.forEach(key => {
            var _a;
            const item = (_a = defMemberList.find(x => x.Id.toString() == input[key].Number)) !== null && _a !== void 0 ? _a : new member_info_model_1.DefaultMemberModel();
            member[key].Position = input[key].Position;
            member[key].Number = input[key].Number;
            member[key].Name = item.Name;
            member[key].FullName = item.FullName;
            member[key].RowNumber = item.RowNumber;
            member[key].DispStatus.Display = true;
            member[key].DispStatus.Basic = true;
        });
        returnData = member;
        return returnData;
    }
    /**
     * 打席結果作成（試合開始時）
     * @param visiterMember ビジターメンバー
     * @param homeMember ホームメンバー
     * @returns ビジター打席結果、ホーム打席結果
     */
    SetBattingResultGameStart(visiterMember, homeMember) {
        const returnVisiterData = new member_info_model_1.BattingResultPerTeamModel;
        const returnHomeData = new member_info_model_1.BattingResultPerTeamModel;
        for (let i = 0; i < 9; i++) {
            // ビジター
            const itemVisiter = new member_info_model_1.BattingResultAtGameModel();
            itemVisiter.Number = visiterMember[this.orderKeysDH[i]].Number;
            itemVisiter.Position = visiterMember[this.orderKeysDH[i]].Position;
            itemVisiter.Name = visiterMember[this.orderKeysDH[i]].FullName;
            returnVisiterData[this.orderKeys[i]].push(itemVisiter);
            // ホーム
            const itemHome = new member_info_model_1.BattingResultAtGameModel();
            itemHome.Number = homeMember[this.orderKeysDH[i]].Number;
            itemHome.Position = homeMember[this.orderKeysDH[i]].Position;
            itemHome.Name = homeMember[this.orderKeysDH[i]].FullName;
            returnHomeData[this.orderKeys[i]].push(itemHome);
        }
        return [returnVisiterData, returnHomeData];
    }
    /**
     * 投手情報セット
     * @param member
     * @returns
     */
    setPitcherInfo(member) {
        const returnData = [];
        for (let i = 0; i < 10; i++) {
            if (member[this.orderKeysDH[i]].Position == '1') {
                const pushData = new member_info_model_1.PitcherInfoModel();
                pushData.Number = member[this.orderKeysDH[i]].Number;
                pushData.Name = member[this.orderKeysDH[i]].Name;
                pushData.FullName = member[this.orderKeysDH[i]].FullName;
                pushData.PitchCount = 0;
                pushData.ThisAtBat = 0;
                pushData.SO = 0;
                pushData.BB = 0;
                returnData.push(pushData);
                break;
            }
        }
        return returnData;
    }
    /**
     * 投手情報取得
     * @param member メンバー情報
     * @param dataList 投手情報リスト
     * @returns
     */
    getPitcherInfo(member, dataList) {
        var _a;
        let number = '';
        for (let i = 0; i < 10; i++) {
            if (member[this.orderKeysDH[i]].Position == '1') {
                number = member[this.orderKeysDH[i]].Number;
                break;
            }
        }
        const returnData = (_a = dataList.find(x => x.Number == number)) !== null && _a !== void 0 ? _a : new member_info_model_1.PitcherInfoModel();
        return returnData;
    }
    /**
     * 守備位置データ設定
     * @param member
     * @returns
     */
    setPositionData(member) {
        const returnData = new member_info_model_1.PositionModel();
        this.orderKeysDH.forEach(key => {
            switch (member[key].Position) {
                case '1':
                    returnData.P = member[key].Name;
                    break;
                case '2':
                    returnData.C = member[key].Name;
                    break;
                case '3':
                    returnData.FB = member[key].Name;
                    break;
                case '4':
                    returnData.SB = member[key].Name;
                    break;
                case '5':
                    returnData.TB = member[key].Name;
                    break;
                case '6':
                    returnData.SS = member[key].Name;
                    break;
                case '7':
                    returnData.LF = member[key].Name;
                    break;
                case '8':
                    returnData.CF = member[key].Name;
                    break;
                case '9':
                    returnData.RF = member[key].Name;
                    break;
            }
        });
        return returnData;
    }
    /**
     * 打者成績取得
     * @param member
     * @param gameInfo
     * @returns
     */
    GetBatterStats(member, gameInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const excelController = new excel_controller_1.ExcelController();
            let row;
            let team;
            if (gameInfo.GameProgressInfo.NowAttackTeam == constant_1.VisiterHomeDivision.Visiter) {
                team = gameInfo.GameBaseInfo.VisiterTeamName;
            }
            else {
                team = gameInfo.GameBaseInfo.HomeTeamName;
            }
            row = 0;
            for (let i = 0; i < 9; i++) {
                if (member[this.orderKeys[i]].DispStatus.Batter) {
                    row = member[this.orderKeys[i]].RowNumber;
                    break;
                }
            }
            // データ取得
            const responseData = yield excelController.GetStats(row, team);
            // 戻り値
            const returnData = responseData;
            return returnData;
        });
    }
}
exports.MemberController = MemberController;
//# sourceMappingURL=member-controller.js.map