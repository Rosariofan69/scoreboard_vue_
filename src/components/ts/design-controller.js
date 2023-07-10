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
exports.DesignController = void 0;
const constant_1 = require("./constant");
const design_model_1 = require("./model/design-model");
const excel_controller_1 = require("./excel-controller");
class DesignController {
    /**
     * デザイン取得
     * @returns デザインモデル
     */
    GetDesign() {
        return __awaiter(this, void 0, void 0, function* () {
            const excelController = new excel_controller_1.ExcelController();
            // データ取得
            const responseData = yield excelController.GetDesign();
            // 戻り値
            const returnData = new design_model_1.DesignModel();
            // ビジターメンバーデザイン
            returnData.VisiterMember = this.extractVisiterMemberDisign(responseData);
            // ホームメンバーデザイン
            returnData.HomeMember = this.extractHomeMemberDesign(responseData);
            // 野手成績
            returnData.FielderStats = this.extractFielderStatsDesign(responseData);
            // 守備表示
            returnData.Position = this.extractPosition(responseData);
            // 投手成績
            returnData.PitcherStats = this.extractPitcherStats(responseData);
            // スコア
            returnData.Score = this.extractScoreDesign(responseData);
            // 背景色
            returnData.BackGroundColor = responseData[constant_1.ScoreDesignDivision.BackGround];
            // 審判
            returnData.Umpire = this.extractUmpireDesign(responseData);
            // 返却
            return returnData;
        });
    }
    /**
     * ビジターメンバーデザイン抽出
     * @param obj APIから取得したデータオブジェクト
     * @returns 抽出結果
     */
    extractVisiterMemberDisign(obj) {
        const returnData = new design_model_1.MemberDesignModel();
        // チーム名
        returnData.TeamNameText = obj[constant_1.VisiterDesignDivision.TeamNameMemberText];
        returnData.TeamNameBGC = obj[constant_1.VisiterDesignDivision.TeamNameMemberBGC];
        // 下線
        returnData.UnderLine = obj[constant_1.VisiterDesignDivision.UnderLine];
        // 斜線
        returnData.DiagonalLine = obj[constant_1.VisiterDesignDivision.DiagonalLine];
        // 上線
        returnData.UpperLine = obj[constant_1.VisiterDesignDivision.UpperLine];
        // 標準
        returnData.PositionBasicText = obj[constant_1.VisiterDesignDivision.PositionBasicText];
        returnData.PositionBasicBGC = obj[constant_1.VisiterDesignDivision.PositionBasicBGC];
        returnData.NameBasicText = obj[constant_1.VisiterDesignDivision.NameBasicText];
        returnData.NameBasicBGC = obj[constant_1.VisiterDesignDivision.NameBasicBGC];
        // 打者
        returnData.PositionBatterText = obj[constant_1.VisiterDesignDivision.PositionBatterText];
        returnData.PositionBatterBGC = obj[constant_1.VisiterDesignDivision.PositionBatterBGC];
        returnData.NameBatterText = obj[constant_1.VisiterDesignDivision.NameBatterText];
        returnData.NameBatterBGC = obj[constant_1.VisiterDesignDivision.NameBatterBGC];
        // 走者
        returnData.PositionRunnerText = obj[constant_1.VisiterDesignDivision.PositionRunnerText];
        returnData.PositionRunnerBGC = obj[constant_1.VisiterDesignDivision.PositionRunnerBGC];
        returnData.NameRunnerText = obj[constant_1.VisiterDesignDivision.NameRunnerText];
        returnData.NameRunnerBGC = obj[constant_1.VisiterDesignDivision.NameRunnerBGC];
        // 次回先頭
        returnData.PositionNextText = obj[constant_1.VisiterDesignDivision.PositionNextText];
        returnData.PositionNextBGC = obj[constant_1.VisiterDesignDivision.PositionNextBGC];
        returnData.NameNextText = obj[constant_1.VisiterDesignDivision.NameNextText];
        returnData.NameNextBGC = obj[constant_1.VisiterDesignDivision.NameNextBGC];
        // 交代時
        returnData.Change = obj[constant_1.VisiterDesignDivision.Change];
        // 返却
        return returnData;
    }
    /**
     * ホームメンバーデザイン抽出
     * @param obj APIから取得したデータオブジェクト
     * @returns 抽出結果
     */
    extractHomeMemberDesign(obj) {
        const returnData = new design_model_1.MemberDesignModel();
        // チーム名
        returnData.TeamNameText = obj[constant_1.HomeDesignDivision.TeamNameMemberText];
        returnData.TeamNameBGC = obj[constant_1.HomeDesignDivision.TeamNameMemberBGC];
        // 下線
        returnData.UnderLine = obj[constant_1.HomeDesignDivision.UnderLine];
        // 斜線
        returnData.DiagonalLine = obj[constant_1.HomeDesignDivision.DiagonalLine];
        // 上線
        returnData.UpperLine = obj[constant_1.HomeDesignDivision.UpperLine];
        // 標準
        returnData.PositionBasicText = obj[constant_1.HomeDesignDivision.PositionBasicText];
        returnData.PositionBasicBGC = obj[constant_1.HomeDesignDivision.PositionBasicBGC];
        returnData.NameBasicText = obj[constant_1.HomeDesignDivision.NameBasicText];
        returnData.NameBasicBGC = obj[constant_1.HomeDesignDivision.NameBasicBGC];
        // 打者
        returnData.PositionBatterText = obj[constant_1.HomeDesignDivision.PositionBatterText];
        returnData.PositionBatterBGC = obj[constant_1.HomeDesignDivision.PositionBatterBGC];
        returnData.NameBatterText = obj[constant_1.HomeDesignDivision.NameBatterText];
        returnData.NameBatterBGC = obj[constant_1.HomeDesignDivision.NameBatterBGC];
        // 走者
        returnData.PositionRunnerText = obj[constant_1.HomeDesignDivision.PositionRunnerText];
        returnData.PositionRunnerBGC = obj[constant_1.HomeDesignDivision.PositionRunnerBGC];
        returnData.NameRunnerText = obj[constant_1.HomeDesignDivision.NameRunnerText];
        returnData.NameRunnerBGC = obj[constant_1.HomeDesignDivision.NameRunnerBGC];
        // 次回先頭
        returnData.PositionNextText = obj[constant_1.HomeDesignDivision.PositionNextText];
        returnData.PositionNextBGC = obj[constant_1.HomeDesignDivision.PositionNextBGC];
        returnData.NameNextText = obj[constant_1.HomeDesignDivision.NameNextText];
        returnData.NameNextBGC = obj[constant_1.HomeDesignDivision.NameNextBGC];
        // 交代時
        returnData.Change = obj[constant_1.HomeDesignDivision.Change];
        // 返却
        return returnData;
    }
    /**
     * 野手成績デザイン抽出
     * @param obj APIから取得したデータオブジェクト
     * @returns 抽出結果
     */
    extractFielderStatsDesign(obj) {
        const returnData = new design_model_1.FielderStatsDesignSendModel();
        // ビジター野手成績
        const visiter = new design_model_1.FielderStatsDesignModel();
        // 文字
        visiter.Text = obj[constant_1.VisiterDesignDivision.FielderStatsText];
        // 背景
        visiter.BGC = obj[constant_1.VisiterDesignDivision.DispPositionFielderBGC];
        returnData.Visiter = visiter;
        // ホーム野手成績
        const home = new design_model_1.FielderStatsDesignModel();
        // 文字
        home.Text = obj[constant_1.HomeDesignDivision.FielderStatsText];
        // 背景
        home.BGC = obj[constant_1.HomeDesignDivision.DispPositionFielderBGC];
        returnData.Home = home;
        // 返却
        return returnData;
    }
    /**
     * 守備表示デザイン抽出
     * @param obj APIから取得したデータオブジェクト
     * @returns 抽出結果
     */
    extractPosition(obj) {
        const returnData = new design_model_1.PositionDesignSendModel();
        // ビジター守備表示
        const visiter = new design_model_1.PositionDesignModel();
        // 野手
        visiter.FielderText = obj[constant_1.VisiterDesignDivision.DispPositionFielderText];
        visiter.FielderBGC = obj[constant_1.VisiterDesignDivision.DispPositionFielderBGC];
        // 走者
        visiter.RunnerText = obj[constant_1.VisiterDesignDivision.DispPositionRunnerText];
        visiter.RunnerBGC = obj[constant_1.VisiterDesignDivision.DispPositionRunnerBGC];
        returnData.Visiter = visiter;
        // ホーム守備表示
        const home = new design_model_1.PositionDesignModel();
        // 野手
        home.FielderText = obj[constant_1.HomeDesignDivision.DispPositionFielderText];
        home.FielderBGC = obj[constant_1.HomeDesignDivision.DispPositionFielderBGC];
        // 走者
        home.RunnerText = obj[constant_1.HomeDesignDivision.DispPositionRunnerText];
        home.RunnerBGC = obj[constant_1.HomeDesignDivision.DispPositionRunnerBGC];
        returnData.Home = home;
        // 返却
        return returnData;
    }
    /**
     * 投手成績デザイン抽出
     * @param obj APIから取得したデータオブジェクト
     * @returns 抽出結果
     */
    extractPitcherStats(obj) {
        const returnData = new design_model_1.PitcherStatsDesignSendModel();
        // ビジター投手成績
        const visiter = new design_model_1.PitcherStatsDesignModel();
        // 文字
        visiter.Text = obj[constant_1.VisiterDesignDivision.PitcherStatsText];
        // 背景
        visiter.BGC = obj[constant_1.VisiterDesignDivision.PitcherStatsBGC];
        returnData.Visiter = visiter;
        // ホーム投手成績
        const home = new design_model_1.PitcherStatsDesignModel();
        // 文字
        home.Text = obj[constant_1.HomeDesignDivision.PitcherStatsText];
        // 背景
        home.BGC = obj[constant_1.HomeDesignDivision.PitcherStatsBGC];
        returnData.Home = home;
        // 返却
        return returnData;
    }
    /**
     * スコアデザイン抽出
     * @param obj APIから取得したデータオブジェクト
     * @returns 抽出結果
     */
    extractScoreDesign(obj) {
        const returnData = new design_model_1.ScoreDesignModel();
        // ビジターチーム名
        returnData.VisiterTeamNameText = obj[constant_1.VisiterDesignDivision.TeamNameScoreText];
        returnData.VisiterTeamNameBGC = obj[constant_1.VisiterDesignDivision.TeamNameScoreBGC];
        // ホームチーム名
        returnData.HomeTeamNameText = obj[constant_1.HomeDesignDivision.TeamNameScoreText];
        returnData.HomeTeamNameBGC = obj[constant_1.HomeDesignDivision.TeamNameScoreBGC];
        // 奇数回
        returnData.ScoreOddText = obj[constant_1.ScoreDesignDivision.ScoreOddText];
        returnData.ScoreOddBGC = obj[constant_1.ScoreDesignDivision.ScoreOddBGC];
        // 偶数回
        returnData.ScoreEvenText = obj[constant_1.ScoreDesignDivision.ScoreEvenText];
        returnData.ScoreEvenBGC = obj[constant_1.ScoreDesignDivision.ScoreEvenBGC];
        // R
        returnData.ScoreRunText = obj[constant_1.ScoreDesignDivision.ScoreRunText];
        returnData.ScoreRunBGC = obj[constant_1.ScoreDesignDivision.ScoreRunBGC];
        // スコアタイトル（R以外）
        returnData.ScoreTitleText = obj[constant_1.ScoreDesignDivision.ScoreTitleText];
        returnData.ScoreTitleBGC = obj[constant_1.ScoreDesignDivision.ScoreTitleBGC];
        // スコアタイトル（R）
        returnData.ScoreTitleRunText = obj[constant_1.ScoreDesignDivision.ScoreTitleRunText];
        returnData.ScoreTitleRunBGC = obj[constant_1.ScoreDesignDivision.ScoreTitleRunBGC];
        // スコア枠
        returnData.ScoreFrame = obj[constant_1.ScoreDesignDivision.ScoreFrame];
        // その他の枠
        returnData.OtherFrame = obj[constant_1.ScoreDesignDivision.OtherFrame];
        // 返却
        return returnData;
    }
    /**
     * 審判デザイン抽出
     * @param obj APIから取得したデータオブジェクト
     * @returns 抽出結果
     */
    extractUmpireDesign(obj) {
        const returnData = new design_model_1.UmpireDesignModel();
        // 位置
        returnData.PositionText = obj[constant_1.UmpireDesignDivision.PositionText];
        returnData.PositionBGC = obj[constant_1.UmpireDesignDivision.PositionBGC];
        // 名前
        returnData.NameText = obj[constant_1.UmpireDesignDivision.NameText];
        returnData.NameBGC = obj[constant_1.UmpireDesignDivision.NameBGC];
        // 返却
        return returnData;
    }
}
exports.DesignController = DesignController;
//# sourceMappingURL=design-controller.js.map