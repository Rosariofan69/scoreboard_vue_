export class DispScoreModel {
    /** タイトル */
    Title: DispRunningScoreTitleModel = new DispRunningScoreTitleModel();
    /** スコア */
    Score: DispRunningScoreModel = new DispRunningScoreModel();
}

/**
 * 表示用ランニングスコア
 */
export class DispRunningScoreModel {
    /** 1回表 */
    TopOfThe1: string;
    /** 1回裏 */
    BottomOfThe1: string;
    /** 2回表 */
    TopOfThe2: string;
    /** 2回裏 */
    BottomOfThe2: string;
    /** 3回表 */
    TopOfThe3: string;
    /** 3回裏 */
    BottomOfThe3: string;
    /** 4回表 */
    TopOfThe4: string;
    /** 4回裏 */
    BottomOfThe4: string;
    /** 5回表 */
    TopOfThe5: string;
    /** 5回裏 */
    BottomOfThe5: string;
    /** 6回表 */
    TopOfThe6: string;
    /** 6回裏 */
    BottomOfThe6: string;
    /** 7回表 */
    TopOfThe7: string;
    /** 7回裏 */
    BottomOfThe7: string;
    /** 8回表 */
    TopOfThe8: string;
    /** 8回裏 */
    BottomOfThe8: string;
    /** 9回表 */
    TopOfThe9: string;
    /** 9回裏 */
    BottomOfThe9: string;
    /** 10回表 */
    TopOfThe10: string;
    /** 10回裏 */
    BottomOfThe10: string;
    /** 11回表 */
    TopOfThe11: string;
    /** 11回裏 */
    BottomOfThe11: string;
    /** 12回表 */
    TopOfThe12: string;
    /** 12回裏 */
    BottomOfThe12: string;
    /** 得点（ビジター） */
    VisiterR = '0';
    /** 得点（ホーム） */
    HomeR = '0';
    /** 安打（ビジター） */
    VisiterH = '0';
    /** 安打（ホーム） */
    HomeH = '0';
    /** 失策（ビジター） */
    VisiterE = '0';
    /** 失策（ホーム） */
    HomeE = '0';
    /** 残塁（ビジター） */
    VisiterLOB = '0';
    /** 残塁（ホーム） */
    HomeLOB = '0';
}

/**
 * 表示用ランニングスコアタイトル
 */
export class DispRunningScoreTitleModel {
    /** 1回 */
    The1 = 1;
    /** 2回 */
    The2 = 2;
    /** 3回 */
    The3 = 3;
    /** 4回 */
    The4 = 4;
    /** 5回 */
    The5 = 5;
    /** 6回 */
    The6 = 6;
    /** 7回 */
    The7 = 7;
    /** 8回 */
    The8 = 8;
    /** 9回 */
    The9 = 9;
}

/**
 * ランニングスコア
 */
export class RunningScoreModel {
    /** ビジタースコア */
    VisiterScore: number[] = [];
    /** ホームスコア */
    HomeScore: number[] = [];
    /** 枠表示 */
    Frame: number;
    /** ビジター安打 */
    VisiterH = 0;
    /** ホーム安打 */
    HomeH = 0;
    /** ビジター失策 */
    VisiterE = 0;
    /** ホーム失策 */
    HomeE = 0;
    /** ビジター残塁 */
    VisiterLOB = 0;
    /** ホーム残塁 */
    HomeLOB = 0;
}

/**
 * カウント
 */
export class CountModel {
    /** ボール */
    Ball = 0;
    /** ストライク */
    Strike = 0;
    /** アウト */
    Out = 0;
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

/**
 * フレーム用フラグ
 */
export class FrameFlgModel {
    /** 1回表 */
    TopOf1st: boolean;
    /** 2回表 */
    TopOf2nd: boolean;
    /** 3回表 */
    TopOf3rd: boolean;
    /** 4回表 */
    TopOf4th: boolean;
    /** 5回表 */
    TopOf5th: boolean;
    /** 6回表 */
    TopOf6th: boolean;
    /** 7回表 */
    TopOf7th: boolean;
    /** 8回表 */
    TopOf8th: boolean;
    /** 9回表 */
    TopOf9th: boolean;
    /** 10回表 */
    TopOf10th: boolean;
    /** 11回表 */
    TopOf11th: boolean;
    /** 12回表 */
    TopOf12th: boolean;
    /** 1回裏 */
    BottomOf1st: boolean;
    /** 2回裏 */
    BottomOf2nd: boolean;
    /** 3回裏 */
    BottomOf3rd: boolean;
    /** 4回裏 */
    BottomOf4th: boolean;
    /** 5回裏 */
    BottomOf5th: boolean;
    /** 6回裏 */
    BottomOf6th: boolean;
    /** 7回裏 */
    BottomOf7th: boolean;
    /** 8回裏 */
    BottomOf8th: boolean;
    /** 9回裏 */
    BottomOf9th: boolean;
    /** 10回裏 */
    BottomOf10th: boolean;
    /** 11回裏 */
    BottomOf11th: boolean;
    /** 12回裏 */
    BottomOf12th: boolean;
}