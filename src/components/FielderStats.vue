<template>
  <div
    class="Stats-Box"
    v-if="(gameInfo.GameProgressInfo.IsStarted && data.Number) || dispFlg"
    :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'BGC-Visitor':'BGC-Home']"
  >
    <div class="Stats-Name-Row">
      <div class="Stats-Num">
        <div
          id="fielderNumber"
          class="Stats-Num-Text"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home',
                    gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor && design.Visitor.Edge != '' ? 'Visitor-Edge-Shadow' : 'Text-Shadow',
                    gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && design.Home.Edge != '' ? 'Home-Edge-Shadow' : 'Text-Shadow',]"
          :style="[{transform: `scaleX(${numTrans})`, transformOrigin: 'left'}]"
        >
          {{ data.Number }}
        </div>
      </div>
      <div class="Stats-Name">
        <div
          id="fielderName"
          class="Stats-Name-Text"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home',
                    gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor && design.Visitor.Edge != '' ? 'Visitor-Edge-Shadow' : 'Text-Shadow',
                    gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && design.Home.Edge != '' ? 'Home-Edge-Shadow' : 'Text-Shadow',]"
          :style="[{transform: `scaleX(${nameTrans})`, transformOrigin: 'left'}]"
        >
          {{ data.Name }}
        </div>
      </div>
    </div>
    <div class="Stats-Content-Row">
      <div 
        class="Stats-Title"
        :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home']"
      >AVG</div>
      <div
        class="Stats-Avg"
        :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home',
                  gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor && design.Visitor.Edge != '' ? 'Visitor-Edge-Shadow' : 'Text-Shadow',
                  gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && design.Home.Edge != '' ? 'Home-Edge-Shadow' : 'Text-Shadow',]"
      >{{ data.AVG }}</div>
      <div
        id="ab_h"
        class="Stats-Avg-Detail"
        :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home',
                  gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor && design.Visitor.Edge != '' ? 'Visitor-Edge-Shadow' : 'Text-Shadow',
                  gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && design.Home.Edge != '' ? 'Home-Edge-Shadow' : 'Text-Shadow',]"
        :style="[{transform: `scaleX(${ab_hTrans})`, transformOrigin: 'left'}]"
      >
        ({{ data.AB_H }})
      </div>
    </div>
    <div class="Stats-Content-Row">
      <div class="Stats-Content-Row-Left">
        <div
          class="Stats-Title"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home']"
        >HR</div>
        <div class="Stats-Content-Left">
          <div
            id="hr"
            class="Stats-Content-Left-Text"
            :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home',
                      gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor && design.Visitor.Edge != '' ? 'Visitor-Edge-Shadow' : 'Text-Shadow',
                      gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && design.Home.Edge != '' ? 'Home-Edge-Shadow' : 'Text-Shadow',]"
            :style="[{transform: `scaleX(${HRTrans})`, transformOrigin: 'left'}]"
          >
            {{ data.HR }}
          </div>
        </div>
      </div>
      <div class="Stats-Content-Row-Right">
        <div
          class="Stats-Title"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home']"
        >OBP</div>
        <div class="Stats-Content-Right">
          <div
            id="obp"
            class="Stats-Content-Right-Text"
            :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home',
                      gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor && design.Visitor.Edge != '' ? 'Visitor-Edge-Shadow' : 'Text-Shadow',
                      gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && design.Home.Edge != '' ? 'Home-Edge-Shadow' : 'Text-Shadow',]"
            :style="[{transform: `scaleX(${numTrans})`, transformOrigin: 'left'}]"
          >
            {{ data.OBP }}
          </div>
        </div>
      </div>
    </div>
    <div class="Stats-Content-Row">
      <div class="Stats-Content-Row-Left">
        <div
          class="Stats-Title"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home']"
        >RBI</div>
        <div class="Stats-Content-Left">
          <div
            id="rbi"
            class="Stats-Content-Left-Text"
            :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home',
                      gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor && design.Visitor.Edge != '' ? 'Visitor-Edge-Shadow' : 'Text-Shadow',
                      gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && design.Home.Edge != '' ? 'Home-Edge-Shadow' : 'Text-Shadow',]"
            :style="[{transform: `scaleX(${RBITrans})`, transformOrigin: 'left'}]"
          >
            {{ data.RBI }}
          </div>
        </div>
      </div>
      <div class="Stats-Content-Row-Right">
        <div
          class="Stats-Title"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home']"
        >OPS</div>
        <div class="Stats-Content-Right">
          <div
            id="ops"
            class="Stats-Content-Right-Text"
            :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home',
                      gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor && design.Visitor.Edge != '' ? 'Visitor-Edge-Shadow' : 'Text-Shadow',
                      gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && design.Home.Edge != '' ? 'Home-Edge-Shadow' : 'Text-Shadow',]"
            :style="[{transform: `scaleX(${OPSTrans})`, transformOrigin: 'left'}]"
          >
            {{ data.OPS }}
          </div>
        </div>
      </div>
    </div>
    <div class="Stats-Content-Row">
      <div class="Stats-Content-Row-Left">
        <div
          class="Stats-Title"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home']"
        >SB</div>
        <div class="Stats-Content-Left">
          <div
            id="sb"
            class="Stats-Content-Left-Text"
            :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home',
                      gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor && design.Visitor.Edge != '' ? 'Visitor-Edge-Shadow' : 'Text-Shadow',
                      gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && design.Home.Edge != '' ? 'Home-Edge-Shadow' : 'Text-Shadow',]"
            :style="[{transform: `scaleX(${SBTrans})`, transformOrigin: 'left'}]"
          >
            {{ data.SB }}
          </div>
        </div>
      </div>
      <div class="Stats-Content-Row-Right">
        <div
          class="Stats-Title"
          :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home']"
        >RC27</div>
        <div class="Stats-Content-Right">
          <div
            id="rc27"
            class="Stats-Content-Right-Text"
            :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Text-Visitor':'Text-Home',
                      gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor && design.Visitor.Edge != '' ? 'Visitor-Edge-Shadow' : 'Text-Shadow',
                      gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home && design.Home.Edge != '' ? 'Home-Edge-Shadow' : 'Text-Shadow',]"
            :style="[{transform: `scaleX(${RC27Trans})`, transformOrigin: 'left'}]"
          >
            {{ data.RC27 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DispBatterStatsModel, ParticipationMemberModel, ParticipationMemberPerTeamModel, PitcherInfoModel } from './ts/model/member-info-model';
import { defineProps, nextTick, ref, toRef, toRefs, watch } from 'vue';
import { DesignModel, FielderStatsDesignSendModel, MemberDesignModel, PitcherStatsDesignModel, PitcherStatsDesignSendModel } from './ts/model/design-model';
import { GameInfoModel } from './ts/model/game-model';
import { VisitorHomeDivision } from './ts/constant';

const props = defineProps<{
  data: DispBatterStatsModel;
  gameInfo: GameInfoModel;
  design: FielderStatsDesignSendModel;
  dispFlg: boolean;
}>()

/**
 * 横幅計算用定数
 */
enum WidthDivision {
  Number,
  Name,
  AtBatHit,
  Left,
  Right
}

/**
 * 横幅計算
 * @param element 
 */
function calcWidth(element: any, parent: number): string {
  let returnData = '1.0';
  let parentWidth = 0;

  switch (parent) {
    case WidthDivision.Number:
      parentWidth = 70;
      break;
    case WidthDivision.Name:
      parentWidth = 335;
      break;
    case WidthDivision.AtBatHit:
      parentWidth = 220;
      break;
    case WidthDivision.Left:
      parentWidth = 87;
      break;
    case WidthDivision.Right:
      parentWidth = 105;
      break;
  }

  if (element) {
    if (element.scrollWidth > parentWidth) {
      let width = parentWidth / element.scrollWidth;
      returnData = width.toString();
    }
  }
  return returnData;
}

// 背番号
let numTrans = ref('1.0');
// 名前
let nameTrans = ref('1.0');
// 打数-安打
let ab_hTrans = ref('1.0');
// 本塁打
let HRTrans = ref('1.0');
// 打点
let RBITrans = ref('1.0');
// 盗塁
let SBTrans = ref('1.0');
// 出塁率
let OBPTrans = ref('1.0');
// OPS
let OPSTrans = ref('1.0');
// RC27
let RC27Trans = ref('1.0');

watch(props, () => {
  nextTick(() => {
    numTrans.value = calcWidth(document.getElementById('fielderNumber'), WidthDivision.Number);
    nameTrans.value = calcWidth(document.getElementById('fielderName'), WidthDivision.Name);
    ab_hTrans.value = calcWidth(document.getElementById('ab_h'), WidthDivision.AtBatHit);
    HRTrans.value = calcWidth(document.getElementById('hr'), WidthDivision.Left);
    RBITrans.value = calcWidth(document.getElementById('rbi'), WidthDivision.Left);
    SBTrans.value = calcWidth(document.getElementById('sb'), WidthDivision.Left);
    OBPTrans.value = calcWidth(document.getElementById('obp'), WidthDivision.Right);
    OPSTrans.value = calcWidth(document.getElementById('ops'), WidthDivision.Right);
    RC27Trans.value = calcWidth(document.getElementById('rc27'), WidthDivision.Right);
  })
});

</script>

<style scoped>
.Stats-Box {
  visibility: visible;
  position: absolute;
  top: 34px;
  width: 450px;
  height: 252px;
}

.Stats-Name-Row {
  display: flex;
  padding-left: 20px;
  width: 430px;
  height: 65px;
}

.Stats-Num{
  width: 70px;
}

.Stats-Num-Text {
  font-family: 'DIN-Regular';
  font-weight: bold;
  font-size: 45px;
  line-height: 75px;
  text-align: center;
}

.Stats-Name {
  padding-left: 10px;
  padding-right: 15px;
  width: 335px;
}

.Stats-Name-Text {
  white-space: nowrap;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 50px;
  line-height: 57px;
}

.Stats-Content-Row {
  display: flex;
  width: 100%;
  height: 46px;
}

.Stats-Title {
  font-family: 'Bahnschrift';
  padding-right: 5px;
  width: 90px;
  font-size: 35px;
  line-height: 66px;
  text-align: right;
}

.Stats-Avg {
  font-family: 'DIN-Regular';
  font-weight: bold;
  padding-left: 8px;
  padding-right: 15px;
  font-size: 45px;
  line-height: 50px;
  letter-spacing: 1px;
}

.Stats-Avg-Detail {
  font-family: 'DIN-Regular';
  font-weight: bold;
  width: 220px;
  font-size: 35px;
  line-height: 50px;
}

.Stats-Content-Row-Left {
  display: flex;
  width: 220px;
  height: 46px;
}

.Stats-Content-Left {
  padding-left: 8px;
  padding-right: 10px;
  width: 87px;
}

.Stats-Content-Left-Text {
  font-family: 'DIN-Regular';
  font-weight: bold;
  font-size: 45px;
  line-height: 50px;
  text-align: right;
  letter-spacing: 1px;
}

.Stats-Content-Row-Right {
  display: flex;
  width: 230px;
  height: 46px;
}

.Stats-Content-Right {
  padding-left: 15px;
  padding-right: 10px;
  width: 105px;
}

.Stats-Content-Right-Text {
  font-family: 'DIN-Regular';
  font-weight: bold;
  font-size: 45px;
  line-height: 50px;
  text-align: right;
  letter-spacing: 1px;
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
  text-shadow: 1px 1px #999,
               2px 2px #777,
               3px 3px #555,
               4px 4px #000
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
               1px 1px #999,
               2px 2px #777,
               3px 3px #555,
               4px 4px #000
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
               1px 1px #999,
               2px 2px #777,
               3px 3px #555,
               4px 4px #000
}

</style>