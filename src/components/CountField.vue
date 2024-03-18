<template>
  <div class="Count-Result-Box" v-if="gameInfo.GameBaseInfo.VisitorTeamName">
    <div class="Count-Box">
      <div class="Count-Result-Row">
        <div class="Count-Result-Title">B</div>
        <div
          class="Count-Result-Circle"
          :class="[count.Ball >= 1 && count.Ball <= 3 ? 'Circle-SkyBlue' : 'Circle-Basic']"
        />
        <div
          class="Count-Result-Circle"
          :class="[count.Ball >= 2 && count.Ball <= 3 ? 'Circle-SkyBlue' : 'Circle-Basic']"
        />
        <div
          class="Count-Result-Circle"
          :class="[count.Ball == 3 ? 'Circle-SkyBlue' : 'Circle-Basic']"
        />
      </div>
      <div class="Count-Result-Row">
        <div class="Count-Result-Title">S</div>
        <div
          class="Count-Result-Circle"
          :class="[count.Strike >= 1 && count.Strike <= 2 ? 'Circle-Yellow' : 'Circle-Basic']"
        />
        <div
          class="Count-Result-Circle"
          :class="[count.Strike == 2 ? 'Circle-Yellow' : 'Circle-Basic']"
        />
      </div>
      <div class="Count-Result-Row">
        <div class="Count-Result-Title">O</div>
        <div
          class="Count-Result-Circle"
          :class="[count.Out >= 1 && count.Out <= 2 ? 'Circle-Red' : 'Circle-Basic']"
        />
        <div
          class="Count-Result-Circle"
          :class="[count.Out == 2 ? 'Circle-Red' : 'Circle-Basic']"
        />
      </div>
    </div>
    <div class="Result-Box">
      <div class="Count-Result-Row">
        <div class="Count-Result-Title">H</div>
        <div
          class="Count-Result-Circle"
          :class="[judge.Hit ? 'Circle-Green' : 'Circle-Basic']"
        />
      </div>
      <div class="Count-Result-Row">
        <div class="Count-Result-Title">E</div>
        <div
          class="Count-Result-Circle"
          :class="[judge.Error ? 'Circle-Red' : 'Circle-Basic']"
        />
      </div>
      <div class="Count-Result-Row">
        <div class="Count-Result-Title">
          <div class="Count-Result-Title-Fc">Fc</div>
        </div>
        <div
          class="Count-Result-Circle"
          :class="[judge.FieldersChoice ? 'Circle-Orange' : 'Circle-Basic']"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ParticipationMemberModel, ParticipationMemberPerTeamModel } from './ts/model/member-info-model';
import { defineProps, nextTick, ref, toRef, toRefs, watch } from 'vue';
import { ScoreDesignModel } from './ts/model/design-model';
import { GameInfoModel } from './ts/model/game-model';
import { CountModel, JudgeModel } from './ts/model/score-info-model';

const props = defineProps<{
  design: ScoreDesignModel;
  count: CountModel;
  judge: JudgeModel;
  gameInfo: GameInfoModel;
}>()

</script>

<style scoped>
.Count-Result-Box{
  margin-top: 5px;
  width: 216px;
  height: 100px;
  background-color: rgba(0,0,0,0.7);
  border: 2px solid v-bind('design.OtherFrame');
  display: flex;
}

.Count-Box{
  width: 140px;
  height: 100%;
}

.Result-Box{
  width: 70px;
  height: 100%;
}

.Count-Result-Row{
  margin-top: 5px;
  margin-left: 5px;
  height: 27px;
  display: flex;
}

.Count-Result-Title{
  font-family: 'Bahnschrift';
  width: 27px;
  height: 27px;
  font-size: 28px;
  line-height: 30px;
  text-align: center;
  outline: 2px solid #7F7F7F;
  outline-offset: -2px;
  background-color: #000000;
}

.Count-Result-Title-Fc{
  font-family: 'Bahnschrift';
  width: 36px;
  height: 27px;
  font-size: 28px;
  line-height: 31px;
  text-align: center;
  transform: scaleX(0.75);
  transform-origin: left;
}

.Count-Result-Circle{
  margin-left: 5px;
  width: 27px;
  height: 27px;
  font-size: 27px;
  line-height: 31px;
  text-align: center;
  border-radius: 50%;
  outline: 2px solid #7F7F7F;
  outline-offset: -2px;
}

.Circle-Basic {
  background-color: #2b2b2b;
  box-shadow:
      -2px -2px 4px 3px #181818 inset,
      0 0 10px #2b2b2b;
}

.Circle-SkyBlue{
  background-color: #00fff2;
  box-shadow:
      -2px -2px 4px 3px #00c79c inset,
      0 0 10px #00fff2;
}

.Circle-Yellow{
  background-color: #ffff00;
  box-shadow:
      -2px -2px 4px 3px #c5c500 inset,
      0 0 10px #ffff00;
}

.Circle-Red{
  background-color: #ff0000;
  box-shadow:
      -2px -2px 4px 3px #c60000 inset,
      0 0 10px #ff0000;
}

.Circle-Green{
  background-color: #00ff00;
  box-shadow:
      -2px -2px 4px 3px #00c300 inset,
      0 0 10px #00ff00;
}

.Circle-Orange{
  background-color: #ffa500;
  box-shadow:
      -2px -2px 4px 3px #cb8400 inset,
      0 0 10px #ffa500;
}

</style>