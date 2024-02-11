<template>
  <div class="Main" v-show="flag">
    <div class="Content">
      <div v-if="props.callDivision == DialogCallDivision.VisitorMemberInfo">
        <table border="1">
          <div>
            <thead>
              <tr>
                <th>名前</th>
                <th>打率</th>
                <th>打数</th>
                <th>安打</th>
                <th>二塁打</th>
                <th>三塁打</th>
                <th>本塁打</th>
                <th>塁打</th>
                <th>打点</th>
                <th>出塁率</th>
                <th>OPS</th>
                <th>三振</th>
                <th>四球</th>
                <th>死球</th>
                <th>犠打</th>
                <th>犠飛</th>
                <th>盗塁</th>
                <th>盗塁死</th>
                <th>併殺打</th>
                <th>RC27</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(visitorMember, index) in editVisitorMembers" :key="visitorMember.Id">
                <td><input type="text" v-model="visitorMember.Name" class="Member-Input-Name"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.AVG" class="Member-Num" disabled></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.Atbat" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.Hit" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.Double" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.Triple" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.HomeRun" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.TotalBases" class="Member-Num" disabled></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.RBI" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.OBP" class="Member-Num" disabled></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.OPS" class="Member-Num" disabled></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.SO" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.BB" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.HBP" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.SacBunt" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.SacFly" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.SB" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.CS" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.DP" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Visitor)" v-model="visitorMember.BatterStats.RC27" class="Member-Num" disabled></td>
              </tr>
            </tbody>
          </div>
        </table>
      </div>
      <div v-if="props.callDivision == DialogCallDivision.HomeMemberInfo">
        <table border="1">
          <div>
            <thead>
              <tr>
                <th>名前</th>
                <th>打率</th>
                <th>打数</th>
                <th>安打</th>
                <th>二塁打</th>
                <th>三塁打</th>
                <th>本塁打</th>
                <th>塁打</th>
                <th>打点</th>
                <th>出塁率</th>
                <th>OPS</th>
                <th>三振</th>
                <th>四球</th>
                <th>死球</th>
                <th>犠打</th>
                <th>犠飛</th>
                <th>盗塁</th>
                <th>盗塁死</th>
                <th>併殺打</th>
                <th>RC27</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(homeMember, index) in editHomeMembers" :key="homeMember.Id">
                <td><input type="text" v-model="homeMember.Name" class="Member-Input-Name"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.AVG" class="Member-Num" disabled></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.Atbat" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.Hit" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.Double" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.Triple" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.HomeRun" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.TotalBases" class="Member-Num" disabled></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.RBI" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.OBP" class="Member-Num" disabled></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.OPS" class="Member-Num" disabled></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.SO" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.BB" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.HBP" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.SacBunt" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.SacFly" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.SB" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.CS" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.DP" class="Member-Num"></td>
                <td><input type="text" v-on:change="calcBatterStats(index, VisitorHomeDivision.Home)" v-model="homeMember.BatterStats.RC27" class="Member-Num" disabled></td>
              </tr>
            </tbody>
          </div>
        </table>
      </div>
      <div v-if="props.callDivision == DialogCallDivision.VisitorBattingResult">
        <table border="1">
          <div>
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <div v-for="(visitorBattingResult, index) in editVisitorBattingResults" :key="index">
                <tr v-for="(member) in visitorBattingResult" :key="member.ID">
                  <td><input type="text" v-model="member.Name" class="Result-Input-Name" disabled></td>
                  <div v-for="(result, index) in member.AtBatResult" :key="index">
                    <td><input type="text" v-model="result.Inning" class="Result-Input-Inning">回</td>
                    <td><input type="text" v-model="result.Result" class="Result-Input-Result"></td>
                  </div>
                </tr>
              </div>
            </tbody>
          </div>
        </table>
      </div>
      <div v-if="props.callDivision == DialogCallDivision.HomeBattingResult">
        <table border="1">
          <div>
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <div v-for="(homeBattingResult, index) in editHomeBattingResults" :key="index">
                <tr v-for="(member) in homeBattingResult" :key="member.ID">
                  <td><input type="text" v-model="member.Name" class="Result-Input-Name" disabled></td>
                  <div v-for="(result, index) in member.AtBatResult" :key="index">
                    <td><input type="text" v-model="result.Inning" class="Result-Input-Inning">回</td>
                    <td><input type="text" v-model="result.Result" class="Result-Input-Result"></td>
                  </div>
                </tr>
              </div>
            </tbody>
          </div>
        </table>
      </div>
      <div v-if="props.callDivision == DialogCallDivision.VisitorPitcherInfo">
        <table border="1">
          <div>
            <thead>
              <tr>
                <th>名前</th>
                <th>投球数</th>
                <th>奪三振</th>
                <th>与四球</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(visitorPitcherInfo) in editVisitorPitcherInfos" :key="visitorPitcherInfo.ID">
                <td><input type="text" v-model="visitorPitcherInfo.Name" class="Result-Input-Name" disabled></td>
                <td><input type="text" v-model="visitorPitcherInfo.PitchCount" class="Member-Num"></td>
                <td><input type="text" v-model="visitorPitcherInfo.SO" class="Member-Num"></td>
                <td><input type="text" v-model="visitorPitcherInfo.BB" class="Member-Num"></td>
              </tr>
            </tbody>
          </div>
        </table>
      </div>
      <div v-if="props.callDivision == DialogCallDivision.HomePitcherInfo">
        <table border="1">
          <div>
            <thead>
              <tr>
                <th>名前</th>
                <th>投球数</th>
                <th>奪三振</th>
                <th>与四球</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(homePitcherInfo) in editHomePitcherInfos" :key="homePitcherInfo.ID">
                <td><input type="text" v-model="homePitcherInfo.Name" class="Result-Input-Name" disabled></td>
                <td><input type="text" v-model="homePitcherInfo.PitchCount" class="Member-Num"></td>
                <td><input type="text" v-model="homePitcherInfo.SO" class="Member-Num"></td>
                <td><input type="text" v-model="homePitcherInfo.BB" class="Member-Num"></td>
              </tr>
            </tbody>
          </div>
        </table>
      </div>
      <div v-if="props.callDivision == DialogCallDivision.Score">
        <table border="1">
          <thead>
            <tr>
              <th>チーム名</th>
              <div v-for="n in props.gameInfo.GameProgressInfo.NowInning" :key="n"><th>{{ n }}</th></div>
              <th>R</th>
              <th>H</th>
              <th>E</th>
              <th>LOB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" class="Member-Input-Name"></td>
              <div v-for="(visiter, index) in editScoreData.VisitorScore" :key="index">
                <td><input type="text" v-model="visiter[index]"></td>
              </div>
              <td><input type="text" class="Member-Input-Name"></td>
              <td><input type="text" class="Member-Input-Name"></td>
              <td><input type="text" class="Member-Input-Name"></td>
              <td><input type="text" class="Member-Input-Name"></td>
            </tr>
            <tr>
              <td><input type="text" class="Member-Input-Name"></td>
              <div v-for="(home, index) in editScoreData.HomeScore" :key="index">
                <td><input type="text" v-model="home[index]"></td>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="Footer">
      <button class="Ok" v-on:click="clickOK()">OK</button>
      <button class="Cancel" v-on:click="clickCancel()">キャンセル</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits, watch } from 'vue';
import { DialogCallDivision, VisitorHomeDivision } from './ts/constant';
import { MemberController } from './ts/member-controller';
import { BattingResultPerTeamModel, DefaultMemberModel, PitcherInfoModel, UmpireModel } from './ts/model/member-info-model';
import { RunningScoreModel } from './ts/model/score-info-model';
import _ from 'lodash';
import { GameInfoModel } from './ts/model/game-model';

const props = defineProps<{
  flag: boolean;
  callDivision: string;
  visitorMembers: DefaultMemberModel[];
  homeMembers: DefaultMemberModel[];
  visitorBattingResults: BattingResultPerTeamModel;
  homeBattingResults: BattingResultPerTeamModel;
  visitorPitcherInfos: PitcherInfoModel[];
  homePitcherInfos: PitcherInfoModel[];
  scoreData: RunningScoreModel;
  gameInfo: GameInfoModel;
}>()

// emit
const emits = defineEmits<{
  (e: 'sendModifyData', v: any): void;
  (e: 'closeDialog', v: boolean): void;
}>()

const memberController = new MemberController();
// 変更データ
let editVisitorMembers = ref<DefaultMemberModel[]>([]);
let editHomeMembers = ref<DefaultMemberModel[]>([]);
let editVisitorBattingResults = ref(new BattingResultPerTeamModel());
let editHomeBattingResults = ref(new BattingResultPerTeamModel());
let editVisitorPitcherInfos = ref<PitcherInfoModel[]>([]);
let editHomePitcherInfos = ref<PitcherInfoModel[]>([]);
let editScoreData = ref(new RunningScoreModel());
let gameInfo = ref(new GameInfoModel());
// イニング
let inning = ref(0);

/**
 * OKクリック
 */
function clickOK(): void {
  switch (props.callDivision) {
    case DialogCallDivision.VisitorMemberInfo:
      emits('sendModifyData', editVisitorMembers.value);
      break;
    case DialogCallDivision.HomeMemberInfo:
      emits('sendModifyData', editHomeMembers.value);
      break;
    case DialogCallDivision.VisitorBattingResult:
      emits('sendModifyData', editVisitorBattingResults.value);
      break;
    case DialogCallDivision.HomeBattingResult:
      emits('sendModifyData', editHomeBattingResults.value);
      break;
    case DialogCallDivision.VisitorPitcherInfo:
      emits('sendModifyData', editVisitorPitcherInfos.value);
      break;
    case DialogCallDivision.HomePitcherInfo:
      emits('sendModifyData', editHomePitcherInfos.value);
      break;
    case DialogCallDivision.Score:
      emits('sendModifyData', editScoreData.value);
      break;
    default:
      break;
  }
}

/**
 * キャンセルクリック
 */
function clickCancel(): void {
  emits('closeDialog', false);
}

/**
 * 打者成績計算
 * @param index
 * @param division
 */
function calcBatterStats(index: number, division: number) {
  if (division == VisitorHomeDivision.Visitor) {
    const targetStats = editVisitorMembers.value[index].BatterStats;
    // 数値変換
    targetStats.Atbat = Number(targetStats.Atbat);
    targetStats.Hit = Number(targetStats.Hit);
    targetStats.Double = Number(targetStats.Double);
    targetStats.Triple = Number(targetStats.Triple);
    targetStats.HomeRun = Number(targetStats.HomeRun);
    targetStats.RBI = Number(targetStats.RBI);
    targetStats.SO = Number(targetStats.SO);
    targetStats.BB = Number(targetStats.BB);
    targetStats.HBP = Number(targetStats.HBP);
    targetStats.SacBunt = Number(targetStats.SacBunt);
    targetStats.SacFly = Number(targetStats.SacFly);
    targetStats.SB = Number(targetStats.SB);
    targetStats.CS = Number(targetStats.CS);
    targetStats.DP = Number(targetStats.DP);

    // 打率
    editVisitorMembers.value[index].BatterStats.AVG = memberController.CalcAvg(targetStats.Atbat, targetStats.Hit);
    // 塁打
    editVisitorMembers.value[index].BatterStats.TotalBases = memberController.CalcTotalBases(targetStats.Hit, targetStats.Double, targetStats.Triple, targetStats.HomeRun);
    // 出塁率
    editVisitorMembers.value[index].BatterStats.OBP = memberController.CalcOBP(targetStats);
    // OPS
    editVisitorMembers.value[index].BatterStats.OPS = memberController.CalcOPS(targetStats);
    // RC27
    editVisitorMembers.value[index].BatterStats.RC27 = memberController.CalcRC27(targetStats);
  } else {
    const targetStats = editHomeMembers.value[index].BatterStats;
    // 数値変換
    targetStats.Atbat = Number(targetStats.Atbat);
    targetStats.Hit = Number(targetStats.Hit);
    targetStats.Double = Number(targetStats.Double);
    targetStats.Triple = Number(targetStats.Triple);
    targetStats.HomeRun = Number(targetStats.HomeRun);
    targetStats.RBI = Number(targetStats.RBI);
    targetStats.SO = Number(targetStats.SO);
    targetStats.BB = Number(targetStats.BB);
    targetStats.HBP = Number(targetStats.HBP);
    targetStats.SacBunt = Number(targetStats.SacBunt);
    targetStats.SacFly = Number(targetStats.SacFly);
    targetStats.SB = Number(targetStats.SB);
    targetStats.CS = Number(targetStats.CS);
    targetStats.DP = Number(targetStats.DP);

    // 打率
    editHomeMembers.value[index].BatterStats.AVG = memberController.CalcAvg(targetStats.Atbat, targetStats.Hit);
    // 塁打
    editHomeMembers.value[index].BatterStats.TotalBases = memberController.CalcTotalBases(targetStats.Hit, targetStats.Double, targetStats.Triple, targetStats.HomeRun);
    // 出塁率
    editHomeMembers.value[index].BatterStats.OBP = memberController.CalcOBP(targetStats);
    // OPS
    editHomeMembers.value[index].BatterStats.OPS = memberController.CalcOPS(targetStats);
    // RC27
    editHomeMembers.value[index].BatterStats.RC27 = memberController.CalcRC27(targetStats);
  }
}

watch(props, () => {
  switch (props.callDivision) {
    case DialogCallDivision.VisitorMemberInfo:
      editVisitorMembers.value = _.cloneDeep(props.visitorMembers);
      break;
    case DialogCallDivision.HomeMemberInfo:
      editHomeMembers.value = _.cloneDeep(props.homeMembers);
      break;
    case DialogCallDivision.VisitorBattingResult:
      editVisitorBattingResults.value = _.cloneDeep(props.visitorBattingResults);
      break;
    case DialogCallDivision.HomeBattingResult:
      editHomeBattingResults.value = _.cloneDeep(props.homeBattingResults);
      break;
    case DialogCallDivision.VisitorPitcherInfo:
      editVisitorPitcherInfos.value = _.cloneDeep(props.visitorPitcherInfos);
      break;
    case DialogCallDivision.HomePitcherInfo:
      editHomePitcherInfos.value = _.cloneDeep(props.homePitcherInfos);
      break;
    case DialogCallDivision.Score:
      editScoreData.value = _.cloneDeep(props.scoreData);
      break;
    default:
      break;
  }
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Main {
  background-color: white;
  box-shadow: 5px 5px 15px black;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 400px;
  height: 240px;
}

.Content {
  margin: 5px;
  height: 180px;
  width: 390px;
  overflow: auto;
}

.Umpire-Row {
  padding-top: 5px;
  margin: auto;
  width: 220px;
}

.Footer {
  position: absolute;
  right: 0;
  bottom: 10px;
}

.Ok {
  width: 50px;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: dodgerblue;
  color: white;
}

.Cancel {
  width: 90px;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
}

.Content table{
  margin: 0;
  border-spacing: 0;
}

.Content th{
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #FFFFFF;
  border-top:#FFFFFF;
  border:1px solid;
  font-size: 15px;
}

.Member-Input-Name {
  width: 100px;
}

.Member-Input-Name:disabled {
  width: 100px;
  color: #000000;
  background-color: #FFFFFF;
}

.Member-Num {
  width: 40px;
}

.Member-Num:disabled {
  width: 40px;
  color: #000000;
  background-color: #FFFFFF;
}

.Result-Input-Name {
  width: 140px;
}

.Result-Input-Name:disabled {
  width: 140px;
  color: #000000;
  background-color: #FFFFFF;
}

.Result-Input-Inning {
  width: 30px;
}

.Result-Input-Result {
  width: 100px;
}

.Score-Team-Name {
  width: 140px;
}

.Score-Team-Name:disabled {
  width: 140px;
  color: #000000;
  background-color: #FFFFFF;
}

</style>