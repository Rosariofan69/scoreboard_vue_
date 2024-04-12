<template>
  <div class="Running-Score-Full" v-if="gameInfo.GameBaseInfo.VisitorTeamName">
    <div class="Running-Score-Title-Full">
      <div class="Running-Score-Title" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="title1st" :style="[{transform: `scaleX(${title1stTrans})`, transformOrigin: 'left'}]">{{ data.Title.The1 }}</div>
      </div>
      <div class="Running-Score-Title" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="title2nd" :style="[{transform: `scaleX(${title2ndTrans})`, transformOrigin: 'left'}]">{{ data.Title.The2 }}</div>
      </div>
      <div class="Running-Score-Title" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="title3rd" :style="[{transform: `scaleX(${title3rdTrans})`, transformOrigin: 'left'}]">{{ data.Title.The3 }}</div>
      </div>
      <div class="Running-Score-Title" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="title4th" :style="[{transform: `scaleX(${title4thTrans})`, transformOrigin: 'left'}]">{{ data.Title.The4 }}</div>
      </div>
      <div class="Running-Score-Title" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="title5th" :style="[{transform: `scaleX(${title5thTrans})`, transformOrigin: 'left'}]">{{ data.Title.The5 }}</div>
      </div>
      <div class="Running-Score-Title" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="title6th" :style="[{transform: `scaleX(${title6thTrans})`, transformOrigin: 'left'}]">{{ data.Title.The6 }}</div>
      </div>
      <div class="Running-Score-Title" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="title7th" :style="[{transform: `scaleX(${title7thTrans})`, transformOrigin: 'left'}]">{{ data.Title.The7 }}</div>
      </div>
      <div class="Running-Score-Title" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="title8th" :style="[{transform: `scaleX(${title8thTrans})`, transformOrigin: 'left'}]">{{ data.Title.The8 }}</div>
      </div>
      <div class="Running-Score-Title" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="title9th" :style="[{transform: `scaleX(${title9thTrans})`, transformOrigin: 'left'}]">{{ data.Title.The9 }}</div>
      </div>
      <div class="Running-Score-Title" v-if="dispFlg10th" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">10</div>
      <div class="Running-Score-Title" v-if="dispFlg11th" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">11</div>
      <div class="Running-Score-Title" v-if="dispFlg12th" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">12</div>
      <div class="Running-Score-Title-Run" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">R</div>
      <div class="Running-Score-Title" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">H</div>
      <div class="Running-Score-Title" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">E</div>
      <div class="Running-Score-Title" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="titleLOB" :style="[{transform: `scaleX(${titleLOBTrans})`, transformOrigin: 'left'}]">LOB</div>
      </div>
    </div>
    <div class="Running-Score-Box">
      <div class="Score-Team-Visitor">
        <img :src="require(`./image/${gameInfo.GameBaseInfo.VisitorTeamName}.png`)" v-if="gameInfo.GameBaseInfo.VisitorTeamText == ''">
        <div
          id="visitorTeamNameScore"
          v-if="gameInfo.GameBaseInfo.VisitorTeamText"
          :class="[visitorTeamNameHalfWidthFlg ? 'Team-Text-Half-Width' : 'Team-Text-Full-Width',
                   visitorTeamNameTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
          :style="[{transform: `scaleX(${visitorTeamTrans})`, transformOrigin: 'left'}]">
          {{ gameInfo.GameBaseInfo.VisitorTeamText }}
        </div>
      </div>
      <div
        class="Running-Score-Odd"
        :class="[{'Now-Frame' : frameFlg.TopOf1st}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="topOf1st" :style="[{transform: `scaleX(${topOf1stTrans})`, transformOrigin: 'left'}]">{{ data.Score.TopOfThe1 }}</div>
      </div>
      <div
        class="Running-Score-Even"
        :class="[{'Now-Frame' : frameFlg.TopOf2nd}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="topOf2nd" :style="[{transform: `scaleX(${topOf2ndTrans})`, transformOrigin: 'left'}]">{{ data.Score.TopOfThe2 }}</div>
      </div>
      <div
        class="Running-Score-Odd"
        :class="[{'Now-Frame' : frameFlg.TopOf3rd}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="topOf3rd" :style="[{transform: `scaleX(${topOf3rdTrans})`, transformOrigin: 'left'}]">{{ data.Score.TopOfThe3 }}</div>
      </div>
      <div
        class="Running-Score-Even"
        :class="[{'Now-Frame' : frameFlg.TopOf4th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="topOf4th" :style="[{transform: `scaleX(${topOf4thTrans})`, transformOrigin: 'left'}]">{{ data.Score.TopOfThe4 }}</div>
      </div>
      <div
        class="Running-Score-Odd"
        :class="[{'Now-Frame' : frameFlg.TopOf5th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="topOf5th" :style="[{transform: `scaleX(${topOf5thTrans})`, transformOrigin: 'left'}]">{{ data.Score.TopOfThe5 }}</div>
      </div>
      <div
        class="Running-Score-Even"
        :class="[{'Now-Frame' : frameFlg.TopOf6th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="topOf6th" :style="[{transform: `scaleX(${topOf6thTrans})`, transformOrigin: 'left'}]">{{ data.Score.TopOfThe6 }}</div>
      </div>
      <div
        class="Running-Score-Odd"
        :class="[{'Now-Frame' : frameFlg.TopOf7th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="topOf7th" :style="[{transform: `scaleX(${topOf7thTrans})`, transformOrigin: 'left'}]">{{ data.Score.TopOfThe7 }}</div>
      </div>
      <div
        class="Running-Score-Even"
        :class="[{'Now-Frame' : frameFlg.TopOf8th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="topOf8th" :style="[{transform: `scaleX(${topOf8thTrans})`, transformOrigin: 'left'}]">{{ data.Score.TopOfThe8 }}</div>
      </div>
      <div
        class="Running-Score-Odd"
        :class="[{'Now-Frame' : frameFlg.TopOf9th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="topOf9th" :style="[{transform: `scaleX(${topOf9thTrans})`, transformOrigin: 'left'}]">{{ data.Score.TopOfThe9 }}</div>
      </div>
      <div
        class="Running-Score-Even"
        v-if="dispFlg10th"
        :class="[{'Now-Frame' : frameFlg.TopOf10th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="topOf10th" :style="[{transform: `scaleX(${topOf10thTrans})`, transformOrigin: 'left'}]">{{ data.Score.TopOfThe10 }}</div>
      </div>
      <div
        class="Running-Score-Odd"
        v-if="dispFlg11th"
        :class="[{'Now-Frame' : frameFlg.TopOf11th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="topOf11th" :style="[{transform: `scaleX(${topOf11thTrans})`, transformOrigin: 'left'}]">{{ data.Score.TopOfThe11 }}</div>
      </div>
      <div
        class="Running-Score-Even"
        v-if="dispFlg12th"
        :class="[{'Now-Frame' : frameFlg.TopOf12th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="topOf12th" :style="[{transform: `scaleX(${topOf12thTrans})`, transformOrigin: 'left'}]">{{ data.Score.TopOfThe12 }}</div>
      </div>
      <div class="Running-Score-Run" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="visitorR" :style="[{transform: `scaleX(${visitorRTrans})`, transformOrigin: 'left'}]">{{ data.Score.VisitorR }}</div>
      </div>
      <div class="Running-Score-Odd" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="visitorH" :style="[{transform: `scaleX(${visitorHTrans})`, transformOrigin: 'left'}]">{{ data.Score.VisitorH }}</div>
      </div>
      <div class="Running-Score-Even" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="visitorE" :style="[{transform: `scaleX(${visitorETrans})`, transformOrigin: 'left'}]">{{ data.Score.VisitorE }}</div>
      </div>
      <div class="Running-Score-Odd" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="visitorLOB" :style="[{transform: `scaleX(${visitorLOBTrans})`, transformOrigin: 'left'}]">{{ data.Score.VisitorLOB }}</div>
      </div>
    </div>
    <div class="Running-Score-MidLine"></div>
    <div class="Running-Score-Box">
      <div class="Score-Team-Home">
        <img :src="require(`./image/${gameInfo.GameBaseInfo.HomeTeamName}.png`)" v-if="gameInfo.GameBaseInfo.HomeTeamText == ''">
        <div
          id="homeTeamNameScore"
          v-if="gameInfo.GameBaseInfo.HomeTeamText"
          :class="[homeTeamNameHalfWidthFlg ? 'Team-Text-Half-Width' : 'Team-Text-Full-Width',
                   homeTeamNameTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
          :style="[{transform: `scaleX(${homeTeamTrans})`, transformOrigin: 'left'}]">
          {{ gameInfo.GameBaseInfo.HomeTeamText }}
        </div>
      </div>
      <div
        class="Running-Score-Odd"
        :class="[{'Now-Frame' : frameFlg.BottomOf1st}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="bottomOf1st" :style="[{transform: `scaleX(${bottomOf1stTrans})`, transformOrigin: 'left'}]">{{ data.Score.BottomOfThe1 }}</div>
      </div>
      <div
        class="Running-Score-Even"
        :class="[{'Now-Frame' : frameFlg.BottomOf2nd}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="bottomOf2nd" :style="[{transform: `scaleX(${bottomOf2ndTrans})`, transformOrigin: 'left'}]">{{ data.Score.BottomOfThe2 }}</div>
      </div>
      <div
        class="Running-Score-Odd"
        :class="[{'Now-Frame' : frameFlg.BottomOf3rd}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="bottomOf3rd" :style="[{transform: `scaleX(${bottomOf3rdTrans})`, transformOrigin: 'left'}]">{{ data.Score.BottomOfThe3 }}</div>
      </div>
      <div
        class="Running-Score-Even"
        :class="[{'Now-Frame' : frameFlg.BottomOf4th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="bottomOf4th" :style="[{transform: `scaleX(${bottomOf4thTrans})`, transformOrigin: 'left'}]">{{ data.Score.BottomOfThe4 }}</div>
      </div>
      <div
        class="Running-Score-Odd"
        :class="[{'Now-Frame' : frameFlg.BottomOf5th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="bottomOf5th" :style="[{transform: `scaleX(${bottomOf5thTrans})`, transformOrigin: 'left'}]">{{ data.Score.BottomOfThe5 }}</div>
      </div>
      <div
        class="Running-Score-Even"
        :class="[{'Now-Frame' : frameFlg.BottomOf6th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="bottomOf6th" :style="[{transform: `scaleX(${bottomOf6thTrans})`, transformOrigin: 'left'}]">{{ data.Score.BottomOfThe6 }}</div>
      </div>
      <div
        class="Running-Score-Odd"
        :class="[{'Now-Frame' : frameFlg.BottomOf7th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="bottomOf7th" :style="[{transform: `scaleX(${bottomOf7thTrans})`, transformOrigin: 'left'}]">{{ data.Score.BottomOfThe7 }}</div>
      </div>
      <div
        class="Running-Score-Even"
        :class="[{'Now-Frame' : frameFlg.BottomOf8th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="bottomOf8th" :style="[{transform: `scaleX(${bottomOf8thTrans})`, transformOrigin: 'left'}]">{{ data.Score.BottomOfThe8 }}</div>
      </div>
      <div
        class="Running-Score-Odd"
        :class="[{'Now-Frame' : frameFlg.BottomOf9th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="bottomOf9th" :style="[{transform: `scaleX(${bottomOf9thTrans})`, transformOrigin: 'left'}]">{{ data.Score.BottomOfThe9 }}</div>
      </div>
      <div
        class="Running-Score-Even"
        v-if="dispFlg10th"
        :class="[{'Now-Frame' : frameFlg.BottomOf10th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="bottomOf10th" :style="[{transform: `scaleX(${bottomOf10thTrans})`, transformOrigin: 'left'}]">{{ data.Score.BottomOfThe10 }}</div>
      </div>
      <div
        class="Running-Score-Odd"
        v-if="dispFlg11th"
        :class="[{'Now-Frame' : frameFlg.BottomOf11th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="bottomOf11th" :style="[{transform: `scaleX(${bottomOf11thTrans})`, transformOrigin: 'left'}]">{{ data.Score.BottomOfThe11 }}</div>
      </div>
      <div
        class="Running-Score-Even"
        v-if="dispFlg12th"
        :class="[{'Now-Frame' : frameFlg.BottomOf12th}]"
        :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]"
      >
        <div id="bottomOf12th" :style="[{transform: `scaleX(${bottomOf12thTrans})`, transformOrigin: 'left'}]">{{ data.Score.BottomOfThe12 }}</div>
      </div>
      <div class="Running-Score-Run" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="homeR" :style="[{transform: `scaleX(${homeRTrans})`, transformOrigin: 'left'}]">{{ data.Score.HomeR }}</div>
      </div>
      <div class="Running-Score-Odd" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="homeH" :style="[{transform: `scaleX(${homeHTrans})`, transformOrigin: 'left'}]">{{ data.Score.HomeH }}</div>
      </div>
      <div class="Running-Score-Even" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="homeE" :style="[{transform: `scaleX(${homeETrans})`, transformOrigin: 'left'}]">{{ data.Score.HomeE }}</div>
      </div>
      <div class="Running-Score-Odd" :style="[{width: parentWidth, paddingLeft: parentPadding, paddingRight: parentPadding}]">
        <div id="homeLOB" :style="[{transform: `scaleX(${homeLOBTrans})`, transformOrigin: 'left'}]">{{ data.Score.HomeLOB }}</div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { defineProps, nextTick, ref, toRef, toRefs, watch } from 'vue';
import { DesignModel, MemberDesignModel, PitcherStatsDesignModel, PitcherStatsDesignSendModel, ScoreDesignModel } from './ts/model/design-model';
import { GameInfoModel } from './ts/model/game-model';
import { VisitorHomeDivision } from './ts/constant';
import { DispScoreModel, FrameFlgModel } from './ts/model/score-info-model';

const props = defineProps<{
  data: DispScoreModel;
  gameInfo: GameInfoModel;
  design: ScoreDesignModel;
}>()

// 延長表示フラグ
let dispFlg10th = ref(false);
let dispFlg11th = ref(false);
let dispFlg12th = ref(false);

// 横幅、マージン
let parentWidth = ref('36px');
let parentPadding = ref('4px');

// チーム名
let visitorTeamTrans = ref('1.0');
let visitorTeamNameHalfWidthFlg = ref(true);
let visitorTeamNameTextAlignLastJustify = ref(true);
let homeTeamTrans = ref('1.0');
let homeTeamNameHalfWidthFlg = ref(true);
let homeTeamNameTextAlignLastJustify = ref(true);

// 横幅
let title1stTrans = ref('1.0');
let title2ndTrans = ref('1.0');
let title3rdTrans = ref('1.0');
let title4thTrans = ref('1.0');
let title5thTrans = ref('1.0');
let title6thTrans = ref('1.0');
let title7thTrans = ref('1.0');
let title8thTrans = ref('1.0');
let title9thTrans = ref('1.0');
let titleLOBTrans = ref('1.0');
let topOf1stTrans = ref('1.0');
let topOf2ndTrans = ref('1.0');
let topOf3rdTrans = ref('1.0');
let topOf4thTrans = ref('1.0');
let topOf5thTrans = ref('1.0');
let topOf6thTrans = ref('1.0');
let topOf7thTrans = ref('1.0');
let topOf8thTrans = ref('1.0');
let topOf9thTrans = ref('1.0');
let topOf10thTrans = ref('1.0');
let topOf11thTrans = ref('1.0');
let topOf12thTrans = ref('1.0');
let bottomOf1stTrans = ref('1.0');
let bottomOf2ndTrans = ref('1.0');
let bottomOf3rdTrans = ref('1.0');
let bottomOf4thTrans = ref('1.0');
let bottomOf5thTrans = ref('1.0');
let bottomOf6thTrans = ref('1.0');
let bottomOf7thTrans = ref('1.0');
let bottomOf8thTrans = ref('1.0');
let bottomOf9thTrans = ref('1.0');
let bottomOf10thTrans = ref('1.0');
let bottomOf11thTrans = ref('1.0');
let bottomOf12thTrans = ref('1.0');
let visitorRTrans = ref('1.0');
let visitorHTrans = ref('1.0');
let visitorETrans = ref('1.0');
let visitorLOBTrans = ref('1.0');
let homeRTrans = ref('1.0');
let homeHTrans = ref('1.0');
let homeETrans = ref('1.0');
let homeLOBTrans = ref('1.0');

// フレーム用フラグ
let frameFlg = ref(new FrameFlgModel());

/**
 * 半角チェック
 * @param str 
 */
 function checkHalfWidth(str: string): boolean {
  let res = false;

  if (str) {
    if (str.match(/^[\x20-\x7e]*$/)) {
      res = true;
    }
  }

  return res;
}

/**
 * チーム名の横幅計算
 * @param element 
 */
function calcTeamWidth(element: any): string {
  let returnData = '1.0';
  if (element) {
    if (element.scrollWidth > 128) {
      let width = 128 / element.scrollWidth;
      returnData = width.toString();
    }
  }
  return returnData;
}

/**
 * チーム名の横幅計算（アルファベット）
 * @param element 
 */
function calcTeamWidthJP(element: any): string {
  let returnData = '1.0';
  if (element) {
    if (element.scrollWidth > 138) {
      let width = 138 / element.scrollWidth;
      returnData = width.toString();
    }
  }
  return returnData;
}

/**
 * 数字等の横幅計算
 * @param element 
 */
function calcNumbersWidth(element: any): string {
  let returnData = '1.0';
  let parentWidthNum = Number(parentWidth.value.replace('px', ''));
  if (element) {
    if (element.scrollWidth > parentWidthNum) {
      let width = parentWidthNum / element.scrollWidth;
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
    if (text.match(/^[\x20-\x7e]*$/) || text.length === 1) {
      returnData = false;
    }
  }
  return returnData;
}

/**
 * 攻撃フレーム割り当て
 */
function assignFrame(): void {
  if (!props.gameInfo.GameProgressInfo.IsStarted) {
    frameFlg.value = new FrameFlgModel();
    return;
  }

  if (props.gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
    if (props.gameInfo.GameProgressInfo.NowInning == 1 ||
       (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 1)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.TopOf1st = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 2 ||
              (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 2)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.TopOf2nd = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 3 ||
              (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 3)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.TopOf3rd = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 4 ||
              (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 4)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.TopOf4th = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 5 ||
              (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 5)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.TopOf5th = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 6 ||
              (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 6)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.TopOf6th = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 7 ||
              (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 7)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.TopOf7th = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 8 ||
              (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 8)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.TopOf8th = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 9 ||
              (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 0)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.TopOf9th = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 10 && props.gameInfo.GameBaseInfo.InningLimit <= 12) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.TopOf10th = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 11 && props.gameInfo.GameBaseInfo.InningLimit <= 12) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.TopOf11th = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 12 && props.gameInfo.GameBaseInfo.InningLimit <= 12) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.TopOf12th = true;
    }
  } else {
    if (props.gameInfo.GameProgressInfo.NowInning == 1 ||
       (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 1)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.BottomOf1st = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 2 ||
              (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 2)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.BottomOf2nd = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 3 ||
              (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 3)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.BottomOf3rd = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 4 ||
              (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 4)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.BottomOf4th = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 5 ||
              (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 5)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.BottomOf5th = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 6 ||
              (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 6)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.BottomOf6th = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 7 ||
              (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 7)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.BottomOf7th = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 8 ||
              (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 8)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.BottomOf8th = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 9 ||
              (props.gameInfo.GameBaseInfo.InningLimit > 12 && (props.gameInfo.GameProgressInfo.NowInning) % 9 == 0)) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.BottomOf9th = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 10 && props.gameInfo.GameBaseInfo.InningLimit <= 12) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.BottomOf10th = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 11 && props.gameInfo.GameBaseInfo.InningLimit <= 12) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.BottomOf11th = true;
    } else if (props.gameInfo.GameProgressInfo.NowInning == 12 && props.gameInfo.GameBaseInfo.InningLimit <= 12) {
      frameFlg.value = new FrameFlgModel();
      frameFlg.value.BottomOf12th = true;
    }
  }
}

watch(props, () => {
  assignFrame();
  if (props.gameInfo.GameProgressInfo.NowInning == 10 &&
      props.gameInfo.GameBaseInfo.InningLimit <= 12) {
    dispFlg10th.value = true;
    dispFlg11th.value = true;
    dispFlg12th.value = true;
    let parent = 0;
    let width = 0;
    let padding = 0;
    const ratio = 8 / 44
    if (props.gameInfo.GameBaseInfo.InningLimit == 10) {
      parent = (572 / 14);
    } else if (props.gameInfo.GameBaseInfo.InningLimit == 11) {
      parent = (572 / 15);
    } else if (props.gameInfo.GameBaseInfo.InningLimit == 12) {
      parent = (572 / 16);
    }
    width = parent - (parent * ratio);
    padding = (parent * ratio) / 2;
    parentWidth.value = width.toString() + 'px';
    parentPadding.value = padding.toString() + 'px';
  }
  nextTick(() => {
    if (props.gameInfo.GameProgressInfo.IsStarted == undefined) {
      visitorTeamNameHalfWidthFlg.value = checkHalfWidth(props.gameInfo.GameBaseInfo.VisitorTeamText);
      // 半角と全角で計算する関数を分ける
      if (visitorTeamNameHalfWidthFlg.value) {
        visitorTeamTrans.value = calcTeamWidth(document.getElementById('visitorTeamNameScore'));
      } else {
        visitorTeamTrans.value = calcTeamWidthJP(document.getElementById('visitorTeamNameScore'));
      }
      visitorTeamNameTextAlignLastJustify.value = decisionTextAlignLastJustify(props.gameInfo.GameBaseInfo.VisitorTeamText);
      homeTeamNameHalfWidthFlg.value = checkHalfWidth(props.gameInfo.GameBaseInfo.HomeTeamText);
      // 半角と全角で計算する関数を分ける
      if (homeTeamNameHalfWidthFlg.value) {
        homeTeamTrans.value = calcTeamWidth(document.getElementById('homeTeamNameScore'));
      } else {
        homeTeamTrans.value = calcTeamWidthJP(document.getElementById('homeTeamNameScore'));
      }
      homeTeamNameTextAlignLastJustify.value = decisionTextAlignLastJustify(props.gameInfo.GameBaseInfo.HomeTeamText);
    }
    if (props.gameInfo.GameProgressInfo.NowInning == null || props.gameInfo.GameProgressInfo.NowInning % 9 == 1) {
      title1stTrans.value = calcNumbersWidth(document.getElementById('title1st'));
      title2ndTrans.value = calcNumbersWidth(document.getElementById('title2nd'));
      title3rdTrans.value = calcNumbersWidth(document.getElementById('title3rd'));
      title4thTrans.value = calcNumbersWidth(document.getElementById('title4th'));
      title5thTrans.value = calcNumbersWidth(document.getElementById('title5th'));
      title6thTrans.value = calcNumbersWidth(document.getElementById('title6th'));
      title7thTrans.value = calcNumbersWidth(document.getElementById('title7th'));
      title8thTrans.value = calcNumbersWidth(document.getElementById('title8th'));
      title9thTrans.value = calcNumbersWidth(document.getElementById('title9th'));
      titleLOBTrans.value = calcNumbersWidth(document.getElementById('titleLOB'));
    }
    topOf1stTrans.value = calcNumbersWidth(document.getElementById('topOf1st'));
    topOf2ndTrans.value = calcNumbersWidth(document.getElementById('topOf2nd'));
    topOf3rdTrans.value = calcNumbersWidth(document.getElementById('topOf3rd'));
    topOf4thTrans.value = calcNumbersWidth(document.getElementById('topOf4th'));
    topOf5thTrans.value = calcNumbersWidth(document.getElementById('topOf5th'));
    topOf6thTrans.value = calcNumbersWidth(document.getElementById('topOf6th'));
    topOf7thTrans.value = calcNumbersWidth(document.getElementById('topOf7th'));
    topOf8thTrans.value = calcNumbersWidth(document.getElementById('topOf8th'));
    topOf9thTrans.value = calcNumbersWidth(document.getElementById('topOf9th'));
    topOf10thTrans.value = calcNumbersWidth(document.getElementById('topOf10th'));
    topOf11thTrans.value = calcNumbersWidth(document.getElementById('topOf11th'));
    topOf12thTrans.value = calcNumbersWidth(document.getElementById('topOf12th'));
    visitorRTrans.value = calcNumbersWidth(document.getElementById('visitorR'));
    visitorHTrans.value = calcNumbersWidth(document.getElementById('visitorH'));
    visitorETrans.value = calcNumbersWidth(document.getElementById('visitorE'));
    visitorLOBTrans.value = calcNumbersWidth(document.getElementById('visitorLOB'));
    bottomOf1stTrans.value = calcNumbersWidth(document.getElementById('bottomOf1st'));
    bottomOf2ndTrans.value = calcNumbersWidth(document.getElementById('bottomOf2nd'));
    bottomOf3rdTrans.value = calcNumbersWidth(document.getElementById('bottomOf3rd'));
    bottomOf4thTrans.value = calcNumbersWidth(document.getElementById('bottomOf4th'));
    bottomOf5thTrans.value = calcNumbersWidth(document.getElementById('bottomOf5th'));
    bottomOf6thTrans.value = calcNumbersWidth(document.getElementById('bottomOf6th'));
    bottomOf7thTrans.value = calcNumbersWidth(document.getElementById('bottomOf7th'));
    bottomOf8thTrans.value = calcNumbersWidth(document.getElementById('bottomOf8th'));
    bottomOf9thTrans.value = calcNumbersWidth(document.getElementById('bottomOf9th'));
    bottomOf10thTrans.value = calcNumbersWidth(document.getElementById('bottomOf10th'));
    bottomOf11thTrans.value = calcNumbersWidth(document.getElementById('bottomOf11th'));
    bottomOf12thTrans.value = calcNumbersWidth(document.getElementById('bottomOf12th'));
    homeRTrans.value = calcNumbersWidth(document.getElementById('homeR'));
    homeHTrans.value = calcNumbersWidth(document.getElementById('homeH'));
    homeETrans.value = calcNumbersWidth(document.getElementById('homeE'));
    homeLOBTrans.value = calcNumbersWidth(document.getElementById('homeLOB'));
  })
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Running-Score-Full{
  position: absolute;
  width: 710px;
  height: 112px;
  left: 50%;
  transform: translate(-50%, 15px);
  border: 4px solid v-bind('design.OtherFrame');
}

.Running-Score-Title-Full{
  padding-left: 138px;
  height: 22px;
  display: flex;
  background-color: v-bind('design.ScoreTitleBGC');
}

.Running-Score-Title{
  height: 22px;
  line-height: 26px;
  font-size: 22px;
  font-family: 'Bahnschrift';
  text-align: center;
  color: v-bind('design.ScoreTitleText');
}

.Running-Score-Title-Run {
  height: 22px;
  line-height: 26px;
  font-size: 22px;
  font-family: 'Bahnschrift';
  text-align: center;
  color: v-bind('design.ScoreTitleRunText');
  background-color: v-bind('design.ScoreTitleRunBGC');
}

.Running-Score-Box{
  height: 44px;
  display: flex;
}

.Now-Frame{
  outline: 3.5px solid v-bind('design.ScoreFrame');
  outline-offset: -3.5px;
  box-shadow: 0px 0px 3px 7px rgba(0, 0, 0, 0.25) inset;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
}

.Running-Score-Odd{
  height: 44px;
  line-height: 40px;
  font-size: 48px;
  font-family: 'DIN';
  font-weight: 900;
  text-align: center;
  background-color: v-bind('design.ScoreOddBGC');
  color: v-bind('design.ScoreOddText');
}

.Running-Score-Even{
  height: 44px;
  line-height: 40px;
  font-size: 48px;
  font-family: 'DIN';
  font-weight: 900;
  text-align: center;
  background-color: v-bind('design.ScoreEvenBGC');
  color: v-bind('design.ScoreEvenText');
}

.Running-Score-Run{
  height: 44px;
  line-height: 40px;
  font-size: 48px;
  font-family: 'DIN';
  font-weight: 900;
  text-align: center;
  background-color: v-bind('design.ScoreRunBGC');
  color: v-bind('design.ScoreRunText');
}

.Running-Score-MidLine{
  width: 100%;
  height: 2px;
  background-color: v-bind('design.OtherFrame');
}

.Team-Text-Half-Width{
  line-height: 48px;
  font-size: 38px;
  font-family: 'Bahnschrift';
}

.Team-Text-Full-Width{
  font-family: 'Noto Sans JP', sans-serif;
  line-height: 40px;
  font-size: 35px;
}

.Score-Team-Visitor{
  position: relative;
  width: 128px;
  height: 44px;
  padding-left: 5px;
  padding-right: 5px;
  text-align: center;
  white-space: nowrap;
  background-color: v-bind('design.VisitorTeamNameBGC');
  color: v-bind('design.VisitorTeamNameText');
}

.Score-Team-Home{
  position: relative;
  width: 128px;
  height: 44px;
  padding-left: 5px;
  padding-right: 5px;
  white-space: nowrap;
  background-color: v-bind('design.HomeTeamNameBGC');
  color: v-bind('design.HomeTeamNameText');
}

.Text-Align-Last-Center {
  text-align-last: center;
}

.Text-Align-Last-Justify {
  text-align-last: justify;
}

.Score-Team-Visitor-BGC {
  background-color: v-bind('design.VisitorTeamNameBGC');
}

.Score-Team-Visitor-Text {
  color: v-bind('design.VisitorTeamNameText');
}

.Score-Team-Home-BGC {
  background-color: v-bind('design.HomeTeamNameBGC');
}

.Score-Team-Home-Text {
  color: v-bind('design.HomeTeamNameText');
}

.Score-Team-Visitor img{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  width: auto;
  max-width: 95%;
  max-height: 95%;
  margin: auto;
}

.Score-Team-Home img{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  width: auto;
  max-width: 95%;
  max-height: 95%;
  margin: auto;
}

.Score-Text{
  height: 44px;
  line-height: 40px;
  font-size: 48px;
  font-family: 'DIN';
  font-weight: 900;
  text-align: center;
}

</style>
