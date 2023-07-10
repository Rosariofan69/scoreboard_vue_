<template>
  <div class="Main">
    <div class="Umpire">
      <div class="Umpire-Row">
        球審：<input v-model="umpireData.PL"> 
      </div>
      <div class="Umpire-Row">
        一塁：<input v-model="umpireData.FB">
      </div>
      <div class="Umpire-Row">
        二塁：<input v-model="umpireData.SB">
      </div>
      <div class="Umpire-Row">
        三塁：<input v-model="umpireData.TB">
      </div>
      <div class="Umpire-Row">
        左翼：<input v-model="umpireData.LL">
      </div>
      <div class="Umpire-Row">
        右翼：<input v-model="umpireData.RL">
      </div>
    </div>
    <div class="Footer">
      <button class="Ok">OK</button>
      <button class="Cancel">キャンセル</button>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { UmpireModel } from './ts/model/member-info-model';
const props = defineProps<{
    flag: boolean
}>()

const umpireData = ref(new UmpireModel());

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

.Umpire-Row {
  background-color: aqua;
  width: 500px;
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
</style>