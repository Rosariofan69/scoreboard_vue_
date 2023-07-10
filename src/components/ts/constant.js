"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisiterHomeDivision = exports.GameInfoDivision = exports.UmpireDesignDivision = exports.ScoreDesignDivision = exports.HomeDesignDivision = exports.VisiterDesignDivision = void 0;
/**
 * デザイン区分（ビジター）
 */
var VisiterDesignDivision;
(function (VisiterDesignDivision) {
    /** チーム名（メンバー） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["TeamNameMemberText"] = 0] = "TeamNameMemberText";
    /** チーム名（メンバー） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["TeamNameMemberBGC"] = 1] = "TeamNameMemberBGC";
    /** チーム名（スコア） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["TeamNameScoreText"] = 2] = "TeamNameScoreText";
    /** チーム名（スコア） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["TeamNameScoreBGC"] = 3] = "TeamNameScoreBGC";
    /** 下線 */
    VisiterDesignDivision[VisiterDesignDivision["UnderLine"] = 4] = "UnderLine";
    /** 斜線 */
    VisiterDesignDivision[VisiterDesignDivision["DiagonalLine"] = 5] = "DiagonalLine";
    /** 上線 */
    VisiterDesignDivision[VisiterDesignDivision["UpperLine"] = 6] = "UpperLine";
    /** 守備位置（標準） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["PositionBasicText"] = 7] = "PositionBasicText";
    /** 守備位置（標準） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["PositionBasicBGC"] = 8] = "PositionBasicBGC";
    /** 名前（標準） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["NameBasicText"] = 9] = "NameBasicText";
    /** 名前（標準） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["NameBasicBGC"] = 10] = "NameBasicBGC";
    /** 守備位置（打者） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["PositionBatterText"] = 11] = "PositionBatterText";
    /** 守備位置（打者） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["PositionBatterBGC"] = 12] = "PositionBatterBGC";
    /** 名前（打者） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["NameBatterText"] = 13] = "NameBatterText";
    /** 名前（打者） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["NameBatterBGC"] = 14] = "NameBatterBGC";
    /** 守備位置（走者） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["PositionRunnerText"] = 15] = "PositionRunnerText";
    /** 守備位置（走者） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["PositionRunnerBGC"] = 16] = "PositionRunnerBGC";
    /** 名前（走者） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["NameRunnerText"] = 17] = "NameRunnerText";
    /** 名前（走者） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["NameRunnerBGC"] = 18] = "NameRunnerBGC";
    /** 守備位置（次回先頭） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["PositionNextText"] = 19] = "PositionNextText";
    /** 守備位置（次回先頭） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["PositionNextBGC"] = 20] = "PositionNextBGC";
    /** 名前（次回先頭） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["NameNextText"] = 21] = "NameNextText";
    /** 名前（次回先頭） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["NameNextBGC"] = 22] = "NameNextBGC";
    /** 野手成績 - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["FielderStatsText"] = 23] = "FielderStatsText";
    /** 野手成績 - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["FielderStatsBGC"] = 24] = "FielderStatsBGC";
    /** 守備表示（野手） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["DispPositionFielderText"] = 25] = "DispPositionFielderText";
    /** 守備表示（野手） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["DispPositionFielderBGC"] = 26] = "DispPositionFielderBGC";
    /** 守備表示（走者） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["DispPositionRunnerText"] = 27] = "DispPositionRunnerText";
    /** 守備表示（走者） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["DispPositionRunnerBGC"] = 28] = "DispPositionRunnerBGC";
    /** 投手成績 - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["PitcherStatsText"] = 29] = "PitcherStatsText";
    /** 投手成績 - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["PitcherStatsBGC"] = 30] = "PitcherStatsBGC";
    /** 交代時 */
    VisiterDesignDivision[VisiterDesignDivision["Change"] = 31] = "Change";
})(VisiterDesignDivision = exports.VisiterDesignDivision || (exports.VisiterDesignDivision = {}));
/**
 * デザイン区分（ホーム）
 */
var HomeDesignDivision;
(function (HomeDesignDivision) {
    /** チーム名（メンバー） - 文字 */
    HomeDesignDivision[HomeDesignDivision["TeamNameMemberText"] = 32] = "TeamNameMemberText";
    /** チーム名（メンバー） - 背景 */
    HomeDesignDivision[HomeDesignDivision["TeamNameMemberBGC"] = 33] = "TeamNameMemberBGC";
    /** チーム名（スコア） - 文字 */
    HomeDesignDivision[HomeDesignDivision["TeamNameScoreText"] = 34] = "TeamNameScoreText";
    /** チーム名（スコア） - 背景 */
    HomeDesignDivision[HomeDesignDivision["TeamNameScoreBGC"] = 35] = "TeamNameScoreBGC";
    /** 下線 */
    HomeDesignDivision[HomeDesignDivision["UnderLine"] = 36] = "UnderLine";
    /** 斜線 */
    HomeDesignDivision[HomeDesignDivision["DiagonalLine"] = 37] = "DiagonalLine";
    /** 上線 */
    HomeDesignDivision[HomeDesignDivision["UpperLine"] = 38] = "UpperLine";
    /** 守備位置（標準） - 文字 */
    HomeDesignDivision[HomeDesignDivision["PositionBasicText"] = 39] = "PositionBasicText";
    /** 守備位置（標準） - 背景 */
    HomeDesignDivision[HomeDesignDivision["PositionBasicBGC"] = 40] = "PositionBasicBGC";
    /** 名前（標準） - 文字 */
    HomeDesignDivision[HomeDesignDivision["NameBasicText"] = 41] = "NameBasicText";
    /** 名前（標準） - 背景 */
    HomeDesignDivision[HomeDesignDivision["NameBasicBGC"] = 42] = "NameBasicBGC";
    /** 守備位置（打者） - 文字 */
    HomeDesignDivision[HomeDesignDivision["PositionBatterText"] = 43] = "PositionBatterText";
    /** 守備位置（打者） - 背景 */
    HomeDesignDivision[HomeDesignDivision["PositionBatterBGC"] = 44] = "PositionBatterBGC";
    /** 名前（打者） - 文字 */
    HomeDesignDivision[HomeDesignDivision["NameBatterText"] = 45] = "NameBatterText";
    /** 名前（打者） - 背景 */
    HomeDesignDivision[HomeDesignDivision["NameBatterBGC"] = 46] = "NameBatterBGC";
    /** 守備位置（走者） - 文字 */
    HomeDesignDivision[HomeDesignDivision["PositionRunnerText"] = 47] = "PositionRunnerText";
    /** 守備位置（走者） - 背景 */
    HomeDesignDivision[HomeDesignDivision["PositionRunnerBGC"] = 48] = "PositionRunnerBGC";
    /** 名前（走者） - 文字 */
    HomeDesignDivision[HomeDesignDivision["NameRunnerText"] = 49] = "NameRunnerText";
    /** 名前（走者） - 背景 */
    HomeDesignDivision[HomeDesignDivision["NameRunnerBGC"] = 50] = "NameRunnerBGC";
    /** 守備位置（次回先頭） - 文字 */
    HomeDesignDivision[HomeDesignDivision["PositionNextText"] = 51] = "PositionNextText";
    /** 守備位置（次回先頭） - 背景 */
    HomeDesignDivision[HomeDesignDivision["PositionNextBGC"] = 52] = "PositionNextBGC";
    /** 名前（次回先頭） - 文字 */
    HomeDesignDivision[HomeDesignDivision["NameNextText"] = 53] = "NameNextText";
    /** 名前（次回先頭） - 背景 */
    HomeDesignDivision[HomeDesignDivision["NameNextBGC"] = 54] = "NameNextBGC";
    /** 野手成績 - 文字 */
    HomeDesignDivision[HomeDesignDivision["FielderStatsText"] = 55] = "FielderStatsText";
    /** 野手成績 - 背景 */
    HomeDesignDivision[HomeDesignDivision["FielderStatsBGC"] = 56] = "FielderStatsBGC";
    /** 守備表示（野手） - 文字 */
    HomeDesignDivision[HomeDesignDivision["DispPositionFielderText"] = 57] = "DispPositionFielderText";
    /** 守備表示（野手） - 背景 */
    HomeDesignDivision[HomeDesignDivision["DispPositionFielderBGC"] = 58] = "DispPositionFielderBGC";
    /** 守備表示（走者） - 文字 */
    HomeDesignDivision[HomeDesignDivision["DispPositionRunnerText"] = 59] = "DispPositionRunnerText";
    /** 守備表示（走者） - 背景 */
    HomeDesignDivision[HomeDesignDivision["DispPositionRunnerBGC"] = 60] = "DispPositionRunnerBGC";
    /** 投手成績 - 文字 */
    HomeDesignDivision[HomeDesignDivision["PitcherStatsText"] = 61] = "PitcherStatsText";
    /** 投手成績 - 背景 */
    HomeDesignDivision[HomeDesignDivision["PitcherStatsBGC"] = 62] = "PitcherStatsBGC";
    /** 交代時 */
    HomeDesignDivision[HomeDesignDivision["Change"] = 63] = "Change";
})(HomeDesignDivision = exports.HomeDesignDivision || (exports.HomeDesignDivision = {}));
/**
 * デザイン区分（スコア）
 */
var ScoreDesignDivision;
(function (ScoreDesignDivision) {
    /** スコア（奇数回） - 文字 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreOddText"] = 64] = "ScoreOddText";
    /** スコア（奇数回） - 背景 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreOddBGC"] = 65] = "ScoreOddBGC";
    /** スコア（偶数回） - 文字 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreEvenText"] = 66] = "ScoreEvenText";
    /** スコア（偶数回） - 背景 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreEvenBGC"] = 67] = "ScoreEvenBGC";
    /** スコア（R） - 文字 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreRunText"] = 68] = "ScoreRunText";
    /** スコア（R） - 背景 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreRunBGC"] = 69] = "ScoreRunBGC";
    /** スコアタイトル（R以外） - 文字 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreTitleText"] = 70] = "ScoreTitleText";
    /** スコアタイトル（R以外） - 背景 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreTitleBGC"] = 71] = "ScoreTitleBGC";
    /** スコアタイトル（R） - 文字 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreTitleRunText"] = 72] = "ScoreTitleRunText";
    /** スコアタイトル（R） - 背景 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreTitleRunBGC"] = 73] = "ScoreTitleRunBGC";
    /** 背景 */
    ScoreDesignDivision[ScoreDesignDivision["BackGround"] = 74] = "BackGround";
    /** スコア枠 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreFrame"] = 75] = "ScoreFrame";
    /** その他の枠 */
    ScoreDesignDivision[ScoreDesignDivision["OtherFrame"] = 76] = "OtherFrame";
})(ScoreDesignDivision = exports.ScoreDesignDivision || (exports.ScoreDesignDivision = {}));
/**
 * デザイン区分（審判）
 */
var UmpireDesignDivision;
(function (UmpireDesignDivision) {
    /** 位置 - 文字 */
    UmpireDesignDivision[UmpireDesignDivision["PositionText"] = 77] = "PositionText";
    /** 位置 - 背景 */
    UmpireDesignDivision[UmpireDesignDivision["PositionBGC"] = 78] = "PositionBGC";
    /** 名前 - 文字 */
    UmpireDesignDivision[UmpireDesignDivision["NameText"] = 79] = "NameText";
    /** 名前 - 背景 */
    UmpireDesignDivision[UmpireDesignDivision["NameBGC"] = 80] = "NameBGC";
})(UmpireDesignDivision = exports.UmpireDesignDivision || (exports.UmpireDesignDivision = {}));
/**
 * 試合情報
 */
var GameInfoDivision;
(function (GameInfoDivision) {
    /** ビジターチーム名 */
    GameInfoDivision[GameInfoDivision["VisiterTeamName"] = 0] = "VisiterTeamName";
    /** ビジターチームテキスト */
    GameInfoDivision[GameInfoDivision["VisiterTeamText"] = 1] = "VisiterTeamText";
    /** ビジター最終行 */
    GameInfoDivision[GameInfoDivision["VisiterLastRow"] = 2] = "VisiterLastRow";
    /** ホームチーム名 */
    GameInfoDivision[GameInfoDivision["HomeTeamName"] = 3] = "HomeTeamName";
    /** ホームチームテキスト */
    GameInfoDivision[GameInfoDivision["HomeTeamText"] = 4] = "HomeTeamText";
    /** ホーム最終行 */
    GameInfoDivision[GameInfoDivision["HomeLastRow"] = 5] = "HomeLastRow";
    /** イニング上限 */
    GameInfoDivision[GameInfoDivision["InningLimit"] = 6] = "InningLimit";
    /** 成績加算 */
    GameInfoDivision[GameInfoDivision["StatsAddition"] = 7] = "StatsAddition";
    /** ホーム位置 */
    GameInfoDivision[GameInfoDivision["HomePosition"] = 8] = "HomePosition";
})(GameInfoDivision = exports.GameInfoDivision || (exports.GameInfoDivision = {}));
/**
 * ビジターorホーム
 */
var VisiterHomeDivision;
(function (VisiterHomeDivision) {
    /** ビジター */
    VisiterHomeDivision[VisiterHomeDivision["Visiter"] = 1] = "Visiter";
    /** ホーム */
    VisiterHomeDivision[VisiterHomeDivision["Home"] = 2] = "Home";
})(VisiterHomeDivision = exports.VisiterHomeDivision || (exports.VisiterHomeDivision = {}));
//# sourceMappingURL=constant.js.map