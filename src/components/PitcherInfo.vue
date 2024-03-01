<template>
  <div class="Pitch-Info-Box">
    <div
      v-if="gameInfo.GameProgressInfo.IsStarted && data.Number"
      :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'BGC-Home':'BGC-Visitor']"
    >
      <div class="Pitch-Info-Row">
        <div class="Pitch-Info-Num">
          <div
            id="pitcherNumber"
            class="Pitch-Info-Num-Text"
            :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Home':'Text-Visitor',
                     gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor && design.Home.Edge != '' ? 'Home-Edge-Shadow' : 'Text-Shadow',
                     gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && design.Visitor.Edge != '' ? 'Visitor-Edge-Shadow' : 'Text-Shadow',]"
            :style="[{transform: `scaleX(${numTrans})`, transformOrigin: 'left'}]"
          >{{ data.Number }}</div>
        </div>
        <div class="Pitch-Info-Name">
          <div
            id="pitcherName"
            class="Pitch-Info-Name-Text"
            :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Home':'Text-Visitor',
                     gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor && design.Home.Edge != '' ? 'Home-Edge-Shadow' : 'Text-Shadow',
                     gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && design.Visitor.Edge != '' ? 'Visitor-Edge-Shadow' : 'Text-Shadow',]"
            :style="[{transform: `scaleX(${nameTrans})`, transformOrigin: 'left'}]"
          >{{ data.FullName }}</div>
        </div>
      </div>
      <div class="Pitch-Info-Row">
        <div
          class="Pitch-Info-Title"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Home':'Text-Visitor']"
        >投球数</div>
        <div
          id="pitch"
          class="Pitch-Info-Val"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Home':'Text-Visitor',
                    gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor && design.Home.Edge != '' ? 'Home-Edge-Shadow' : 'Text-Shadow',
                    gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && design.Visitor.Edge != '' ? 'Visitor-Edge-Shadow' : 'Text-Shadow',]"
          :style="[{transform: `scaleX(${pitchTrans})`, transformOrigin: 'right'}]"
        >{{ data.PitchCount }}</div>
        <div
          class="Pitch-Info-Ball"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Home':'Text-Visitor']"
        >球</div>
      </div>
      <div class="Pitch-Info-Row">
        <div class="Pitch-Info-Title">
          <div
            class="Pitch-Info-Title-AtBat"
            :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Home':'Text-Visitor']"
          >この打席</div>
        </div>
        <div
          id="atBat"
          class="Pitch-Info-Val"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Home':'Text-Visitor',
                    gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor && design.Home.Edge != '' ? 'Home-Edge-Shadow' : 'Text-Shadow',
                    gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && design.Visitor.Edge != '' ? 'Visitor-Edge-Shadow' : 'Text-Shadow',]"
          :style="[{transform: `scaleX(${pitchTrans})`, transformOrigin: 'right'}]"
        >{{ data.ThisAtBat }}</div>
        <div
          class="Pitch-Info-Ball"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Home':'Text-Visitor']"
        >球</div>
      </div>
      <div class="Pitch-Info-Row">
        <div
          class="Pitch-Info-Title"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Home':'Text-Visitor']"
        >奪三振</div>
        <div
          id="SO"
          class="Pitch-Info-Val"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Home':'Text-Visitor',
                    gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor && design.Home.Edge != '' ? 'Home-Edge-Shadow' : 'Text-Shadow',
                    gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && design.Visitor.Edge != '' ? 'Visitor-Edge-Shadow' : 'Text-Shadow',]"
          :style="[{transform: `scaleX(${pitchTrans})`, transformOrigin: 'right'}]"
        >{{ data.SO }}</div>
      </div>
      <div class="Pitch-Info-Row">
        <div
          class="Pitch-Info-Title"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Home':'Text-Visitor']"
        >与四球</div>
        <div
          id="BB"
          class="Pitch-Info-Val"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Home':'Text-Visitor',
                    gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor && design.Home.Edge != '' ? 'Home-Edge-Shadow' : 'Text-Shadow',
                    gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && design.Visitor.Edge != '' ? 'Visitor-Edge-Shadow' : 'Text-Shadow',]"
          :style="[{transform: `scaleX(${pitchTrans})`, transformOrigin: 'right'}]"
        >{{ data.BB }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ParticipationMemberModel, ParticipationMemberPerTeamModel, PitcherInfoModel } from './ts/model/member-info-model';
import { defineProps, nextTick, ref, toRef, toRefs, watch } from 'vue';
import { DesignModel, MemberDesignModel, PitcherStatsDesignModel, PitcherStatsDesignSendModel } from './ts/model/design-model';
import { GameInfoModel } from './ts/model/game-model';
import { VisitorHomeDivision } from './ts/constant';

const props = defineProps<{
  data: PitcherInfoModel;
  gameInfo: GameInfoModel;
  design: PitcherStatsDesignSendModel;
}>()

/**
 * 背番号の横幅計算
 * @param element 
 */
function calcNumberWidth(element: any): string {
  let returnData = '1.0';
  if (element) {
    if (element.scrollWidth > 43) {
      let width = 43 / element.scrollWidth;
      returnData = width.toString();
    }
  }
  return returnData;
}

/**
 * 名前の横幅計算
 * @param element DOM要素
 */
function calcNameWidth(element: any): string {
  let returnData = '1.0';
  if (element) {
    if (element.scrollWidth > 150) {
      let width = 150 / element.scrollWidth;
      returnData = width.toString();
    }
  }
  return returnData;
}

/**
 * 数字の横幅計算
 * @param element 
 */
function calcNumbersWidth(element: any): string {
  let returnData = '1.0';
  if (element) {
    if (element.scrollWidth > 75) {
      let width = 75 / element.scrollWidth;
      returnData = width.toString();
    }
  }
  return returnData;
}

// 背番号
let numTrans = ref('1.0');
// 名前
let nameTrans = ref('1.0');
// 投球数
let pitchTrans = ref('1.0');
// この打席
let atBatTrans = ref('1.0');
// 奪三振
let SOTrans = ref('1.0');
// 与四球
let BBTrans = ref('1.0');

watch(props, () => {
  nextTick(() => {
    numTrans.value = calcNumberWidth(document.getElementById('pitcherNumber'));
    nameTrans.value = calcNameWidth(document.getElementById('pitcherName'));
    pitchTrans.value = calcNumbersWidth(document.getElementById('pitch'));
    atBatTrans.value = calcNumbersWidth(document.getElementById('atBat'));
    SOTrans.value = calcNumbersWidth(document.getElementById('SO'));
    BBTrans.value = calcNumbersWidth(document.getElementById('BB'));
  })
});

</script>

<style scoped>
.Pitch-Info-Box{
  width: 220px;
  height: 230px;
}

.Pitch-Info-Row{
  display: flex;
  padding-left: 10px;
}

.Pitch-Info-Num{
  width: 50px;
  height: 45px;
  text-align: center;
}

.Pitch-Info-Num-Text{
  width: 43px;
  font-family: 'DIN-Regular';
  font-weight: bold;
  font-size: 35px;
  line-height: 48px;
  text-align: center;
}

.Pitch-Info-Name{
  width: 150px;
  height: 45px;
  text-align: center;
}

.Pitch-Info-Name-Text{
  white-space: nowrap;
  font-family: 'Noto Sans JP', sans-serif;
  width: 150px;
  height: 45px;
  font-size: 33px;
  line-height: 43px;
  text-align: center;
}

.Pitch-Info-Title{
  white-space: nowrap;
  font-family: 'Noto Sans JP', sans-serif;
  width: 85px;
  height: 45px;
  font-size: 28px;
  line-height: 43px;
  margin-right: 10px;
}

.Pitch-Info-Title-AtBat{
  white-space: nowrap;
  font-family: 'Noto Sans JP', sans-serif;
  width: 85px;
  height: 45px;
  font-size: 28px;
  line-height: 43px;
  text-align: center;
  transform: scaleX(0.75);
  transform-origin: left;
}

.Pitch-Info-Val{
  font-family: 'DIN-Regular';
  font-weight: bold;
  width: 65px;
  height: 45px;
  font-size: 40px;
  font-weight: bold;
  line-height: 44px;
  text-align: right;
}

.Pitch-Info-Ball{
  white-space: nowrap;
  font-family: 'Noto Sans JP', sans-serif;
  width: 50px;
  height: 45px;
  font-size: 28px;
  line-height: 43px;
  text-align: center;
}

.BGC-Visitor {
  background: v-bind('design.Visitor.BGC');
}

.Text-Visitor {
  color: v-bind('design.Visitor.Text');
}

.BGC-Home {
  background: v-bind('design.Home.BGC');
}

.Text-Home {
  color: v-bind('design.Home.Text');
}

.Text-Shadow {
  text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.8);
}

.Visitor-Edge-Shadow {
  text-shadow: 1px 1px 0px v-bind('design.Visitor.Edge'),
               -1px -1px 0px v-bind('design.Visitor.Edge'),
               -1px 1px 0px v-bind('design.Visitor.Edge'),
               -1px -1px 0px v-bind('design.Visitor.Edge'),
               0px 1px 0px v-bind('design.Visitor.Edge'),
               0px -1px 0px v-bind('design.Visitor.Edge'),
               -1px 0px 0px v-bind('design.Visitor.Edge'),
               1px 0px 0px v-bind('design.Visitor.Edge'),
               3px 3px 2px rgba(0, 0, 0, 0.8);
}

.Home-Edge-Shadow {
  text-shadow: 1px 1px 0px v-bind('design.Home.Edge'),
               -1px -1px 0px v-bind('design.Home.Edge'),
               -1px 1px 0px v-bind('design.Home.Edge'),
               -1px -1px 0px v-bind('design.Home.Edge'),
               0px 1px 0px v-bind('design.Home.Edge'),
               0px -1px 0px v-bind('design.Home.Edge'),
               -1px 0px 0px v-bind('design.Home.Edge'),
               1px 0px 0px v-bind('design.Home.Edge'),
               3px 3px 2px rgba(0, 0, 0, 0.8);
}

</style>