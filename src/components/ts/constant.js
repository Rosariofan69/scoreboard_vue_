"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogCallDivision = exports.Message = exports.PositionName = exports.ResultPositionCheckBox = exports.ResultCheckBox = exports.ExcelColumnsNamePopulate = exports.ExcelColumnsName = exports.VisitorHomeDivision = exports.GameInfoDivision = exports.UmpireDesignDivision = exports.ScoreDesignDivision = exports.HomeDesignDivision = exports.VisitorDesignDivision = void 0;
/**
 * デザイン区分（ビジター）
 */
var VisitorDesignDivision;
(function (VisitorDesignDivision) {
    /** チーム名（メンバー） - 文字 */
    VisitorDesignDivision[VisitorDesignDivision["TeamNameMemberText"] = 0] = "TeamNameMemberText";
    /** チーム名（メンバー） - 背景 */
    VisitorDesignDivision[VisitorDesignDivision["TeamNameMemberBGC"] = 1] = "TeamNameMemberBGC";
    /** チーム名（スコア） - 文字 */
    VisitorDesignDivision[VisitorDesignDivision["TeamNameScoreText"] = 2] = "TeamNameScoreText";
    /** チーム名（スコア） - 背景 */
    VisitorDesignDivision[VisitorDesignDivision["TeamNameScoreBGC"] = 3] = "TeamNameScoreBGC";
    /** 下線 */
    VisitorDesignDivision[VisitorDesignDivision["UnderLine"] = 4] = "UnderLine";
    /** 斜線 */
    VisitorDesignDivision[VisitorDesignDivision["DiagonalLine"] = 5] = "DiagonalLine";
    /** 上線 */
    VisitorDesignDivision[VisitorDesignDivision["UpperLine"] = 6] = "UpperLine";
    /** 守備位置（標準） - 文字 */
    VisitorDesignDivision[VisitorDesignDivision["PositionBasicText"] = 7] = "PositionBasicText";
    /** 守備位置（標準） - 背景 */
    VisitorDesignDivision[VisitorDesignDivision["PositionBasicBGC"] = 8] = "PositionBasicBGC";
    /** 名前（標準） - 文字 */
    VisitorDesignDivision[VisitorDesignDivision["NameBasicText"] = 9] = "NameBasicText";
    /** 名前（標準） - 背景 */
    VisitorDesignDivision[VisitorDesignDivision["NameBasicBGC"] = 10] = "NameBasicBGC";
    /** 名前（標準） - 縁取り */
    VisitorDesignDivision[VisitorDesignDivision["NameBasicEdge"] = 11] = "NameBasicEdge";
    /** 守備位置（打者） - 文字 */
    VisitorDesignDivision[VisitorDesignDivision["PositionBatterText"] = 12] = "PositionBatterText";
    /** 守備位置（打者） - 背景 */
    VisitorDesignDivision[VisitorDesignDivision["PositionBatterBGC"] = 13] = "PositionBatterBGC";
    /** 名前（打者） - 文字 */
    VisitorDesignDivision[VisitorDesignDivision["NameBatterText"] = 14] = "NameBatterText";
    /** 名前（打者） - 背景 */
    VisitorDesignDivision[VisitorDesignDivision["NameBatterBGC"] = 15] = "NameBatterBGC";
    /** 名前（打者） - 縁取り */
    VisitorDesignDivision[VisitorDesignDivision["NameBatterEdge"] = 16] = "NameBatterEdge";
    /** 守備位置（走者） - 文字 */
    VisitorDesignDivision[VisitorDesignDivision["PositionRunnerText"] = 17] = "PositionRunnerText";
    /** 守備位置（走者） - 背景 */
    VisitorDesignDivision[VisitorDesignDivision["PositionRunnerBGC"] = 18] = "PositionRunnerBGC";
    /** 名前（走者） - 文字 */
    VisitorDesignDivision[VisitorDesignDivision["NameRunnerText"] = 19] = "NameRunnerText";
    /** 名前（走者） - 背景 */
    VisitorDesignDivision[VisitorDesignDivision["NameRunnerBGC"] = 20] = "NameRunnerBGC";
    /** 名前（走者） - 縁取り */
    VisitorDesignDivision[VisitorDesignDivision["NameRunnerEdge"] = 21] = "NameRunnerEdge";
    /** 守備位置（次回先頭） - 文字 */
    VisitorDesignDivision[VisitorDesignDivision["PositionNextText"] = 22] = "PositionNextText";
    /** 守備位置（次回先頭） - 背景 */
    VisitorDesignDivision[VisitorDesignDivision["PositionNextBGC"] = 23] = "PositionNextBGC";
    /** 名前（次回先頭） - 文字 */
    VisitorDesignDivision[VisitorDesignDivision["NameNextText"] = 24] = "NameNextText";
    /** 名前（次回先頭） - 背景 */
    VisitorDesignDivision[VisitorDesignDivision["NameNextBGC"] = 25] = "NameNextBGC";
    /** 名前（次回先頭） - 縁取り */
    VisitorDesignDivision[VisitorDesignDivision["NameNextEdge"] = 26] = "NameNextEdge";
    /** 野手成績 - 文字 */
    VisitorDesignDivision[VisitorDesignDivision["FielderStatsText"] = 27] = "FielderStatsText";
    /** 野手成績 - 背景 */
    VisitorDesignDivision[VisitorDesignDivision["FielderStatsBGC"] = 28] = "FielderStatsBGC";
    /** 野手成績 - 縁取り */
    VisitorDesignDivision[VisitorDesignDivision["FielderStatsEdge"] = 29] = "FielderStatsEdge";
    /** 守備表示（野手） - 文字 */
    VisitorDesignDivision[VisitorDesignDivision["DispPositionFielderText"] = 30] = "DispPositionFielderText";
    /** 守備表示（野手） - 背景 */
    VisitorDesignDivision[VisitorDesignDivision["DispPositionFielderBGC"] = 31] = "DispPositionFielderBGC";
    /** 守備表示（野手） - 縁取り */
    VisitorDesignDivision[VisitorDesignDivision["DispPositionFielderEdge"] = 32] = "DispPositionFielderEdge";
    /** 守備表示（走者） - 文字 */
    VisitorDesignDivision[VisitorDesignDivision["DispPositionRunnerText"] = 33] = "DispPositionRunnerText";
    /** 守備表示（走者） - 背景 */
    VisitorDesignDivision[VisitorDesignDivision["DispPositionRunnerBGC"] = 34] = "DispPositionRunnerBGC";
    /** 守備表示（走者） - 縁取り */
    VisitorDesignDivision[VisitorDesignDivision["DispPositionRunnerEdge"] = 35] = "DispPositionRunnerEdge";
    /** 投手成績 - 文字 */
    VisitorDesignDivision[VisitorDesignDivision["PitcherStatsText"] = 36] = "PitcherStatsText";
    /** 投手成績 - 背景 */
    VisitorDesignDivision[VisitorDesignDivision["PitcherStatsBGC"] = 37] = "PitcherStatsBGC";
    /** 投手成績 - 縁取り */
    VisitorDesignDivision[VisitorDesignDivision["PitcherStatsEdge"] = 38] = "PitcherStatsEdge";
    /** 交代時 */
    VisitorDesignDivision[VisitorDesignDivision["Change"] = 39] = "Change";
})(VisitorDesignDivision = exports.VisitorDesignDivision || (exports.VisitorDesignDivision = {}));
/**
 * デザイン区分（ホーム）
 */
var HomeDesignDivision;
(function (HomeDesignDivision) {
    /** チーム名（メンバー） - 文字 */
    HomeDesignDivision[HomeDesignDivision["TeamNameMemberText"] = 40] = "TeamNameMemberText";
    /** チーム名（メンバー） - 背景 */
    HomeDesignDivision[HomeDesignDivision["TeamNameMemberBGC"] = 41] = "TeamNameMemberBGC";
    /** チーム名（スコア） - 文字 */
    HomeDesignDivision[HomeDesignDivision["TeamNameScoreText"] = 42] = "TeamNameScoreText";
    /** チーム名（スコア） - 背景 */
    HomeDesignDivision[HomeDesignDivision["TeamNameScoreBGC"] = 43] = "TeamNameScoreBGC";
    /** 下線 */
    HomeDesignDivision[HomeDesignDivision["UnderLine"] = 44] = "UnderLine";
    /** 斜線 */
    HomeDesignDivision[HomeDesignDivision["DiagonalLine"] = 45] = "DiagonalLine";
    /** 上線 */
    HomeDesignDivision[HomeDesignDivision["UpperLine"] = 46] = "UpperLine";
    /** 守備位置（標準） - 文字 */
    HomeDesignDivision[HomeDesignDivision["PositionBasicText"] = 47] = "PositionBasicText";
    /** 守備位置（標準） - 背景 */
    HomeDesignDivision[HomeDesignDivision["PositionBasicBGC"] = 48] = "PositionBasicBGC";
    /** 名前（標準） - 文字 */
    HomeDesignDivision[HomeDesignDivision["NameBasicText"] = 49] = "NameBasicText";
    /** 名前（標準） - 背景 */
    HomeDesignDivision[HomeDesignDivision["NameBasicBGC"] = 50] = "NameBasicBGC";
    /** 名前（標準） - 縁取り */
    HomeDesignDivision[HomeDesignDivision["NameBasicEdge"] = 51] = "NameBasicEdge";
    /** 守備位置（打者） - 文字 */
    HomeDesignDivision[HomeDesignDivision["PositionBatterText"] = 52] = "PositionBatterText";
    /** 守備位置（打者） - 背景 */
    HomeDesignDivision[HomeDesignDivision["PositionBatterBGC"] = 53] = "PositionBatterBGC";
    /** 名前（打者） - 文字 */
    HomeDesignDivision[HomeDesignDivision["NameBatterText"] = 54] = "NameBatterText";
    /** 名前（打者） - 背景 */
    HomeDesignDivision[HomeDesignDivision["NameBatterBGC"] = 55] = "NameBatterBGC";
    /** 名前（打者） - 縁取り */
    HomeDesignDivision[HomeDesignDivision["NameBatterEdge"] = 56] = "NameBatterEdge";
    /** 守備位置（走者） - 文字 */
    HomeDesignDivision[HomeDesignDivision["PositionRunnerText"] = 57] = "PositionRunnerText";
    /** 守備位置（走者） - 背景 */
    HomeDesignDivision[HomeDesignDivision["PositionRunnerBGC"] = 58] = "PositionRunnerBGC";
    /** 名前（走者） - 文字 */
    HomeDesignDivision[HomeDesignDivision["NameRunnerText"] = 59] = "NameRunnerText";
    /** 名前（走者） - 背景 */
    HomeDesignDivision[HomeDesignDivision["NameRunnerBGC"] = 60] = "NameRunnerBGC";
    /** 名前（走者） - 縁取り */
    HomeDesignDivision[HomeDesignDivision["NameRunnerEdge"] = 61] = "NameRunnerEdge";
    /** 守備位置（次回先頭） - 文字 */
    HomeDesignDivision[HomeDesignDivision["PositionNextText"] = 62] = "PositionNextText";
    /** 守備位置（次回先頭） - 背景 */
    HomeDesignDivision[HomeDesignDivision["PositionNextBGC"] = 63] = "PositionNextBGC";
    /** 名前（次回先頭） - 文字 */
    HomeDesignDivision[HomeDesignDivision["NameNextText"] = 64] = "NameNextText";
    /** 名前（次回先頭） - 背景 */
    HomeDesignDivision[HomeDesignDivision["NameNextBGC"] = 65] = "NameNextBGC";
    /** 名前（次回先頭） - 縁取り */
    HomeDesignDivision[HomeDesignDivision["NameNextEdge"] = 66] = "NameNextEdge";
    /** 野手成績 - 文字 */
    HomeDesignDivision[HomeDesignDivision["FielderStatsText"] = 67] = "FielderStatsText";
    /** 野手成績 - 背景 */
    HomeDesignDivision[HomeDesignDivision["FielderStatsBGC"] = 68] = "FielderStatsBGC";
    /** 野手成績 - 縁取り */
    HomeDesignDivision[HomeDesignDivision["FielderStatsEdge"] = 69] = "FielderStatsEdge";
    /** 守備表示（野手） - 文字 */
    HomeDesignDivision[HomeDesignDivision["DispPositionFielderText"] = 70] = "DispPositionFielderText";
    /** 守備表示（野手） - 背景 */
    HomeDesignDivision[HomeDesignDivision["DispPositionFielderBGC"] = 71] = "DispPositionFielderBGC";
    /** 守備表示（野手） - 縁取り */
    HomeDesignDivision[HomeDesignDivision["DispPositionFielderEdge"] = 72] = "DispPositionFielderEdge";
    /** 守備表示（走者） - 文字 */
    HomeDesignDivision[HomeDesignDivision["DispPositionRunnerText"] = 73] = "DispPositionRunnerText";
    /** 守備表示（走者） - 背景 */
    HomeDesignDivision[HomeDesignDivision["DispPositionRunnerBGC"] = 74] = "DispPositionRunnerBGC";
    /** 守備表示（走者） - 縁取り */
    HomeDesignDivision[HomeDesignDivision["DispPositionRunnerEdge"] = 75] = "DispPositionRunnerEdge";
    /** 投手成績 - 文字 */
    HomeDesignDivision[HomeDesignDivision["PitcherStatsText"] = 76] = "PitcherStatsText";
    /** 投手成績 - 背景 */
    HomeDesignDivision[HomeDesignDivision["PitcherStatsBGC"] = 77] = "PitcherStatsBGC";
    /** 投手成績 - 縁取り */
    HomeDesignDivision[HomeDesignDivision["PitcherStatsEdge"] = 78] = "PitcherStatsEdge";
    /** 交代時 */
    HomeDesignDivision[HomeDesignDivision["Change"] = 79] = "Change";
})(HomeDesignDivision = exports.HomeDesignDivision || (exports.HomeDesignDivision = {}));
/**
 * デザイン区分（スコア）
 */
var ScoreDesignDivision;
(function (ScoreDesignDivision) {
    /** スコア（奇数回） - 文字 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreOddText"] = 80] = "ScoreOddText";
    /** スコア（奇数回） - 背景 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreOddBGC"] = 81] = "ScoreOddBGC";
    /** スコア（偶数回） - 文字 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreEvenText"] = 82] = "ScoreEvenText";
    /** スコア（偶数回） - 背景 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreEvenBGC"] = 83] = "ScoreEvenBGC";
    /** スコア（R） - 文字 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreRunText"] = 84] = "ScoreRunText";
    /** スコア（R） - 背景 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreRunBGC"] = 85] = "ScoreRunBGC";
    /** スコアタイトル（R以外） - 文字 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreTitleText"] = 86] = "ScoreTitleText";
    /** スコアタイトル（R以外） - 背景 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreTitleBGC"] = 87] = "ScoreTitleBGC";
    /** スコアタイトル（R） - 文字 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreTitleRunText"] = 88] = "ScoreTitleRunText";
    /** スコアタイトル（R） - 背景 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreTitleRunBGC"] = 89] = "ScoreTitleRunBGC";
    /** 背景 */
    ScoreDesignDivision[ScoreDesignDivision["BackGround"] = 90] = "BackGround";
    /** スコア枠 */
    ScoreDesignDivision[ScoreDesignDivision["ScoreFrame"] = 91] = "ScoreFrame";
    /** その他の枠 */
    ScoreDesignDivision[ScoreDesignDivision["OtherFrame"] = 92] = "OtherFrame";
})(ScoreDesignDivision = exports.ScoreDesignDivision || (exports.ScoreDesignDivision = {}));
/**
 * デザイン区分（審判）
 */
var UmpireDesignDivision;
(function (UmpireDesignDivision) {
    /** 位置 - 文字 */
    UmpireDesignDivision[UmpireDesignDivision["PositionText"] = 93] = "PositionText";
    /** 位置 - 背景 */
    UmpireDesignDivision[UmpireDesignDivision["PositionBGC"] = 94] = "PositionBGC";
    /** 名前 - 文字 */
    UmpireDesignDivision[UmpireDesignDivision["NameText"] = 95] = "NameText";
    /** 名前 - 背景 */
    UmpireDesignDivision[UmpireDesignDivision["NameBGC"] = 96] = "NameBGC";
})(UmpireDesignDivision = exports.UmpireDesignDivision || (exports.UmpireDesignDivision = {}));
/**
 * 試合情報
 */
var GameInfoDivision;
(function (GameInfoDivision) {
    /** ビジターチーム名 */
    GameInfoDivision[GameInfoDivision["VisitorTeamName"] = 0] = "VisitorTeamName";
    /** ビジターチームテキスト */
    GameInfoDivision[GameInfoDivision["VisitorTeamText"] = 1] = "VisitorTeamText";
    /** ビジター最終行 */
    GameInfoDivision[GameInfoDivision["VisitorLastRow"] = 2] = "VisitorLastRow";
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
var VisitorHomeDivision;
(function (VisitorHomeDivision) {
    /** ビジター */
    VisitorHomeDivision[VisitorHomeDivision["Visitor"] = 1] = "Visitor";
    /** ホーム */
    VisitorHomeDivision[VisitorHomeDivision["Home"] = 2] = "Home";
})(VisitorHomeDivision = exports.VisitorHomeDivision || (exports.VisitorHomeDivision = {}));
/**
 * エクセル列名
 */
var ExcelColumnsName;
(function (ExcelColumnsName) {
    ExcelColumnsName[ExcelColumnsName["Id"] = 1] = "Id";
    ExcelColumnsName[ExcelColumnsName["Number"] = 2] = "Number";
    ExcelColumnsName[ExcelColumnsName["Name"] = 3] = "Name";
    ExcelColumnsName[ExcelColumnsName["Avg"] = 4] = "Avg";
    ExcelColumnsName[ExcelColumnsName["AtBat"] = 5] = "AtBat";
    ExcelColumnsName[ExcelColumnsName["Hit"] = 6] = "Hit";
    ExcelColumnsName[ExcelColumnsName["Double"] = 7] = "Double";
    ExcelColumnsName[ExcelColumnsName["Triple"] = 8] = "Triple";
    ExcelColumnsName[ExcelColumnsName["HomeRun"] = 9] = "HomeRun";
    ExcelColumnsName[ExcelColumnsName["TotalBases"] = 10] = "TotalBases";
    ExcelColumnsName[ExcelColumnsName["RBI"] = 11] = "RBI";
    ExcelColumnsName[ExcelColumnsName["OBP"] = 12] = "OBP";
    ExcelColumnsName[ExcelColumnsName["OPS"] = 13] = "OPS";
    ExcelColumnsName[ExcelColumnsName["SO"] = 14] = "SO";
    ExcelColumnsName[ExcelColumnsName["BB"] = 15] = "BB";
    ExcelColumnsName[ExcelColumnsName["HBP"] = 16] = "HBP";
    ExcelColumnsName[ExcelColumnsName["SacBunt"] = 17] = "SacBunt";
    ExcelColumnsName[ExcelColumnsName["SacFly"] = 18] = "SacFly";
    ExcelColumnsName[ExcelColumnsName["SB"] = 19] = "SB";
    ExcelColumnsName[ExcelColumnsName["CS"] = 20] = "CS";
    ExcelColumnsName[ExcelColumnsName["DP"] = 21] = "DP";
    ExcelColumnsName[ExcelColumnsName["RC27"] = 22] = "RC27";
    ExcelColumnsName[ExcelColumnsName["FullName"] = 23] = "FullName";
})(ExcelColumnsName = exports.ExcelColumnsName || (exports.ExcelColumnsName = {}));
/**
 * エクセル列名（xlsx-populate用）
 */
var ExcelColumnsNamePopulate;
(function (ExcelColumnsNamePopulate) {
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["Id"] = 2] = "Id";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["Number"] = 3] = "Number";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["Name"] = 4] = "Name";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["Avg"] = 5] = "Avg";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["AtBat"] = 6] = "AtBat";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["Hit"] = 7] = "Hit";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["Double"] = 8] = "Double";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["Triple"] = 9] = "Triple";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["HomeRun"] = 10] = "HomeRun";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["TotalBases"] = 11] = "TotalBases";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["RBI"] = 12] = "RBI";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["OBP"] = 13] = "OBP";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["OPS"] = 14] = "OPS";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["SO"] = 15] = "SO";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["BB"] = 16] = "BB";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["HBP"] = 17] = "HBP";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["SacBunt"] = 18] = "SacBunt";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["SacFly"] = 19] = "SacFly";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["SB"] = 20] = "SB";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["CS"] = 21] = "CS";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["DP"] = 22] = "DP";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["RC27"] = 23] = "RC27";
    ExcelColumnsNamePopulate[ExcelColumnsNamePopulate["FullName"] = 24] = "FullName";
})(ExcelColumnsNamePopulate = exports.ExcelColumnsNamePopulate || (exports.ExcelColumnsNamePopulate = {}));
/**
 * 結果ラジオボタン
 */
var ResultCheckBox;
(function (ResultCheckBox) {
    /** ゴロ */
    ResultCheckBox[ResultCheckBox["GroundBall"] = 0] = "GroundBall";
    /** フライ */
    ResultCheckBox[ResultCheckBox["FlyBall"] = 1] = "FlyBall";
    /** ライナー */
    ResultCheckBox[ResultCheckBox["LineDrive"] = 2] = "LineDrive";
    /** 併殺 */
    ResultCheckBox[ResultCheckBox["DoublePlay"] = 3] = "DoublePlay";
    /** 見逃三振 */
    ResultCheckBox[ResultCheckBox["LookingStrikeOut"] = 4] = "LookingStrikeOut";
    /** 空振三振 */
    ResultCheckBox[ResultCheckBox["SwingingStrikeOut"] = 5] = "SwingingStrikeOut";
    /** 四球 */
    ResultCheckBox[ResultCheckBox["FourPitchWalk"] = 6] = "FourPitchWalk";
    /** 死球 */
    ResultCheckBox[ResultCheckBox["HitByPitch"] = 7] = "HitByPitch";
    /** 邪飛 */
    ResultCheckBox[ResultCheckBox["FoulFly"] = 8] = "FoulFly";
    /** 犠飛 */
    ResultCheckBox[ResultCheckBox["SacrificeFly"] = 9] = "SacrificeFly";
    /** 犠打 */
    ResultCheckBox[ResultCheckBox["SacrificeBunt"] = 10] = "SacrificeBunt";
    /** 敬遠 */
    ResultCheckBox[ResultCheckBox["IntentionalWalk"] = 11] = "IntentionalWalk";
    /** 犠打失策 */
    ResultCheckBox[ResultCheckBox["SacrificeBuntError"] = 12] = "SacrificeBuntError";
    /** 犠打野選 */
    ResultCheckBox[ResultCheckBox["SacrificeBuntFC"] = 13] = "SacrificeBuntFC";
    /** 安打 */
    ResultCheckBox[ResultCheckBox["SingleHit"] = 14] = "SingleHit";
    /** 二塁打 */
    ResultCheckBox[ResultCheckBox["TwoBaseHit"] = 15] = "TwoBaseHit";
    /** 三塁打 */
    ResultCheckBox[ResultCheckBox["ThreeBaseHit"] = 16] = "ThreeBaseHit";
    /** 本塁打 */
    ResultCheckBox[ResultCheckBox["HomeRun"] = 17] = "HomeRun";
    /** 失策 */
    ResultCheckBox[ResultCheckBox["Error"] = 18] = "Error";
    /** 野選 */
    ResultCheckBox[ResultCheckBox["FieldersChoice"] = 19] = "FieldersChoice";
    /** 振り逃げ */
    ResultCheckBox[ResultCheckBox["UncaughtThirdStrike"] = 20] = "UncaughtThirdStrike";
    /** 打撃妨害 */
    ResultCheckBox[ResultCheckBox["Interference"] = 21] = "Interference";
    /** 走塁妨害 */
    ResultCheckBox[ResultCheckBox["Obstruction"] = 22] = "Obstruction";
    /** 未選択 */
    ResultCheckBox[ResultCheckBox["UnSelected"] = 23] = "UnSelected";
})(ResultCheckBox = exports.ResultCheckBox || (exports.ResultCheckBox = {}));
/**
 * 結果守備位置
 */
var ResultPositionCheckBox;
(function (ResultPositionCheckBox) {
    /** 投手 */
    ResultPositionCheckBox[ResultPositionCheckBox["P"] = 1] = "P";
    /** 捕手 */
    ResultPositionCheckBox[ResultPositionCheckBox["C"] = 2] = "C";
    /** 一塁手 */
    ResultPositionCheckBox[ResultPositionCheckBox["FB"] = 3] = "FB";
    /** 二塁手 */
    ResultPositionCheckBox[ResultPositionCheckBox["SB"] = 4] = "SB";
    /** 三塁手 */
    ResultPositionCheckBox[ResultPositionCheckBox["TB"] = 5] = "TB";
    /** 遊撃手 */
    ResultPositionCheckBox[ResultPositionCheckBox["SS"] = 6] = "SS";
    /** 左翼手 */
    ResultPositionCheckBox[ResultPositionCheckBox["LF"] = 7] = "LF";
    /** 中堅手 */
    ResultPositionCheckBox[ResultPositionCheckBox["CF"] = 8] = "CF";
    /** 右翼手 */
    ResultPositionCheckBox[ResultPositionCheckBox["RF"] = 9] = "RF";
    /** 左中間 */
    ResultPositionCheckBox[ResultPositionCheckBox["LeftCenter"] = 10] = "LeftCenter";
    /** 右中間 */
    ResultPositionCheckBox[ResultPositionCheckBox["RightCenter"] = 11] = "RightCenter";
})(ResultPositionCheckBox = exports.ResultPositionCheckBox || (exports.ResultPositionCheckBox = {}));
/**
 * 守備位置
 */
var PositionName;
(function (PositionName) {
    /** 投手 */
    PositionName[PositionName["P"] = 1] = "P";
    /** 捕手 */
    PositionName[PositionName["C"] = 2] = "C";
    /** 一塁手 */
    PositionName[PositionName["FB"] = 3] = "FB";
    /** 二塁手 */
    PositionName[PositionName["SB"] = 4] = "SB";
    /** 三塁手 */
    PositionName[PositionName["TB"] = 5] = "TB";
    /** 遊撃手 */
    PositionName[PositionName["SS"] = 6] = "SS";
    /** 左翼手 */
    PositionName[PositionName["LF"] = 7] = "LF";
    /** 中堅手 */
    PositionName[PositionName["CF"] = 8] = "CF";
    /** 右翼手 */
    PositionName[PositionName["RF"] = 9] = "RF";
})(PositionName = exports.PositionName || (exports.PositionName = {}));
/**
 * メッセージ
 */
var Message;
(function (Message) {
    Message["Message001"] = "\u5B88\u5099\u4F4D\u7F6E\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002";
    Message["Message002"] = "\u8D70\u8005\u306E\u6570\u3068\u5841\u72B6\u6CC1\u304C\u5408\u3063\u3066\u3044\u307E\u305B\u3093\u3002\u5841\u72B6\u6CC1\u3092\u5165\u529B\u3057\u3001\u78BA\u5B9A\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002";
    Message["Message003"] = "\u7D50\u679C\u3092\u78BA\u5B9A\u3057\u307E\u3059\u304B\uFF1F";
    Message["Message004"] = "\u8A66\u5408\u7D42\u4E86\u6761\u4EF6\u3092\u6E80\u305F\u3057\u307E\u3057\u305F\u3002\u7D42\u4E86\u3057\u307E\u3059\u304B\uFF1F";
})(Message = exports.Message || (exports.Message = {}));
/**
 * ダイアログ呼び出し区分
 */
var DialogCallDivision;
(function (DialogCallDivision) {
    /** 審判 */
    DialogCallDivision["Umpire"] = "\u5BE9\u5224";
    /** 選手情報（ビジター） */
    DialogCallDivision["VisitorMemberInfo"] = "\u9078\u624B\u60C5\u5831\uFF08\u30D3\u30B8\u30BF\u30FC\uFF09";
    /** 選手情報（ホーム） */
    DialogCallDivision["HomeMemberInfo"] = "\u9078\u624B\u60C5\u5831\uFF08\u30DB\u30FC\u30E0\uFF09";
    /** 打席結果（ビジター） */
    DialogCallDivision["VisitorBattingResult"] = "\u6253\u5E2D\u7D50\u679C\uFF08\u30D3\u30B8\u30BF\u30FC\uFF09";
    /** 打席結果（ホーム） */
    DialogCallDivision["HomeBattingResult"] = "\u6253\u5E2D\u7D50\u679C\uFF08\u30DB\u30FC\u30E0\uFF09";
    /** 投手情報（ビジター） */
    DialogCallDivision["VisitorPitcherInfo"] = "\u6295\u624B\u60C5\u5831\uFF08\u30D3\u30B8\u30BF\u30FC\uFF09";
    /** 投手情報（ホーム） */
    DialogCallDivision["HomePitcherInfo"] = "\u6295\u624B\u60C5\u5831\uFF08\u30DB\u30FC\u30E0\uFF09";
    /** スコア */
    DialogCallDivision["Score"] = "\u30B9\u30B3\u30A2";
})(DialogCallDivision = exports.DialogCallDivision || (exports.DialogCallDivision = {}));
//# sourceMappingURL=constant.js.map