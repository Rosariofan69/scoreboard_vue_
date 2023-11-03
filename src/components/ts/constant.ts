/**
 * デザイン区分（ビジター）
 */
export enum VisiterDesignDivision {
    /** チーム名（メンバー） - 文字 */
    TeamNameMemberText,
    /** チーム名（メンバー） - 背景 */
    TeamNameMemberBGC,
    /** チーム名（スコア） - 文字 */
    TeamNameScoreText,
    /** チーム名（スコア） - 背景 */
    TeamNameScoreBGC,
    /** 下線 */
    UnderLine,
    /** 斜線 */
    DiagonalLine,
    /** 上線 */
    UpperLine,
    /** 守備位置（標準） - 文字 */
    PositionBasicText,
    /** 守備位置（標準） - 背景 */
    PositionBasicBGC,
    /** 名前（標準） - 文字 */
    NameBasicText,
    /** 名前（標準） - 背景 */
    NameBasicBGC,
    /** 守備位置（打者） - 文字 */
    PositionBatterText,
    /** 守備位置（打者） - 背景 */
    PositionBatterBGC,
    /** 名前（打者） - 文字 */
    NameBatterText,
    /** 名前（打者） - 背景 */
    NameBatterBGC,
    /** 守備位置（走者） - 文字 */
    PositionRunnerText,
    /** 守備位置（走者） - 背景 */
    PositionRunnerBGC,
    /** 名前（走者） - 文字 */
    NameRunnerText,
    /** 名前（走者） - 背景 */
    NameRunnerBGC,
    /** 守備位置（次回先頭） - 文字 */
    PositionNextText,
    /** 守備位置（次回先頭） - 背景 */
    PositionNextBGC,
    /** 名前（次回先頭） - 文字 */
    NameNextText,
    /** 名前（次回先頭） - 背景 */
    NameNextBGC,
    /** 野手成績 - 文字 */
    FielderStatsText,
    /** 野手成績 - 背景 */
    FielderStatsBGC,
    /** 守備表示（野手） - 文字 */
    DispPositionFielderText,
    /** 守備表示（野手） - 背景 */
    DispPositionFielderBGC,
    /** 守備表示（走者） - 文字 */
    DispPositionRunnerText,
    /** 守備表示（走者） - 背景 */
    DispPositionRunnerBGC,
    /** 投手成績 - 文字 */
    PitcherStatsText,
    /** 投手成績 - 背景 */
    PitcherStatsBGC,
    /** 交代時 */
    Change,
}

/**
 * デザイン区分（ホーム）
 */
export enum HomeDesignDivision {
    /** チーム名（メンバー） - 文字 */
    TeamNameMemberText = 32,
    /** チーム名（メンバー） - 背景 */
    TeamNameMemberBGC,
    /** チーム名（スコア） - 文字 */
    TeamNameScoreText,
    /** チーム名（スコア） - 背景 */
    TeamNameScoreBGC,
    /** 下線 */
    UnderLine,
    /** 斜線 */
    DiagonalLine,
    /** 上線 */
    UpperLine,
    /** 守備位置（標準） - 文字 */
    PositionBasicText,
    /** 守備位置（標準） - 背景 */
    PositionBasicBGC,
    /** 名前（標準） - 文字 */
    NameBasicText,
    /** 名前（標準） - 背景 */
    NameBasicBGC,
    /** 守備位置（打者） - 文字 */
    PositionBatterText,
    /** 守備位置（打者） - 背景 */
    PositionBatterBGC,
    /** 名前（打者） - 文字 */
    NameBatterText,
    /** 名前（打者） - 背景 */
    NameBatterBGC,
    /** 守備位置（走者） - 文字 */
    PositionRunnerText,
    /** 守備位置（走者） - 背景 */
    PositionRunnerBGC,
    /** 名前（走者） - 文字 */
    NameRunnerText,
    /** 名前（走者） - 背景 */
    NameRunnerBGC,
    /** 守備位置（次回先頭） - 文字 */
    PositionNextText,
    /** 守備位置（次回先頭） - 背景 */
    PositionNextBGC,
    /** 名前（次回先頭） - 文字 */
    NameNextText,
    /** 名前（次回先頭） - 背景 */
    NameNextBGC,
    /** 野手成績 - 文字 */
    FielderStatsText,
    /** 野手成績 - 背景 */
    FielderStatsBGC,
    /** 守備表示（野手） - 文字 */
    DispPositionFielderText,
    /** 守備表示（野手） - 背景 */
    DispPositionFielderBGC,
    /** 守備表示（走者） - 文字 */
    DispPositionRunnerText,
    /** 守備表示（走者） - 背景 */
    DispPositionRunnerBGC,
    /** 投手成績 - 文字 */
    PitcherStatsText,
    /** 投手成績 - 背景 */
    PitcherStatsBGC,
    /** 交代時 */
    Change,
}

/**
 * デザイン区分（スコア）
 */
export enum ScoreDesignDivision {
    /** スコア（奇数回） - 文字 */
    ScoreOddText = 64,
    /** スコア（奇数回） - 背景 */
    ScoreOddBGC,
    /** スコア（偶数回） - 文字 */
    ScoreEvenText,
    /** スコア（偶数回） - 背景 */
    ScoreEvenBGC,
    /** スコア（R） - 文字 */
    ScoreRunText,
    /** スコア（R） - 背景 */
    ScoreRunBGC,
    /** スコアタイトル（R以外） - 文字 */
    ScoreTitleText,
    /** スコアタイトル（R以外） - 背景 */
    ScoreTitleBGC,
    /** スコアタイトル（R） - 文字 */
    ScoreTitleRunText,
    /** スコアタイトル（R） - 背景 */
    ScoreTitleRunBGC,
    /** 背景 */
    BackGround,
    /** スコア枠 */
    ScoreFrame,
    /** その他の枠 */
    OtherFrame
}

/**
 * デザイン区分（審判）
 */
export enum UmpireDesignDivision {
    /** 位置 - 文字 */
    PositionText = 77,
    /** 位置 - 背景 */
    PositionBGC,
    /** 名前 - 文字 */
    NameText,
    /** 名前 - 背景 */
    NameBGC,
}

/**
 * 試合情報
 */
export enum GameInfoDivision {
    /** ビジターチーム名 */
    VisiterTeamName,
    /** ビジターチームテキスト */
    VisiterTeamText,
    /** ビジター最終行 */
    VisiterLastRow,
    /** ホームチーム名 */
    HomeTeamName,
    /** ホームチームテキスト */
    HomeTeamText,
    /** ホーム最終行 */
    HomeLastRow,
    /** イニング上限 */
    InningLimit,
    /** 成績加算 */
    StatsAddition,
    /** ホーム位置 */
    HomePosition,
}

/**
 * ビジターorホーム
 */
export enum VisiterHomeDivision {
    /** ビジター */
    Visiter = 1,
    /** ホーム */
    Home,
}

/**
 * エクセル列名
 */
export enum ExcelColumnsName {
    Id = 1,
    Number,
    Name,
    Avg,
    AtBat,
    Hit,
    Double,
    Triple,
    HomeRun,
    TotalBases,
    Run,
    OBP,
    OPS,
    SO,
    BB,
    HBP,
    SacBunt,
    SacFly,
    SB,
    CS,
    DP,
    RC27,
    FullName
}


/**
 * 結果ラジオボタン
 */
export enum ResultCheckBox {
    /** 三振 */
    StrikeOut,
    /** ゴロ */
    GroundBall,
    /** 併殺 */
    DoublePlay,
    /** フライ */
    FlyBall,
    /** 四球 */
    FourPitchWalk,
    /** 死球 */
    HitByPitch,
    /** 敬遠 */
    IntentionalWalk,
    /** 邪飛 */
    FoulFly,
    /** 犠飛 */
    SacrificeFly,
    /** 犠打 */
    SacrificeBunt,
    /** 犠打失策 */
    SacrificeBuntError,
    /** 犠打野選 */
    SacrificeBuntFC,
    /** 安打 */
    SingleHit,
    /** 二塁打 */
    TwoBaseHit,
    /** 三塁打 */
    ThreeBaseHit,
    /** 本塁打 */
    HomeRun,
    /** 失策 */
    Error,
    /** 野選 */
    FieldersChoice,
    /** 振り逃げ */
    UncaughtThirdStrike,
    /** 打撃妨害 */
    Interference,
    /** 走塁妨害 */
    Obstruction,
    /** 未選択 */
    UnSelected,
}

/**
 * 結果守備位置
 */
export enum ResultPositionCheckBox {
    /** 投手 */
    P = 1,
    /** 捕手 */
    C,
    /** 一塁手 */
    FB,
    /** 二塁手 */
    SB,
    /** 三塁手 */
    TB,
    /** 遊撃手 */
    SS,
    /** 左翼手 */
    LF,
    /** 中堅手 */
    CF,
    /** 右翼手 */
    RF,
    /** 左中間 */
    LeftCenter,
    /** 右中間 */
    RightCenter,
}

/**
 * 守備位置
 */
export enum PositionName {
    /** 投手 */
    P = 1,
    /** 捕手 */
    C,
    /** 一塁手 */
    FB,
    /** 二塁手 */
    SB,
    /** 三塁手 */
    TB,
    /** 遊撃手 */
    SS,
    /** 左翼手 */
    LF,
    /** 中堅手 */
    CF,
    /** 右翼手 */
    RF
}