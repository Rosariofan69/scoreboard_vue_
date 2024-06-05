<template>
  <div class="Ribbon">
    <div
      class="Ribbon-Content"
      :class="[{'Animation-Score-Progress' : animationSecondScoreProgress != '',
                'Animation-Custom-Text' : animationSecondCustomText != ''}]"
      id="ribbonSpace"
    >
      <div class="Score-Progress" v-if="dispDivision == RibbonSpaceDispDivision.ScoreProgress">
        得点経過：
        <div v-for="(progress, index) in scoreProgressList" :key="index" style="display: flex; margin-right: 40px;">
          <div class="Score-Progress-Content">
            {{ progress.Inning }}
          </div>
          <div class="Score-Progress-Content">
            {{ progress.KeyPlayer }}
          </div>
          <div class="Score-Progress-Content">
            <div v-if="progress.KeyPlayPosition != '' && !(progress.KeyPlay.includes('エラー') || progress.KeyPlay.includes('フィルダースチョイス'))" style="display: flex;">
            {{ progress.KeyPlayPosition }}
              <div v-if="progress.KeyPlay.includes('タイムリー') ||
                         progress.KeyPlay.includes('ホームラン') ||
                         progress.KeyPlay.includes('犠牲フライ') ||
                         progress.KeyPlay.includes('スクイズ') ||
                         progress.KeyPlay.includes('併殺')">への</div>
            </div>
            <div>
            {{ progress.KeyPlay }}
            </div>
            <div v-if="progress.Lead">
              で{{ progress.Lead }}
            </div>
          </div>
          <div class="Score-Progress-Content">
            {{ gameInfo.GameBaseInfo.VisitorAbbreviation }}
          </div>
          <div class="Score-Progress-Content">
            {{ progress.VisitorScore }}-{{ progress.HomeScore }}
          </div>
          <div class="Score-Progress-Content">
            {{ gameInfo.GameBaseInfo.HomeAbbreviation }}
          </div>
        </div>
      </div>
      <div id="customText" v-if="dispDivision == RibbonSpaceDispDivision.CustomText">
        {{ text }}
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { defineProps, nextTick, ref, watch } from 'vue';
import { RibbonSpaceDispDivision, ResultCheckBoxText } from './ts/constant';
import { ScoreDesignModel } from './ts/model/design-model';
import { GameInfoModel, ScoreProgressModel } from './ts/model/game-model';

const props = defineProps<{
  design: ScoreDesignModel;
  text: string;
  scoreProgressList: ScoreProgressModel[],
  gameInfo: GameInfoModel,
  dispDivision: string
}>()

// アニメーションの秒数（得点経過）
let animationSecondScoreProgress = ref('');
// アニメーションの秒数（カスタムテキスト）
let animationSecondCustomText = ref('');

/**
 * アニメーションの秒数計算
 * @param element 
 */
function calcAnimation(element: any): string {
  let returnVal = '';
  if (element) {
    if (element.scrollWidth > 710) {
      let second = element.scrollWidth / 80;
      returnVal = second.toString() + 's';
    }
  }

  return returnVal;
}

watch(props, () => {
  nextTick(() => {
    // 得点経過
    animationSecondScoreProgress.value = calcAnimation(document.getElementById('ribbonSpace'));
    // カスタムテキスト
    animationSecondCustomText.value = calcAnimation(document.getElementById('ribbonSpace'));
  })
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Ribbon {
  position: absolute;
  width: 710px;
  height: 46px;
  left: 50%;
  transform: translate(-50%, 144px);
  border: 2px solid v-bind('design.OtherFrame');
  box-sizing: border-box;
  background-color: #000000;
  overflow: hidden;
}

.Ribbon-Content {
  font-family: 'Noto Sans JP', sans-serif;
  display: inline-block;
  color: #fff;
  font-size: 30px;
  line-height: 41px;
  padding-left: 710px;
  white-space: nowrap;
}

.Score-Progress {
  display: flex;
}

.Score-Progress-Content {
  display: flex;
  margin-right: 15px;
  overflow: hidden;
}

.Animation-Score-Progress {
  animation: animate-banner v-bind('animationSecondScoreProgress') linear infinite;
}

.Animation-Custom-Text {
  animation: animate-banner v-bind('animationSecondCustomText') linear infinite;
}

@keyframes animate-banner {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
  