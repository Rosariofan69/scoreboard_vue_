import { GameInfoModel } from './model/game-model';
import { VisiterHomeDivision } from './constant';
import { ExcelController } from './excel-controller';
import { DefaultMemberModel, ParticipationMemberPerTeamModel, InputVModelTeam, InputVModel } from './model/member-info-model';

/**
 * メンバー関連のコントローラークラス
 */
export class MemberController {
    /**
     * メンバー初期情報取得
     * @returns メンバー初期情報
     */
    public async GetMemberInfo(getDivision: number, gameInfo: GameInfoModel): Promise<any> {
        const excelController = new ExcelController();
        // データ取得
        const responseData = await excelController.GetMember(getDivision, gameInfo);
        // 戻り値
        const returnData: DefaultMemberModel[] = responseData;
        return returnData;
    }

    public GetBulkParticipationMemberData(memberModel: ParticipationMemberPerTeamModel, input: InputVModelTeam, defMemberList: DefaultMemberModel[]): ParticipationMemberPerTeamModel {
        let returnData = new ParticipationMemberPerTeamModel;
        const myKeys = ['LeadOff', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Pitcher'] as const;

        myKeys.forEach((key) => {
            const item = defMemberList.find(x => x.Id.toString() == input[key].Number ) ?? new DefaultMemberModel();
            memberModel[key].Position = input[key].Position;
            memberModel[key].Number = input[key].Number;
            memberModel[key].Name = item.Name;
            memberModel[key].DispStatus.Display = true;
        });
        
        returnData = memberModel;
        return returnData;
    }
}