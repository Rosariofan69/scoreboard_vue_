<template>
  <div class="Position-Box" v-if="dispFlg">
    <img src="./image/position.png">
    <div
      v-if="position.P"
      class="Position-Name Position-P"
      :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-BGC-Home':'Position-BGC-Visitor']"
    >
      <div
        id="pitcher"
        class="Position-Name-Text"
        :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-Text-Home':'Position-Text-Visitor',
                 pitcherTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${pitcherTrans})`, transformOrigin: 'left'}]"
      >{{ position.P }}</div>
    </div>
    <div
      v-if="position.C"
      class="Position-Name Position-C"
      :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-BGC-Home':'Position-BGC-Visitor']"
    >
      <div
        id="catcher"
        class="Position-Name-Text"
        :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-Text-Home':'Position-Text-Visitor',
                 catcherTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${catcherTrans})`, transformOrigin: 'left'}]"
      >{{ position.C }}</div>
    </div>
    <div
      v-if="position.FB"
      class="Position-Name Position-1B"
      :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-BGC-Home':'Position-BGC-Visitor']"
    >
      <div
        id="first"
        class="Position-Name-Text"
        :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-Text-Home':'Position-Text-Visitor',
                 firstTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${firstTrans})`, transformOrigin: 'left'}]"
      >{{ position.FB }}</div>
    </div>
    <div
      v-if="position.SB"
      class="Position-Name Position-2B"
      :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-BGC-Home':'Position-BGC-Visitor']"
    >
      <div
        id="second"
        class="Position-Name-Text"
        :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-Text-Home':'Position-Text-Visitor',
                 secondTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${secondTrans})`, transformOrigin: 'left'}]"
      >{{ position.SB }}</div>
    </div>
    <div
      v-if="position.TB"
      class="Position-Name Position-3B"
      :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-BGC-Home':'Position-BGC-Visitor']"
    >
      <div
        id="third"
        class="Position-Name-Text"
        :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-Text-Home':'Position-Text-Visitor',
                 thirdTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${thirdTrans})`, transformOrigin: 'left'}]"
      >{{ position.TB }}</div>
    </div>
    <div
      v-if="position.SS"
      class="Position-Name Position-SS"
      :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-BGC-Home':'Position-BGC-Visitor']"
    >
      <div
        id="shortStop"
        class="Position-Name-Text"
        :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-Text-Home':'Position-Text-Visitor',
                 shortStopTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${shortStopTrans})`, transformOrigin: 'left'}]"
      >{{ position.SS }}</div>
    </div>
    <div
      v-if="position.LF"
      class="Position-Name Position-LF"
      :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-BGC-Home':'Position-BGC-Visitor']"
    >
      <div
        id="left"
        class="Position-Name-Text"
        :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-Text-Home':'Position-Text-Visitor',
                 leftTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${leftTrans})`, transformOrigin: 'left'}]"
      >{{ position.LF }}</div>
    </div>
    <div
      v-if="position.CF"
      class="Position-Name Position-CF"
      :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-BGC-Home':'Position-BGC-Visitor']"
    >
      <div
        id="center"
        class="Position-Name-Text"
        :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-Text-Home':'Position-Text-Visitor',
                 centerTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${centerTrans})`, transformOrigin: 'left'}]"
      >{{ position.CF }}</div>
    </div>
    <div
      v-if="position.RF"
      class="Position-Name Position-RF"
      :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-BGC-Home':'Position-BGC-Visitor']"
    >
      <div
        id="right"
        class="Position-Name-Text"
        :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Position-Text-Home':'Position-Text-Visitor',
                 rightTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${rightTrans})`, transformOrigin: 'left'}]"
      >{{ position.RF }}</div>
    </div>
    <div
      v-if="runner.First.Name"
      class="Position-Runner-Name Position-Runner-1B"
      :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Runner-BGC-Visitor':'Runner-BGC-Home']"
    >
      <div
        id="firstRunner"
        class="Position-Name-Text"
        :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Runner-Text-Visitor':'Runner-Text-Home',
                 firstRunnerTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${firstRunnerTrans})`, transformOrigin: 'left'}]"
      >{{ runner.First.Name }}</div>
    </div>
    <div
      v-if="runner.Second.Name"
      class="Position-Runner-Name Position-Runner-2B"
      :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Runner-BGC-Visitor':'Runner-BGC-Home']"
    >
      <div
        id="secondRunner"
        class="Position-Name-Text"
        :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Runner-Text-Visitor':'Runner-Text-Home',
                 secondRunnerTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${secondRunnerTrans})`, transformOrigin: 'left'}]"
      >{{ runner.Second.Name }}</div>
    </div>
    <div
      v-if="runner.Third.Name"
      class="Position-Runner-Name Position-Runner-3B"
      :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Runner-BGC-Visitor':'Runner-BGC-Home']"
    >
      <div
        id="thirdRunner"
        class="Position-Name-Text"
        :class="[gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor ? 'Runner-Text-Visitor':'Runner-Text-Home',
                 thirdRunnerTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${thirdRunnerTrans})`, transformOrigin: 'left'}]"
      >{{ runner.Third.Name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PositionModel, RunnerNameModel } from './ts/model/member-info-model';
import { defineProps, nextTick, ref, toRef, toRefs, watch } from 'vue';
import { DesignModel, MemberDesignModel, PositionDesignSendModel } from './ts/model/design-model';
import { GameInfoModel } from './ts/model/game-model';
import { VisitorHomeDivision } from './ts/constant';

const props = defineProps<{
  position: PositionModel;
  runner: RunnerNameModel;
  gameInfo: GameInfoModel;
  design: PositionDesignSendModel;
  dispFlg: boolean;
}>()

/**
 * 名前の横幅計算
 * @param element DOM要素
 */
 function calcNameWidth(element: any): string {
  let returnData = '1.0';
  if (element) {
    if (element.scrollWidth > 75) {
      let width = 75 / element.scrollWidth;
      returnData = width.toString();
    }
  }
  return returnData;
}

/**
 * text-align-last決定
 * @param text テキスト
 */
function decisionTextAlignLastJustify(text: string): boolean {
  let returnData = true;
  // 半角英数か1文字の場合、中央
  if (text) {
    if (text.length === 1) {
      returnData = false;
    }
  }
  return returnData;
}

// 投手
let pitcherTrans = ref('1.0');
let pitcherTextAlignLastJustify = ref(true);
// 捕手
let catcherTrans = ref('1.0');
let catcherTextAlignLastJustify = ref(true);
// 一塁手
let firstTrans = ref('1.0');
let firstTextAlignLastJustify = ref(true);
// 二塁手
let secondTrans = ref('1.0');
let secondTextAlignLastJustify = ref(true);
// 三塁手
let thirdTrans = ref('1.0');
let thirdTextAlignLastJustify = ref(true);
// 遊撃手
let shortStopTrans = ref('1.0');
let shortStopTextAlignLastJustify = ref(true);
// 左翼手
let leftTrans = ref('1.0');
let leftTextAlignLastJustify = ref(true);
// 中堅手
let centerTrans = ref('1.0');
let centerTextAlignLastJustify = ref(true);
// 右翼手
let rightTrans = ref('1.0');
let rightTextAlignLastJustify = ref(true);
// 一塁走者
let firstRunnerTrans = ref('1.0');
let firstRunnerTextAlignLastJustify = ref(true);
// 二塁走者
let secondRunnerTrans = ref('1.0');
let secondRunnerTextAlignLastJustify = ref(true);
// 三塁走者
let thirdRunnerTrans = ref('1.0');
let thirdRunnerTextAlignLastJustify = ref(true);

watch(props, () => {
  nextTick(() => {
    pitcherTrans.value = calcNameWidth(document.getElementById('pitcher'));
    pitcherTextAlignLastJustify.value = decisionTextAlignLastJustify(props.position.P);
    catcherTrans.value = calcNameWidth(document.getElementById('catcher'));
    catcherTextAlignLastJustify.value = decisionTextAlignLastJustify(props.position.C);
    firstTrans.value = calcNameWidth(document.getElementById('first'));
    firstTextAlignLastJustify.value = decisionTextAlignLastJustify(props.position.FB);
    secondTrans.value = calcNameWidth(document.getElementById('second'));
    secondTextAlignLastJustify.value = decisionTextAlignLastJustify(props.position.SB);
    thirdTrans.value = calcNameWidth(document.getElementById('third'));
    thirdTextAlignLastJustify.value = decisionTextAlignLastJustify(props.position.TB);
    shortStopTrans.value = calcNameWidth(document.getElementById('shortStop'));
    shortStopTextAlignLastJustify.value = decisionTextAlignLastJustify(props.position.SS);
    leftTrans.value = calcNameWidth(document.getElementById('left'));
    leftTextAlignLastJustify.value = decisionTextAlignLastJustify(props.position.LF);
    centerTrans.value = calcNameWidth(document.getElementById('center'));
    centerTextAlignLastJustify.value = decisionTextAlignLastJustify(props.position.CF);
    rightTrans.value = calcNameWidth(document.getElementById('right'));
    rightTextAlignLastJustify.value = decisionTextAlignLastJustify(props.position.RF);
    firstRunnerTrans.value = calcNameWidth(document.getElementById('firstRunner'));
    firstRunnerTextAlignLastJustify.value = decisionTextAlignLastJustify(props.runner.First.Name);
    secondRunnerTrans.value = calcNameWidth(document.getElementById('secondRunner'));
    secondRunnerTextAlignLastJustify.value = decisionTextAlignLastJustify(props.runner.Second.Name);
    thirdRunnerTrans.value = calcNameWidth(document.getElementById('thirdRunner'));
    thirdRunnerTextAlignLastJustify.value = decisionTextAlignLastJustify(props.runner.Third.Name);
  })
});

</script>

<style scoped>
.Position-Box {
  /* visibility: hidden; */
  position: absolute;
  top: 34px;
  width: 450px;
  height: 252px;
}

.Position-Box img {
  width: 100%;
  position:absolute;
}

.Position-Name {
  position: absolute;
  width: 75px;
  height: 30px;
  padding-left: 1.5px;
  padding-right: 1.5px;
  text-align: center;
}

.Position-Runner-Name {
  position: absolute;
  width: 75px;
  height: 30px;
  padding-left: 1.5px;
  padding-right: 1.5px;
  text-align: center;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
}

.Position-Name-Text {
  white-space: nowrap;
  font-family: 'Noto Sans JP', sans-serif;
  text-align: justify;
  text-align-last: justify;
  font-size: 25px;
  line-height: 27.5px;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
}

.Position-P {
  left: 50%;
  transform: translate(-50%, 160px);
}

.Position-C {
  left: 50%;
  transform: translate(-50%, 215px);
}

.Position-1B {
  top: 122px;
  left: 320px;
}

.Position-2B {
  top: 75px;
  left: 245px;
}

.Position-3B {
  top: 122px;
  right: 320px;
}

.Position-SS {
  top: 75px;
  right: 245px;
}

.Position-LF {
  top: 30px;
  left: 55px;
}

.Position-CF {
  top: 10px;
  left: 186px;
}

.Position-RF {
  top: 30px;
  right: 55px;
}

.Position-Runner-1B {
  top: 160px;
  left: 275px;
}

.Position-Runner-2B {
  left: 50%;
  transform: translate(-50%, 113px);
}

.Position-Runner-3B {
  top: 160px;
  right: 275px;
}

.Position-BGC-Visitor {
  background: v-bind('design.Visitor.FielderBGC');
}

.Position-Text-Visitor {
  color: v-bind('design.Visitor.FielderText');
}

.Position-BGC-Home {
  background: v-bind('design.Home.FielderBGC');
}

.Position-Text-Home {
  color: v-bind('design.Home.FielderText');
}

.Runner-BGC-Visitor {
  background: v-bind('design.Visitor.RunnerBGC');
}

.Runner-Text-Visitor {
  color: v-bind('design.Visitor.RunnerText');
}

.Runner-BGC-Home {
  background: v-bind('design.Home.RunnerBGC');
}

.Runner-Text-Home {
  color: v-bind('design.Home.RunnerText');
}

.Text-Align-Last-Center {
  text-align-last: center;
}

.Text-Align-Last-Justify {
  text-align-last: justify;
}

</style>