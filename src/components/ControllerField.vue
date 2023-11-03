<template>
  <div id="Control-Visiter" class="Control-Section">
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">1</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.LeadOff.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.LeadOff.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">2</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Second.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Second.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">3</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Third.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Third.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">4</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Fourth.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Fourth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">5</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Fifth.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Fifth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">6</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Sixth.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Sixth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">7</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Seventh.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Seventh.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">8</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Eighth.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Eighth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">9</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Ninth.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Ninth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;"></label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Pitcher.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Pitcher.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <input type="button" value="一括⏎" class="Bulk-Enter-Button" v-on:click="getBulkVisiterParticipationMember()">
    </div>
  </div>
  <div class="Control-Section">
    <div>走塁死</div>
    <div class="MultiSelect">
      <label style="display: block;">
        <input id="Base-Run-Out-Batter" type="checkbox" v-model="selectedBaseRunningOut" :value="runnerData.Batter.Order" v-if="runnerData.Batter.Name">{{ runnerData.Batter.Name }}
      </label>
      <label style="display: block;">
        <input id="Base-Run-Out-First" type="checkbox" v-model="selectedBaseRunningOut" :value="runnerData.First.Order" v-if="runnerData.First.Name">{{ runnerData.First.Name }}
      </label>
      <label style="display: block;">
        <input id="Base-Run-Out-Second" type="checkbox" v-model="selectedBaseRunningOut" :value="runnerData.Second.Order" v-if="runnerData.Second.Name">{{ runnerData.Second.Name }}
      </label>
      <label style="display: block;">
        <input id="Base-Run-Out-Third" type="checkbox" v-model="selectedBaseRunningOut" :value="runnerData.Third.Order" v-if="runnerData.Third.Name">{{ runnerData.Third.Name }}
      </label>
      {{ selectedBaseRunningOut }}
    </div>
    <div>生還</div>
    <div class="MultiSelect">
      <label style="display: block;">
        <input id="Base-Runs-Batter" type="checkbox" v-model="selectedBaseRuns" :value="runnerData.Batter.Order" v-if="runnerData.Batter.Name">{{ runnerData.Batter.Name }}
      </label>
      <label style="display: block;">
        <input id="Base-Runs-First" type="checkbox" v-model="selectedBaseRuns" :value="runnerData.First.Order" v-if="runnerData.First.Name">{{ runnerData.First.Name }}
      </label>
      <label style="display: block;">
        <input id="Base-Runs-Second" type="checkbox" v-model="selectedBaseRuns" :value="runnerData.Second.Order" v-if="runnerData.Second.Name">{{ runnerData.Second.Name }}
      </label>
      <label style="display: block;">
        <input id="Base-Runs-Third" type="checkbox" v-model="selectedBaseRuns" :value="runnerData.Third.Order" v-if="runnerData.Third.Name">{{ runnerData.Third.Name }}
      </label>
      {{ selectedBaseRuns }}
    </div>
    <select class="Runner-DropDown">
      <option hidden>出塁状況</option>
    </select>
  </div>
  <div class="Control-Section">
    <div class="Res-First-Category">
      <div class="Play-Result-Row">
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.StrikeOut" @change="changeResultCheck(ResultCheckBox.StrikeOut, resultCheckBox.StrikeOut)">三振</label>
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.GroundBall" @change="changeResultCheck(ResultCheckBox.GroundBall, resultCheckBox.GroundBall)">ゴロ</label>
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.DoublePlay" @change="changeResultCheck(ResultCheckBox.DoublePlay, resultCheckBox.DoublePlay)">併殺</label>
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.FlyBall" @change="changeResultCheck(ResultCheckBox.FlyBall, resultCheckBox.FlyBall)">フライ</label>
      </div>
      <div class="Play-Result-Row">
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.FourPitchWalk" @change="changeResultCheck(ResultCheckBox.FourPitchWalk, resultCheckBox.FourPitchWalk)">四球</label>
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.HitByPitch" @change="changeResultCheck(ResultCheckBox.HitByPitch, resultCheckBox.HitByPitch)">死球</label>
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.IntentionalWalk" @change="changeResultCheck(ResultCheckBox.IntentionalWalk, resultCheckBox.IntentionalWalk)">敬遠</label>
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.FoulFly" @change="changeResultCheck(ResultCheckBox.FoulFly, resultCheckBox.FoulFly)">邪飛</label>
      </div>
      <div class="Play-Result-Row">
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.SacrificeFly" @change="changeResultCheck(ResultCheckBox.SacrificeFly, resultCheckBox.SacrificeFly)">犠飛</label>
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.SacrificeBunt" @change="changeResultCheck(ResultCheckBox.SacrificeBunt, resultCheckBox.SacrificeBunt)">犠打</label>
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.SacrificeBuntError" @change="changeResultCheck(ResultCheckBox.SacrificeBuntError, resultCheckBox.SacrificeBuntError)">犠打失策</label>
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.SacrificeBuntFC" @change="changeResultCheck(ResultCheckBox.SacrificeBuntFC, resultCheckBox.SacrificeBuntFC)">犠打野選</label>
      </div>
    </div>
    <div class="Res-Second-Category">
      <div class="Play-Result-Row">
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.SingleHit" @change="changeResultCheck(ResultCheckBox.SingleHit, resultCheckBox.SingleHit)">安打</label>
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.TwoBaseHit" @change="changeResultCheck(ResultCheckBox.TwoBaseHit, resultCheckBox.TwoBaseHit)">二塁打</label>
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.ThreeBaseHit" @change="changeResultCheck(ResultCheckBox.ThreeBaseHit, resultCheckBox.ThreeBaseHit)">三塁打</label>
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.HomeRun" @change="changeResultCheck(ResultCheckBox.HomeRun, resultCheckBox.HomeRun)">本塁打</label>
      </div>
    </div>
    <div class="Res-Third-Category">
      <div class="Play-Result-Row">
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.Error" @change="changeResultCheck(ResultCheckBox.Error, resultCheckBox.Error)">失策</label>
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.FieldersChoice" @change="changeResultCheck(ResultCheckBox.FieldersChoice, resultCheckBox.FieldersChoice)">野選</label>
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.UncaughtThirdStrike" @change="changeResultCheck(ResultCheckBox.UncaughtThirdStrike, resultCheckBox.UncaughtThirdStrike)">振逃</label>
      </div>
      <div class="Play-Result-Row">
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.Interference" @change="changeResultCheck(ResultCheckBox.Interference, resultCheckBox.Interference)">打撃妨害</label>
        <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.Obstruction" @change="changeResultCheck(ResultCheckBox.Obstruction, resultCheckBox.Obstruction)">走塁妨害</label>
      </div>
      <div class="Play-Result-Row">
        <label><input type="checkbox" name="third">打者出塁</label>
        <label><input type="checkbox" name="third">＋失策</label>
      </div>
    </div>
    <div class="Res-Fours-Category">
      <div class="Play-Result-Row">
        <label><input type="checkbox" name="resultPositon" v-model="resultPositionCheckBox.P">投</label>
        <label><input type="checkbox" name="resultPositon" v-model="resultPositionCheckBox.C">捕</label>
        <label><input type="checkbox" name="resultPositon" v-model="resultPositionCheckBox.FB">一</label>
        <label><input type="checkbox" name="resultPositon" v-model="resultPositionCheckBox.SB">二</label>
        <label><input type="checkbox" name="resultPositon" v-model="resultPositionCheckBox.TB">三</label>
        <label><input type="checkbox" name="resultPositon" v-model="resultPositionCheckBox.SS">遊</label>
      </div>
      <div class="Play-Result-Row">
        <label><input type="checkbox" name="resultPositon" v-model="resultPositionCheckBox.LF">左</label>
        <label><input type="checkbox" name="resultPositon" v-model="resultPositionCheckBox.CF">中</label>
        <label><input type="checkbox" name="resultPositon" v-model="resultPositionCheckBox.RF">右</label>
        <label><input type="checkbox" name="resultPositon" v-model="resultPositionCheckBox.LeftCenter">左中</label>
        <label><input type="checkbox" name="resultPositon" v-model="resultPositionCheckBox.RightCenter">右中</label>
      </div>
    </div>
    <div class="Res-Fifth-Category">
      <div class="Play-Result-Row">
        <label><input type="checkbox" name="fifth">盗塁</label>
        <label><input type="checkbox" name="fifth">盗塁死</label>
        <label><input type="checkbox" name="fifth">牽制死</label>
      </div>
    </div>
  </div>
  <div class="Control-Section">
    <button class="Game-Start-End-Button" v-on:click="clickGameStart()">試合開始</button>
    <button class="Game-Start-End-Button">試合終了</button>
    <button class="Game-Start-End-Button">タイブレーク</button>
    <div class="Base-Area">
      <button class="Base-Button Base-First" v-on:click="clickBase(PositionName.FB)" :class="[{'Button-Color-Out' : runnerState.First}]"></button>
      <button class="Base-Button Base-Second" v-on:click="clickBase(PositionName.SB)" :class="[{'Button-Color-Out' : runnerState.Second}]"></button>
      <button class="Base-Button Base-Third" v-on:click="clickBase(PositionName.TB)" :class="[{'Button-Color-Out' : runnerState.Third}]"></button>
    </div>
    <div>
      打点
      <select class="RBI-DropDown">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </div>
  </div>
  <div class="Control-Section">
    <div class="Button-Row">
      <button class="Count-Button Button-Color-Ball" v-on:click="clickBall()">B</button>
      <button class="Count-Button Button-Color-Ball" v-on:click="clickBallMinus()">B-1</button>
      <button class="Minus-Button">投球数-1</button>
    </div>
    <div class="Button-Row">
      <button class="Count-Button Button-Color-Strike" v-on:click="clickStrike()">S</button>
      <button class="Count-Button Button-Color-Strike" v-on:click="clickStrikeMinus()">S-1</button>
      <button class="Minus-Button Button-Color-Strike" v-on:click="foulClick()">ファール</button>
    </div>
    <div class="Button-Row">
      <button class="Count-Button Button-Color-Out">O</button>
      <button class="Count-Button Button-Color-Out">O-1</button>
      <button class="Minus-Button">打席内-1</button>
    </div>
    <div class="Button-Row" style="margin-top: 10px;">
      <button class="Fix-Button">スコア修正</button>
      <button class="Fix-Button">打席結果修正</button>
    </div>
    <div class="Button-Row">
      <button class="Fix-Button">投手成績修正</button>
      <button class="Fix-Button">1つ前に戻る</button>
    </div>
    <div class="Button-Row" style="margin-bottom: 10px;">
      <button class="Fix-Button" v-on:click="clickUmpire()">審判</button>
      <button class="Fix-Button" v-on:click="clickDisp()">表示</button>
    </div>
    <div class="Button-Row">
      <button class="Confirm-Button" v-on:click="clickConfirm()">確定</button>
    </div>
  </div>
  <div class="Control-Section" style="font-size: 13.5px;">
    打者成績表示の切替
    <select class="Setting-DropDown"></select>
    INFOスペースの表示
    <select class="Setting-DropDown"></select>
    カスタムテキスト
    <textarea class="Custom-TextArea"></textarea>
  </div>
  <div id="Control-Home" class="Control-Section">
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">1</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.LeadOff.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.LeadOff.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">2</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Second.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Second.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">3</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Third.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Third.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">4</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Fourth.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Fourth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">5</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Fifth.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Fifth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">6</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Sixth.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Sixth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">7</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Seventh.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Seventh.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">8</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Eighth.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Eighth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">9</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Ninth.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Ninth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;"></label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Pitcher.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Pitcher.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <input type="button" value="一括⏎" class="Bulk-Enter-Button" v-on:click="getBulkHomeParticipationMember()">
    </div>
  </div>
  <div>
    <DialogComponent
      :flag="dialogDispFlg"
      :callDivision="dialogCallDivision"
      @sendUmpireData="getUmpireData"
      @closeDialog="getCloseDialog"
    />
  </div>
</template>

<script setup lang="ts">
import { DesignController } from './ts/design-controller';
import { DesignModel } from './ts/model/design-model';
import { defineEmits, ref } from 'vue';
import { MemberController } from './ts/member-controller';
import { DefaultMemberModel,
         ParticipationMemberModel,
         InputVTeamModel,
         ParticipationMemberPerTeamModel,
         UmpireModel,
         BattingResultPerTeamModel, PitcherInfoModel, PositionModel, RunnerNameModel, BatterStatsModel, RunnerStateModel, RunnerName } from './ts/model/member-info-model';
import { emit } from 'process';
import { GameController } from './ts/game-controller';
import { GameInfoModel, ResultCheckBoxModel, ResultPositionCheckBoxModel } from './ts/model/game-model';
import { GameInfoDivision, VisiterHomeDivision } from './ts/constant';
import DialogComponent from './DialogComponent.vue';
import { CountModel, DispRunningScoreModel, DispScoreModel, JudgeModel, RunningScoreModel } from './ts/model/score-info-model';
import { ResultCheckBox, PositionName } from './ts/constant';
import _ from 'lodash';

// デザインコントローラー
const designController = new DesignController();
// メンバーコントローラー
const memberController = new MemberController();
// 試合コントローラー
const gameController = new GameController();
// emit
const emits = defineEmits<{
  (e: 'sendGameInfoData', v: GameInfoModel): void;
  (e: 'sendDesignData', v: DesignModel): void;
  (e: 'sendUmpireData', v: UmpireModel): void;
  (e: 'sendVisiterMemberData', v: ParticipationMemberPerTeamModel): void;
  (e: 'sendHomeMemberData', v: ParticipationMemberPerTeamModel): void;
  (e: 'sendPositionData', v: PositionModel): void;
  (e: 'sendRunnerData', v: RunnerNameModel): void;
  (e: 'sendPitcherData', v: PitcherInfoModel): void;
  (e: 'sendBatterStatsData', v: BatterStatsModel): void;
  (e: 'sendScoreData', v: DispScoreModel): void;
  (e: 'sendCountData', v: CountModel): void;
  (e: 'sendJudgeData', v: JudgeModel): void;
  (e: 'sendBigInfoDispFlg', v: boolean): void;
}>()
// デザインデータ
let design: DesignModel = new DesignModel();
// 審判
let umpire: UmpireModel = new UmpireModel();
// 試合情報
let gameInfo = ref(new GameInfoModel());
// ダイアログ表示フラグ
let dialogDispFlg = ref(false);
// ダイアログ呼び出し区分
let dialogCallDivision = ref('');
// ビジターメンバー初期情報リスト
let defaultVisiterMemberList: DefaultMemberModel[] = [];
// ビジター出場選手データ
let visiterParticipationMember = ref(new ParticipationMemberPerTeamModel());
// ビジター打席結果
let visiterBattingResult = ref(new BattingResultPerTeamModel());
// ビジター入力値
let visiterParticipationInput: InputVTeamModel = new InputVTeamModel();
// ビジター投手情報
let visiterPitcherInfo: PitcherInfoModel[] = [];
// ホームメンバー初期情報リスト
let defaultHomeMemberList: DefaultMemberModel[] = [];
// ホーム出場選手データ
let homeParticipationMember = ref(new ParticipationMemberPerTeamModel());
// ホーム打席結果
let homeBattingResult = ref(new BattingResultPerTeamModel());
// ホーム入力値
let homeParticipationInput: InputVTeamModel = new InputVTeamModel();
// ホーム投手情報
let homePitcherInfo: PitcherInfoModel[] = [];
// 投手情報
let pitcherInfo = ref(new PitcherInfoModel());
// 守備位置
let positionData = ref(new PositionModel());
// 走者
let runnerData = ref(new RunnerNameModel());
// 走者の状態
let runnerState = ref(new RunnerStateModel());
// 打者成績
let batterStats = ref(new BatterStatsModel());
// ランニングスコア
let runningScore: RunningScoreModel = new RunningScoreModel();
// 表示用ランニングスコア
let dispRunningScore = ref(new DispScoreModel());
// カウントデータ
let countData = ref(new CountModel());
// 判定データ
let judgeData = ref(new JudgeModel());
// 打席結果チェックボックス
let resultCheckBox = ref(new ResultCheckBoxModel());
// 打席結果チェックボックスプロパティリスト
const resultCheckBoxPropertyList = ['StrikeOut',
                                    'GroundBall',
                                    'DoublePlay',
                                    'FlyBall',
                                    'FourPitchWalk',
                                    'HitByPitch',
                                    'IntentionalWalk',
                                    'FoulFly',
                                    'SacrificeFly',
                                    'SacrificeBunt',
                                    'SacrificeBuntError',
                                    'SacrificeBuntFC',
                                    'SingleHit',
                                    'TwoBaseHit',
                                    'ThreeBaseHit',
                                    'HomeRun',
                                    'Error',
                                    'FieldersChoice',
                                    'UncaughtThirdStrike',
                                    'Interference',
                                    'Obstruction',
                                    'UnSelected'] as const;
const runnerProperty = ['Batter', 'First', 'Second', 'Third'] as const;
// 打席結果守備位置ラジオボタン
let resultPositionCheckBox = ref(new ResultPositionCheckBoxModel());
// 走塁死選択値
let selectedBaseRunningOut = ref<number[]>([]);
// 生還選択値
let selectedBaseRuns = ref<number[]>([]);
// インフォメーション（大）タイマー
let bigInfoTimer = null;
// インフォメーション（大）表示フラグ true:野手成績 false:守備位置
let bigInfoDispFlg = ref(true);

/**
 * 表示ボタンクリック時処理
 */
async function clickDisp() {
  gameInfo.value = await gameController.GetGameInfoStart();
  design = await designController.GetDesign();
  defaultVisiterMemberList = await memberController.GetMemberInfo(VisiterHomeDivision.Visiter, gameInfo.value);
  defaultHomeMemberList = await memberController.GetMemberInfo(VisiterHomeDivision.Home, gameInfo.value);
  emits('sendDesignData', design);
  emits('sendGameInfoData', gameInfo.value);
  emits('sendScoreData', dispRunningScore.value);
}

/**
 * 審判データ取得
 * @param data 
 */
const getUmpireData = (data: any) => {
  umpire = data;
  dialogDispFlg.value = false;
  emits('sendUmpireData', umpire);
}

/**
 * ダイアログクローズ
 * @param data 
 */
const getCloseDialog = (data: any) => {
  dialogDispFlg.value = data;
}

/**
 * 一括ボタン（ビジター）クリック時処理
 */
function getBulkVisiterParticipationMember() {
  visiterParticipationMember.value = memberController.GetBulkParticipationMemberData(visiterParticipationMember.value, visiterParticipationInput, defaultVisiterMemberList);
  emits('sendVisiterMemberData', visiterParticipationMember.value);
}

/**
 * 一括ボタン（ホーム）クリック時処理
 */
function getBulkHomeParticipationMember() {
  homeParticipationMember.value = memberController.GetBulkParticipationMemberData(homeParticipationMember.value, homeParticipationInput, defaultHomeMemberList);
  emits('sendHomeMemberData', homeParticipationMember.value);
}

/**
 * 審判ボタンクリック時処理
 */
function clickUmpire() {
  dialogDispFlg.value = true;
}

/**
 * 塁ボタンクリック時処理
 */
function clickBase(position: PositionName) {
  switch (position) {
    case PositionName.FB:
      runnerState.value.First = !runnerState.value.First;
      break;
    case PositionName.SB:
      runnerState.value.Second = !runnerState.value.Second;
      break;
    case PositionName.TB:
      runnerState.value.Third = !runnerState.value.Third;
      break;
    default:
      break;
  }
}

/**
 * 試合開始ボタンクリック時処理
 */
async function clickGameStart() {
  let cloneVisiterMember = _.cloneDeep(visiterParticipationMember.value);
  let cloneHomeMember = _.cloneDeep(homeParticipationMember.value);
  let cloneGameInfo = _.cloneDeep(gameInfo.value);
  [
    visiterBattingResult.value,
    homeBattingResult.value,
    visiterPitcherInfo,
    homePitcherInfo,
    pitcherInfo.value,
    positionData.value,
    cloneGameInfo.GameProgressInfo
  ] = gameController.SetDataGameStart(visiterParticipationMember.value, homeParticipationMember.value);

  cloneVisiterMember.LeadOff.DispStatus.Batter = true;
  cloneVisiterMember.LeadOff.DispStatus.Basic = false;
  cloneHomeMember.LeadOff.DispStatus.NextRead = true;
  runnerData.value.Batter.Order = 1;
  runnerData.value.Batter.Name = visiterParticipationMember.value.LeadOff.Name;

  batterStats.value = await memberController.GetBatterStats(cloneVisiterMember, cloneGameInfo);
  visiterParticipationMember.value = cloneVisiterMember;
  homeParticipationMember.value = cloneHomeMember;
  gameInfo.value = cloneGameInfo;

  emits('sendPitcherData', pitcherInfo.value);
  emits('sendBatterStatsData', batterStats.value);
  emits('sendPositionData', positionData.value);
  emits('sendVisiterMemberData', visiterParticipationMember.value);
  emits('sendHomeMemberData', homeParticipationMember.value);
  emits('sendGameInfoData', gameInfo.value);
  startTimerBigInfo();
}

/**
 * インフォメーション（大）タイマー開始
 */
function startTimerBigInfo() {
  bigInfoTimer = setInterval(() => {
    bigInfoDispFlg.value = !bigInfoDispFlg.value;
    emits('sendBigInfoDispFlg', bigInfoDispFlg.value);
  }, 10000)
}

/**
 * ボールクリック
 */
function clickBall() {
  if (countData.value.Ball <= 3) {
    countData.value.Ball++;
    emits('sendCountData', countData.value);

    if (countData.value.Ball == 4) {
      fourPitchWalk();
    } else {
      pitchPlus(false);
    }
  }
}

/**
 * ボールマイナスクリック
 */
function clickBallMinus() {
  if (countData.value.Ball > 0) { 
    countData.value.Ball--;
    emits('sendCountData', countData.value);
  }
}

/**
 * ストライククリック
 */
function clickStrike() {
  if (countData.value.Strike <= 3) {
    countData.value.Strike++;
    emits('sendCountData', countData.value);

    if (countData.value.Strike == 3) {
      strikeOut();
    } else {
      pitchPlus(false);
    }
  }
}

/**
 * ストライクマイナスクリック
 */
function clickStrikeMinus() {
  if (countData.value.Strike > 0) { 
    countData.value.Strike--;
    emits('sendCountData', countData.value);
  }
}

/**
 * ファールクリック
 */
function foulClick() {
  if (countData.value.Strike < 2) {
    countData.value.Strike++;
  }
  pitchPlus(false);
}

/**
 * カウントリセット
 */
function resetCount() {
  countData.value.Ball = 0;
  countData.value.Strike = 0;
  emits('sendCountData', countData.value);
}

/**
 * 投球数加算
 */
function pitchPlus(batterChangeFlg: boolean) {
  pitcherInfo.value.PitchCount++;
  if (batterChangeFlg) {
    pitcherInfo.value.ThisAtBat = 0;
  } else {
    pitcherInfo.value.ThisAtBat++;
  }
  // emits('sendPitcherData', pitcherInfo.value);
}

/**
 * 確定クリック
 */
async function clickConfirm() {
  if (resultCheckBox.value.SingleHit) {
    Hit(resultCheckBox.value);
  } else {
    let cloneMember = new ParticipationMemberPerTeamModel();

    if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisiterHomeDivision.Visiter) {
      cloneMember = _.cloneDeep(visiterParticipationMember.value);
    } else {
      cloneMember = _.cloneDeep(homeParticipationMember.value);
    }

    cloneMember = baseRuns(cloneMember);
    cloneMember = baseRunningOut(cloneMember);
    
    if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisiterHomeDivision.Visiter) {
      visiterParticipationMember.value = cloneMember;
      emits('sendVisiterMemberData', visiterParticipationMember.value);
    } else {
      homeParticipationMember.value = cloneMember;
      emits('sendHomeMemberData', homeParticipationMember.value);
    }
  }

  // 投手情報保存
  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisiterHomeDivision.Visiter) {
    homePitcherInfo = memberController.KeepPitcherInfo(homePitcherInfo, pitcherInfo.value);
  } else {
    visiterPitcherInfo = memberController.KeepPitcherInfo(visiterPitcherInfo, pitcherInfo.value);
  }
  resultCheckBox.value = new ResultCheckBoxModel();
  // 攻守交代
  changeAttackTeam();
}

/**
 * 打席結果チェックボックス変更イベント
 * @param changeItem 
 * @param targetValue 
 */
function changeResultCheck(changeItem: number, targetValue: boolean) {
  resultCheckBox.value = new ResultCheckBoxModel();
  if (targetValue) {
    if (changeItem) {
      runnerProperty.forEach(x => {
        if (runnerData.value[x].Order != null) {
          selectedBaseRuns.value.push(runnerData.value[x].Order);
        }
      });
    }
    let returnValue = new ResultCheckBoxModel();
    returnValue[resultCheckBoxPropertyList[changeItem]] = targetValue;
    resultCheckBox.value = returnValue;
  } else {
    resultCheckBox.value = new ResultCheckBoxModel();
  }
}

/**
 * 三振
 */
async function strikeOut() {
  resetCount();
  countData.value.Out++;
  emits('sendCountData', countData.value);
  pitcherInfo.value.SO++;
  pitchPlus(true);
  let cloneMember = new ParticipationMemberPerTeamModel();

  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisiterHomeDivision.Visiter) {
    cloneMember = _.cloneDeep(visiterParticipationMember.value);
  } else {
    cloneMember = _.cloneDeep(homeParticipationMember.value);
  }

  [cloneMember, runnerData.value.Batter] = gameController.NextBatter(cloneMember);
  batterStats.value = await memberController.GetBatterStats(cloneMember, gameInfo.value);
  runnerData.value = gameController.SortRunner(cloneMember, runnerState.value, runnerData.value.Batter);
  emits('sendRunnerData', runnerData.value);

  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisiterHomeDivision.Visiter) {
    visiterParticipationMember.value = cloneMember;
    emits('sendVisiterMemberData', visiterParticipationMember.value);
  } else {
    homeParticipationMember.value = cloneMember;
    emits('sendHomeMemberData', homeParticipationMember.value);
  }
  emits('sendBatterStatsData', batterStats.value);
  clickConfirm();
}

/**
 * 出塁
 */
async function onBase() {
  let cloneMember = new ParticipationMemberPerTeamModel();

  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisiterHomeDivision.Visiter) {
    cloneMember = _.cloneDeep(visiterParticipationMember.value);
  } else {
    cloneMember = _.cloneDeep(homeParticipationMember.value);
  }

  [cloneMember, runnerData.value.Batter] = gameController.NextBatter(cloneMember);
  cloneMember = gameController.OnBase(cloneMember);
  cloneMember = baseRuns(cloneMember);
  cloneMember = baseRunningOut(cloneMember);
  batterStats.value = await memberController.GetBatterStats(cloneMember, gameInfo.value);
  emits('sendRunnerData', runnerData.value);

  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisiterHomeDivision.Visiter) {
    visiterParticipationMember.value = cloneMember;
    emits('sendVisiterMemberData', visiterParticipationMember.value);
  } else {
    homeParticipationMember.value = cloneMember;
    emits('sendHomeMemberData', homeParticipationMember.value);
  }
  emits('sendBatterStatsData', batterStats.value);
}

/**
 * 四球
 */
async function fourPitchWalk() {
  resetCount();
  pitcherInfo.value.BB++;
  pitchPlus(true);
  await onBase();
  clickConfirm();
}

/**
 * 走塁死
 * @param member 
 */
function baseRunningOut(member: ParticipationMemberPerTeamModel): ParticipationMemberPerTeamModel {
  member = gameController.ResolvedRunner(member, selectedBaseRunningOut.value);
  runnerData.value = gameController.SortRunner(member, runnerState.value, runnerData.value.Batter);

  countData.value.Out += selectedBaseRunningOut.value.length;
  emits('sendCountData', countData.value);
  selectedBaseRunningOut.value = [];

  return member;
}

/**
 * 生還
 * @param member 
 * @param scoreData 
 * @param dispScoreData 
 */
function baseRuns(member: ParticipationMemberPerTeamModel): ParticipationMemberPerTeamModel {
  if (selectedBaseRuns.value.length == 0) {
    return member;
  }
  
  member = gameController.ResolvedRunner(member, selectedBaseRuns.value);
  runnerData.value = gameController.SortRunner(member, runnerState.value, runnerData.value.Batter);

  [runningScore, dispRunningScore.value.Score] = gameController.CalcRuns(selectedBaseRuns.value.length, gameInfo.value, runningScore, dispRunningScore.value.Score);
  emits('sendScoreData', dispRunningScore.value);
  selectedBaseRuns.value = [];

  return member;
}

/**
 * ヒット点灯
 */
async function litHit() {
  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisiterHomeDivision.Visiter) {
    runningScore.VisiterH++;
    dispRunningScore.value.Score.VisiterH = runningScore.VisiterH.toString();
  } else {
    runningScore.HomeH++;
    dispRunningScore.value.Score.HomeH = runningScore.HomeH.toString();
  }

  judgeData.value.Hit = true;
  emits('sendJudgeData', judgeData.value);
  emits('sendScoreData', dispRunningScore.value);

  setTimeout(() => {
    judgeData.value.Hit = false;
    emits('sendJudgeData', judgeData.value);
  }, 7000);
}

/**
 * 単打
 */
function Hit(result: ResultCheckBoxModel) {
  resetCount();
  pitchPlus(true);
  litHit();
  if (result.SingleHit || result.TwoBaseHit || result.ThreeBaseHit) {
    onBase();
  }
}

/**
 * 攻守交代
 */
async function changeAttackTeam() {
  if (countData.value.Out < 3) {
    return;
  }

  countData.value = new CountModel();
  emits('sendCountData', countData.value);

  let cloneVisiterMember = _.cloneDeep(visiterParticipationMember.value);
  let cloneHomeMember = _.cloneDeep(homeParticipationMember.value);

  let restRunner: number[] = [];
  // 残塁算出
  runnerProperty.forEach(x => {
    if (runnerData.value.Batter.Order != runnerData.value[x].Order && runnerData.value[x].Order != null) {
      restRunner.push(runnerData.value[x].Order);
    }
  });
  if (restRunner.length > 0) {
    if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisiterHomeDivision.Visiter) {
      cloneVisiterMember = gameController.ResolvedRunner(cloneVisiterMember, restRunner);
      runningScore.VisiterLOB += restRunner.length;
      dispRunningScore.value.Score.VisiterLOB = runningScore.VisiterLOB.toString();
    } else {
      cloneHomeMember = gameController.ResolvedRunner(cloneHomeMember, restRunner);
      runningScore.HomeLOB += restRunner.length;
      dispRunningScore.value.Score.HomeLOB = runningScore.HomeLOB.toString();
    }
    emits('sendScoreData', dispRunningScore.value);
  }

  [cloneVisiterMember, cloneHomeMember] = memberController.ChangeAttackEditMember(cloneVisiterMember, cloneHomeMember);

  const cloneGameInfo = _.cloneDeep(gameInfo.value);
  // メンバー編集、野手成績、投手情報、守備位置取得
  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisiterHomeDivision.Visiter) {
    // 無得点
    if (runningScore.VisiterScore.length < gameInfo.value.GameProgressInfo.NowInning) {
      [runningScore, dispRunningScore.value.Score] = gameController.CalcRuns(0, cloneGameInfo, runningScore, dispRunningScore.value.Score);
      emits('sendScoreData', dispRunningScore.value);
    }
    cloneGameInfo.GameProgressInfo.NowAttackTeam = VisiterHomeDivision.Home;

    batterStats.value = await memberController.GetBatterStats(cloneHomeMember, cloneGameInfo);
    pitcherInfo.value = memberController.GetPitcherInfo(cloneVisiterMember, visiterPitcherInfo);
    positionData.value = memberController.SetPositionData(visiterParticipationMember.value);
  } else {
    // 無得点
    if (runningScore.HomeScore.length < gameInfo.value.GameProgressInfo.NowInning) {
      [runningScore, dispRunningScore.value.Score] = gameController.CalcRuns(0, cloneGameInfo, runningScore, dispRunningScore.value.Score);
      emits('sendScoreData', dispRunningScore.value);
    }
    cloneGameInfo.GameProgressInfo.NowAttackTeam = VisiterHomeDivision.Visiter;
    cloneGameInfo.GameProgressInfo.NowInning++;

    batterStats.value = await memberController.GetBatterStats(cloneVisiterMember, cloneGameInfo);
    pitcherInfo.value = memberController.GetPitcherInfo(cloneHomeMember, homePitcherInfo);
    positionData.value = memberController.SetPositionData(homeParticipationMember.value);
  }

  visiterParticipationMember.value = cloneVisiterMember;
  homeParticipationMember.value = cloneHomeMember;
  gameInfo.value = cloneGameInfo;
  emits('sendVisiterMemberData', visiterParticipationMember.value);
  emits('sendHomeMemberData', homeParticipationMember.value);
  emits('sendPositionData', positionData.value);
  emits('sendBatterStatsData', batterStats.value);
  emits('sendPitcherData', pitcherInfo.value);
  emits('sendGameInfoData', gameInfo.value);
}

</script>

<style scoped>

.Input-Row{
    display: flex;
}

.Input-Box{
    width: 30px;
    height: 15px;
    text-align: center;
}

.Enter-Button{
    width: 47px;
    height: 21px;
    text-align: center;
}

.Bulk-Enter-Button{
    margin-left: 15px;
    Width: 121px;
    height: 25px;
    text-align: center;
}

.CheckBox{
    height: 20px;
    color: black;
}

.Runner-DropDown{
    width: 120px;
    margin-top: 10px
}

.MultiSelect{
    width: 120px;
    height: 87px;
    overflow: auto;
    background-color: white;
    border: 1px solid black;
    font-size: 15px;
    line-height: 20px;
}

.Control-Section{
    display: flex;
    flex-flow: column;
    color: #000000;
    margin-top: 10px;
}

.Play-Result-Row{
    display: flex;
    font-size: 15px;
}

.Res-First-Category{
    width: 300px;
    height: 75px;
}

.Res-Second-Category{
    width: 300px;
    height: 30px;
}

.Res-Third-Category{
    width: 300px;
    height: 75px;
}

.Res-Fours-Category{
    width: 300px;
    height: 55px;
}

.Res-Fifth-Category{
    width: 300px;
    height: 30px;
}

.Game-Start-End-Button{
    width: 100px;
    height: 40px;
}

.Base-Area{
    margin-top: 20px;
    height: 70px;
    position: relative;
}

.Base-Button{
    width: 25px;
    height: 25px;
    transform: rotate(135deg) skew(10deg, 10deg);
    position: absolute;
    border: 2px solid;
}

.RBI-DropDown{
    width: 60px;
}

.Base-First{
    top: 17px;
    left: 64px;
}

.Base-Second{
    left: 40px;
}

.Base-Third{
    top: 17px;
    left: 15px;
}

.Button-Row{
    display: flex;
}

.Count-Button{
    width: 50px;
    height: 33px;
}

.Minus-Button{
    width: 80px;
    height: 33px;
}

.Button-Color-Ball{
    background-color: #00fff2;
}

.Button-Color-Strike{
    background-color: #ffff00;
}

.Button-Color-Out{
    background-color: #ff0000;
}

.Confirm-Button{
    width: 180px;
    height: 45px;
    font-size: 20px;
}

.Fix-Button{
    width: 90px;
    height: 25px;
    font-size: 12px;
}

.Setting-DropDown{
    width: 130px;
    margin-bottom: 5px;
}

.Custom-TextArea{
    width: 125px;
    height: 125px;
}

</style>