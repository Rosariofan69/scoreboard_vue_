<template>
  <div class="Today-Result">
    <div
      class="Today-Result-Box"
      :class="[{'Animation' : animeSecond1stLap != ''}]"
      id="resultBox"
    >
      <div v-for="(data, index) in datas" :key="index" class="Today-Result-Box">
        <div class="Today-Result-Number">{{ index + 1 }}.</div>
        <div class="Today-Result-Content">
          <div
            :id="`resultText${index}`"
            class="Today-Result-Text"
            :class="[{'Text-Green' : colorList[index] == 'green',
                      'Text-Yellow' : colorList[index] == 'yellow',
                      'Text-White' : colorList[index] == 'white',}]"
            :style="[{transform: `scaleX(${transList[index]})`, transformOrigin: 'left'}]"
          >{{ data.Result }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, nextTick, ref, watch } from 'vue';
import { ScoreDesignModel } from './ts/model/design-model';
import { AtBatResultModel } from './ts/model/member-info-model';

const props = defineProps<{
  design: ScoreDesignModel;
  datas: AtBatResultModel[];
}>()

// 長体
let transList = ref<string[]>([]);
// 色
let colorList = ref<string[]>([]);
// アニメーションの秒数（1周目）
let animeSecond1stLap = ref('');
// アニメーション終了時点でのパーセンテージ
let animeLastPer = ref('100%');
// アニメーションの秒数（2周目）
let animeSecond2ndLap = ref('');
// 待機時間（2周目）
let animieWaitTime2nsLap = ref('');

/**
 * テキストの横幅計算
 * @param element 
 */
function calcTextWidth(element: any): string {
  let returnData = '1.0';
  if (element) {
    if (element.scrollWidth > 96) {
      let width = 96 / element.scrollWidth;
      returnData = width.toString();
    }
  }
  return returnData;
}

/**
 * テキストの色を決定
 * @param text 
 */
function decisionTextColor(text: string): string {
    let res = '';
    if (text.includes('安') || text.includes('２') || text.includes('３') || text.includes('本')) {
        res = 'green';
    } else if (text.includes('犠') || text.includes('球') || text.includes('敬遠')) {
        res = 'yellow';
    } else {
        res = 'white';
    }
    return res;
}

/**
 * アニメーションの秒数計算
 * @param element 
 */
function calcAnimation(element: any) {
  animeSecond1stLap.value = '';
  animeLastPer.value = '100%';
  if (element) {
    if (props.datas.length > 3) {
      // 1周目
      let second1st = element.scrollWidth / 80;
      let lastPer = element.scrollWidth / 450;
      animeSecond1stLap.value = second1st.toString() + 's';
      animeLastPer.value = '-' + (lastPer * 100).toString() + '%';
      // 2周目
      let second2nd = (element.scrollWidth + 450) / 80;
      animeSecond2ndLap.value = second2nd.toString() + 's';
      animieWaitTime2nsLap.value = (second1st + 5).toString() + 's';
    }
  }
}

watch(props, () => {
  animeSecond1stLap.value = '';
  nextTick(() => {
    transList.value = [];
    colorList.value = [];
    props.datas.forEach((x, i) => {
        // 長体
        transList.value.push(calcTextWidth(document.getElementById('resultText' + i.toString())));
        // 色
        colorList.value.push(decisionTextColor(x.Result));
    })
    // 秒数、パーセンテージ
    calcAnimation(document.getElementById('resultBox'));
  })
});

</script>

<style scoped>
.Today-Result{
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 40px;
  border-top: 4px solid v-bind('design.OtherFrame');
  background: black;
  overflow: hidden;
}

.Today-Result-Box {
  display: flex;
}

.Today-Result-Number {
  font-family: 'DIN-Regular';
  font-weight: bold;
  margin-left: 7px;
  font-size: 39px;
  line-height: 39.5px;
}

.Today-Result-Content {
  width: 96px;
  padding-left: 5px;
  margin-right: 10px;
  overflow: hidden;
}

.Today-Result-Text {
  white-space: nowrap;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 32px;
  line-height: 38px;
  text-align-last: justify;
}

.Animation {
  animation:
    animate-scroll-1stLap v-bind('animeSecond1stLap') linear 5s forwards,
    animate-scroll-2ndLap v-bind('animeSecond2ndLap') linear v-bind('animieWaitTime2nsLap') infinite;
}

.Text-Green {
  color: #00ff00
}

.Text-Yellow {
  color: #ffff00
}

.Text-White {
  color: #ffffff
}

@keyframes animate-scroll-1stLap {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(v-bind('animeLastPer'));
  }
}

@keyframes animate-scroll-2ndLap {
  0% {
    transform: translateX(450px);
  }
  100% {
    transform: translateX(v-bind('animeLastPer'));
  }
}
</style>