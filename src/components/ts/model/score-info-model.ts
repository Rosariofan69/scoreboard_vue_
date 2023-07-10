/**
 * 表示用ランニングスコア
 */
export class DispRunningScoreModel {
    /** 1回表 */
    TopOfThe1: number;
    /** 1回裏 */
    BottomOfThe1: number;
    /** 2回表 */
    TopOfThe2: number;
    /** 2回裏 */
    BottomOfThe2: number;
    /** 3回表 */
    TopOfThe3: number;
    /** 3回裏 */
    BottomOfThe3: number;
    /** 4回表 */
    TopOfThe4: number;
    /** 4回裏 */
    BottomOfThe4: number;
    /** 5回表 */
    TopOfThe5: number;
    /** 5回裏 */
    BottomOfThe5: number;
    /** 6回表 */
    TopOfThe6: number;
    /** 6回裏 */
    BottomOfThe6: number;
    /** 7回表 */
    TopOfThe7: number;
    /** 7回裏 */
    BottomOfThe7: number;
    /** 8回表 */
    TopOfThe8: number;
    /** 8回裏 */
    BottomOfThe8: number;
    /** 9回表 */
    TopOfThe9: number;
    /** 9回裏 */
    BottomOfThe9: number;
    /** 10回表 */
    TopOfThe10: number;
    /** 10回裏 */
    BottomOfThe10: number;
    /** 11回表 */
    TopOfThe11: number;
    /** 11回裏 */
    BottomOfThe11: number;
    /** 12回表 */
    TopOfThe12: number;
    /** 12回裏 */
    BottomOfThe12: number;
}

/**
 * 表示用ランニングスコアタイトル
 */
export class DispRunningScoreTitleModel {
    /** 1回 */
    The1: number;
    /** 2回 */
    The2: number;
    /** 3回 */
    The3: number;
    /** 4回 */
    The4: number;
    /** 5回 */
    The5: number;
    /** 6回 */
    The6: number;
    /** 7回 */
    The7: number;
    /** 8回 */
    The8: number;
    /** 9回 */
    The9: number;
}

/**
 * ランニングスコア
 */
export class RunningScoreModel {
    /** ビジタースコア */
    VisiterScore: number[];
    /** ホームスコア */
    HomeScore: number[];
    /** 枠表示 */
    Frame: number;
    /** ビジター合計 */
    VisiterR: number;
    /** ホーム合計 */
    HomeR: number;
    /** ビジター安打 */
    VisiterH: number;
    /** ホーム安打 */
    HomeH: number;
    /** ビジター失策 */
    VisiterE: number;
    /** ホーム失策 */
    HomeE: number;
    /** ビジター残塁 */
    VisiterLOB: number;
    /** ホーム残塁 */
    HomeLOB: number;
}

/**
 * カウント
 */
export class CountModel {
    /** ボール */
    Ball: number;
    /** ストライク */
    Strike: number;
    /** アウト */
    Out: number;
}

/**
 * 判定
 */
export class JudgeModel {
    /** 安打 */
    Hit: boolean;
    /** 失策 */
    Error: boolean;
    /** 野選 */
    FieldersChoice: boolean;
}