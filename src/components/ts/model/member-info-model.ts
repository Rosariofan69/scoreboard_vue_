/** 
 * 初期取得選手情報
 */
export class DefaultMemberModel {
    /** ID */
    Id: string;
    /** 背番号 */
    Number: string;
    /** 登録名 */
    Name: string;
    /** フルネーム */
    FullName: string;
    /** 行番号 */
    RowNumber: number;
}

/** 
 * 出場選手情報
 */
export class ParticipationMemberModel {
    /** 背番号 */
    Number: string;
    /** 守備位置 */
    Position: string;
    /** 名前 */
    Name: string;
    /** フルネーム */
    FullName: string;
    /** 行番号 */
    RowNumber: number;
    /** 表示状態 */
    DispStatus: ParticipationMemberDispStatus = new ParticipationMemberDispStatus();
}

/**
 * 出場選手表示状態
 */
class ParticipationMemberDispStatus {
    /** 表示 */
    Display = false;
    /** 標準 */
    Basic = false;
    /** 打者 */
    Batter = false;
    /** 走者 */
    Runner = false;
    /** 次回先頭 */
    NextRead = false;
    /** 交代前 */
    ChangeBefore = false;
    /** 交代後 */
    ChangeAfter = false;
}

/** 
 * 出場選手情報（1チーム単位）
 */
export class ParticipationMemberPerTeamModel {
    /** 1番 */
    LeadOff: ParticipationMemberModel = new ParticipationMemberModel();
    /** 2番 */
    Second: ParticipationMemberModel = new ParticipationMemberModel();
    /** 3番 */
    Third: ParticipationMemberModel = new ParticipationMemberModel();
    /** 4番 */
    Fourth: ParticipationMemberModel = new ParticipationMemberModel();
    /** 5番 */
    Fifth: ParticipationMemberModel = new ParticipationMemberModel();
    /** 6番 */
    Sixth: ParticipationMemberModel = new ParticipationMemberModel();
    /** 7番 */
    Seventh: ParticipationMemberModel = new ParticipationMemberModel();
    /** 8番 */
    Eighth: ParticipationMemberModel = new ParticipationMemberModel();
    /** 9番 */
    Ninth: ParticipationMemberModel = new ParticipationMemberModel();
    /** 投手 */
    Pitcher: ParticipationMemberModel = new ParticipationMemberModel();
}

/**
 * 打者成績
 */
export class BatterStatsModel {
    /** 背番号 */
    Number: number;
    /** 名前 */
    Name: string;
    /** 打率 */
    AVG: string;
    /** 打数-安打 */
    AB_H: string;
    /** 本塁打 */
    HR: number;
    /** 打点 */
    RBI: number;
    /** 盗塁 */
    SB: number;
    /** 出塁率 */
    OBP: string;
    /** OPS */
    OPS: string;
    /** RC27 */
    RC27: number;
}

/**
 * 投手成績
 */
export class PitcherInfoModel {
    /** 背番号 */
    Number: string;
    /** 名前 */
    Name: string;
    /** フルネーム */
    FullName: string;
    /** 投球数 */
    PitchCount = 0;
    /** この打席 */
    ThisAtBat = 0;
    /** 奪三振 */
    SO = 0;
    /** 与四球 */
    BB = 0;
}

/**
 * 打席結果
 */
export class AtBatResultModel {
    /** イニング */
    Inning: number;
    /** 結果 */
    Result: string;
}

/** 選手成績 */
export class BattingResultAtGameModel {
    /** 背番号 */
    Number: string;
    /** 守備位置 */
    Position: string;
    /** 名前 */
    Name: string;
    /** 打席結果 */
    AtBatResult: AtBatResultModel[] = [];
}

/**
 * 選手成績（1チーム単位）
 */
export class BattingResultPerTeamModel {
    /** 1番 */
    LeadOff: BattingResultAtGameModel[] = [];
    /** 2番 */
    Second: BattingResultAtGameModel[] = [];
    /** 3番 */
    Third: BattingResultAtGameModel[] = [];
    /** 4番 */
    Fourth: BattingResultAtGameModel[] = [];
    /** 5番 */
    Fifth: BattingResultAtGameModel[] = [];
    /** 6番 */
    Sixth: BattingResultAtGameModel[] = [];
    /** 7番 */
    Seventh: BattingResultAtGameModel[] = [];
    /** 8番 */
    Eighth: BattingResultAtGameModel[] = [];
    /** 9番 */
    Ninth: BattingResultAtGameModel[] = [];
}

/**
 * 走者の状態
 */
export class RunnerStateModel {
    /** 1塁 */
    First: boolean;
    /** 2塁 */
    Second: boolean;
    /** 3塁 */
    Third: boolean;
}

export class RunnerName {
    /** 打順 */
    Order: number;
    /** 名前 */
    Name: string;
}

/**
 * 走者の名前
 */
export class RunnerNameModel {
    /** 打者 */
    Batter: RunnerName = new RunnerName();
    /** 1塁 */
    First: RunnerName = new RunnerName();
    /** 2塁 */
    Second: RunnerName = new RunnerName();
    /** 3塁 */
    Third: RunnerName = new RunnerName();
}

/**
 * 守備位置
 */
export class PositionModel {
    /** 投手 */
    P: string;
    /** 捕手 */
    C: string;
    /** 一塁手 */
    FB: string;
    /** 二塁手 */
    SB: string;
    /** 三塁手 */
    TB: string;
    /** 遊撃手 */
    SS: string;
    /** 左翼手 */
    LF: string;
    /** 中堅手 */
    CF: string;
    /** 右翼手 */
    RF: string;
}

/**
 * 審判
 */
export class UmpireModel {
    /** 球審 */
    PL: string;
    /** 1塁 */
    FB: string;
    /** 2塁 */
    SB: string;
    /** 3塁 */
    TB: string;
    /** 左翼 */
    LL: string;
    /** 右翼 */
    RL: string;
}

/**
 * 入力欄変更状況
 */
interface InputIsChangedModel {
    /** 守備位置 */
    Position: boolean;
    /** 背番号 */
    Number: boolean;
}

/**
 * 入力欄変更状況（チーム単位）
 */
export class InputIsChangedPerTeamModel {
    /** 1番 */
    LeadOff: InputIsChangedModel;
    /** 2番 */
    Second: InputIsChangedModel;
    /** 3番 */
    Third: InputIsChangedModel;
    /** 4番 */
    Fourth: InputIsChangedModel;
    /** 5番 */
    Fifth: InputIsChangedModel;
    /** 6番 */
    Sixth: InputIsChangedModel;
    /** 7番 */
    Seventh: InputIsChangedModel;
    /** 8番 */
    Eighth: InputIsChangedModel;
    /** 9番 */
    Ninth: InputIsChangedModel;
    /** 投手 */
    Pitcher: InputIsChangedModel;
}

/**
 * 入力欄
 */
export class InputVModel {
    /** 守備位置 */
    Position: string;
    /** 背番号 */
    Number: string;
}

/**
 * 入力欄（チーム単位）
 */
export class InputVTeamModel {
    /** 1番 */
    LeadOff: InputVModel = new InputVModel();
    /** 2番 */
    Second: InputVModel = new InputVModel();
    /** 3番 */
    Third: InputVModel = new InputVModel();
    /** 4番 */
    Fourth: InputVModel = new InputVModel();
    /** 5番 */
    Fifth: InputVModel = new InputVModel();
    /** 6番 */
    Sixth: InputVModel = new InputVModel();
    /** 7番 */
    Seventh: InputVModel = new InputVModel();
    /** 8番 */
    Eighth: InputVModel = new InputVModel();
    /** 9番 */
    Ninth: InputVModel = new InputVModel();
    /** 投手 */
    Pitcher: InputVModel = new InputVModel();
}