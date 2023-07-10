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
const excel_controller_1 = require("./excel-controller");
const member_info_model_1 = require("./model/member-info-model");
/**
 * メンバー関連のコントローラークラス
 */
class MemberController {
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
    GetBulkParticipationMemberData(memberModel, input, defMemberList) {
        let returnData = new member_info_model_1.ParticipationMemberPerTeamModel;
        const myKeys = ['LeadOff', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Pitcher'];
        myKeys.forEach((key) => {
            var _a;
            const item = (_a = defMemberList.find(x => x.Id.toString() == input[key].Number)) !== null && _a !== void 0 ? _a : new member_info_model_1.DefaultMemberModel();
            memberModel[key].Position = input[key].Position;
            memberModel[key].Number = input[key].Number;
            memberModel[key].Name = item.Name;
            memberModel[key].DispStatus.Display = true;
        });
        returnData = memberModel;
        return returnData;
    }
}
exports.MemberController = MemberController;
//# sourceMappingURL=member-controller.js.map