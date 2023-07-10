<template>
  <div class="Main">
    <VisiterMember
      :data="VisiterMemberData"
      :gameInfo="GameInfoData"
      :design="DesignData.VisiterMember"
    />
    <RunningScore
      :title="RunningScoreTitle"
      :score="RunningScoreData"
      :another="RunningScoreAnotherData"
    />
    <RibbonSpace />
    <div class="Big-Info">
      <UmpireField
        :data="UmpireData"
      />
      <FielderStats
        :data="BatterData"
      />
      <PositionField
        :position="PositionData"
        :runner="RunnerData"
      />
      <TodayResult
        :data="ResultData"
      />
    </div>
    <div class="Small-Info">
      <PitcherInfo
        :data="PitcherData"
      />
      <CountField
        :count="CountData"
        :judge="JudgeData"
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
      @sendVisiterMemberData="getVisiterMember"
      @sendHomeMemberData="getHomeMember"
      @sendGameInfoData="getGameInfoData"
    />
  </div>
</template>
  
<script setup lang="ts">
import HomeMember from './HomeMember.vue';
import VisiterMember from './VisiterMember.vue';
import RunningScore from './RunningScore.vue'
import RibbonSpace from './RibbonSpace.vue';
import UmpireField from './UmpireField.vue';
import PitcherInfo from './PitcherInfo.vue';
import CountField from './CountField.vue';
import FielderStats from './FielderStats.vue';
import TodayResult from './TodayResult.vue';
import PositionField from './PositionField.vue';
import ControllerField from './ControllerField.vue';
import { BatterStatsModel, ParticipationMemberModel, ParticipationMemberPerTeamModel, PitcherInfoModel, PositionModel, RunnerNameModel, UmpireModel } from './ts/model/member-info-model';
import { CountModel, DispRunningScoreModel, DispRunningScoreTitleModel, RunningScoreModel, JudgeModel } from './ts/model/score-info-model';
import { DesignModel } from './ts/model/design-model';
import { emit } from 'process';
import { ref } from 'vue';
import { GameInfoModel } from './ts/model/game-model';

// ビジターメンバー
// let VisiterMemberData = ref(new Array<ParticipationMemberModel>(10));
let VisiterMemberData = ref(new ParticipationMemberPerTeamModel());
// ホームメンバー
let HomeMemberData = ref(new ParticipationMemberPerTeamModel());
// ランニングスコアタイトル
let RunningScoreTitle: DispRunningScoreTitleModel = new DispRunningScoreTitleModel();
// ランニングスコア
let RunningScoreData: DispRunningScoreModel = new DispRunningScoreModel();
// 得点、安打、失策、残塁
let RunningScoreAnotherData: RunningScoreModel = new RunningScoreModel();
// 投手成績
let PitcherData: PitcherInfoModel = new PitcherInfoModel();
// 打者成績
let BatterData: BatterStatsModel = new BatterStatsModel();
// 守備表示
let PositionData: PositionModel = new PositionModel();
let RunnerData: RunnerNameModel = new RunnerNameModel();
// 審判
let UmpireData: UmpireModel = new UmpireModel();
// カウント
let CountData: CountModel = new CountModel();
let JudgeData: JudgeModel = new JudgeModel();
// 打席結果
let ResultData = ref(Array<string>());
// デザイン
let DesignData = ref(new DesignModel());
// 試合情報
let GameInfoData = ref(new GameInfoModel());

const getDesignData = (data: any) => {
  DesignData.value = data;
}
const getGameInfoData = (data: any) => {
  GameInfoData.value = data;
}
const getVisiterMember = (data: any) => {
  VisiterMemberData.value = data;
}
const getHomeMember = (data: any) => {
  HomeMemberData.value = data;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Main {
  position: relative;
  margin: auto;
  overflow: hidden;
  width:1250px;
  height:560px;
  color: white;
  background-color:black;
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
  /* margin: auto; */
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
  