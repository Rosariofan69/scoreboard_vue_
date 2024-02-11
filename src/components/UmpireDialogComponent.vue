<template>
  <div class="Main" v-show="flag">
    <div class="Content">
    <div class="Umpire-Row">
        球審：<input v-model="editUmpireData.PL">
      </div>
      <div class="Umpire-Row">
        一塁：<input v-model="editUmpireData.FB">
      </div>
      <div class="Umpire-Row">
        二塁：<input v-model="editUmpireData.SB">
      </div>
      <div class="Umpire-Row">
        三塁：<input v-model="editUmpireData.TB">
      </div>
      <div class="Umpire-Row">
        左翼：<input v-model="editUmpireData.LL">
      </div>
      <div class="Umpire-Row">
        右翼：<input v-model="editUmpireData.RL">
      </div>
    </div>
    <div class="Footer">
        <button class="Ok" v-on:click="clickOK()">OK</button>
        <button class="Cancel" v-on:click="clickCancel()">キャンセル</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits, watch } from 'vue';
import { DialogCallDivision, VisitorHomeDivision } from './ts/constant';
import { MemberController } from './ts/member-controller';
import { BattingResultPerTeamModel, DefaultMemberModel, PitcherInfoModel, UmpireModel } from './ts/model/member-info-model';
import { RunningScoreModel } from './ts/model/score-info-model';
import _ from 'lodash';

const props = defineProps<{
  flag: boolean;
  umpireData: UmpireModel;
}>()

// emit
const emits = defineEmits<{
  (e: 'sendUmpireData', v: UmpireModel): void;
  (e: 'closeDialog', v: boolean): void;
}>()

const memberController = new MemberController();
// 変更データ
let editUmpireData = ref(new UmpireModel());

/**
 * OKクリック
 */
function clickOK(): void {
  emits('sendUmpireData', editUmpireData.value);
}

/**
 * キャンセルクリック
 */
function clickCancel(): void {
  emits('closeDialog', false);
}

watch(props, () => {
  editUmpireData.value = _.cloneDeep(props.umpireData);
});

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

.Content {
  margin: 5px;
  height: 180px;
  width: 390px;
  overflow: auto;
}

.Umpire-Row {
   padding-top: 5px;
   margin: auto;
   width: 220px;
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