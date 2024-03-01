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
const score_info_model_1 = require("./model/score-info-model");
const member_controller_1 = require("./member-controller");
const constant_1 = require("./constant");
const game_model_1 = require("./model/game-model");
const excel_controller_1 = require("./excel-controller");
const member_info_model_1 = require("./model/member-info-model");
/**
 * 試合関連のコントローラークラス
 */
class GameController {
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
        Object.defineProperty(this, "inningKeys", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ['TopOfThe1',
                'TopOfThe2',
                'TopOfThe3',
                'TopOfThe4',
                'TopOfThe5',
                'TopOfThe6',
                'TopOfThe7',
                'TopOfThe8',
                'TopOfThe9',
                'TopOfThe10',
                'TopOfThe11',
                'TopOfThe12',
                'BottomOfThe1',
                'BottomOfThe2',
                'BottomOfThe3',
                'BottomOfThe4',
                'BottomOfThe5',
                'BottomOfThe6',
                'BottomOfThe7',
                'BottomOfThe8',
                'BottomOfThe9',
                'BottomOfThe10',
                'BottomOfThe11',
                'BottomOfThe12',
                'VisitorR',
                'VisitorH',
                'VisitorE',
                'VisitorLOB',
                'HomeR',
                'HomeH',
                'HomeE',
                'HomeLOB']
        });
        Object.defineProperty(this, "memberController", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new member_controller_1.MemberController()
        });
    }
    /**
     * 試合開始時試合情報取得
     * @returns 試合情報取得
     */
    GetGameInfoStart() {
        return __awaiter(this, void 0, void 0, function* () {
            const excelController = new excel_controller_1.ExcelController();
            // データ取得
            const responseData = yield excelController.GetMainInfo();
            // 戻り値
            const returnData = new game_model_1.GameInfoModel();
            returnData.GameBaseInfo.VisitorTeamName = responseData[constant_1.GameInfoDivision.VisitorTeamName];
            returnData.GameBaseInfo.VisitorTeamText = responseData[constant_1.GameInfoDivision.VisitorTeamText];
            returnData.GameBaseInfo.VisitorLastRow = responseData[constant_1.GameInfoDivision.VisitorLastRow];
            returnData.GameBaseInfo.HomeTeamName = responseData[constant_1.GameInfoDivision.HomeTeamName];
            returnData.GameBaseInfo.HomeTeamText = responseData[constant_1.GameInfoDivision.HomeTeamText];
            returnData.GameBaseInfo.HomeLastRow = responseData[constant_1.GameInfoDivision.HomeLastRow];
            returnData.GameBaseInfo.InningLimit = responseData[constant_1.GameInfoDivision.InningLimit];
            returnData.GameBaseInfo.StatsAddition = responseData[constant_1.GameInfoDivision.StatsAddition];
            returnData.GameBaseInfo.HomePosition = responseData[constant_1.GameInfoDivision.HomePosition];
            return returnData;
        });
    }
    /**
     * 試合開始時データセット
     * @param visitorMember ビジターメンバー
     * @param homeMember ホームメンバー
     * @returns 打席結果、投手情報
     */
    SetDataGameStart(visitorMember, homeMember) {
        let returnVisitorBatting = new member_info_model_1.BattingResultPerTeamModel();
        let returnHomeBatting = new member_info_model_1.BattingResultPerTeamModel();
        let returnVisitorPitcher = [];
        let returnHomePitcher = [];
        let returnPitcherInfo = new member_info_model_1.PitcherInfoModel();
        let returnPosition = new member_info_model_1.PositionModel();
        const returnGameProgressInfo = new game_model_1.GameProgressInfoModel();
        const memberController = new member_controller_1.MemberController();
        // 打席結果
        [returnVisitorBatting, returnHomeBatting] = memberController.SetBattingResultGameStart(visitorMember, homeMember);
        // 投手情報
        returnVisitorPitcher = memberController.SetPitcherInfo(visitorMember, returnVisitorPitcher);
        returnHomePitcher = memberController.SetPitcherInfo(homeMember, returnHomePitcher);
        returnPitcherInfo = memberController.GetPitcherInfo(homeMember, returnHomePitcher);
        // 守備位置
        returnPosition = memberController.SetPositionData(homeMember);
        // 試合情報
        returnGameProgressInfo.IsStarted = true;
        returnGameProgressInfo.NowInning = 1;
        returnGameProgressInfo.NowAttackTeam = constant_1.VisitorHomeDivision.Visitor;
        // メンバーのDisplayをfalseにする
        this.orderKeysDH.forEach(key => {
            visitorMember[key].DispStatus.Display = false;
            homeMember[key].DispStatus.Display = false;
        });
        return [visitorMember, returnVisitorBatting, homeMember, returnHomeBatting, returnVisitorPitcher, returnHomePitcher, returnPitcherInfo, returnPosition, returnGameProgressInfo];
    }
    /**
     * 次打者
     * @param member 編集前メンバー
     * @returns 編集後メンバー
     */
    NextBatter(member, batRes) {
        const batterName = new member_info_model_1.RunnerName();
        let battingResultList = [];
        for (let i = 0; i < 9; i++) {
            if (member[this.orderKeysDH[i]].DispStatus.Batter) {
                if (i < 8) {
                    member[this.orderKeysDH[i]].DispStatus = new member_info_model_1.ParticipationMemberDispStatus();
                    member[this.orderKeysDH[i]].DispStatus.Basic = true;
                    member[this.orderKeysDH[i + 1]].DispStatus = new member_info_model_1.ParticipationMemberDispStatus();
                    member[this.orderKeysDH[i + 1]].DispStatus.Batter = true;
                    batterName.Order = i + 2;
                    batterName.Name = member[this.orderKeysDH[i + 1]].Name;
                    // 打席結果取得
                    const id = member[this.orderKeysDH[i + 1]].ID;
                    battingResultList = this.memberController.GetBattingResult(batRes, i + 1, id);
                }
                else {
                    member[this.orderKeysDH[i]].DispStatus = new member_info_model_1.ParticipationMemberDispStatus();
                    member[this.orderKeysDH[i]].DispStatus.Basic = true;
                    member[this.orderKeysDH[0]].DispStatus = new member_info_model_1.ParticipationMemberDispStatus();
                    member[this.orderKeysDH[0]].DispStatus.Batter = true;
                    batterName.Order = 1;
                    batterName.Name = member[this.orderKeysDH[0]].Name;
                    // 打席結果取得
                    const id = member[this.orderKeysDH[0]].ID;
                    battingResultList = this.memberController.GetBattingResult(batRes, 0, id);
                }
                break;
            }
        }
        return [member, batterName, battingResultList];
    }
    /**
     * 出塁
     * @param member
     * @returns
     */
    OnBase(member) {
        const batter = new member_info_model_1.RunnerName();
        for (let i = 0; i < 9; i++) {
            if (member[this.orderKeysDH[i]].DispStatus.Batter) {
                batter.Order = i + 1;
                batter.Name = member[this.orderKeysDH[i]].Name;
                if (i == 0) {
                    member[this.orderKeysDH[8]].DispStatus = new member_info_model_1.ParticipationMemberDispStatus();
                    member[this.orderKeysDH[8]].DispStatus.Runner = true;
                }
                else {
                    member[this.orderKeysDH[i - 1]].DispStatus = new member_info_model_1.ParticipationMemberDispStatus();
                    member[this.orderKeysDH[i - 1]].DispStatus.Runner = true;
                }
                break;
            }
        }
        return member;
    }
    /**
     * 走者振り分け
     * @param member メンバー
     * @param state 塁状況
     * @param batter 打者
     * @returns
     */
    SortRunner(member, state, batter) {
        const returnData = new member_info_model_1.RunnerNameModel();
        returnData.Batter = batter;
        const batterOrder = batter.Order - 1;
        let endFlg = false;
        for (let i = batterOrder; !endFlg; i++) {
            if (member[this.orderKeysDH[i]].DispStatus.Runner) {
                if (state.Third && returnData.Third.Name == undefined) {
                    returnData.Third.Order = i + 1;
                    returnData.Third.Name = member[this.orderKeysDH[i]].Name;
                }
                else if (state.Second && returnData.Second.Name == undefined) {
                    returnData.Second.Order = i + 1;
                    returnData.Second.Name = member[this.orderKeysDH[i]].Name;
                }
                else if (state.First && returnData.First.Name == undefined) {
                    returnData.First.Order = i + 1;
                    returnData.First.Name = member[this.orderKeysDH[i]].Name;
                }
            }
            else if (member[this.orderKeysDH[i]].DispStatus.Batter) {
                returnData.Batter.Name = member[this.orderKeysDH[i]].Name;
            }
            if (i == 8) {
                i = -1;
            }
            if (i == batterOrder - 1) {
                endFlg = true;
            }
        }
        return returnData;
    }
    /**
     * 走者状態解消
     * @param member メンバー
     * @param targetList 処理対象リスト
     */
    ResolvedRunner(member, targetList) {
        targetList.forEach(x => {
            member[this.orderKeysDH[x - 1]].DispStatus = new member_info_model_1.ParticipationMemberDispStatus();
            member[this.orderKeysDH[x - 1]].DispStatus.Basic = true;
        });
        return member;
    }
    /**
     * 得点計算
     * @param runs 得点
     * @param gameInfo 試合情報
     * @param scoreData ランニングスコア
     * @param dispScoreData 表示用ランニングスコア
     * @returns
     */
    CalcRuns(runs, gameInfo, scoreData, dispScoreData) {
        // 上限13回以上、9回以降
        let setInning = 0;
        if (gameInfo.GameBaseInfo.InningLimit > 12 && gameInfo.GameProgressInfo.NowInning > 9) {
            const mod = gameInfo.GameProgressInfo.NowInning % 9;
            if (mod == 0) {
                setInning = 8;
            }
            else {
                setInning = mod - 1;
            }
        }
        else {
            setInning = gameInfo.GameProgressInfo.NowInning - 1;
        }
        // 配列の要素をtoStringすると要素の存在が不確定なためエラーが発生する
        let nowInningRuns = 0;
        if (gameInfo.GameProgressInfo.NowAttackTeam == constant_1.VisitorHomeDivision.Visitor) {
            if (scoreData.VisitorScore.length < gameInfo.GameProgressInfo.NowInning) {
                scoreData.VisitorScore.push(runs);
                nowInningRuns = runs;
            }
            else {
                scoreData.VisitorScore[gameInfo.GameProgressInfo.NowInning - 1] += runs;
                nowInningRuns = scoreData.VisitorScore[gameInfo.GameProgressInfo.NowInning - 1];
            }
        }
        else {
            if (scoreData.HomeScore.length < gameInfo.GameProgressInfo.NowInning) {
                scoreData.HomeScore.push(runs);
                nowInningRuns = runs;
            }
            else {
                scoreData.HomeScore[gameInfo.GameProgressInfo.NowInning - 1] += runs;
                nowInningRuns = scoreData.HomeScore[gameInfo.GameProgressInfo.NowInning - 1];
            }
        }
        dispScoreData = this.CreateDispRunningScore(gameInfo, scoreData);
        return [scoreData, dispScoreData];
    }
    /**
     * 表示用ランニングスコア作成
     * @param gameInfo
     * @param scoreData
     * @param dispScoreData
     * @returns
     */
    CreateDispRunningScore(gameInfo, scoreData) {
        const dispScoreData = new score_info_model_1.DispRunningScoreModel();
        let visitorR = 0;
        let homeR = 0;
        if (gameInfo.GameBaseInfo.InningLimit <= 12 || (gameInfo.GameBaseInfo.InningLimit > 12 && gameInfo.GameProgressInfo.NowInning < 10)) {
            // ビジター
            scoreData.VisitorScore.forEach((x, index) => {
                dispScoreData[this.inningKeys[index]] = x.toString();
                visitorR += Number(x);
            });
            // ホーム
            scoreData.HomeScore.forEach((x, index) => {
                dispScoreData[this.inningKeys[index + 12]] = x.toString();
                homeR += Number(x);
            });
        }
        else {
            let startInning = 0;
            let endInning = 0;
            if (gameInfo.GameProgressInfo.NowInning % 9 == 0) {
                startInning = gameInfo.GameProgressInfo.NowInning - 8;
            }
            else {
                startInning = (gameInfo.GameProgressInfo.NowInning - (gameInfo.GameProgressInfo.NowInning % 9));
            }
            endInning = gameInfo.GameProgressInfo.NowInning;
            for (let i = 0; i < (endInning - startInning); i++) {
                // ビジター
                if (scoreData.VisitorScore.length >= endInning - 1) {
                    dispScoreData[this.inningKeys[i]] = scoreData.VisitorScore[startInning + i - 1].toString();
                }
                // ホーム
                if (scoreData.HomeScore.length >= endInning - 1) {
                    dispScoreData[this.inningKeys[i + 12]] = scoreData.HomeScore[startInning + i - 1].toString();
                }
            }
        }
        // if (gameInfo.GameProgressInfo.NowInning >= 9 && gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && visitorR < homeR) {
        //     dispScoreData[this.inningKeys[gameInfo.GameProgressInfo.NowInning + 11]] = scoreData.HomeScore[gameInfo.GameProgressInfo.NowInning - 1].toString() + 'x';
        // }
        dispScoreData.VisitorR = visitorR.toString();
        dispScoreData.VisitorH = scoreData.VisitorH.toString();
        dispScoreData.VisitorE = scoreData.VisitorE.toString();
        dispScoreData.VisitorLOB = scoreData.VisitorLOB.toString();
        dispScoreData.HomeR = homeR.toString();
        dispScoreData.HomeH = scoreData.HomeH.toString();
        dispScoreData.HomeE = scoreData.HomeE.toString();
        dispScoreData.HomeLOB = scoreData.HomeLOB.toString();
        return dispScoreData;
    }
    /**
     * 試合終了処理
     * @param score ランニングスコア
     * @param dispScore 表示用スコア
     * @param gameInfo 試合情報
     * @returns
     */
    GameSet(score, dispScore, gameInfo, count) {
        const nowInning = gameInfo.GameProgressInfo.NowInning;
        const nowAttack = gameInfo.GameProgressInfo.NowAttackTeam;
        const out = count.Out;
        let visitorR = 0;
        let homeR = 0;
        score.VisitorScore.forEach(x => {
            visitorR = visitorR + x;
        });
        score.HomeScore.forEach(x => {
            homeR = homeR + x;
        });
        // 上限13回以上、9回以降
        let setInning = 0;
        if (gameInfo.GameBaseInfo.InningLimit > 12 && gameInfo.GameProgressInfo.NowInning > 9) {
            const mod = gameInfo.GameProgressInfo.NowInning % 9;
            if (mod == 0) {
                setInning = 8;
            }
            else {
                setInning = mod - 1;
            }
        }
        else {
            setInning = gameInfo.GameProgressInfo.NowInning - 1;
        }
        if (nowInning == 9 && nowAttack == constant_1.VisitorHomeDivision.Visitor && visitorR < homeR && out == 3) {
            if (score.VisitorScore.length == 8) {
                score.VisitorScore.push(0);
                dispScore.Score.TopOfThe9 = '0';
            }
            else {
                dispScore.Score.TopOfThe9 = score.VisitorScore[8].toString();
            }
            dispScore.Score.BottomOfThe9 = 'X';
        }
        else if ((nowInning >= 9 && nowAttack == constant_1.VisitorHomeDivision.Home && visitorR > homeR && out == 3) ||
            (nowInning == gameInfo.GameBaseInfo.InningLimit && constant_1.VisitorHomeDivision.Home && visitorR == homeR && out == 3)) {
            if (score.HomeScore.length == nowInning - 1) {
                score.HomeScore.push(0);
                dispScore.Score[this.inningKeys[setInning + 12]] = '0';
            }
        }
        else if (nowInning >= 9 && nowAttack == constant_1.VisitorHomeDivision.Home && visitorR < homeR) {
            dispScore.Score[this.inningKeys[setInning + 12]] = score.HomeScore[nowInning - 1].toString() + 'x';
        }
        return [score, dispScore];
    }
}
exports.GameController = GameController;
//# sourceMappingURL=game-controller.js.map