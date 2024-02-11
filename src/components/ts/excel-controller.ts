import { BatterStatsUpdateModel } from './model/member-info-model';
import { VisitorHomeDivision } from './constant';
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
        if (getDivision === VisitorHomeDivision.Visitor) {
            params = {
                Team: gameInfo.GameBaseInfo.VisitorTeamName,
                LastRow: gameInfo.GameBaseInfo.VisitorLastRow.toString()
            }
        } else if (getDivision === VisitorHomeDivision.Home) {
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

    /**
     * 成績更新
     * @param rowNumber 
     * @param teamName 
     * @returns 
     */
    async UpdateStats(rowNumber: number, teamName: string, postData: BatterStatsUpdateModel): Promise<any> {
        const params = {
            Row: String(rowNumber),
            Team: teamName,
            PlusData: postData
        }

        const url = '/updateBatterStats';
        const response = await fetch(url, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json());

        return response;
    }
}