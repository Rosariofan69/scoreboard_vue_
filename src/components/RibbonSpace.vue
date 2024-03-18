<template>
  <div class="Ribbon">
    <div
      class="Ribbon-Content"
      :class="[{'Animation' : animationSecond != ''}]"
      id="ribbonText"
    >{{ text }}</div>
  </div>
</template>
  
<script setup lang="ts">
import { defineProps, nextTick, ref, watch } from 'vue';
import { ScoreDesignModel } from './ts/model/design-model';

const props = defineProps<{
  design: ScoreDesignModel;
  text: string;
}>()

// アニメーションの秒数
let animationSecond = ref('');

/**
 * アニメーションの秒数計算
 * @param element 
 */
function calcAnimation(element: any) {
  animationSecond.value = '';
  if (element) {
    if (element.scrollWidth > 710) {
      // 1周目
      let second = element.scrollWidth / 80;
      animationSecond.value = second.toString() + 's';
    }
  }
}

watch(props, () => {
  animationSecond.value = '';
  nextTick(() => {
    // 秒数
    calcAnimation(document.getElementById('ribbonText'));
  })
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Ribbon{
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

.Ribbon-Content{
  font-family: 'Noto Sans JP', sans-serif;
  display: inline-block;
  color: #fff;
  font-size: 30px;
  line-height: 38px;
  padding-left: 100%;
  white-space: nowrap;
}

.Animation {
  animation: animate-banner v-bind('animationSecond') linear infinite;
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
  