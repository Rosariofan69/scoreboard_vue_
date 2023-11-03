import { RunningScoreModel, DispRunningScoreModel } from './model/score-info-model';
import { MemberController } from './member-controller';
import { GameInfoDivision, VisiterHomeDivision } from './constant';
import { GameInfoModel, GameProgressInfoModel } from './model/game-model';
import { ExcelController } from './excel-controller';
import { DefaultMemberModel, ParticipationMemberPerTeamModel, InputVTeamModel, BattingResultPerTeamModel, BattingResultAtGameModel, PitcherInfoModel, PositionModel, BatterStatsModel, RunnerName, RunnerStateModel, RunnerNameModel } from './model/member-info-model';
/**
 * 試合関連のコントローラークラス
 */
export class GameController {
    orderKeysDH = ['LeadOff', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Pitcher'] as const;
    orderKeys = ['LeadOff', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth'] as const;
    inningKeys = ['TopOfThe1', 
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
                  'VisiterR', 
                  'VisiterH', 
                  'VisiterE', 
                  'VisiterLOB', 
                  'HomeR', 
                  'HomeH', 
                  'HomeE', 
                  'HomeLOB'] as const;

    /**
     * 試合開始時試合情報取得
     * @returns 試合情報取得
     */
    public async GetGameInfoStart(): Promise<any> {
        const excelController = new ExcelController();
        // データ取得
        const responseData = await excelController.GetMainInfo();
        // 戻り値
        const returnData: GameInfoModel = new GameInfoModel();

        returnData.GameBaseInfo.VisiterTeamName = responseData[GameInfoDivision.VisiterTeamName];
        returnData.GameBaseInfo.VisiterTeamText = responseData[GameInfoDivision.VisiterTeamText];
        returnData.GameBaseInfo.VisiterLastRow = responseData[GameInfoDivision.VisiterLastRow];
        returnData.GameBaseInfo.HomeTeamName = responseData[GameInfoDivision.HomeTeamName];
        returnData.GameBaseInfo.HomeTeamText = responseData[GameInfoDivision.HomeTeamText];
        returnData.GameBaseInfo.HomeLastRow = responseData[GameInfoDivision.HomeLastRow];
        returnData.GameBaseInfo.InningLimit = responseData[GameInfoDivision.InningLimit];
        returnData.GameBaseInfo.StatsAddition = responseData[GameInfoDivision.StatsAddition];
        returnData.GameBaseInfo.HomePosition = responseData[GameInfoDivision.HomePosition];

        return returnData;
    }
    
    /**
     * 試合開始時データセット
     * @param visiterMember ビジターメンバー
     * @param homeMember ホームメンバー
     * @returns 打席結果、投手情報
     */
    public SetDataGameStart(visiterMember: ParticipationMemberPerTeamModel, homeMember: ParticipationMemberPerTeamModel)
        : [BattingResultPerTeamModel, BattingResultPerTeamModel, PitcherInfoModel[], PitcherInfoModel[], PitcherInfoModel, PositionModel, GameProgressInfoModel] {
        let returnVisiterBatting = new BattingResultPerTeamModel();
        let returnHomeBatting = new BattingResultPerTeamModel();
        let returnVisiterPitcher: PitcherInfoModel[] = [];
        let returnHomePitcher: PitcherInfoModel[] = [];
        let returnPitcherInfo = new PitcherInfoModel();
        let returnPosition = new PositionModel();
        const returnGameProgressInfo = new GameProgressInfoModel();

        const memberController = new MemberController();
        // 打席結果
        [returnVisiterBatting, returnHomeBatting] = memberController.SetBattingResultGameStart(visiterMember, homeMember);
        // 投手情報
        returnVisiterPitcher = memberController.SetPitcherInfo(visiterMember);
        returnHomePitcher = memberController.SetPitcherInfo(homeMember);
        returnPitcherInfo = memberController.GetPitcherInfo(homeMember, returnHomePitcher);
        // 守備位置
        returnPosition = memberController.SetPositionData(homeMember);
        // 試合情報
        returnGameProgressInfo.IsStarted = true;
        returnGameProgressInfo.NowInning = 1;
        returnGameProgressInfo.NowAttackTeam = VisiterHomeDivision.Visiter;

        return [returnVisiterBatting, returnHomeBatting, returnVisiterPitcher, returnHomePitcher, returnPitcherInfo, returnPosition, returnGameProgressInfo];
    }

    /**
     * 次打者
     * @param member 編集前メンバー
     * @returns 編集後メンバー
     */
    public NextBatter(member: ParticipationMemberPerTeamModel): [ParticipationMemberPerTeamModel, RunnerName] {
        const batterName = new RunnerName();
        for (let i = 0; i < 9; i++) {
            if (member[this.orderKeysDH[i]].DispStatus.Batter){
                if (i < 8) {
                    member[this.orderKeysDH[i]].DispStatus.Basic = true;
                    member[this.orderKeysDH[i]].DispStatus.Batter = false;
                    member[this.orderKeysDH[i + 1]].DispStatus.Batter = true;
                    member[this.orderKeysDH[i + 1]].DispStatus.Basic = false;
                    batterName.Order = i + 2;
                    batterName.Name = member[this.orderKeysDH[i + 1]].Name;
                } else {
                    member[this.orderKeysDH[i]].DispStatus.Basic = true;
                    member[this.orderKeysDH[i]].DispStatus.Batter = false;
                    member[this.orderKeysDH[0]].DispStatus.Batter = true;
                    member[this.orderKeysDH[0]].DispStatus.Basic = false;
                    batterName.Order = 1;
                    batterName.Name = member[this.orderKeysDH[0]].Name;
                }
                break;
            }
        }

        return [member, batterName];
    }

    /**
     * 出塁
     * @param member 
     * @returns 
     */
    public OnBase(member: ParticipationMemberPerTeamModel): ParticipationMemberPerTeamModel {
        const batter = new RunnerName();
        for (let i = 0; i < 9; i++) {
            if (member[this.orderKeysDH[i]].DispStatus.Batter) {
                batter.Order = i + 1;
                batter.Name = member[this.orderKeysDH[i]].Name;
                if (i == 0) {
                    member[this.orderKeysDH[8]].DispStatus.Runner = true;
                    member[this.orderKeysDH[8]].DispStatus.Basic = false;
                } else {
                    member[this.orderKeysDH[i - 1]].DispStatus.Runner = true;
                    member[this.orderKeysDH[i - 1]].DispStatus.Basic = false;
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
    public SortRunner(member: ParticipationMemberPerTeamModel, state: RunnerStateModel, batter: RunnerName): RunnerNameModel {
        const returnData = new RunnerNameModel();
        returnData.Batter = batter;
        const batterOrder = batter.Order - 1;

        let endFlg = false;
        for (let i = batterOrder; !endFlg; i++) {
            if (member[this.orderKeysDH[i]].DispStatus.Runner) {
                if (state.Third && returnData.Third.Name == undefined) {
                    returnData.Third.Order = i + 1;
                    returnData.Third.Name = member[this.orderKeysDH[i]].Name;
                } else if (state.Second && returnData.Second.Name == undefined) {
                    returnData.Second.Order = i + 1;
                    returnData.Second.Name = member[this.orderKeysDH[i]].Name;
                } else if (state.First && returnData.First.Name == undefined) {
                    returnData.First.Order = i + 1;
                    returnData.First.Name = member[this.orderKeysDH[i]].Name;
                }
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
    public ResolvedRunner(member: ParticipationMemberPerTeamModel, targetList: number[]): ParticipationMemberPerTeamModel {
        targetList.forEach(x => {
            member[this.orderKeysDH[x - 1]].DispStatus.Runner = false;
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
    public CalcRuns(runs: number, gameInfo: GameInfoModel, scoreData: RunningScoreModel, dispScoreData: DispRunningScoreModel): [RunningScoreModel, DispRunningScoreModel] {
        // 上限13回以上、9回以降
        let setInning = 0;
        if (gameInfo.GameBaseInfo.InningLimit > 12 && gameInfo.GameProgressInfo.NowInning > 9) {
            const mod = gameInfo.GameProgressInfo.NowInning % 9;
            if (mod == 0) {
                setInning = 8;
            } else {
                setInning = mod - 1;
            }
        } else {
            setInning = gameInfo.GameProgressInfo.NowInning - 1;
        }

        let totalRuns = 0;
        // 配列の要素をtoStringすると要素の存在が不確定なためエラーが発生する
        let nowInningRuns = 0;
        if (gameInfo.GameProgressInfo.NowAttackTeam == VisiterHomeDivision.Visiter) {
            if (scoreData.VisiterScore.length < gameInfo.GameProgressInfo.NowInning) {
                scoreData.VisiterScore.push(runs);
                nowInningRuns = runs;
            } else {
                scoreData.VisiterScore[gameInfo.GameProgressInfo.NowInning - 1] += runs;
                nowInningRuns = scoreData.VisiterScore[gameInfo.GameProgressInfo.NowInning - 1];
            }
            // 合計計算
            scoreData.VisiterScore.forEach(x => {
                totalRuns += x;
            })
            dispScoreData[this.inningKeys[setInning]] = nowInningRuns.toString();
            dispScoreData.VisiterR = totalRuns.toString();
        } else {
            if (scoreData.HomeScore.length < gameInfo.GameProgressInfo.NowInning) {
                scoreData.HomeScore.push(runs);
                nowInningRuns = runs;
            } else {
                scoreData.HomeScore[gameInfo.GameProgressInfo.NowInning - 1] += runs;
                nowInningRuns = scoreData.HomeScore[gameInfo.GameProgressInfo.NowInning - 1];
            }
            // 合計計算
            scoreData.HomeScore.forEach(x => {
                totalRuns += x;
            })
            dispScoreData[this.inningKeys[setInning + 11]] = nowInningRuns.toString();
            dispScoreData.HomeR = totalRuns.toString();
        }

        return [scoreData, dispScoreData];
    }
}