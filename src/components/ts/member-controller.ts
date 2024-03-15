import { GameInfoModel } from './model/game-model';
import { VisitorHomeDivision } from './constant';
import { ExcelController } from './excel-controller';
import { DefaultMemberModel,
         ParticipationMemberPerTeamModel,
         InputVTeamModel,
         BattingResultPerTeamModel,
         BattingResultAtGameModel,
         PitcherInfoModel,
         PositionModel,
         BatterStatsModel,
         DispBatterStatsModel,
         RunnerName,
         AtBatResultModel,
         BatterStatsUpdateModel,
         ParticipationMemberDispStatus } from './model/member-info-model';

/**
 * メンバー関連のコントローラークラス
 */
export class MemberController {
    orderKeysDH = ['LeadOff', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Pitcher'] as const;
    orderKeys = ['LeadOff', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth'] as const;

    /**
     * メンバー初期情報取得
     * @returns メンバー初期情報
     */
    public async GetMemberInfo(getDivision: number, gameInfo: GameInfoModel): Promise<DefaultMemberModel[]> {
        const excelController = new ExcelController();
        // データ取得
        const responseData = await excelController.GetMember(getDivision, gameInfo);
        // 戻り値
        const returnData: DefaultMemberModel[] = responseData;
        return returnData;
    }

    /**
     * 出場メンバー一括取得
     * @param memberModel 
     * @param input 
     * @param defMemberList 
     * @returns 
     */
    public GetBulkParticipationMemberData(
        member: ParticipationMemberPerTeamModel,
        input: InputVTeamModel,
        defMemberList: DefaultMemberModel[]
    ): ParticipationMemberPerTeamModel {
        let returnData = new ParticipationMemberPerTeamModel;

        this.orderKeysDH.forEach(key => {
            const item = defMemberList.find(x => x.Id.toString() == input[key].ID ) ?? new DefaultMemberModel();
            member[key].ID = input[key].ID;
            member[key].Position = input[key].Position;
            member[key].Number = item.Number;
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
     * 出場メンバー取得
     * @param member 
     * @param input 
     * @param defMemberList 
     * @param index 
     * @returns 
     */
    public GetParticipationMemberData(
        member: ParticipationMemberPerTeamModel,
        input: InputVTeamModel,
        defMemberList: DefaultMemberModel[],
        index: number
    ): ParticipationMemberPerTeamModel {
        let returnData = new ParticipationMemberPerTeamModel;
        const key = this.orderKeysDH[index];

        const item = defMemberList.find(x => x.Id.toString() == input[key].ID ) ?? new DefaultMemberModel();
        member[key].ID = input[key].ID;
        member[key].Position = input[key].Position;
        member[key].Number = item.Number;
        member[key].Name = item.Name;
        member[key].FullName = item.FullName;
        member[key].RowNumber = item.RowNumber;
        member[key].DispStatus.Display = true;
        member[key].DispStatus.Basic = true;

        returnData = member;
        return returnData;
    }

    /**
     * 打席結果作成（試合開始時）
     * @param visitorMember ビジターメンバー
     * @param homeMember ホームメンバー
     * @returns ビジター打席結果、ホーム打席結果
     */
    public SetBattingResultGameStart(visitorMember: ParticipationMemberPerTeamModel, homeMember: ParticipationMemberPerTeamModel)
        : [BattingResultPerTeamModel, BattingResultPerTeamModel] {
        const returnVisitorData = new BattingResultPerTeamModel;
        const returnHomeData = new BattingResultPerTeamModel;

        for (let i = 0; i < 9; i++) {
            // ビジター
            const itemVisitor = new BattingResultAtGameModel();
            itemVisitor.ID = visitorMember[this.orderKeysDH[i]].ID;
            itemVisitor.Number = visitorMember[this.orderKeysDH[i]].Number;
            itemVisitor.Position = visitorMember[this.orderKeysDH[i]].Position;
            itemVisitor.Name = visitorMember[this.orderKeysDH[i]].FullName;
            returnVisitorData[this.orderKeys[i]].push(itemVisitor);

            // ホーム
            const itemHome = new BattingResultAtGameModel();
            itemHome.ID = homeMember[this.orderKeysDH[i]].ID;
            itemHome.Number = homeMember[this.orderKeysDH[i]].Number;
            itemHome.Position = homeMember[this.orderKeysDH[i]].Position;
            itemHome.Name = homeMember[this.orderKeysDH[i]].FullName;
            returnHomeData[this.orderKeys[i]].push(itemHome);
        }

        return [returnVisitorData, returnHomeData];
    }

    /**
     * 投手情報セット
     * @param member 
     * @returns 
     */
    public SetPitcherInfo(member: ParticipationMemberPerTeamModel, pitcherInfoList: PitcherInfoModel[]): PitcherInfoModel[] {
        let addFlg = true;
        for (let i = 0; i < 10; i++) {
            if (member[this.orderKeysDH[i]].Position == '1') {
                // 既に投手情報がセット済みの投手（再登板）の場合、処理を行わない
                pitcherInfoList.forEach(x => {
                    if (member[this.orderKeysDH[i]].ID == x.ID) {
                        addFlg = false;
                    }
                });

                if (addFlg) {
                    const pushData = new PitcherInfoModel();
                    pushData.ID = member[this.orderKeysDH[i]].ID;
                    pushData.Number = member[this.orderKeysDH[i]].Number;
                    pushData.Name = member[this.orderKeysDH[i]].Name;
                    pushData.FullName = member[this.orderKeysDH[i]].FullName;
                    pushData.PitchCount = 0;
                    pushData.ThisAtBat = 0;
                    pushData.SO = 0;
                    pushData.BB = 0;
                    pitcherInfoList.push(pushData);   
                }
                
                break;
            }
        }

        return pitcherInfoList;
    }

    /**
     * 投手情報取得
     * @param member メンバー情報
     * @param dataList 投手情報リスト
     * @returns 
     */
    public GetPitcherInfo(member: ParticipationMemberPerTeamModel, dataList: PitcherInfoModel[]): PitcherInfoModel {
        let id = '';

        for (let i = 0; i < 10; i++) {
            if (member[this.orderKeysDH[i]].Position == '1') {
                id = member[this.orderKeysDH[i]].ID;
                break;
            }
        }

        const returnData = dataList.find(x => x.ID == id) ?? new PitcherInfoModel();

        return returnData;
    }

    /**
     * 守備位置データ設定
     * @param member 
     * @returns 
     */
    public SetPositionData(member: ParticipationMemberPerTeamModel): PositionModel {
        const returnData: PositionModel = new PositionModel();

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
    public GetBatterStats(partMember: ParticipationMemberPerTeamModel, defMember: DefaultMemberModel[]): DispBatterStatsModel {
        let id = '';
        for (let i = 0; i < 9; i++) {
            if (partMember[this.orderKeys[i]].DispStatus.Batter) {
                id = partMember[this.orderKeys[i]].ID;
                break;
            }
        }

        const memberData = defMember.find(x => x.Id == id) ?? new DefaultMemberModel();

        const returnData: DispBatterStatsModel = new DispBatterStatsModel();
        returnData.Number = memberData.Number;
        returnData.Name = memberData.FullName;
        returnData.AVG = memberData.BatterStats.AVG;
        returnData.AB_H = memberData.BatterStats.Atbat + ' - ' + memberData.BatterStats.Hit;
        returnData.HR = memberData.BatterStats.HomeRun;
        returnData.RBI = memberData.BatterStats.RBI;
        returnData.SB = memberData.BatterStats.SB;
        returnData.OBP = memberData.BatterStats.OBP;
        returnData.OPS = memberData.BatterStats.OPS;
        returnData.RC27 = memberData.BatterStats.RC27;

        return returnData;
    }

    /**
     * 投手情報保存
     * @param pitcherInfoList 
     * @param pitcherInfo 
     */
    public SavePitcherInfo(pitcherInfoList: PitcherInfoModel[], pitcherInfo: PitcherInfoModel): PitcherInfoModel[] {
        pitcherInfoList.forEach(x => {
            if (x.Number == pitcherInfo.Number) {
                x.PitchCount = pitcherInfo.PitchCount;
                x.ThisAtBat = pitcherInfo.ThisAtBat;
                x.SO = pitcherInfo.SO;
                x.BB = pitcherInfo.BB;
            }
        });

        return pitcherInfoList;
    }

    /**
     * 攻守交代時メンバー編集
     * @param visitor 
     * @param home 
     * @param gameInfo 
     */
    public ChangeAttackEditMember(visitor: ParticipationMemberPerTeamModel, home: ParticipationMemberPerTeamModel, gameInfo: GameInfoModel, batRes: BattingResultPerTeamModel):
        [ParticipationMemberPerTeamModel, ParticipationMemberPerTeamModel, RunnerName, AtBatResultModel[]] {
        const batterName = new RunnerName();
        let battingResult: AtBatResultModel[] = [];
        if (gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
            for (let i = 0; i < 9; i++) {
                if (visitor[this.orderKeysDH[i]].DispStatus.Batter) {
                    visitor[this.orderKeysDH[i]].DispStatus = new ParticipationMemberDispStatus();
                    visitor[this.orderKeysDH[i]].DispStatus.NextRead = true;
                }
                if (home[this.orderKeysDH[i]].DispStatus.NextRead) {
                    home[this.orderKeysDH[i]].DispStatus = new ParticipationMemberDispStatus();
                    home[this.orderKeysDH[i]].DispStatus.Batter = true;
                    batterName.Order = i + 1;
                    batterName.Name = home[this.orderKeysDH[i]].Name;

                    // 打席結果取得
                    const id = home[this.orderKeysDH[i]].ID;
                    battingResult = this.GetBattingResult(batRes, i, id);
                }
            }
        } else {
            for (let i = 0; i < 9; i++) {
                if (home[this.orderKeysDH[i]].DispStatus.Batter) {
                    home[this.orderKeysDH[i]].DispStatus = new ParticipationMemberDispStatus();
                    home[this.orderKeysDH[i]].DispStatus.NextRead = true;
                }
                if (visitor[this.orderKeysDH[i]].DispStatus.NextRead) {
                    visitor[this.orderKeysDH[i]].DispStatus = new ParticipationMemberDispStatus();
                    visitor[this.orderKeysDH[i]].DispStatus.Batter = true;
                    batterName.Order = i + 1;
                    batterName.Name = visitor[this.orderKeysDH[i]].Name;

                    // 打席結果取得
                    const id = visitor[this.orderKeysDH[i]].ID;
                    battingResult = this.GetBattingResult(batRes, i, id);
                }
            }
        }

        return [visitor, home, batterName, battingResult];
    }

    /**
     * 打席結果保存
     * @param resultList 打席結果リスト
     * @param batter 打者
     * @param gameInfo 試合情報
     * @param result 打席結果
     * @returns 
     */
    public SaveBattingResult(resultList: BattingResultPerTeamModel, batter: RunnerName, gameInfo: GameInfoModel, result: string): BattingResultPerTeamModel {
        const atBatResult = new AtBatResultModel();
        atBatResult.Inning = gameInfo.GameProgressInfo.NowInning;
        atBatResult.Result = result;

        resultList[this.orderKeys[batter.Order - 1]][resultList[this.orderKeys[batter.Order - 1]].length - 1].AtBatResult.push(atBatResult);

        return resultList;
    }

    /**
     * 打席結果取得
     * @param batRes 
     * @param order 
     * @param id 
     */
    public GetBattingResult(batRes: BattingResultPerTeamModel, order: number, id: string): AtBatResultModel[] {
        let returnRes: AtBatResultModel[] = [];
        
        // 打席結果取得
        batRes[this.orderKeys[order]].forEach(x => {
            if (x.ID == id) {
                returnRes = x.AtBatResult;
            }
        });

        return returnRes;
    }

    /**
     * 打者成績更新
     * @param member メンバー
     * @param gameInfo 試合情報
     * @param plusData 加算データ
     */
    public UpdateBatterStats(member: ParticipationMemberPerTeamModel, defMember: DefaultMemberModel[], plusData: BatterStatsUpdateModel): DefaultMemberModel[] {
        let id = '';
        for (let i = 0; i < 9; i++) {
            if (member[this.orderKeysDH[i]].DispStatus.Batter) {
                id = member[this.orderKeysDH[i]].ID.toString();
            }
        }

        defMember.forEach(x => {
            if (x.Id == id) {
                // 打数
                if (plusData.AtBat == 1) {
                    x.BatterStats.Atbat = x.BatterStats.Atbat + plusData.AtBat;
                }
                // 安打
                if (plusData.Hit == 1) {
                    x.BatterStats.Hit = x.BatterStats.Hit + plusData.Hit;
                }
                // 二塁打
                if (plusData.Double == 1) {
                    x.BatterStats.Double = x.BatterStats.Double + plusData.Double;
                }
                // 三塁打
                if (plusData.Triple == 1) {
                    x.BatterStats.Triple = x.BatterStats.Triple + plusData.Triple;
                }
                // 本塁打
                if (plusData.HomeRun == 1) {
                    x.BatterStats.HomeRun = x.BatterStats.HomeRun + plusData.HomeRun;
                }
                // 打点
                if (plusData.RBI >= 1) {
                    x.BatterStats.RBI = x.BatterStats.RBI + plusData.RBI;
                }
                // 三振
                if (plusData.SO == 1) {
                    x.BatterStats.SO = x.BatterStats.SO + plusData.SO;
                }
                // 四球
                if (plusData.BB == 1) {
                    x.BatterStats.BB = x.BatterStats.BB + plusData.BB;
                }
                // 死球
                if (plusData.HBP == 1) {
                    x.BatterStats.HBP = x.BatterStats.HBP + plusData.HBP;
                }
                // 犠打
                if (plusData.SacBunt == 1) {
                    x.BatterStats.SacBunt = x.BatterStats.SacBunt + plusData.SacBunt;
                }
                // 犠飛
                if (plusData.SacFly == 1) {
                    x.BatterStats.SacFly = x.BatterStats.SacFly + plusData.SacFly;
                }
                // 盗塁
                if (plusData.SB == 1) {
                    x.BatterStats.SB = x.BatterStats.SB + plusData.SB;
                }
                // 盗塁死
                if (plusData.CS == 1) {
                    x.BatterStats.CS = x.BatterStats.CS + plusData.CS;
                }
                // 併殺打
                if (plusData.DP == 1) {
                    x.BatterStats.DP = x.BatterStats.DP + plusData.DP;
                }

                // 打率
                x.BatterStats.AVG = this.CalcAvg(x.BatterStats.Atbat, x.BatterStats.Hit);
                // 塁打
                x.BatterStats.TotalBases = this.CalcTotalBases(x.BatterStats.Hit, x.BatterStats.Double, x.BatterStats.Triple, x.BatterStats.HomeRun);
                // 出塁率
                x.BatterStats.OBP = this.CalcOBP(x.BatterStats);
                // OPS
                x.BatterStats.OPS = this.CalcOPS(x.BatterStats);
                // RC27
                x.BatterStats.RC27 = this.CalcRC27(x.BatterStats);
            }
        });

        return defMember;
    }

    /**
     * 走者成績更新
     * @param id 
     * @param defMember 
     * @param plusData 
     * @returns 
     */
    public UpdateRunnerStats(id: string, defMember: DefaultMemberModel[], plusData: BatterStatsUpdateModel): DefaultMemberModel[] {
        defMember.forEach(x => {
            if (x.Id == id) {
                // 盗塁
                if (plusData.SB == 1) {
                    x.BatterStats.SB = x.BatterStats.SB + plusData.SB;
                }
                // 盗塁死
                if (plusData.CS == 1) {
                    x.BatterStats.CS = x.BatterStats.CS + plusData.CS;
                }

                // RC27
                x.BatterStats.RC27 = this.CalcRC27(x.BatterStats);
            }
        });

        return defMember;
    }

    /**
     * 打者成績更新（Excel）
     * @param member メンバー
     * @param gameInfo 試合情報
     * @param plusData 加算データ
     */
    public async UpdateExcelBatterStats(row: number, gameInfo: GameInfoModel, plusData: BatterStatsUpdateModel): Promise<any> {
        const excelController = new ExcelController();

        let team: string;

        if (gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
            team = gameInfo.GameBaseInfo.VisitorTeamName;
        } else {
            team = gameInfo.GameBaseInfo.HomeTeamName;
        }

        const result = excelController.UpdateStats(row, team, plusData);
        return result;
    }

    /**
     * 一括選手交代（前）
     * @param before 交代前入力値
     * @param after 交代後入力値
     * @param member メンバー
     * @returns 
     */
    public ChangeBeforeMemberBulk(before: InputVTeamModel, after: InputVTeamModel, member: ParticipationMemberPerTeamModel): ParticipationMemberPerTeamModel {
        this.orderKeysDH.forEach(key => {
            if (before[key].ID != after[key].ID) {
                // 選手ごと
                member[key].DispStatus.ChangeBeforePisition = false;
                member[key].DispStatus.ChangeAfterPisition = false;
                member[key].DispStatus.ChangeAfterMember = false;
                member[key].DispStatus.ChangeBeforeMember = true;
            } else if (before[key].Position != after[key].Position) {
                // 守備位置のみ
                member[key].DispStatus.ChangeBeforeMember = false;
                member[key].DispStatus.ChangeAfterMember = false;
                member[key].DispStatus.ChangeAfterPisition = false;
                member[key].DispStatus.ChangeBeforePisition = true;
            }
        });
        return member;
    }

    /**
     * 一括選手交代（後）
     * @param before 交代前入力値
     * @param after 交代後入力値
     * @param member メンバー
     * @param defMember デフォルトメンバー
     * @param batRes 打席結果
     * @returns 
     */
    public ChangeAfterMemberBulk(before: InputVTeamModel, after: InputVTeamModel, member: ParticipationMemberPerTeamModel, defMember: DefaultMemberModel[], batRes: BattingResultPerTeamModel): [ParticipationMemberPerTeamModel, BattingResultPerTeamModel] {
        for (let i = 0; i < 10; i++) {
            const orderDH = this.orderKeysDH[i];
            if (before[orderDH].ID != after[orderDH].ID) {
                // 選手ごと
                member[orderDH].DispStatus.ChangeBeforePisition = false;
                member[orderDH].DispStatus.ChangeAfterPisition = false;
                member[orderDH].DispStatus.ChangeBeforeMember = false;
                member[orderDH].DispStatus.ChangeAfterMember = true;
                let afterMember = new DefaultMemberModel();
                defMember.forEach(x => {
                    if (x.Id == after[orderDH].ID) {
                        afterMember = x;
                    }
                });
                // ID
                member[orderDH].ID = afterMember.Id;
                // 背番号
                member[orderDH].Number = afterMember.Number;
                // 守備位置
                member[orderDH].Position = after[orderDH].Position;
                // 名前
                member[orderDH].Name = afterMember.Name;
                // フルネーム
                member[orderDH].FullName = afterMember.FullName;
                // 行番号
                member[orderDH].RowNumber = afterMember.RowNumber;

                // 投手以外の場合、打席結果作成
                if (i != 9) {
                    const order = this.orderKeys[i];
                    const pushItem = new BattingResultAtGameModel();

                    pushItem.ID = member[order].ID;
                    pushItem.Number = member[order].Number;
                    pushItem.Position = member[order].Position;
                    pushItem.Name = member[order].FullName;
                    batRes[order].push(pushItem);
                }
            } else if (before[orderDH].Position != after[orderDH].Position) {
                // 守備位置のみ
                member[orderDH].DispStatus.ChangeBeforeMember = false;
                member[orderDH].DispStatus.ChangeAfterMember = false;
                member[orderDH].DispStatus.ChangeBeforePisition = false;
                member[orderDH].DispStatus.ChangeAfterPisition = true;

                // 守備位置
                member[orderDH].Position = after[orderDH].Position;

                // 投手以外の場合、打席結果に守備位置追加
                if (i != 9) {
                    const order = this.orderKeys[i];
                    batRes[order][batRes[order].length - 1].Position = batRes[order][batRes[order].length - 1].Position + after[orderDH].Position;
                }
            }
        }
        return [member, batRes];
    }

    /**
     * 選手交代（前）
     * @param before 交代前入力値
     * @param after 交代後入力値
     * @param member メンバー
     * @returns 
     */
    public ChangeBeforeMember(before: InputVTeamModel, after: InputVTeamModel, member: ParticipationMemberPerTeamModel, index: number): ParticipationMemberPerTeamModel {
        const key = this.orderKeysDH[index];
        if (before[key].ID != after[key].ID) {
            // 選手ごと
            member[key].DispStatus.ChangeBeforePisition = false;
            member[key].DispStatus.ChangeAfterPisition = false;
            member[key].DispStatus.ChangeAfterMember = false;
            member[key].DispStatus.ChangeBeforeMember = true;
        } else if (before[key].Position != after[key].Position) {
            // 守備位置のみ
            member[key].DispStatus.ChangeBeforeMember = false;
            member[key].DispStatus.ChangeAfterMember = false;
            member[key].DispStatus.ChangeAfterPisition = false;
            member[key].DispStatus.ChangeBeforePisition = true;
        }
        return member;
    }

    /**
     * 選手交代（後）
     * @param before 交代前入力値
     * @param after 交代後入力値
     * @param member メンバー
     * @param defMember デフォルトメンバー
     * @param batRes 打席結果
     * @returns 
     */
    public ChangeAfterMember(
        before: InputVTeamModel,
        after: InputVTeamModel,
        member: ParticipationMemberPerTeamModel,
        defMember: DefaultMemberModel[],
        batRes: BattingResultPerTeamModel,
        pitcherInfo: PitcherInfoModel[],
        index: number,
        cancel: boolean): [ParticipationMemberPerTeamModel, BattingResultPerTeamModel, PitcherInfoModel[]] {
        const orderDH = this.orderKeysDH[index];
        const order = this.orderKeys[index];
        
        // フラグがTrueの場合、打席結果の末尾を消去（操作ミスの取消のため）
        if (cancel) {
            if (index < 9) {
                batRes[order].pop();
            } else {
                pitcherInfo.pop();
            }
        }

        if (before[orderDH].ID != after[orderDH].ID) {
            // 選手ごと交代
            // 既に同じIDの選手が存在するため、打席結果の作成を行わない
            let createBatResFlg = true;
            batRes[order].forEach(x => {
                if (x.ID == after[orderDH].ID) {
                    createBatResFlg = false;
                }
            });

            member[orderDH].DispStatus.ChangeBeforePisition = false;
            member[orderDH].DispStatus.ChangeAfterPisition = false;
            member[orderDH].DispStatus.ChangeBeforeMember = false;
            member[orderDH].DispStatus.ChangeAfterMember = true;
            let afterMember = new DefaultMemberModel();
            defMember.forEach(x => {
                if (x.Id == after[orderDH].ID) {
                    afterMember = x;
                }
            });
            // ID
            member[orderDH].ID = afterMember.Id;
            // 背番号
            member[orderDH].Number = afterMember.Number;
            // 守備位置
            member[orderDH].Position = after[orderDH].Position;
            // 名前
            member[orderDH].Name = afterMember.Name;
            // フルネーム
            member[orderDH].FullName = afterMember.FullName;
            // 行番号
            member[orderDH].RowNumber = afterMember.RowNumber;

            // 投手以外のかつ打席結果作成フラグがTrueの場合、打席結果作成
            if (index < 9 && createBatResFlg) {
                const pushItem = new BattingResultAtGameModel();

                pushItem.ID = member[order].ID;
                pushItem.Number = member[order].Number;
                pushItem.Position = member[order].Position;
                pushItem.Name = member[order].FullName;
                batRes[order].push(pushItem);
            }
        } else if (before[orderDH].Position != after[orderDH].Position) {
            // 守備位置のみ
            member[orderDH].DispStatus.ChangeBeforeMember = false;
            member[orderDH].DispStatus.ChangeAfterMember = false;
            member[orderDH].DispStatus.ChangeBeforePisition = false;
            member[orderDH].DispStatus.ChangeAfterPisition = true;

            // 守備位置
            member[orderDH].Position = after[orderDH].Position;

            // 投手以外の場合、打席結果に守備位置追加
            if (index < 9) {
                batRes[order][batRes[order].length - 1].Position = batRes[order][batRes[order].length - 1].Position + after[orderDH].Position;
            }
        }
        return [member, batRes, pitcherInfo];
    }

    /**
     * 試合終了時メンバー初期化
     * @param visitor 
     * @param home 
     * @returns 
     */
    public InitMemberDataGameSet(visitor: ParticipationMemberPerTeamModel, home: ParticipationMemberPerTeamModel): [ParticipationMemberPerTeamModel, ParticipationMemberPerTeamModel] {
        const newDispStatus = new ParticipationMemberDispStatus();
        newDispStatus.Basic = true;

        this.orderKeysDH.forEach(x => {
            visitor[x].DispStatus = newDispStatus;
            home[x].DispStatus = newDispStatus;
        });

        return [visitor, home];
    }

    /**
     * 打率計算
     * @param atBat 打数
     * @param hit 安打
     * @returns 
     */
    public CalcAvg(atBat: number, hit: number): string {
        let res = '';

        if (atBat == 0) {
            res = '---';
        } else {
            const calcRes = hit / atBat;
            if (calcRes == 1) {
                res = '1.00';
            } else {
                res = (Math.round(calcRes * 1000) / 1000).toFixed(3).toString().slice(1);
            }
        }

        return res;
    }

    /**
     * 塁打計算
     * @param hit 
     * @param double 
     * @param triple 
     * @param homeRun 
     * @returns 
     */
    public CalcTotalBases(hit: number, double: number, triple: number, homeRun: number): number {
        const res = ((hit - double - triple - homeRun) * 1 + double * 2 + triple * 3 + homeRun * 4);
        return res;
    }

    /**
     * 出塁率計算
     * @param stats 
     * @returns 
     */
    public CalcOBP(stats: BatterStatsModel): string {
        let res = '';
        const a = stats.Hit + stats.BB + stats.HBP;
        const b = stats.Atbat + stats.BB + stats.HBP + stats.SacFly;

        if (a == 0) {
            res = '---';
        } else {
            const calcRes = a / b;
            if (calcRes == 1) {
                res = '1.00';
            } else {
                res = (Math.round(calcRes * 1000) / 1000).toFixed(3).toString().slice(1);
            }
        }

        return res;
    }

    /**
     * OPS計算
     * @param stats 
     * @returns 
     */
    public CalcOPS(stats: BatterStatsModel): string {
        let res = '';

        const a = stats.Hit + stats.BB + stats.HBP;
        const b = stats.Atbat + stats.BB + stats.HBP + stats.SacFly;

        if (a == 0) {
            res = '---';
        } else {
            // 出塁率
            const obp = Math.round((a / b) * 1000) / 1000;
            // 長打率
            let slg = 0;
            if (stats.Atbat > 0) {
                slg = Math.round((stats.TotalBases / stats.Atbat) * 1000) / 1000;
            }
            // 合計
            const calcRes = obp + slg;
            res = calcRes.toFixed(3).toString();

            if (calcRes < 1) {
                // 1.000未満の場合先頭の0を除外
                res = res.slice(1);
            }
        }

        return res;
    }

    /**
     * RC27計算
     * @param stats 
     * @returns 
     */
    public CalcRC27(stats: BatterStatsModel): string {
        if (stats.Atbat == 0) {
            return '-';
        }

        let res = '';
        // 出塁能力A
        const a = stats.Hit + stats.BB + stats.HBP - stats.CS - stats.DP;
        // 進塁能力B
        const b = stats.TotalBases + 0.26 * (stats.BB + stats.HBP) + 0.53 * (stats.SacFly + stats.SacBunt) + 0.64 * stats.SB - 0.03 * stats.SO;
        // 出塁機会C
        const c = stats.Atbat + stats.BB + stats.HBP + stats.SacFly + stats.SacBunt;
        // RC
        const rc = (((a + 2.4 * c) * (b + 3 * c)) / (9 * c)) - 0.9 * c;
        // TO
        const to = stats.Atbat - stats.Hit + stats.SacBunt + stats.SacFly + stats.CS + stats.DP;

        if (c == 0 || to == 0) {
            return '-';
        }

        // RC27
        const rc27 = (27 * rc) / to;
        // 小数第3位四捨五入
        res = (Math.round(rc27 * 100) / 100).toFixed(2).toString();

        return res;
    }
        
    /**
     * 半角チェック
     * @param str 
     */
    public checkHalfWidth(str: string): boolean {
        let res = false;
        const reg = new RegExp(/^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/);
    
        if (str) {
            if (reg.test(str)) {
                res = true;
            }
        }
    
        return res;
    }
  
    /**
     * text-align-last決定
     * @param text テキスト
     */
    public decisionTextAlignLastJustify(text: string): boolean {
        let returnData = true;
        const reg = new RegExp(/^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/);
        // 半角英数か1文字の場合、中央
        if (text) {
            if (reg.test(text) || text.length === 1) {
                returnData = false;
            }
        }
        return returnData;
    }
}