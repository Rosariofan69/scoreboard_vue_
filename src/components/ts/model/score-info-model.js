"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameFlgModel = exports.JudgeModel = exports.CountModel = exports.RunningScoreModel = exports.DispRunningScoreTitleModel = exports.DispRunningScoreModel = exports.DispScoreModel = void 0;
class DispScoreModel {
    constructor() {
        /** タイトル */
        Object.defineProperty(this, "Title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new DispRunningScoreTitleModel()
        });
        /** スコア */
        Object.defineProperty(this, "Score", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new DispRunningScoreModel()
        });
    }
}
exports.DispScoreModel = DispScoreModel;
/**
 * 表示用ランニングスコア
 */
class DispRunningScoreModel {
    constructor() {
        /** 1回表 */
        Object.defineProperty(this, "TopOfThe1", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 1回裏 */
        Object.defineProperty(this, "BottomOfThe1", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 2回表 */
        Object.defineProperty(this, "TopOfThe2", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 2回裏 */
        Object.defineProperty(this, "BottomOfThe2", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 3回表 */
        Object.defineProperty(this, "TopOfThe3", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 3回裏 */
        Object.defineProperty(this, "BottomOfThe3", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 4回表 */
        Object.defineProperty(this, "TopOfThe4", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 4回裏 */
        Object.defineProperty(this, "BottomOfThe4", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 5回表 */
        Object.defineProperty(this, "TopOfThe5", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 5回裏 */
        Object.defineProperty(this, "BottomOfThe5", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 6回表 */
        Object.defineProperty(this, "TopOfThe6", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 6回裏 */
        Object.defineProperty(this, "BottomOfThe6", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 7回表 */
        Object.defineProperty(this, "TopOfThe7", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 7回裏 */
        Object.defineProperty(this, "BottomOfThe7", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 8回表 */
        Object.defineProperty(this, "TopOfThe8", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 8回裏 */
        Object.defineProperty(this, "BottomOfThe8", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 9回表 */
        Object.defineProperty(this, "TopOfThe9", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 9回裏 */
        Object.defineProperty(this, "BottomOfThe9", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 10回表 */
        Object.defineProperty(this, "TopOfThe10", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 10回裏 */
        Object.defineProperty(this, "BottomOfThe10", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 11回表 */
        Object.defineProperty(this, "TopOfThe11", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 11回裏 */
        Object.defineProperty(this, "BottomOfThe11", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 12回表 */
        Object.defineProperty(this, "TopOfThe12", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 12回裏 */
        Object.defineProperty(this, "BottomOfThe12", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 得点（ビジター） */
        Object.defineProperty(this, "VisitorR", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: '0'
        });
        /** 得点（ホーム） */
        Object.defineProperty(this, "HomeR", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: '0'
        });
        /** 安打（ビジター） */
        Object.defineProperty(this, "VisitorH", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: '0'
        });
        /** 安打（ホーム） */
        Object.defineProperty(this, "HomeH", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: '0'
        });
        /** 失策（ビジター） */
        Object.defineProperty(this, "VisitorE", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: '0'
        });
        /** 失策（ホーム） */
        Object.defineProperty(this, "HomeE", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: '0'
        });
        /** 残塁（ビジター） */
        Object.defineProperty(this, "VisitorLOB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: '0'
        });
        /** 残塁（ホーム） */
        Object.defineProperty(this, "HomeLOB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: '0'
        });
    }
}
exports.DispRunningScoreModel = DispRunningScoreModel;
/**
 * 表示用ランニングスコアタイトル
 */
class DispRunningScoreTitleModel {
    constructor() {
        /** 1回 */
        Object.defineProperty(this, "The1", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 1
        });
        /** 2回 */
        Object.defineProperty(this, "The2", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 2
        });
        /** 3回 */
        Object.defineProperty(this, "The3", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 3
        });
        /** 4回 */
        Object.defineProperty(this, "The4", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 4
        });
        /** 5回 */
        Object.defineProperty(this, "The5", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 5
        });
        /** 6回 */
        Object.defineProperty(this, "The6", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 6
        });
        /** 7回 */
        Object.defineProperty(this, "The7", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 7
        });
        /** 8回 */
        Object.defineProperty(this, "The8", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 8
        });
        /** 9回 */
        Object.defineProperty(this, "The9", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 9
        });
    }
}
exports.DispRunningScoreTitleModel = DispRunningScoreTitleModel;
/**
 * ランニングスコア
 */
class RunningScoreModel {
    constructor() {
        /** ビジタースコア */
        Object.defineProperty(this, "VisitorScore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        /** ホームスコア */
        Object.defineProperty(this, "HomeScore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        /** 枠表示 */
        Object.defineProperty(this, "Frame", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ビジター安打 */
        Object.defineProperty(this, "VisitorH", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** ホーム安打 */
        Object.defineProperty(this, "HomeH", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** ビジター失策 */
        Object.defineProperty(this, "VisitorE", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** ホーム失策 */
        Object.defineProperty(this, "HomeE", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** ビジター残塁 */
        Object.defineProperty(this, "VisitorLOB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** ホーム残塁 */
        Object.defineProperty(this, "HomeLOB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
    }
}
exports.RunningScoreModel = RunningScoreModel;
/**
 * カウント
 */
class CountModel {
    constructor() {
        /** ボール */
        Object.defineProperty(this, "Ball", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** ストライク */
        Object.defineProperty(this, "Strike", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** アウト */
        Object.defineProperty(this, "Out", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
    }
}
exports.CountModel = CountModel;
/**
 * 判定
 */
class JudgeModel {
    constructor() {
        /** 安打 */
        Object.defineProperty(this, "Hit", {
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
    }
}
exports.JudgeModel = JudgeModel;
/**
 * フレーム用フラグ
 */
class FrameFlgModel {
    constructor() {
        /** 1回表 */
        Object.defineProperty(this, "TopOf1st", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 2回表 */
        Object.defineProperty(this, "TopOf2nd", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 3回表 */
        Object.defineProperty(this, "TopOf3rd", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 4回表 */
        Object.defineProperty(this, "TopOf4th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 5回表 */
        Object.defineProperty(this, "TopOf5th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 6回表 */
        Object.defineProperty(this, "TopOf6th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 7回表 */
        Object.defineProperty(this, "TopOf7th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 8回表 */
        Object.defineProperty(this, "TopOf8th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 9回表 */
        Object.defineProperty(this, "TopOf9th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 10回表 */
        Object.defineProperty(this, "TopOf10th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 11回表 */
        Object.defineProperty(this, "TopOf11th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 12回表 */
        Object.defineProperty(this, "TopOf12th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 1回裏 */
        Object.defineProperty(this, "BottomOf1st", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 2回裏 */
        Object.defineProperty(this, "BottomOf2nd", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 3回裏 */
        Object.defineProperty(this, "BottomOf3rd", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 4回裏 */
        Object.defineProperty(this, "BottomOf4th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 5回裏 */
        Object.defineProperty(this, "BottomOf5th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 6回裏 */
        Object.defineProperty(this, "BottomOf6th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 7回裏 */
        Object.defineProperty(this, "BottomOf7th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 8回裏 */
        Object.defineProperty(this, "BottomOf8th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 9回裏 */
        Object.defineProperty(this, "BottomOf9th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 10回裏 */
        Object.defineProperty(this, "BottomOf10th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 11回裏 */
        Object.defineProperty(this, "BottomOf11th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 12回裏 */
        Object.defineProperty(this, "BottomOf12th", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.FrameFlgModel = FrameFlgModel;
//# sourceMappingURL=score-info-model.js.map