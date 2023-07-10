"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UmpireDesignModel = exports.ScoreDesignModel = exports.PitcherStatsDesignModel = exports.PitcherStatsDesignSendModel = exports.PositionDesignModel = exports.PositionDesignSendModel = exports.FielderStatsDesignModel = exports.FielderStatsDesignSendModel = exports.MemberDesignModel = exports.DesignModel = void 0;
/**
 * デザインのモデル
 */
class DesignModel {
    constructor() {
        Object.defineProperty(this, "VisiterMember", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new MemberDesignModel()
        });
        Object.defineProperty(this, "HomeMember", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new MemberDesignModel()
        });
        Object.defineProperty(this, "FielderStats", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "Position", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "PitcherStats", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "Score", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "BackGroundColor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "Umpire", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.DesignModel = DesignModel;
/**
 * メンバーのデザインモデル
 */
class MemberDesignModel {
    constructor() {
        /** チーム名（メンバー） - 文字 */
        Object.defineProperty(this, "TeamNameText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** チーム名（メンバー） - 背景 */
        Object.defineProperty(this, "TeamNameBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 下線 */
        Object.defineProperty(this, "UnderLine", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 斜線 */
        Object.defineProperty(this, "DiagonalLine", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 上線 */
        Object.defineProperty(this, "UpperLine", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 守備位置（標準） - 文字 */
        Object.defineProperty(this, "PositionBasicText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 守備位置（標準） - 背景 */
        Object.defineProperty(this, "PositionBasicBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 名前（標準） - 文字 */
        Object.defineProperty(this, "NameBasicText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 名前（標準） - 背景 */
        Object.defineProperty(this, "NameBasicBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 守備位置（打者） - 文字 */
        Object.defineProperty(this, "PositionBatterText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 守備位置（打者） - 背景 */
        Object.defineProperty(this, "PositionBatterBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 名前（打者） - 文字 */
        Object.defineProperty(this, "NameBatterText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 名前（打者） - 背景 */
        Object.defineProperty(this, "NameBatterBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 守備位置（走者） - 文字 */
        Object.defineProperty(this, "PositionRunnerText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 守備位置（走者） - 背景 */
        Object.defineProperty(this, "PositionRunnerBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 名前（走者） - 文字 */
        Object.defineProperty(this, "NameRunnerText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 名前（走者） - 背景 */
        Object.defineProperty(this, "NameRunnerBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 守備位置（次回先頭） - 文字 */
        Object.defineProperty(this, "PositionNextText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 守備位置（次回先頭） - 背景 */
        Object.defineProperty(this, "PositionNextBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 名前（次回先頭） - 文字 */
        Object.defineProperty(this, "NameNextText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 名前（次回先頭） - 背景 */
        Object.defineProperty(this, "NameNextBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 交代時 */
        Object.defineProperty(this, "Change", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.MemberDesignModel = MemberDesignModel;
/**
 * 野手成績の送信用デザインモデル
 */
class FielderStatsDesignSendModel {
    constructor() {
        /** ビジター */
        Object.defineProperty(this, "Visiter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ホーム */
        Object.defineProperty(this, "Home", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.FielderStatsDesignSendModel = FielderStatsDesignSendModel;
/**
 * 野手成績のデザインモデル
 */
class FielderStatsDesignModel {
    constructor() {
        /** 文字 */
        Object.defineProperty(this, "Text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 背景 */
        Object.defineProperty(this, "BGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.FielderStatsDesignModel = FielderStatsDesignModel;
/**
 * ポジション（守備表示）の送信用デザインモデル
 */
class PositionDesignSendModel {
    constructor() {
        /** ビジター */
        Object.defineProperty(this, "Visiter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ホーム */
        Object.defineProperty(this, "Home", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.PositionDesignSendModel = PositionDesignSendModel;
/**
 * ポジション（守備表示）のデザインモデル
 */
class PositionDesignModel {
    constructor() {
        /** 野手 - 文字 */
        Object.defineProperty(this, "FielderText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 野手 - 背景 */
        Object.defineProperty(this, "FielderBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 走者 - 文字 */
        Object.defineProperty(this, "RunnerText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 走者 - 背景 */
        Object.defineProperty(this, "RunnerBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.PositionDesignModel = PositionDesignModel;
/**
 * 投手成績の送信用デザインモデル
 */
class PitcherStatsDesignSendModel {
    constructor() {
        /** ビジター */
        Object.defineProperty(this, "Visiter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ホーム */
        Object.defineProperty(this, "Home", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.PitcherStatsDesignSendModel = PitcherStatsDesignSendModel;
/**
 * 投手成績のデザインモデル
 */
class PitcherStatsDesignModel {
    constructor() {
        /** 文字 */
        Object.defineProperty(this, "Text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 背景 */
        Object.defineProperty(this, "BGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.PitcherStatsDesignModel = PitcherStatsDesignModel;
/**
 * スコアのデザインモデル
 */
class ScoreDesignModel {
    constructor() {
        /** ビジターチーム名 - 文字 */
        Object.defineProperty(this, "VisiterTeamNameText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ビジターチーム名 - 背景 */
        Object.defineProperty(this, "VisiterTeamNameBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ホームチーム名 - 文字 */
        Object.defineProperty(this, "HomeTeamNameText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ホームチーム名 - 背景 */
        Object.defineProperty(this, "HomeTeamNameBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** スコア（奇数回） - 文字 */
        Object.defineProperty(this, "ScoreOddText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** スコア（奇数回） - 背景 */
        Object.defineProperty(this, "ScoreOddBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** スコア（奇数回） - 文字 */
        Object.defineProperty(this, "ScoreEvenText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** スコア（奇数回） - 背景 */
        Object.defineProperty(this, "ScoreEvenBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** スコア（R） - 文字 */
        Object.defineProperty(this, "ScoreRunText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** スコア（R） - 背景 */
        Object.defineProperty(this, "ScoreRunBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** スコアタイトル（R以外） - 文字 */
        Object.defineProperty(this, "ScoreTitleText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** スコアタイトル（R以外） - 背景 */
        Object.defineProperty(this, "ScoreTitleBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** スコアタイトル（R） - 文字 */
        Object.defineProperty(this, "ScoreTitleRunText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** スコアタイトル（R） - 背景 */
        Object.defineProperty(this, "ScoreTitleRunBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** スコア枠 */
        Object.defineProperty(this, "ScoreFrame", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** その他の枠 */
        Object.defineProperty(this, "OtherFrame", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.ScoreDesignModel = ScoreDesignModel;
/**
 * 審判のデザインモデル
 */
class UmpireDesignModel {
    constructor() {
        /** 位置 - 文字 */
        Object.defineProperty(this, "PositionText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 位置 - 背景 */
        Object.defineProperty(this, "PositionBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 名前 - 文字 */
        Object.defineProperty(this, "NameText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 名前 - 背景 */
        Object.defineProperty(this, "NameBGC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.UmpireDesignModel = UmpireDesignModel;
//# sourceMappingURL=design-model.js.map