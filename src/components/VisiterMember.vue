<template>
  <div class="Member">
    <div class="Team">
      <div
        id="visiterTeamName"
        class="Team-Text"
        v-if="gameInfo.GameBaseInfo.VisiterTeamText != ''"
        :style="[{transform: `scaleX(${teamNameTrans})`, transformOrigin: 'left'}]"
      >{{ gameInfo.GameBaseInfo.VisiterTeamText }}
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.LeadOff.Name"
      :class="[{'Display-LeadOff' : data.LeadOff.DispStatus.Display}]"
    >
      <div class="Box-Pos"></div>
      <div 
        id="visiterLeadOffPos"
        class="Pos-Text"
        :style="[{transform: `scaleX(${leadOffPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.LeadOff.Position }}</div>
      <div class="Box-Name">
        <div
          id="visiterLeadOffName"
          class="Name-Text"
          :class="[leadOffTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
          :style="[{transform: `scaleX(${leadOffNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.LeadOff.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.Second.Name"
      :class="[{'Display-Second' : data.Second.DispStatus.Display}]"
    >
      <div class="Box-Pos"></div>
      <div 
        id="visiterSecondPos"
        class="Pos-Text"
        :style="[{transform: `scaleX(${secondPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Second.Position }}</div>
      <div class="Box-Name">
        <div
          id="visiterSecondName"
          class="Name-Text"
          :class="[secondTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
          :style="[{transform: `scaleX(${secondNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Second.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.Third.Name"
      :class="[{'Display-Third' : data.Third.DispStatus.Display}]"
    >
      <div class="Box-Pos"></div>
      <div 
        id="visiterThirdPos"
        class="Pos-Text"
        :style="[{transform: `scaleX(${thirdPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Third.Position }}</div>
      <div class="Box-Name">
        <div
          id="visiterThirdName"
          class="Name-Text"
          :class="[thirdTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
          :style="[{transform: `scaleX(${thirdNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Third.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.Fourth.Name"
      :class="[{'Display-Fourth' : data.Fourth.DispStatus.Display}]"
    >
      <div class="Box-Pos"></div>
      <div 
        id="visiterFourthPos"
        class="Pos-Text"
        :style="[{transform: `scaleX(${fourthPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Fourth.Position }}</div>
      <div class="Box-Name">
        <div
          id="visiterFourthName"
          class="Name-Text"
          :class="[fourthTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
          :style="[{transform: `scaleX(${fourthNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Fourth.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.Fifth.Name"
      :class="[{'Display-Fifth' : data.Fifth.DispStatus.Display}]"
    >
      <div class="Box-Pos"></div>
      <div 
        id="visiterFifthPos"
        class="Pos-Text"
        :style="[{transform: `scaleX(${fifthPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Fifth.Position }}</div>
      <div class="Box-Name">
        <div
          id="visiterFifthName"
          class="Name-Text"
          :class="[fifthTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
          :style="[{transform: `scaleX(${fifthNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Fifth.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.Sixth.Name"
      :class="[{'Display-Sixth' : data.Sixth.DispStatus.Display}]"
    >
      <div class="Box-Pos"></div>
      <div 
        id="visiterSixthPos"
        class="Pos-Text"
        :style="[{transform: `scaleX(${sixthPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Sixth.Position }}</div>
      <div class="Box-Name">
        <div
          id="visiterSixthName"
          class="Name-Text"
          :class="[sixthTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
          :style="[{transform: `scaleX(${sixthNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Sixth.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.Seventh.Name"
      :class="[{'Display-Seventh' : data.Seventh.DispStatus.Display}]"
    >
      <div class="Box-Pos"></div>
      <div 
        id="visiterSeventhPos"
        class="Pos-Text"
        :style="[{transform: `scaleX(${seventhPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Seventh.Position }}</div>
      <div class="Box-Name">
        <div
          id="visiterSeventhName"
          class="Name-Text"
          :class="[seventhTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
          :style="[{transform: `scaleX(${seventhNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Seventh.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.Eighth.Name"
      :class="[{'Display-Eighth' : data.Eighth.DispStatus.Display}]"
    >
      <div class="Box-Pos"></div>
      <div 
        id="visiterEighthPos"
        class="Pos-Text"
        :style="[{transform: `scaleX(${eighthPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Eighth.Position }}</div>
      <div class="Box-Name">
        <div
          id="visiterEighthName"
          class="Name-Text"
          :class="[eighthTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
          :style="[{transform: `scaleX(${eighthNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Eighth.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.Ninth.Name"
      :class="[{'Display-Ninth' : data.Ninth.DispStatus.Display}]"
    >
      <div class="Box-Pos"></div>
      <div 
        id="visiterNinthPos"
        class="Pos-Text"
        :style="[{transform: `scaleX(${ninthPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Ninth.Position }}</div>
      <div class="Box-Name">
        <div
          id="visiterNinthName"
          class="Name-Text"
          :class="[ninthTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
          :style="[{transform: `scaleX(${ninthNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Ninth.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full-P"
      v-if="data.Pitcher.Name"
      :class="[{'Display-Pitcher' : data.Pitcher.DispStatus.Display}]"
    >
      <div class="Box-Pos"></div>
      <div 
        id="visiterPitcherPos"
        class="Pos-Text"
        :style="[{transform: `scaleX(${pitcherPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Pitcher.Position }}</div>
      <div class="Box-Name">
        <div
          id="visiterPitcherName"
          class="Name-Text"
          :class="[pitcherTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
          :style="[{transform: `scaleX(${pitcherNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Pitcher.Name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ParticipationMemberModel, ParticipationMemberPerTeamModel } from './ts/model/member-info-model';
import { defineProps, nextTick, ref, toRef, toRefs, watch } from 'vue';
import { DesignModel, MemberDesignModel } from './ts/model/design-model';
import { GameInfoModel } from './ts/model/game-model';

const props = defineProps<{
  data: ParticipationMemberPerTeamModel;
  gameInfo: GameInfoModel;
  design: MemberDesignModel;
}>()

/**
 * チーム名の横幅計算
 * @param element 
 */
function calcTeamWidth(element: any): string {
  let returnData = '1.0';
  if (element) {
    if (element.scrollWidth > 170) {
      let width = 170 / element.scrollWidth;
      returnData = width.toString();
    }
  }
  return returnData;
}

/**
 * 守備位置の横幅計算
 * @param element DOM要素
 */
function calcPosWidth(element: any): string {
  let returnData = '1.0';
  if (element) {
    if (element.scrollWidth > 35) {
      let width = 35 / element.scrollWidth;
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
    if (element.scrollWidth > 120) {
      let width = 120 / element.scrollWidth;
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

// チーム名
let teamNameTrans = ref('1.0');
// 1番
let leadOffPosTrans = ref('1.0');
let leadOffNameTrans = ref('1.0');
let leadOffTextAlignLastJustify = ref(true);
// 2番
let secondPosTrans = ref('1.0');
let secondNameTrans = ref('1.0');
let secondTextAlignLastJustify = ref(true);
// 3番
let thirdPosTrans = ref('1.0');
let thirdNameTrans = ref('1.0');
let thirdTextAlignLastJustify = ref(true);
// 4番
let fourthPosTrans = ref('1.0');
let fourthNameTrans = ref('1.0');
let fourthTextAlignLastJustify = ref(true);
// 5番
let fifthPosTrans = ref('1.0');
let fifthNameTrans = ref('1.0');
let fifthTextAlignLastJustify = ref(true);
// 6番
let sixthPosTrans = ref('1.0');
let sixthNameTrans = ref('1.0');
let sixthTextAlignLastJustify = ref(true);
// 7番
let seventhPosTrans = ref('1.0');
let seventhNameTrans = ref('1.0');
let seventhTextAlignLastJustify = ref(true);
// 8番
let eighthPosTrans = ref('1.0');
let eighthNameTrans = ref('1.0');
let eighthTextAlignLastJustify = ref(true);
// 9番
let ninthPosTrans = ref('1.0');
let ninthNameTrans = ref('1.0');
let ninthTextAlignLastJustify = ref(true);
// 投手
let pitcherPosTrans = ref('1.0');
let pitcherNameTrans = ref('1.0');
let pitcherTextAlignLastJustify = ref(true);

watch(props, () => {
  nextTick(() => {
    teamNameTrans.value = calcTeamWidth(document.getElementById('visiterTeamName'));
    leadOffPosTrans.value = calcPosWidth(document.getElementById('visiterLeadOffPos'));
    leadOffNameTrans.value = calcNameWidth(document.getElementById('visiterLeadOffName'));
    leadOffTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.LeadOff.Name);
    secondPosTrans.value = calcPosWidth(document.getElementById('visiterSecondPos'));
    secondNameTrans.value = calcNameWidth(document.getElementById('visiterSecondName'));
    secondTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Second.Name);
    thirdPosTrans.value = calcPosWidth(document.getElementById('visiterThirdPos'));
    thirdNameTrans.value = calcNameWidth(document.getElementById('visiterThirdName'));
    thirdTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Third.Name);
    fourthPosTrans.value = calcPosWidth(document.getElementById('visiterFourthPos'));
    fourthNameTrans.value = calcNameWidth(document.getElementById('visiterFourthName'));
    fourthTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Fourth.Name);
    fifthPosTrans.value = calcPosWidth(document.getElementById('visiterFifthPos'));
    fifthNameTrans.value = calcNameWidth(document.getElementById('visiterFifthName'));
    fifthTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Fifth.Name);
    sixthPosTrans.value = calcPosWidth(document.getElementById('visiterSixthPos'));
    sixthNameTrans.value = calcNameWidth(document.getElementById('visiterSixthName'));
    sixthTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Sixth.Name);
    seventhPosTrans.value = calcPosWidth(document.getElementById('visiterSeventhPos'));
    seventhNameTrans.value = calcNameWidth(document.getElementById('visiterSeventhName'));
    seventhTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Seventh.Name);
    eighthPosTrans.value = calcPosWidth(document.getElementById('visiterEighthPos'));
    eighthNameTrans.value = calcNameWidth(document.getElementById('visiterEighthName'));
    eighthTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Eighth.Name);
    ninthPosTrans.value = calcPosWidth(document.getElementById('visiterNinthPos'));
    ninthNameTrans.value = calcNameWidth(document.getElementById('visiterNinthName'));
    ninthTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Ninth.Name);
    pitcherPosTrans.value = calcPosWidth(document.getElementById('visiterPitcherPos'));
    pitcherNameTrans.value = calcNameWidth(document.getElementById('visiterPitcherName'));
    pitcherTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Pitcher.Name);
  })
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');

.Member{
  position: absolute;
  vertical-align: middle;
  margin: 15px;
  text-align: center;
  line-height: 46px;
  overflow: hidden;
  width: 230px;
  height: 530px;
}

.Team{
  margin-bottom: 10px;
  margin-left: 20px;
  background: linear-gradient(to bottom, #FF0000 0%, #FF0000 40%, #c00000 60%, #c00000 100%);
  background: v-bind('design.TeamNameBGC');
  position: relative;
  overflow: hidden;
  width: 170px;
  height: 49px;
  padding-left: 10px;
  padding-right: 10px;
}

.Team-Text{
  font-family: 'Bahnschrift';
  /* font-family: 'Noto Sans JP', sans-serif; */
  color: v-bind('design.TeamNameText');
  font-size: 40px;
  line-height: 50px;
}

.Box-Full-P{
  margin: auto;
  position: relative;
  overflow: hidden;
  width: 190px;
  height: 42px;
  border-top: 4px solid v-bind('design.UpperLine');
  border-bottom: 4px solid v-bind('design.UnderLine');
  opacity: 0;
}

.Box-Full{
  margin: auto;
  position: relative;
  overflow: hidden;
  width: 190px;
  height: 42px;
  border-bottom: 4px solid v-bind('design.UnderLine');
  opacity: 0;
}

.Box-Pos{
  position: absolute;
  margin: 0;
  width: 51px;
  height: 42px;
  background: v-bind('design.PositionBasicBGC');
  transform: translateX(-5px) skewX(-10deg);
  border-right: 2px solid v-bind('design.DiagonalLine');
  z-index: 1;
  box-shadow: 3px 0px 8px black;
}

.Pos-Text{
  font-family: 'Alte DIN 1451 Mittelschrift';
  /* font-weight: bold; */
  position: absolute;
  color: v-bind('design.PositionBasicText');
  width: 35px;
  margin-left: 5px;
  font-size: 45px;
  line-height: 42px;
  text-align: center;
  z-index: 2;
  letter-spacing: -2px;
}

.Pos-Text-DH{
  font-family: 'DIN-Regular';
  font-weight: bold;
  position: absolute;
  width: 65px;
  height: 42px;
  font-size: 45px;
  line-height: 40px;
  text-align: center;
  z-index: 2;
  letter-spacing: -2px;
  transform: scaleX(0.7);
  transform-origin: left;
}

.Box-Name{
  overflow: hidden;
  margin-left: 42px;
  /* position: absolute; */
  width: 120px;
  height: 42px;
  background-color: #404040;
  padding-left: 18px;
  padding-right: 10px;
  z-index: 0;
}

.Name-Text{
  white-space: nowrap;
  /* width: 100%; */
  font-family: 'Noto Sans JP', sans-serif;
  line-height: 38px;
  font-size: 36px;
  /* text-align-last: justify; */
  height: 42px;
  text-shadow: 3px 2px 1px black;
}

.Text-Align-Last-Center {
  text-align-last: center;
}

.Text-Align-Last-Justify {
  text-align-last: justify;
}

.Display-LeadOff {
  animation: SlideInText 1s;
  animation-fill-mode: forwards;
}

.Display-Second {
  animation: SlideInText 1s;
  animation-delay: 100ms;
  animation-fill-mode: forwards;
}

.Display-Third {
  animation: SlideInText 1s;
  animation-delay: 200ms;
  animation-fill-mode: forwards;
}

.Display-Fourth {
  animation: SlideInText 1s;
  animation-delay: 300ms;
  animation-fill-mode: forwards;
}

.Display-Fifth {
  animation: SlideInText 1s;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
}

.Display-Sixth {
  animation: SlideInText 1s;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
}

.Display-Seventh {
  animation: SlideInText 1s;
  animation-delay: 600ms;
  animation-fill-mode: forwards;
}

.Display-Eighth {
  animation: SlideInText 1s;
  animation-delay: 700ms;
  animation-fill-mode: forwards;
}

.Display-Ninth {
  animation: SlideInText 1s;
  animation-delay: 800ms;
  animation-fill-mode: forwards;
}

.Display-Pitcher {
  animation: SlideInText 1s;
  animation-delay: 900ms;
  animation-fill-mode: forwards;
}

@keyframes SlideInText
{
    0%
    {
        transform: translateX(200px) scale(0.1);
        opacity: 1;
    }
    70%
    {
        transform: translateX(0px) scale(0.75);
        opacity: 1;
    }
    100%
    {
        transform: scale(1.0);
        opacity: 1;
    }
}

</style>
