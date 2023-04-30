"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WholeDesignDivision = exports.HomeDesignDivision = exports.VisiterDesignDivision = void 0;
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
    /** 守備位置（標準） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["PositionBasicText"] = 5] = "PositionBasicText";
    /** 守備位置（標準） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["PositionBasicBGC"] = 6] = "PositionBasicBGC";
    /** 名前（標準） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["NameBasicText"] = 7] = "NameBasicText";
    /** 名前（標準） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["NameBasicBGC"] = 8] = "NameBasicBGC";
    /** 守備位置（打者） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["PositionBatterText"] = 9] = "PositionBatterText";
    /** 守備位置（打者） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["PositionBatterBGC"] = 10] = "PositionBatterBGC";
    /** 名前（打者） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["NameBatterText"] = 11] = "NameBatterText";
    /** 名前（打者） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["NameBatterBGC"] = 12] = "NameBatterBGC";
    /** 守備位置（走者） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["PositionRunnerText"] = 13] = "PositionRunnerText";
    /** 守備位置（走者） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["PositionRunnerBGC"] = 14] = "PositionRunnerBGC";
    /** 名前（走者） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["NameRunnerText"] = 15] = "NameRunnerText";
    /** 名前（走者） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["NameRunnerBGC"] = 16] = "NameRunnerBGC";
    /** 野手成績 - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["FielderStatsText"] = 17] = "FielderStatsText";
    /** 野手成績 - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["FielderStatsBGC"] = 18] = "FielderStatsBGC";
    /** 守備表示（野手） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["DispPositionFielderText"] = 19] = "DispPositionFielderText";
    /** 守備表示（野手） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["DispPositionFielderBGC"] = 20] = "DispPositionFielderBGC";
    /** 守備表示（走者） - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["DispPositionRunnerText"] = 21] = "DispPositionRunnerText";
    /** 守備表示（走者） - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["DispPositionRunnerBGC"] = 22] = "DispPositionRunnerBGC";
    /** 投手成績 - 文字 */
    VisiterDesignDivision[VisiterDesignDivision["PitcherStatsText"] = 23] = "PitcherStatsText";
    /** 投手成績 - 背景 */
    VisiterDesignDivision[VisiterDesignDivision["PitcherStatsBGC"] = 24] = "PitcherStatsBGC";
    /** 交代時 */
    VisiterDesignDivision[VisiterDesignDivision["Change"] = 25] = "Change";
})(VisiterDesignDivision = exports.VisiterDesignDivision || (exports.VisiterDesignDivision = {}));
/**
 * デザイン区分（ホーム）
 */
var HomeDesignDivision;
(function (HomeDesignDivision) {
    /** チーム名（メンバー） - 文字 */
    HomeDesignDivision[HomeDesignDivision["TeamNameMemberText"] = 26] = "TeamNameMemberText";
    /** チーム名（メンバー） - 背景 */
    HomeDesignDivision[HomeDesignDivision["TeamNameMemberBGC"] = 27] = "TeamNameMemberBGC";
    /** チーム名（スコア） - 文字 */
    HomeDesignDivision[HomeDesignDivision["TeamNameScoreText"] = 28] = "TeamNameScoreText";
    /** チーム名（スコア） - 背景 */
    HomeDesignDivision[HomeDesignDivision["TeamNameScoreBGC"] = 29] = "TeamNameScoreBGC";
    /** 下線 */
    HomeDesignDivision[HomeDesignDivision["UnderLine"] = 30] = "UnderLine";
    /** 守備位置（標準） - 文字 */
    HomeDesignDivision[HomeDesignDivision["PositionBasicText"] = 31] = "PositionBasicText";
    /** 守備位置（標準） - 背景 */
    HomeDesignDivision[HomeDesignDivision["PositionBasicBGC"] = 32] = "PositionBasicBGC";
    /** 名前（標準） - 文字 */
    HomeDesignDivision[HomeDesignDivision["NameBasicText"] = 33] = "NameBasicText";
    /** 名前（標準） - 背景 */
    HomeDesignDivision[HomeDesignDivision["NameBasicBGC"] = 34] = "NameBasicBGC";
    /** 守備位置（打者） - 文字 */
    HomeDesignDivision[HomeDesignDivision["PositionBatterText"] = 35] = "PositionBatterText";
    /** 守備位置（打者） - 背景 */
    HomeDesignDivision[HomeDesignDivision["PositionBatterBGC"] = 36] = "PositionBatterBGC";
    /** 名前（打者） - 文字 */
    HomeDesignDivision[HomeDesignDivision["NameBatterText"] = 37] = "NameBatterText";
    /** 名前（打者） - 背景 */
    HomeDesignDivision[HomeDesignDivision["NameBatterBGC"] = 38] = "NameBatterBGC";
    /** 守備位置（走者） - 文字 */
    HomeDesignDivision[HomeDesignDivision["PositionRunnerText"] = 39] = "PositionRunnerText";
    /** 守備位置（走者） - 背景 */
    HomeDesignDivision[HomeDesignDivision["PositionRunnerBGC"] = 40] = "PositionRunnerBGC";
    /** 名前（走者） - 文字 */
    HomeDesignDivision[HomeDesignDivision["NameRunnerText"] = 41] = "NameRunnerText";
    /** 名前（走者） - 背景 */
    HomeDesignDivision[HomeDesignDivision["NameRunnerBGC"] = 42] = "NameRunnerBGC";
    /** 野手成績 - 文字 */
    HomeDesignDivision[HomeDesignDivision["FielderStatsText"] = 43] = "FielderStatsText";
    /** 野手成績 - 背景 */
    HomeDesignDivision[HomeDesignDivision["FielderStatsBGC"] = 44] = "FielderStatsBGC";
    /** 守備表示（野手） - 文字 */
    HomeDesignDivision[HomeDesignDivision["DispPositionFielderText"] = 45] = "DispPositionFielderText";
    /** 守備表示（野手） - 背景 */
    HomeDesignDivision[HomeDesignDivision["DispPositionFielderBGC"] = 46] = "DispPositionFielderBGC";
    /** 守備表示（走者） - 文字 */
    HomeDesignDivision[HomeDesignDivision["DispPositionRunnerText"] = 47] = "DispPositionRunnerText";
    /** 守備表示（走者） - 背景 */
    HomeDesignDivision[HomeDesignDivision["DispPositionRunnerBGC"] = 48] = "DispPositionRunnerBGC";
    /** 投手成績 - 文字 */
    HomeDesignDivision[HomeDesignDivision["PitcherStatsText"] = 49] = "PitcherStatsText";
    /** 投手成績 - 背景 */
    HomeDesignDivision[HomeDesignDivision["PitcherStatsBGC"] = 50] = "PitcherStatsBGC";
    /** 交代時 */
    HomeDesignDivision[HomeDesignDivision["Change"] = 51] = "Change";
})(HomeDesignDivision = exports.HomeDesignDivision || (exports.HomeDesignDivision = {}));
/**
 * デザイン区分（全体）
 */
var WholeDesignDivision;
(function (WholeDesignDivision) {
    /** スコア（奇数回） - 文字 */
    WholeDesignDivision[WholeDesignDivision["ScoreOddText"] = 0] = "ScoreOddText";
    /** スコア（奇数回） - 背景 */
    WholeDesignDivision[WholeDesignDivision["ScoreOddBGC"] = 1] = "ScoreOddBGC";
    /** スコア（偶数回） - 文字 */
    WholeDesignDivision[WholeDesignDivision["ScoreEvenText"] = 2] = "ScoreEvenText";
    /** スコア（偶数回） - 背景 */
    WholeDesignDivision[WholeDesignDivision["ScoreEvenBGC"] = 3] = "ScoreEvenBGC";
    /** スコア（R） - 文字 */
    WholeDesignDivision[WholeDesignDivision["ScoreRunText"] = 4] = "ScoreRunText";
    /** スコア（R） - 背景 */
    WholeDesignDivision[WholeDesignDivision["ScoreRunBGC"] = 5] = "ScoreRunBGC";
    /** スコアタイトル（R以外） - 文字 */
    WholeDesignDivision[WholeDesignDivision["ScoreTitleRunExceptingText"] = 6] = "ScoreTitleRunExceptingText";
    /** スコアタイトル（R以外） - 背景 */
    WholeDesignDivision[WholeDesignDivision["ScoreTitleRunExceptingBGC"] = 7] = "ScoreTitleRunExceptingBGC";
    /** スコアタイトル（R） - 文字 */
    WholeDesignDivision[WholeDesignDivision["ScoreTitleRunText"] = 8] = "ScoreTitleRunText";
    /** スコアタイトル（R） - 背景 */
    WholeDesignDivision[WholeDesignDivision["ScoreTitleRunBGC"] = 9] = "ScoreTitleRunBGC";
    /** 背景 */
    WholeDesignDivision[WholeDesignDivision["BackGround"] = 10] = "BackGround";
    /** スコア枠 */
    WholeDesignDivision[WholeDesignDivision["ScoreFrame"] = 11] = "ScoreFrame";
})(WholeDesignDivision = exports.WholeDesignDivision || (exports.WholeDesignDivision = {}));
//# sourceMappingURL=constant.js.map