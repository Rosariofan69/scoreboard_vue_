import { VisiterHomeDivision } from './constant';
import { GameInfoModel } from './model/game-model';
/**
 * Excel関連のコントローラークラス
 */
export class ExcelController {
    /**
     * メイン情報取得
     */
    async GetMainInfo(): Promise<any> {
        const response = await fetch('/getMainInfo', {
            mode: 'cors',
            method: 'GET'
        }).then(res => res.json());

        return response;
    }

    /**
     * デザイン取得
     */
    async GetDesign(): Promise<any> {
        const response = await fetch('/getDesign', {
            mode: 'cors',
            method: 'GET'
        }).then(res => res.json());

        return response;
    }

    /**
     * 選手情報取得
     * @param getDivision ビジターorホーム
     * @param gameInfo 試合情報
     * @returns 選手情報
     */
    async GetMember(getDivision: number, gameInfo: GameInfoModel): Promise<any> {
        let params;
        if (getDivision === VisiterHomeDivision.Visiter) {
            params = {
                Team: gameInfo.GameBaseInfo.VisiterTeamName,
                LastRow: gameInfo.GameBaseInfo.VisiterLastRow.toString()
            }
        } else if (getDivision === VisiterHomeDivision.Home) {
            params = {
                Team: gameInfo.GameBaseInfo.HomeTeamName,
                LastRow: gameInfo.GameBaseInfo.HomeLastRow.toString()
            }
        }
        const param = new URLSearchParams(params);

        const url = `/getMember?${param}`;
        const response = await fetch(url, {
            mode: 'cors',
            method: 'GET',
        }).then(res => res.json());

        return response;
    }

    /**
     * 成績取得
     * @param rowNumber 
     * @param teamName 
     */
    async GetStats(rowNumber: number, teamName: string): Promise<any> {
        const params = {
            Row: String(rowNumber),
            Team: teamName
        }
        const param = new URLSearchParams(params);

        const url = `/getBatterStats?${param}`;
        const response = await fetch(url, {
            mode: 'cors',
            method: 'GET',
        }).then(res => res.json());

        return response;
    }
}