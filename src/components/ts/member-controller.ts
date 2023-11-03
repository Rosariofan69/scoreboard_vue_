import { GameInfoModel } from './model/game-model';
import { VisiterHomeDivision } from './constant';
import { ExcelController } from './excel-controller';
import { DefaultMemberModel, ParticipationMemberPerTeamModel, InputVTeamModel, BattingResultPerTeamModel, BattingResultAtGameModel, PitcherInfoModel, PositionModel, BatterStatsModel, ParticipationMemberModel } from './model/member-info-model';

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
            const item = defMemberList.find(x => x.Id.toString() == input[key].Number ) ?? new DefaultMemberModel();
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
    public SetBattingResultGameStart(visiterMember: ParticipationMemberPerTeamModel, homeMember: ParticipationMemberPerTeamModel)
        : [BattingResultPerTeamModel, BattingResultPerTeamModel] {
        const returnVisiterData = new BattingResultPerTeamModel;
        const returnHomeData = new BattingResultPerTeamModel;

        for (let i = 0; i < 9; i++) {
            // ビジター
            const itemVisiter = new BattingResultAtGameModel();
            itemVisiter.Number = visiterMember[this.orderKeysDH[i]].Number;
            itemVisiter.Position = visiterMember[this.orderKeysDH[i]].Position;
            itemVisiter.Name = visiterMember[this.orderKeysDH[i]].FullName;
            returnVisiterData[this.orderKeys[i]].push(itemVisiter);

            // ホーム
            const itemHome = new BattingResultAtGameModel();
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
    public SetPitcherInfo(member: ParticipationMemberPerTeamModel): PitcherInfoModel[] {
        const returnData: PitcherInfoModel[] = [];

        for (let i = 0; i < 10; i++) {
            if (member[this.orderKeysDH[i]].Position == '1') {
                const pushData = new PitcherInfoModel();
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
    public GetPitcherInfo(member: ParticipationMemberPerTeamModel, dataList: PitcherInfoModel[]): PitcherInfoModel {
        let number = '';

        for (let i = 0; i < 10; i++) {
            if (member[this.orderKeysDH[i]].Position == '1') {
                number = member[this.orderKeysDH[i]].Number;
                break;
            }
        }

        const returnData = dataList.find(x => x.Number == number) ?? new PitcherInfoModel();

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
    public async GetBatterStats(member: ParticipationMemberPerTeamModel, gameInfo: GameInfoModel): Promise<any> {
        const excelController = new ExcelController();

        let row: number;
        let team: string;

        if (gameInfo.GameProgressInfo.NowAttackTeam == VisiterHomeDivision.Visiter) {
            team = gameInfo.GameBaseInfo.VisiterTeamName;
        } else {
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
        const responseData = await excelController.GetStats(row, team);
        // 戻り値
        const returnData: BatterStatsModel = responseData;
        return returnData;
    }

    /**
     * 投手情報保存
     * @param pitcherInfoList 
     * @param pitcherInfo 
     */
    public KeepPitcherInfo(pitcherInfoList: PitcherInfoModel[], pitcherInfo: PitcherInfoModel): PitcherInfoModel[] {
        pitcherInfoList.forEach(x => {
            if (x.Number == pitcherInfo.Number) {
                x = pitcherInfo;
            }
        });

        return pitcherInfoList;
    }

    /**
     * 攻守交代時メンバー編集
     * @param visiter 
     * @param home 
     * @param gameInfo 
     */
    public ChangeAttackEditMember(visiter: ParticipationMemberPerTeamModel, home: ParticipationMemberPerTeamModel): [ParticipationMemberPerTeamModel, ParticipationMemberPerTeamModel] {
        this.orderKeys.forEach(x => {
            // ビジター
            if (visiter[x].DispStatus.Batter) {
                visiter[x].DispStatus.Batter = false;
                visiter[x].DispStatus.NextRead = true;
            }
            if (visiter[x].DispStatus.NextRead) {
                visiter[x].DispStatus.NextRead = false;
                visiter[x].DispStatus.Batter = true;
            }
            // ホーム
            if (home[x].DispStatus.Batter) {
                home[x].DispStatus.Batter = false;
                home[x].DispStatus.NextRead = true;
            }
            if (home[x].DispStatus.NextRead) {
                home[x].DispStatus.NextRead = false;
                home[x].DispStatus.Batter = true;
            }
        })

        return [visiter, home];
    }
}