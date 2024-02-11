<template>
  <div class="Main">
    <VisitorMember
      :data="VisitorMemberData"
      :gameInfo="GameInfoData"
      :design="DesignData.VisitorMember"
    />
    <RunningScore
      :data="RunningScoreData"
      :gameInfo="GameInfoData"
      :design="DesignData.Score"
    />
    <RibbonSpace v-if="GameInfoData.GameBaseInfo.VisitorTeamName"/>
    <div class="Big-Info" v-if="GameInfoData.GameBaseInfo.VisitorTeamName">
      <UmpireField
        :data="UmpireData"
        :design="DesignData.Umpire"
      />
      <FielderStats
        :data="BatterStatsData"
        :gameInfo="GameInfoData"
        :design="DesignData.FielderStats"
        :dispFlg="BatterStatsDispFlg"
      />
      <PositionField
        :position="PositionData"
        :runner="RunnerData"
        :gameInfo="GameInfoData"
        :design="DesignData.Position"
        :dispFlg="PositionDataDispFlg"
      />
      <TodayResult
        :datas="BattingResultData"
      />
    </div>
    <div class="Small-Info">
      <PitcherInfo
        :data="PitcherData"
        :gameInfo="GameInfoData"
        :design="DesignData.PitcherStats"
      />
      <CountField
        :count="CountData"
        :judge="JudgeData"
        :gameInfo="GameInfoData"
      />
    </div>
    <HomeMember
      :data="HomeMemberData"
      :gameInfo="GameInfoData"
      :design="DesignData.HomeMember"
    />
  </div>
  <div class="Control">
    <ControllerField
      @sendDesignData="getDesignData"
      @sendVisitorMemberData="getVisitorMember"
      @sendHomeMemberData="getHomeMember"
      @sendGameInfoData="getGameInfoData"
      @sendUmpireData="getUmpireData"
      @sendPositionData="getPositionData"
      @sendRunnerData="getRunnerData"
      @sendPitcherData="getPitcherData"
      @sendBatterStatsData="getBatterStatsData"
      @sendScoreData="getScoreData"
      @sendCountData="getCountData"
      @sendJudgeData="getJudgeData"
      @sendBattingResultData="getBattingResultData"
      @sendBigInfoDispFlg="getBigInfoDispFlg"
    />
  </div>
</template>

<script setup lang="ts">
import HomeMember from './HomeMember.vue';
import VisitorMember from './VisitorMember.vue';
import RunningScore from './RunningScore.vue'
import RibbonSpace from './RibbonSpace.vue';
import UmpireField from './UmpireField.vue';
import PitcherInfo from './PitcherInfo.vue';
import CountField from './CountField.vue';
import FielderStats from './FielderStats.vue';
import TodayResult from './TodayResult.vue';
import PositionField from './PositionField.vue';
import ControllerField from './ControllerField.vue';
import { AtBatResultModel, BatterStatsModel, BattingResultAtGameModel, DispBatterStatsModel, ParticipationMemberModel, ParticipationMemberPerTeamModel, PitcherInfoModel, PositionModel, RunnerNameModel, UmpireModel } from './ts/model/member-info-model';
import { CountModel, DispRunningScoreModel, DispRunningScoreTitleModel, RunningScoreModel, JudgeModel, DispScoreModel } from './ts/model/score-info-model';
import { DesignModel } from './ts/model/design-model';
import { emit } from 'process';
import { ref } from 'vue';
import { GameInfoModel } from './ts/model/game-model';

// ビジターメンバー
let VisitorMemberData = ref(new ParticipationMemberPerTeamModel());
// ホームメンバー
let HomeMemberData = ref(new ParticipationMemberPerTeamModel());
// ランニングスコア
let RunningScoreData = ref(new DispScoreModel());
// 投手成績
let PitcherData = ref(new PitcherInfoModel());
// 打者成績
let BatterStatsData = ref(new DispBatterStatsModel());
// 打者成績表示フラグ
let BatterStatsDispFlg = ref(false);
// 守備表示
let PositionData = ref(new PositionModel());
let RunnerData = ref(new RunnerNameModel());
// 守備位置表示フラグ
let PositionDataDispFlg = ref(false);
// 審判
let UmpireData = ref(new UmpireModel());
// カウント
let CountData =  ref(new CountModel());
let JudgeData =  ref(new JudgeModel());
// 打席結果
let BattingResultData = ref<AtBatResultModel[]>([]);
// デザイン
let DesignData = ref(new DesignModel());
// 試合情報
let GameInfoData = ref(new GameInfoModel());

/**
 * デザインデータ取得
 * @param data 
 */
const getDesignData = (data: DesignModel) => {
  DesignData.value = data;
}

/**
 * 試合情報取得
 * @param data 
 */
const getGameInfoData = (data: GameInfoModel) => {
  GameInfoData.value = data;
}

/**
 * ビジターメンバー取得
 * @param data 
 */
const getVisitorMember = (data: ParticipationMemberPerTeamModel) => {
  VisitorMemberData.value = data;
}

/**
 * ホームメンバー取得
 */
const getHomeMember = (data: ParticipationMemberPerTeamModel) => {
  HomeMemberData.value = data;
}

/**
 * 審判データ取得
 * @param data 
 */
const getUmpireData = (data: UmpireModel) => {
  UmpireData.value = data;
}

/**
 * 守備位置データ取得
 * @param data 
 */
const getPositionData = (data: PositionModel) => {
  PositionData.value = data;
}

/**
 * 走者データ取得
 * @param data 
 */
const getRunnerData = (data: RunnerNameModel) => {
  RunnerData.value = data;
}

/**
 * 投手情報取得
 * @param data 
 */
const getPitcherData = (data: PitcherInfoModel) => {
  PitcherData.value = data;
}

/**
 * 打者成績取得
 * @param data 
 */
const getBatterStatsData = (data: DispBatterStatsModel) => {
  BatterStatsData.value = data;
}

/**
 * ランニングスコア取得
 * @param data 
 */
const getScoreData = (data: DispScoreModel) => {
  RunningScoreData.value = data;
}

/**
 * カウントデータ取得
 * @param data 
 */
const getCountData = (data: CountModel) => {
  CountData.value = data;
}

/**
 * 判定データ取得
 * @param data 
 */
const getJudgeData = (data: JudgeModel) => {
  JudgeData.value = data;
}

/**
 * 打席結果データ取得
 */
const getBattingResultData = (data: AtBatResultModel[]) => {
  BattingResultData.value = data;
}

/**
 * インフォメーション（大）表示フラグ取得
 * @param data 
 */
const getBigInfoDispFlg = (data: boolean) => {
  if (data) {
    BatterStatsDispFlg.value = true;
    PositionDataDispFlg.value = false;
  } else {
    BatterStatsDispFlg.value = false;
    PositionDataDispFlg.value = true;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Main {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 1250px;
  height: 560px;
  color: white;
  background-color: black;
}

.Big-Info{
  position: absolute;
  width: 460px;
  height: 340px;
  top: 200px;
  left: 270px;
  border: 5px solid #7F7F7F;
  box-sizing: border-box;
  overflow: hidden;
}

.Small-Info{
  position: absolute;
  width: 220px;
  height: 340px;
  top: 200px;
  right: 270px;
}

.Control{
  position: relative;
  display: flex;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  width: 1250px;
  height: 270px;
  background-color: #dbdbdb;
  justify-content: space-between;
}

</style>
  