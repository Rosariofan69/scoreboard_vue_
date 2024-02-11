/**
 * デザインのモデル
 */
export class DesignModel {
    VisitorMember: MemberDesignModel = new MemberDesignModel();
    HomeMember: MemberDesignModel = new MemberDesignModel();
    FielderStats: FielderStatsDesignSendModel = new FielderStatsDesignSendModel();
    Position: PositionDesignSendModel = new PositionDesignSendModel();
    PitcherStats: PitcherStatsDesignSendModel = new PitcherStatsDesignSendModel();
    Score: ScoreDesignModel = new ScoreDesignModel();
    BackGroundColor: string;
    Umpire: UmpireDesignModel = new UmpireDesignModel();
}

/**
 * メンバーのデザインモデル
 */
export class MemberDesignModel {
    /** チーム名（メンバー） - 文字 */
    TeamNameText: string;
    /** チーム名（メンバー） - 背景 */
    TeamNameBGC: string;
    /** 下線 */
    UnderLine: string;
    /** 斜線 */
    DiagonalLine: string;
    /** 上線 */
    UpperLine: string;
    /** 守備位置（標準） - 文字 */
    PositionBasicText: string;
    /** 守備位置（標準） - 背景 */
    PositionBasicBGC: string;
    /** 名前（標準） - 文字 */
    NameBasicText: string;
    /** 名前（標準） - 背景 */
    NameBasicBGC: string;
    /** 守備位置（打者） - 文字 */
    PositionBatterText: string;
    /** 守備位置（打者） - 背景 */
    PositionBatterBGC: string;
    /** 名前（打者） - 文字 */
    NameBatterText: string;
    /** 名前（打者） - 背景 */
    NameBatterBGC: string;
    /** 守備位置（走者） - 文字 */
    PositionRunnerText: string;
    /** 守備位置（走者） - 背景 */
    PositionRunnerBGC: string;
    /** 名前（走者） - 文字 */
    NameRunnerText: string;
    /** 名前（走者） - 背景 */
    NameRunnerBGC: string;
    /** 守備位置（次回先頭） - 文字 */
    PositionNextText: string;
    /** 守備位置（次回先頭） - 背景 */
    PositionNextBGC: string;
    /** 名前（次回先頭） - 文字 */
    NameNextText: string;
    /** 名前（次回先頭） - 背景 */
    NameNextBGC: string;
    /** 交代時 */
    Change: string;
}

/**
 * 野手成績の送信用デザインモデル
 */
export class FielderStatsDesignSendModel {
    /** ビジター */
    Visitor: FielderStatsDesignModel = new FielderStatsDesignModel();
    /** ホーム */
    Home: FielderStatsDesignModel = new FielderStatsDesignModel();
}

/**
 * 野手成績のデザインモデル
 */
export class FielderStatsDesignModel {
    /** 文字 */
    Text: string;
    /** 背景 */
    BGC: string;
}

/**
 * ポジション（守備表示）の送信用デザインモデル
 */
export class PositionDesignSendModel {
    /** ビジター */
    Visitor: PositionDesignModel = new PositionDesignModel();
    /** ホーム */
    Home: PositionDesignModel = new PositionDesignModel();
}

/**
 * ポジション（守備表示）のデザインモデル
 */
export class PositionDesignModel {
    /** 野手 - 文字 */
    FielderText: string;
    /** 野手 - 背景 */
    FielderBGC: string;
    /** 走者 - 文字 */
    RunnerText: string;
    /** 走者 - 背景 */
    RunnerBGC: string;
}

/**
 * 投手成績の送信用デザインモデル
 */
export class PitcherStatsDesignSendModel {
    /** ビジター */
    Visitor: PitcherStatsDesignModel = new PitcherStatsDesignModel();
    /** ホーム */
    Home: PitcherStatsDesignModel = new PitcherStatsDesignModel();
}

/**
 * 投手成績のデザインモデル
 */
export class PitcherStatsDesignModel {
    /** 文字 */
    Text: string;
    /** 背景 */
    BGC: string;
}

/**
 * スコアのデザインモデル
 */
export class ScoreDesignModel {
    /** ビジターチーム名 - 文字 */
    VisitorTeamNameText: string;
    /** ビジターチーム名 - 背景 */
    VisitorTeamNameBGC: string;
    /** ホームチーム名 - 文字 */
    HomeTeamNameText: string;
    /** ホームチーム名 - 背景 */
    HomeTeamNameBGC: string;
    /** スコア（奇数回） - 文字 */
    ScoreOddText: string;
    /** スコア（奇数回） - 背景 */
    ScoreOddBGC: string;
    /** スコア（奇数回） - 文字 */
    ScoreEvenText: string;
    /** スコア（奇数回） - 背景 */
    ScoreEvenBGC: string;
    /** スコア（R） - 文字 */
    ScoreRunText: string;
    /** スコア（R） - 背景 */
    ScoreRunBGC: string;
    /** スコアタイトル（R以外） - 文字 */
    ScoreTitleText: string;
    /** スコアタイトル（R以外） - 背景 */
    ScoreTitleBGC: string;
    /** スコアタイトル（R） - 文字 */
    ScoreTitleRunText: string;
    /** スコアタイトル（R） - 背景 */
    ScoreTitleRunBGC: string;
    /** スコア枠 */
    ScoreFrame: string;
    /** その他の枠 */
    OtherFrame: string;
}

/**
 * 審判のデザインモデル
 */
export class UmpireDesignModel {
    /** 位置 - 文字 */
    PositionText: string;
    /** 位置 - 背景 */
    PositionBGC: string;
    /** 名前 - 文字 */
    NameText: string;
    /** 名前 - 背景 */
    NameBGC: string;
}