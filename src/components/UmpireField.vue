<template>
  <div class="Umpire-Box">
    <div
      id="umpireNameField"
      class="Content-Field"
      v-show="data.PL"
    >
      <div class="Umpire-Title">PL</div>
      <div
        id="umpirePL"
        class="Umpire-Name"
        :class="[PlTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${PlTrans})`, transformOrigin: 'left'}]"
      >{{ data.PL }}</div>
    </div>
    <div class="Content-Field" v-show="data.FB">
      <div class="Umpire-Title">1B</div>
      <div
        id="umpireFB"
        class="Umpire-Name"
        :class="[FbTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${FbTrans})`, transformOrigin: 'left'}]"
      >{{ data.FB }}</div>
    </div>
    <div class="Content-Field" v-show="data.SB">
      <div class="Umpire-Title">2B</div>
      <div
        id="umpireSB"
        class="Umpire-Name"
        :class="[SbTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${SbTrans})`, transformOrigin: 'left'}]"
      >{{ data.SB }}</div>
    </div>
    <div class="Content-Field" v-show="data.TB">
      <div class="Umpire-Title">3B</div>
      <div
        id="umpireTB"
        class="Umpire-Name"
        :class="[TbTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${TbTrans})`, transformOrigin: 'left'}]"
      >{{ data.TB }}</div>
    </div>
    <div class="Content-Field" v-show="data.LL">
      <div class="Umpire-Title">LL</div>
      <div
        id="umpireLL"
        class="Umpire-Name"
        :class="[LlTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${LlTrans})`, transformOrigin: 'left'}]"
      >{{ data.LL }}</div>
    </div>
    <div class="Content-Field" v-show="data.RL">
      <div class="Umpire-Title">RL</div>
      <div
        id="umpireRL"
        class="Umpire-Name"
        :class="[RlTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${RlTrans})`, transformOrigin: 'left'}]"
      >{{ data.RL }}</div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { defineProps, ref, defineEmits, watch, nextTick } from 'vue';
import { ScoreDesignModel, UmpireDesignModel } from './ts/model/design-model';
import { UmpireModel } from './ts/model/member-info-model';

const props = defineProps<{
  data: UmpireModel
  design: UmpireDesignModel
  scoreDesign: ScoreDesignModel;
}>()

// margin
let margin = ref('10px');
// width
let width = ref('72.6px');

/**
 * 名前の横幅計算
 * @param element DOM要素
 */
function calcNameWidth(element: any): string {
  let returnData = '1.0';
  if (element) {
    let widthValue = parseInt(width.value.replace('px', ''));
    if (element.scrollWidth > widthValue) {
      let returnWidth = widthValue / element.scrollWidth;
      returnData = returnWidth.toString();
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

// 球審
let PlTrans = ref('1.0');
let PlTextAlignLastJustify = ref(true);
// 一塁
let FbTrans = ref('1.0');
let FbTextAlignLastJustify = ref(true);
// 二塁
let SbTrans = ref('1.0');
let SbTextAlignLastJustify = ref(true);
// 三塁
let TbTrans = ref('1.0');
let TbTextAlignLastJustify = ref(true);
// 左翼
let LlTrans = ref('1.0');
let LlTextAlignLastJustify = ref(true);
// 右翼
let RlTrans = ref('1.0');
let RlTextAlignLastJustify = ref(true);

watch(props, () => {
  nextTick(() => {
    if (props.data.LL && props.data.RL) {
      width.value = '45.06px';
      margin.value = '5px'
    } else {
      width.value = '72.6px';
      margin.value = '10px';
    }
    PlTrans.value = calcNameWidth(document.getElementById('umpirePL'));
    PlTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.PL);
    FbTrans.value = calcNameWidth(document.getElementById('umpireFB'));
    FbTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.FB);
    SbTrans.value = calcNameWidth(document.getElementById('umpireSB'));
    SbTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.SB);
    TbTrans.value = calcNameWidth(document.getElementById('umpireTB'));
    TbTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.TB);
    LlTrans.value = calcNameWidth(document.getElementById('umpireLL'));
    LlTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.LL);
    RlTrans.value = calcNameWidth(document.getElementById('umpireRL'));
    RlTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.RL);
  })
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Umpire-Box{
  position: absolute;
  top: 0%;
  display: flex;
  width: 100%;
  height: 30px;
  border-bottom: 4px solid v-bind('scoreDesign.OtherFrame');
}

.Content-Field{
  display: flex;
  flex: 1;
  overflow: hidden;
  background-color: v-bind('design.NameBGC');
}

.Umpire-Title{
  font-family: 'Bahnschrift';
  width: 20px;
  height: 30px;
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -4px;
  text-align: center;
  color: v-bind('design.PositionText');
  background-color: v-bind('design.PositionBGC');
}

.Umpire-Name{
  white-space: nowrap;
  font-family: 'Noto Sans JP', sans-serif;
  width: v-bind(width);
  height: 30px;
  font-size: 26px;
  line-height: 27px;
  text-align: center;
  color: v-bind('design.NameText');
  text-shadow: 2px 2px 1px black;
  margin-left: v-bind(margin);
}

.Text-Align-Last-Center {
  text-align-last: center;
}

.Text-Align-Last-Justify {
  text-align-last: justify;
}

</style>
