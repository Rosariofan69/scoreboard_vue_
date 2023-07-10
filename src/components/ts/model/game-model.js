"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameProgressInfoModel = exports.GameBaseInfoModel = exports.GameInfoModel = void 0;
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
class GameBaseInfoModel {
    constructor() {
        /** ビジターチーム名 */
        Object.defineProperty(this, "VisiterTeamName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ビジターチームテキスト */
        Object.defineProperty(this, "VisiterTeamText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ビジター最終行 */
        Object.defineProperty(this, "VisiterLastRow", {
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
        /** イニング上限 */
        Object.defineProperty(this, "InningLimit", {
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
//# sourceMappingURL=game-model.js.map