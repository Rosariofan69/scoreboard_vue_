"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeCancelMemberModel = exports.InputVTeamModel = exports.InputVModel = exports.UmpireModel = exports.PositionModel = exports.RunnerNameModel = exports.RunnerName = exports.RunnerStateModel = exports.BattingResultPerTeamModel = exports.BattingResultAtGameModel = exports.AtBatResultModel = exports.PitcherInfoModel = exports.BatterStatsUpdateModel = exports.DispBatterStatsModel = exports.BatterStatsModel = exports.ParticipationMemberPerTeamModel = exports.ParticipationMemberDispStatus = exports.ParticipationMemberModel = exports.DefaultMemberModel = void 0;
/**
 * 初期取得選手情報
 */
class DefaultMemberModel {
    constructor() {
        /** ID */
        Object.defineProperty(this, "Id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 背番号 */
        Object.defineProperty(this, "Number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 登録名 */
        Object.defineProperty(this, "Name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** フルネーム */
        Object.defineProperty(this, "FullName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 行番号 */
        Object.defineProperty(this, "RowNumber", {
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
            value: new BatterStatsModel()
        });
    }
}
exports.DefaultMemberModel = DefaultMemberModel;
/**
 * 出場選手情報
 */
class ParticipationMemberModel {
    constructor() {
        /** ID */
        Object.defineProperty(this, "ID", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 背番号 */
        Object.defineProperty(this, "Number", {
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
        /** 名前 */
        Object.defineProperty(this, "Name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** フルネーム */
        Object.defineProperty(this, "FullName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 行番号 */
        Object.defineProperty(this, "RowNumber", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 表示状態 */
        Object.defineProperty(this, "DispStatus", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new ParticipationMemberDispStatus()
        });
    }
}
exports.ParticipationMemberModel = ParticipationMemberModel;
/**
 * 出場選手表示状態
 */
class ParticipationMemberDispStatus {
    constructor() {
        /** 表示 */
        Object.defineProperty(this, "Display", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 標準 */
        Object.defineProperty(this, "Basic", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 打者 */
        Object.defineProperty(this, "Batter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 走者 */
        Object.defineProperty(this, "Runner", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 次回先頭 */
        Object.defineProperty(this, "NextRead", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 交代前（守備位置のみ） */
        Object.defineProperty(this, "ChangeBeforePisition", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 交代後（守備位置のみ） */
        Object.defineProperty(this, "ChangeAfterPisition", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 交代前（選手） */
        Object.defineProperty(this, "ChangeBeforeMember", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 交代後（選手） */
        Object.defineProperty(this, "ChangeAfterMember", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
}
exports.ParticipationMemberDispStatus = ParticipationMemberDispStatus;
/**
 * 出場選手情報（1チーム単位）
 */
class ParticipationMemberPerTeamModel {
    constructor() {
        /** 1番 */
        Object.defineProperty(this, "LeadOff", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new ParticipationMemberModel()
        });
        /** 2番 */
        Object.defineProperty(this, "Second", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new ParticipationMemberModel()
        });
        /** 3番 */
        Object.defineProperty(this, "Third", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new ParticipationMemberModel()
        });
        /** 4番 */
        Object.defineProperty(this, "Fourth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new ParticipationMemberModel()
        });
        /** 5番 */
        Object.defineProperty(this, "Fifth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new ParticipationMemberModel()
        });
        /** 6番 */
        Object.defineProperty(this, "Sixth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new ParticipationMemberModel()
        });
        /** 7番 */
        Object.defineProperty(this, "Seventh", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new ParticipationMemberModel()
        });
        /** 8番 */
        Object.defineProperty(this, "Eighth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new ParticipationMemberModel()
        });
        /** 9番 */
        Object.defineProperty(this, "Ninth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new ParticipationMemberModel()
        });
        /** 投手 */
        Object.defineProperty(this, "Pitcher", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new ParticipationMemberModel()
        });
    }
}
exports.ParticipationMemberPerTeamModel = ParticipationMemberPerTeamModel;
/**
 * 打者成績
 */
class BatterStatsModel {
    constructor() {
        /** 打率 */
        Object.defineProperty(this, "AVG", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 打数 */
        Object.defineProperty(this, "Atbat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 安打 */
        Object.defineProperty(this, "Hit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 二塁打 */
        Object.defineProperty(this, "Double", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 三塁打 */
        Object.defineProperty(this, "Triple", {
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
        /** 塁打 */
        Object.defineProperty(this, "TotalBases", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 打点 */
        Object.defineProperty(this, "RBI", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 出塁率 */
        Object.defineProperty(this, "OBP", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** OPS */
        Object.defineProperty(this, "OPS", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 三振 */
        Object.defineProperty(this, "SO", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 四球 */
        Object.defineProperty(this, "BB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 死球 */
        Object.defineProperty(this, "HBP", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 犠打 */
        Object.defineProperty(this, "SacBunt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 犠飛 */
        Object.defineProperty(this, "SacFly", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 盗塁 */
        Object.defineProperty(this, "SB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 盗塁死 */
        Object.defineProperty(this, "CS", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 併殺打 */
        Object.defineProperty(this, "DP", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** RC27 */
        Object.defineProperty(this, "RC27", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.BatterStatsModel = BatterStatsModel;
/**
 * 打者成績（表示用）
 */
class DispBatterStatsModel {
    constructor() {
        /** 背番号 */
        Object.defineProperty(this, "Number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 名前 */
        Object.defineProperty(this, "Name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 打率 */
        Object.defineProperty(this, "AVG", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 打数-安打 */
        Object.defineProperty(this, "AB_H", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 本塁打 */
        Object.defineProperty(this, "HR", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 打点 */
        Object.defineProperty(this, "RBI", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 盗塁 */
        Object.defineProperty(this, "SB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 出塁率 */
        Object.defineProperty(this, "OBP", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** OPS */
        Object.defineProperty(this, "OPS", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** RC27 */
        Object.defineProperty(this, "RC27", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.DispBatterStatsModel = DispBatterStatsModel;
/**
 * 打者成績更新用
 */
class BatterStatsUpdateModel {
    constructor() {
        /** 打数 */
        Object.defineProperty(this, "AtBat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** 安打 */
        Object.defineProperty(this, "Hit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** 二塁打 */
        Object.defineProperty(this, "Double", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** 三塁打 */
        Object.defineProperty(this, "Triple", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** 本塁打 */
        Object.defineProperty(this, "HomeRun", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** 打点 */
        Object.defineProperty(this, "RBI", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** 三振 */
        Object.defineProperty(this, "SO", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** 四球 */
        Object.defineProperty(this, "BB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** 死球 */
        Object.defineProperty(this, "HBP", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** 犠打 */
        Object.defineProperty(this, "SacBunt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** 犠飛 */
        Object.defineProperty(this, "SacFly", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** 盗塁 */
        Object.defineProperty(this, "SB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** 盗塁死 */
        Object.defineProperty(this, "CS", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** 併殺打 */
        Object.defineProperty(this, "DP", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
    }
}
exports.BatterStatsUpdateModel = BatterStatsUpdateModel;
/**
 * 投手成績
 */
class PitcherInfoModel {
    constructor() {
        /** ID */
        Object.defineProperty(this, "ID", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 背番号 */
        Object.defineProperty(this, "Number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 名前 */
        Object.defineProperty(this, "Name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** フルネーム */
        Object.defineProperty(this, "FullName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 投球数 */
        Object.defineProperty(this, "PitchCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** この打席 */
        Object.defineProperty(this, "ThisAtBat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** 奪三振 */
        Object.defineProperty(this, "SO", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** 与四球 */
        Object.defineProperty(this, "BB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
    }
}
exports.PitcherInfoModel = PitcherInfoModel;
/**
 * 打席結果
 */
class AtBatResultModel {
    constructor() {
        /** イニング */
        Object.defineProperty(this, "Inning", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 結果 */
        Object.defineProperty(this, "Result", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.AtBatResultModel = AtBatResultModel;
/** 選手成績 */
class BattingResultAtGameModel {
    constructor() {
        /** ID */
        Object.defineProperty(this, "ID", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 背番号 */
        Object.defineProperty(this, "Number", {
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
        /** 名前 */
        Object.defineProperty(this, "Name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 打席結果 */
        Object.defineProperty(this, "AtBatResult", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
}
exports.BattingResultAtGameModel = BattingResultAtGameModel;
/**
 * 選手成績（1チーム単位）
 */
class BattingResultPerTeamModel {
    constructor() {
        /** 1番 */
        Object.defineProperty(this, "LeadOff", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        /** 2番 */
        Object.defineProperty(this, "Second", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        /** 3番 */
        Object.defineProperty(this, "Third", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        /** 4番 */
        Object.defineProperty(this, "Fourth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        /** 5番 */
        Object.defineProperty(this, "Fifth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        /** 6番 */
        Object.defineProperty(this, "Sixth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        /** 7番 */
        Object.defineProperty(this, "Seventh", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        /** 8番 */
        Object.defineProperty(this, "Eighth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        /** 9番 */
        Object.defineProperty(this, "Ninth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
}
exports.BattingResultPerTeamModel = BattingResultPerTeamModel;
/**
 * 走者の状態
 */
class RunnerStateModel {
    constructor() {
        /** 1塁 */
        Object.defineProperty(this, "First", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 2塁 */
        Object.defineProperty(this, "Second", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 3塁 */
        Object.defineProperty(this, "Third", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.RunnerStateModel = RunnerStateModel;
class RunnerName {
    constructor() {
        /** 打順 */
        Object.defineProperty(this, "Order", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 名前 */
        Object.defineProperty(this, "Name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.RunnerName = RunnerName;
/**
 * 走者の名前
 */
class RunnerNameModel {
    constructor() {
        /** 打者 */
        Object.defineProperty(this, "Batter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new RunnerName()
        });
        /** 1塁 */
        Object.defineProperty(this, "First", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new RunnerName()
        });
        /** 2塁 */
        Object.defineProperty(this, "Second", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new RunnerName()
        });
        /** 3塁 */
        Object.defineProperty(this, "Third", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new RunnerName()
        });
    }
}
exports.RunnerNameModel = RunnerNameModel;
/**
 * 守備位置
 */
class PositionModel {
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
    }
}
exports.PositionModel = PositionModel;
/**
 * 審判
 */
class UmpireModel {
    constructor() {
        /** 球審 */
        Object.defineProperty(this, "PL", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 1塁 */
        Object.defineProperty(this, "FB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 2塁 */
        Object.defineProperty(this, "SB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 3塁 */
        Object.defineProperty(this, "TB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 左翼 */
        Object.defineProperty(this, "LL", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 右翼 */
        Object.defineProperty(this, "RL", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.UmpireModel = UmpireModel;
/**
 * 入力欄
 */
class InputVModel {
    constructor() {
        /** 守備位置 */
        Object.defineProperty(this, "Position", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID */
        Object.defineProperty(this, "ID", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.InputVModel = InputVModel;
/**
 * 入力欄（チーム単位）
 */
class InputVTeamModel {
    constructor() {
        /** 1番 */
        Object.defineProperty(this, "LeadOff", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new InputVModel()
        });
        /** 2番 */
        Object.defineProperty(this, "Second", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new InputVModel()
        });
        /** 3番 */
        Object.defineProperty(this, "Third", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new InputVModel()
        });
        /** 4番 */
        Object.defineProperty(this, "Fourth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new InputVModel()
        });
        /** 5番 */
        Object.defineProperty(this, "Fifth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new InputVModel()
        });
        /** 6番 */
        Object.defineProperty(this, "Sixth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new InputVModel()
        });
        /** 7番 */
        Object.defineProperty(this, "Seventh", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new InputVModel()
        });
        /** 8番 */
        Object.defineProperty(this, "Eighth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new InputVModel()
        });
        /** 9番 */
        Object.defineProperty(this, "Ninth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new InputVModel()
        });
        /** 投手 */
        Object.defineProperty(this, "Pitcher", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new InputVModel()
        });
    }
}
exports.InputVTeamModel = InputVTeamModel;
/**
 * 選手交代取消モデル
 */
class ChangeCancelMemberModel {
    constructor() {
        /** 1番 */
        Object.defineProperty(this, "LeadOff", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 2番 */
        Object.defineProperty(this, "Second", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 3番 */
        Object.defineProperty(this, "Third", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 4番 */
        Object.defineProperty(this, "Fourth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 5番 */
        Object.defineProperty(this, "Fifth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 6番 */
        Object.defineProperty(this, "Sixth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 7番 */
        Object.defineProperty(this, "Seventh", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 8番 */
        Object.defineProperty(this, "Eighth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 9番 */
        Object.defineProperty(this, "Ninth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** 投手 */
        Object.defineProperty(this, "Pitcher", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
}
exports.ChangeCancelMemberModel = ChangeCancelMemberModel;
//# sourceMappingURL=member-info-model.js.map