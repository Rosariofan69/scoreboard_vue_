import { VisiterDesignDivision, HomeDesignDivision, ScoreDesignDivision, UmpireDesignDivision } from './constant';
import { DesignModel, 
         MemberDesignModel,
         FielderStatsDesignModel,
         FielderStatsDesignSendModel,
         PositionDesignModel,
         PositionDesignSendModel,
         PitcherStatsDesignModel,
         PitcherStatsDesignSendModel,
         ScoreDesignModel,
         UmpireDesignModel
} from './model/design-model';
import { ExcelController } from './excel-controller';

export class DesignController {
    /**
     * デザイン取得
     * @returns デザインモデル
     */
    public async GetDesign(): Promise<DesignModel> {
        const excelController = new ExcelController();
        // データ取得
        const responseData = await excelController.GetDesign();
        // 戻り値
        const returnData: DesignModel = new DesignModel();

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
        returnData.BackGroundColor = responseData[ScoreDesignDivision.BackGround];
        // 審判
        returnData.Umpire = this.extractUmpireDesign(responseData);

        // 返却
        return returnData;
    }

    /**
     * ビジターメンバーデザイン抽出
     * @param obj APIから取得したデータオブジェクト
     * @returns 抽出結果
     */
    private extractVisiterMemberDisign(obj: any): MemberDesignModel {
        const returnData: MemberDesignModel = new MemberDesignModel();

        // チーム名
        returnData.TeamNameText = obj[VisiterDesignDivision.TeamNameMemberText];
        returnData.TeamNameBGC = obj[VisiterDesignDivision.TeamNameMemberBGC];
        // 下線
        returnData.UnderLine = obj[VisiterDesignDivision.UnderLine];
        // 斜線
        returnData.DiagonalLine = obj[VisiterDesignDivision.DiagonalLine];
        // 上線
        returnData.UpperLine = obj[VisiterDesignDivision.UpperLine];
        // 標準
        returnData.PositionBasicText = obj[VisiterDesignDivision.PositionBasicText];
        returnData.PositionBasicBGC = obj[VisiterDesignDivision.PositionBasicBGC];
        returnData.NameBasicText = obj[VisiterDesignDivision.NameBasicText];
        returnData.NameBasicBGC = obj[VisiterDesignDivision.NameBasicBGC];
        // 打者
        returnData.PositionBatterText = obj[VisiterDesignDivision.PositionBatterText];
        returnData.PositionBatterBGC = obj[VisiterDesignDivision.PositionBatterBGC];
        returnData.NameBatterText = obj[VisiterDesignDivision.NameBatterText];
        returnData.NameBatterBGC = obj[VisiterDesignDivision.NameBatterBGC];
        // 走者
        returnData.PositionRunnerText = obj[VisiterDesignDivision.PositionRunnerText];
        returnData.PositionRunnerBGC = obj[VisiterDesignDivision.PositionRunnerBGC];
        returnData.NameRunnerText = obj[VisiterDesignDivision.NameRunnerText];
        returnData.NameRunnerBGC = obj[VisiterDesignDivision.NameRunnerBGC];
        // 次回先頭
        returnData.PositionNextText = obj[VisiterDesignDivision.PositionNextText];
        returnData.PositionNextBGC = obj[VisiterDesignDivision.PositionNextBGC];
        returnData.NameNextText = obj[VisiterDesignDivision.NameNextText];
        returnData.NameNextBGC = obj[VisiterDesignDivision.NameNextBGC];
        // 交代時
        returnData.Change = obj[VisiterDesignDivision.Change];

        // 返却
        return returnData;
    }

    /**
     * ホームメンバーデザイン抽出
     * @param obj APIから取得したデータオブジェクト
     * @returns 抽出結果
     */
    private extractHomeMemberDesign(obj: any): MemberDesignModel {
        const returnData: MemberDesignModel = new MemberDesignModel();

        // チーム名
        returnData.TeamNameText = obj[HomeDesignDivision.TeamNameMemberText];
        returnData.TeamNameBGC = obj[HomeDesignDivision.TeamNameMemberBGC];
        // 下線
        returnData.UnderLine = obj[HomeDesignDivision.UnderLine];
        // 斜線
        returnData.DiagonalLine = obj[HomeDesignDivision.DiagonalLine];
        // 上線
        returnData.UpperLine = obj[HomeDesignDivision.UpperLine];
        // 標準
        returnData.PositionBasicText = obj[HomeDesignDivision.PositionBasicText];
        returnData.PositionBasicBGC = obj[HomeDesignDivision.PositionBasicBGC];
        returnData.NameBasicText = obj[HomeDesignDivision.NameBasicText];
        returnData.NameBasicBGC = obj[HomeDesignDivision.NameBasicBGC];
        // 打者
        returnData.PositionBatterText = obj[HomeDesignDivision.PositionBatterText];
        returnData.PositionBatterBGC = obj[HomeDesignDivision.PositionBatterBGC];
        returnData.NameBatterText = obj[HomeDesignDivision.NameBatterText];
        returnData.NameBatterBGC = obj[HomeDesignDivision.NameBatterBGC];
        // 走者
        returnData.PositionRunnerText = obj[HomeDesignDivision.PositionRunnerText];
        returnData.PositionRunnerBGC = obj[HomeDesignDivision.PositionRunnerBGC];
        returnData.NameRunnerText = obj[HomeDesignDivision.NameRunnerText];
        returnData.NameRunnerBGC = obj[HomeDesignDivision.NameRunnerBGC];
        // 次回先頭
        returnData.PositionNextText = obj[HomeDesignDivision.PositionNextText];
        returnData.PositionNextBGC = obj[HomeDesignDivision.PositionNextBGC];
        returnData.NameNextText = obj[HomeDesignDivision.NameNextText];
        returnData.NameNextBGC = obj[HomeDesignDivision.NameNextBGC];
        // 交代時
        returnData.Change = obj[HomeDesignDivision.Change];

        // 返却
        return returnData;
    }
    
    /**
     * 野手成績デザイン抽出
     * @param obj APIから取得したデータオブジェクト
     * @returns 抽出結果
     */
    private extractFielderStatsDesign(obj: any): FielderStatsDesignSendModel {
        const returnData: FielderStatsDesignSendModel = new FielderStatsDesignSendModel();

        // ビジター野手成績
        const visiter: FielderStatsDesignModel = new FielderStatsDesignModel();
        // 文字
        visiter.Text = obj[VisiterDesignDivision.FielderStatsText];
        // 背景
        visiter.BGC = obj[VisiterDesignDivision.DispPositionFielderBGC];
        returnData.Visiter = visiter;

        // ホーム野手成績
        const home: FielderStatsDesignModel = new FielderStatsDesignModel();
        // 文字
        home.Text = obj[HomeDesignDivision.FielderStatsText];
        // 背景
        home.BGC = obj[HomeDesignDivision.DispPositionFielderBGC];
        returnData.Home = home;

        // 返却
        return returnData;
    }

    /**
     * 守備表示デザイン抽出
     * @param obj APIから取得したデータオブジェクト
     * @returns 抽出結果
     */
    private extractPosition(obj: any): PositionDesignSendModel {
        const returnData: PositionDesignSendModel = new PositionDesignSendModel();

        // ビジター守備表示
        const visiter: PositionDesignModel = new PositionDesignModel();
        // 野手
        visiter.FielderText = obj[VisiterDesignDivision.DispPositionFielderText];
        visiter.FielderBGC = obj[VisiterDesignDivision.DispPositionFielderBGC];
        // 走者
        visiter.RunnerText = obj[VisiterDesignDivision.DispPositionRunnerText];
        visiter.RunnerBGC = obj[VisiterDesignDivision.DispPositionRunnerBGC];
        returnData.Visiter = visiter;

        // ホーム守備表示
        const home: PositionDesignModel = new PositionDesignModel();
        // 野手
        home.FielderText = obj[HomeDesignDivision.DispPositionFielderText];
        home.FielderBGC = obj[HomeDesignDivision.DispPositionFielderBGC];
        // 走者
        home.RunnerText = obj[HomeDesignDivision.DispPositionRunnerText];
        home.RunnerBGC = obj[HomeDesignDivision.DispPositionRunnerBGC];
        returnData.Home = home;

        // 返却
        return returnData;
    }

    /**
     * 投手成績デザイン抽出
     * @param obj APIから取得したデータオブジェクト
     * @returns 抽出結果
     */
    private extractPitcherStats(obj: any): PitcherStatsDesignSendModel {
        const returnData: PitcherStatsDesignSendModel = new PitcherStatsDesignSendModel();

        // ビジター投手成績
        const visiter: PitcherStatsDesignModel = new PitcherStatsDesignModel();
        // 文字
        visiter.Text = obj[VisiterDesignDivision.PitcherStatsText];
        // 背景
        visiter.BGC = obj[VisiterDesignDivision.PitcherStatsBGC];
        returnData.Visiter = visiter;

        // ホーム投手成績
        const home: PitcherStatsDesignModel = new PitcherStatsDesignModel();
        // 文字
        home.Text = obj[HomeDesignDivision.PitcherStatsText];
        // 背景
        home.BGC = obj[HomeDesignDivision.PitcherStatsBGC];
        returnData.Home = home;

        // 返却
        return returnData;
    }

    /**
     * スコアデザイン抽出
     * @param obj APIから取得したデータオブジェクト
     * @returns 抽出結果
     */
    private extractScoreDesign(obj: any): ScoreDesignModel {
        const returnData: ScoreDesignModel = new ScoreDesignModel();

        // ビジターチーム名
        returnData.VisiterTeamNameText = obj[VisiterDesignDivision.TeamNameScoreText];
        returnData.VisiterTeamNameBGC = obj[VisiterDesignDivision.TeamNameScoreBGC];
        // ホームチーム名
        returnData.HomeTeamNameText = obj[HomeDesignDivision.TeamNameScoreText];
        returnData.HomeTeamNameBGC = obj[HomeDesignDivision.TeamNameScoreBGC];
        // 奇数回
        returnData.ScoreOddText = obj[ScoreDesignDivision.ScoreOddText];
        returnData.ScoreOddBGC = obj[ScoreDesignDivision.ScoreOddBGC];
        // 偶数回
        returnData.ScoreEvenText = obj[ScoreDesignDivision.ScoreEvenText];
        returnData.ScoreEvenBGC = obj[ScoreDesignDivision.ScoreEvenBGC];
        // R
        returnData.ScoreRunText = obj[ScoreDesignDivision.ScoreRunText];
        returnData.ScoreRunBGC = obj[ScoreDesignDivision.ScoreRunBGC];
        // スコアタイトル（R以外）
        returnData.ScoreTitleText = obj[ScoreDesignDivision.ScoreTitleText];
        returnData.ScoreTitleBGC = obj[ScoreDesignDivision.ScoreTitleBGC];
        // スコアタイトル（R）
        returnData.ScoreTitleRunText = obj[ScoreDesignDivision.ScoreTitleRunText];
        returnData.ScoreTitleRunBGC = obj[ScoreDesignDivision.ScoreTitleRunBGC];
        // スコア枠
        returnData.ScoreFrame = obj[ScoreDesignDivision.ScoreFrame];
        // その他の枠
        returnData.OtherFrame = obj[ScoreDesignDivision.OtherFrame];

        // 返却
        return returnData;
    }

    /**
     * 審判デザイン抽出
     * @param obj APIから取得したデータオブジェクト
     * @returns 抽出結果
     */
    private extractUmpireDesign(obj: any): UmpireDesignModel {
        const returnData: UmpireDesignModel = new UmpireDesignModel();

        // 位置
        returnData.PositionText = obj[UmpireDesignDivision.PositionText];
        returnData.PositionBGC = obj[UmpireDesignDivision.PositionBGC];
        // 名前
        returnData.NameText = obj[UmpireDesignDivision.NameText];
        returnData.NameBGC = obj[UmpireDesignDivision.NameBGC];

        // 返却
        return returnData;
    }
}