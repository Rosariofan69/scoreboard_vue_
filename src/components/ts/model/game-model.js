"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreProgressModel = exports.GameProgressLogModel = exports.ResultPositionCheckBoxModel = exports.ResultOptionCheckBoxModel = exports.ResultCheckBoxModel = exports.GameProgressInfoModel = exports.GameBaseInfoModel = exports.GameInfoModel = void 0;
/**
 * 試合情報
 */
class GameInfoModel {
    constructor() {
        /** 試合基底情報 */
        Object.defineProperty(this, "GameBaseInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new GameBaseInfoModel()
        });
        /** 試合進行中情報 */
        Object.defineProperty(this, "GameProgressInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new GameProgressInfoModel()
        });
    }
}
exports.GameInfoModel = GameInfoModel;
/**
 * 試合基底情報
 */
class GameBaseInfoModel {
    constructor() {
        /** ビジターチーム名 */
        Object.defineProperty(this, "VisitorTeamName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ビジターチームテキスト */
        Object.defineProperty(this, "VisitorTeamText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ビジター最終行 */
        Object.defineProperty(this, "VisitorLastRow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ビジター略称 */
        Object.defineProperty(this, "VisitorAbbreviation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ホームチーム名 */
        Object.defineProperty(this, "HomeTeamName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ホームチームテキスト */
        Object.defineProperty(this, "HomeTeamText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ホーム最終行 */
        Object.defineProperty(this, "HomeLastRow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ホーム略称 */
        Object.defineProperty(this, "HomeAbbreviation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** イニング上限 */
        Object.defineProperty(this, "InningLimit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 成績加算 */
        Object.defineProperty(this, "StatsAddition", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ホーム位置 */
        Object.defineProperty(this, "HomePosition", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.GameBaseInfoModel = GameBaseInfoModel;
/**
 * 試合進行中情報
 */
class GameProgressInfoModel {
    constructor() {
        /** 試合開始成否 */
        Object.defineProperty(this, "IsStarted", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 現在のイニング */
        Object.defineProperty(this, "NowInning", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 攻撃中チーム */
        Object.defineProperty(this, "NowAttackTeam", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.GameProgressInfoModel = GameProgressInfoModel;
/**
 * 結果ラジオボタン
 */
class ResultCheckBoxModel {
    constructor() {
        /** ゴロ */
        Object.defineProperty(this, "GroundBall", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** フライ */
        Object.defineProperty(this, "FlyBall", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ライナー */
        Object.defineProperty(this, "LineDrive", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 併殺 */
        Object.defineProperty(this, "DoublePlay", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 見逃三振 */
        Object.defineProperty(this, "LookingStrikeOut", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 空振三振 */
        Object.defineProperty(this, "SwingingStrikeOut", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 四球 */
        Object.defineProperty(this, "FourPitchWalk", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 死球 */
        Object.defineProperty(this, "HitByPitch", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 敬遠 */
        Object.defineProperty(this, "IntentionalWalk", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 邪飛 */
        Object.defineProperty(this, "FoulFly", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 犠飛 */
        Object.defineProperty(this, "SacrificeFly", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 犠打 */
        Object.defineProperty(this, "SacrificeBunt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 犠打失策 */
        Object.defineProperty(this, "SacrificeBuntError", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 犠打野選 */
        Object.defineProperty(this, "SacrificeBuntFC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 安打 */
        Object.defineProperty(this, "SingleHit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 二塁打 */
        Object.defineProperty(this, "TwoBaseHit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 三塁打 */
        Object.defineProperty(this, "ThreeBaseHit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 本塁打 */
        Object.defineProperty(this, "HomeRun", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 失策 */
        Object.defineProperty(this, "Error", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 野選 */
        Object.defineProperty(this, "FieldersChoice", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 振り逃げ */
        Object.defineProperty(this, "UncaughtThirdStrike", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 打撃妨害 */
        Object.defineProperty(this, "Interference", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 走塁妨害 */
        Object.defineProperty(this, "Obstruction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 未選択 */
        Object.defineProperty(this, "UnSelected", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.ResultCheckBoxModel = ResultCheckBoxModel;
/**
 * 結果オプションモデル
 */
class ResultOptionCheckBoxModel {
    constructor() {
        /** 打者出塁 */
        Object.defineProperty(this, "BatterOnBase", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** +失策 */
        Object.defineProperty(this, "PlusError", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.ResultOptionCheckBoxModel = ResultOptionCheckBoxModel;
/**
 * 結果守備位置
 */
class ResultPositionCheckBoxModel {
    constructor() {
        /** 投手 */
        Object.defineProperty(this, "P", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 捕手 */
        Object.defineProperty(this, "C", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 一塁手 */
        Object.defineProperty(this, "FB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 二塁手 */
        Object.defineProperty(this, "SB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 三塁手 */
        Object.defineProperty(this, "TB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 遊撃手 */
        Object.defineProperty(this, "SS", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 左翼手 */
        Object.defineProperty(this, "LF", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 中堅手 */
        Object.defineProperty(this, "CF", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 右翼手 */
        Object.defineProperty(this, "RF", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 左中間 */
        Object.defineProperty(this, "LeftCenter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 右中間 */
        Object.defineProperty(this, "RightCenter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.ResultPositionCheckBoxModel = ResultPositionCheckBoxModel;
/**
 * 試合経過ログモデル
 */
class GameProgressLogModel {
    constructor() {
        /** 試合情報 */
        Object.defineProperty(this, "GameInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ビジター選手 */
        Object.defineProperty(this, "VisitorMemberList", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ビジター出場選手 */
        Object.defineProperty(this, "VisitorParticipationMember", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ビジター打席結果リスト */
        Object.defineProperty(this, "VisterBattingResult", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ビジター投手情報リスト */
        Object.defineProperty(this, "VisitorPitcherInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ホーム選手 */
        Object.defineProperty(this, "HomeMemberList", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ホーム出場選手 */
        Object.defineProperty(this, "HomeParticipationMember", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ホーム打席結果リスト */
        Object.defineProperty(this, "HomeBattingResult", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ホーム投手情報リスト */
        Object.defineProperty(this, "HomePitcherInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ランニングスコア */
        Object.defineProperty(this, "RunningScore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 表示用スコア */
        Object.defineProperty(this, "DispScore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** カウント */
        Object.defineProperty(this, "Count", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 打者成績 */
        Object.defineProperty(this, "BatterStats", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 守備位置 */
        Object.defineProperty(this, "Position", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 投手情報 */
        Object.defineProperty(this, "PitcherInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 走者 */
        Object.defineProperty(this, "Runner", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 走者状態 */
        Object.defineProperty(this, "RunnerState", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 打席結果 */
        Object.defineProperty(this, "BattingResult", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.GameProgressLogModel = GameProgressLogModel;
/**
 * 得点経過モデル
 */
class ScoreProgressModel {
    constructor() {
        /** イニング */
        Object.defineProperty(this, "Inning", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** キー選手 */
        Object.defineProperty(this, "KeyPlayer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** キープレイ守備位置 */
        Object.defineProperty(this, "KeyPlayPosition", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** キープレイ */
        Object.defineProperty(this, "KeyPlay", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 同点、逆転、勝ち越し */
        Object.defineProperty(this, "Lead", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ビジター得点 */
        Object.defineProperty(this, "VisitorScore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ホーム得点 */
        Object.defineProperty(this, "HomeScore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.ScoreProgressModel = ScoreProgressModel;
//# sourceMappingURL=game-model.js.map