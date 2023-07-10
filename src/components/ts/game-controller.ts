import { GameInfoDivision } from './constant';
import { GameInfoModel } from './model/game-model';
import { ExcelController } from './excel-controller';
/**
 * 試合関連のコントローラークラス
 */
export class GameController {
    /**
     * メンバー初期情報取得
     * @returns メンバー初期情報
     */
    public async GetMemberInfo(): Promise<any> {
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
}