import { RunningScoreModel, DispScoreModel, CountModel } from './score-info-model';
import { DefaultMemberModel, ParticipationMemberPerTeamModel, BatterStatsModel, PositionModel, PitcherInfoModel, BattingResultPerTeamModel, RunnerNameModel, RunnerStateModel, DispBatterStatsModel, AtBatResultModel } from './member-info-model';
/**
 * 試合情報
 */
export class GameInfoModel {
    /** 試合基底情報 */
    GameBaseInfo: GameBaseInfoModel = new GameBaseInfoModel();
    /** 試合進行中情報 */
    GameProgressInfo: GameProgressInfoModel = new GameProgressInfoModel();
}

/**
 * 試合基底情報
 */
export class GameBaseInfoModel {
    /** ビジターチーム名 */
    VisitorTeamName: string;
    /** ビジターチームテキスト */
    VisitorTeamText: string;
    /** ビジター最終行 */
    VisitorLastRow: number;
    /** ホームチーム名 */
    HomeTeamName: string;
    /** ホームチームテキスト */
    HomeTeamText: string;
    /** ホーム最終行 */
    HomeLastRow: number;
    /** イニング上限 */
    InningLimit: number;
    /** 成績加算 */
    StatsAddition: string;
    /** ホーム位置 */
    HomePosition: string;
}

/**
 * 試合進行中情報
 */
export class GameProgressInfoModel {
    /** 試合開始成否 */
    IsStarted: boolean;
    /** 現在のイニング */
    NowInning: number;
    /** 攻撃中チーム */
    NowAttackTeam: number;
}

/**
 * 結果ラジオボタン
 */
export class ResultCheckBoxModel {
    /** ゴロ */
    GroundBall: boolean;
    /** フライ */
    FlyBall: boolean;
    /** ライナー */
    LineDrive: boolean;
    /** 併殺 */
    DoublePlay: boolean;
    /** 三振 */
    StrikeOut: boolean;
    /** 四球 */
    FourPitchWalk: boolean;
    /** 死球 */
    HitByPitch: boolean;
    /** 敬遠 */
    IntentionalWalk: boolean;
    /** 邪飛 */
    FoulFly: boolean;
    /** 犠飛 */
    SacrificeFly: boolean;
    /** 犠打 */
    SacrificeBunt: boolean;
    /** 犠打失策 */
    SacrificeBuntError: boolean;
    /** 犠打野選 */
    SacrificeBuntFC: boolean;
    /** 安打 */
    SingleHit: boolean;
    /** 二塁打 */
    TwoBaseHit: boolean;
    /** 三塁打 */
    ThreeBaseHit: boolean;
    /** 本塁打 */
    HomeRun: boolean;
    /** 失策 */
    Error: boolean;
    /** 野選 */
    FieldersChoice: boolean;
    /** 振り逃げ */
    UncaughtThirdStrike: boolean;
    /** 打撃妨害 */
    Interference: boolean;
    /** 走塁妨害 */
    Obstruction: boolean;
    /** 未選択 */
    UnSelected: boolean;
}

/**
 * 結果オプションモデル
 */
export class ResultOptionCheckBoxModel {
    /** 打者出塁 */
    BatterOnBase: boolean;
    /** +失策 */
    PlusError: boolean;
}

/**
 * 結果守備位置
 */
export class ResultPositionCheckBoxModel {
    /** 投手 */
    P: boolean;
    /** 捕手 */
    C: boolean;
    /** 一塁手 */
    FB: boolean;
    /** 二塁手 */
    SB: boolean;
    /** 三塁手 */
    TB: boolean;
    /** 遊撃手 */
    SS: boolean;
    /** 左翼手 */
    LF: boolean;
    /** 中堅手 */
    CF: boolean;
    /** 右翼手 */
    RF: boolean;
    /** 左中間 */
    LeftCenter: boolean;
    /** 右中間 */
    RightCenter: boolean;
}

/**
 * 試合経過ログモデル
 */
export class GameProgressLogModel {
    /** 試合情報 */
    GameInfo: GameInfoModel;
    /** ビジター選手 */
    VisitorMemberList: DefaultMemberModel[];
    /** ビジター出場選手 */
    VisitorParticipationMember: ParticipationMemberPerTeamModel;
    /** ビジター打席結果リスト */
    VisterBattingResult: BattingResultPerTeamModel;
    /** ビジター投手情報リスト */
    VisitorPitcherInfo: PitcherInfoModel[];
    /** ホーム選手 */
    HomeMemberList: DefaultMemberModel[];
    /** ホーム出場選手 */
    HomeParticipationMember: ParticipationMemberPerTeamModel;
    /** ホーム打席結果リスト */
    HomeBattingResult: BattingResultPerTeamModel;
    /** ホーム投手情報リスト */
    HomePitcherInfo: PitcherInfoModel[];
    /** ランニングスコア */
    RunningScore: RunningScoreModel;
    /** 表示用スコア */
    DispScore: DispScoreModel;
    /** カウント */
    Count: CountModel;
    /** 打者成績 */
    BatterStats: DispBatterStatsModel;
    /** 守備位置 */
    Position: PositionModel;
    /** 投手情報 */
    PitcherInfo: PitcherInfoModel;
    /** 走者 */
    Runner: RunnerNameModel;
    /** 走者状態 */
    RunnerState: RunnerStateModel;
    /** 打席結果 */
    BattingResult: AtBatResultModel[];
}