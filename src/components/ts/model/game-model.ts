export class GameInfoModel {
    /** 試合基底情報 */
    GameBaseInfo: GameBaseInfoModel = new GameBaseInfoModel();
    /** 試合進行中情報 */
    GameProgressInfo: GameProgressInfoModel = new GameProgressInfoModel();
}

export class GameBaseInfoModel {
    /** ビジターチーム名 */
    VisiterTeamName: string;
    /** ビジターチームテキスト */
    VisiterTeamText: string;
    /** ビジター最終行 */
    VisiterLastRow: number;
    /** ホームチーム名 */
    HomeTeamName: string;
    /** ホームチームテキスト */
    HomeTeamText: string;
    /** ホーム最終行 */
    HomeLastRow: number;
    /** イニング上限 */
    InningLimit: number;
    /** 成績加算 */
    StatsAddition: boolean;
    /** ホーム位置 */
    HomePosition: number;
}

/**
 * 試合進行中情報
 */
export class GameProgressInfoModel {
    /** 試合開始成否 */
    IsStarted: boolean;
    /** イニング上限 */
    InningLimit: number;
    /** 現在のイニング */
    NowInning: number
    /** 攻撃中チーム */
    NowAttackTeam: number;
}
