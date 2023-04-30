<template>
  <div class="Main">
    <VisiterMember
      :data="VisiterMemberData"
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
    />
  </div>
  <div class="Control">
    <ControllerField />
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
import { BatterStatsModel, ParticipationMemberModel, PitcherInfoModel, PositionModel, RunnerNameModel, UmpireModel } from './ts/model/member-info-model';
import { ref } from 'vue';
import { CountModel, DispRunningScoreModel, DispRunningScoreTitleModel, RunningScoreModel, JudgeModel } from './ts/model/score-info-model';

// ビジターメンバー
let VisiterMemberData: ParticipationMemberModel[];
VisiterMemberData = new Array(10);
// ホームメンバー
let HomeMemberData: ParticipationMemberModel[];
HomeMemberData = new Array(10);
// ランニングスコアタイトル
let RunningScoreTitle: DispRunningScoreTitleModel;
RunningScoreTitle = new DispRunningScoreTitleModel();
// ランニングスコア
let RunningScoreData: DispRunningScoreModel;
RunningScoreData = new DispRunningScoreModel();
// 得点、安打、失策、残塁
let RunningScoreAnotherData: RunningScoreModel;
RunningScoreAnotherData = new RunningScoreModel();
// 投手成績
let PitcherData: PitcherInfoModel;
PitcherData = new PitcherInfoModel();
// 打者成績
let BatterData: BatterStatsModel;
BatterData = new BatterStatsModel();
// 守備位置
let PositionData: PositionModel;
let RunnerData: RunnerNameModel;
PositionData = new PositionModel();
RunnerData = new RunnerNameModel();
// 審判
let UmpireData: UmpireModel;
UmpireData = new UmpireModel();
// カウント
let CountData: CountModel;
let JudgeData: JudgeModel;
CountData = new CountModel();
JudgeData = new JudgeModel();
// 打席結果
let ResultData: string[]
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
  