<template>
  <div class="Member">
    <div class="Team">
      <div class="Team-Text">
        CARP
      </div>
    </div>
    <div class="Box-Full" v-if="data[0]">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">{{ data[0].Number }}</div>
      <div class="Box-Name">
        <div class="Name-Text">{{ data[0].Name }}</div>
      </div>
    </div>

    <div class="Box-Full" v-if="data[1]">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">{{ data[1].Position }}</div>
      <div class="Box-Name">
        <div class="Name-Text">{{ data[1].Name }}</div>
      </div>
    </div>
    <div class="Box-Full" v-if="data[2]">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">{{ data[2].Position }}</div>
      <div class="Box-Name">
        <div class="Name-Text-Six">{{ data[2].Name }}</div>
      </div>
    </div>
    <div class="Box-Full" v-if="data[3]">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">{{ data[3].Position }}</div>
      <div class="Box-Name">
        <div class="Name-Text-Six">{{ data[3].Name }}</div>
      </div>
    </div>
    <div class="Box-Full" v-if="data[4]">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">{{ data[4].Position }}</div>
      <div class="Box-Name">
        <div class="Name-Text">{{ data[4].Name }}</div>
      </div>
    </div>
    <div class="Box-Full" v-if="data[5]">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">{{ data[5].Position }}</div>
      <div class="Box-Name">
        <div class="Name-Text">{{ data[5].Name }}</div>
      </div>
    </div>
    <div class="Box-Full" v-if="data[6]">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">{{ data[6].Position }}</div>
      <div class="Box-Name">
        <div class="Name-Text">{{ data[6].Name }}</div>
      </div>
    </div>
    <div class="Box-Full"  v-if="data[7]">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">{{ data[7].Position }}</div>
      <div class="Box-Name">
        <div class="Name-Text">{{ data[7].Name }}</div>
      </div>
    </div>
    <div class="Box-Full" v-if="data[8]">
      <div class="Box-Pos"></div>
      <div class="Pos-Text-DH">{{ data[8].Position }}</div>
      <div class="Box-Name">
        <div class="Name-Text">{{ data[8].Name }}</div>
      </div>
    </div>
    <div class="Box-Full-P"  v-if="data[9]">
      <div class="Box-Pos"></div>
      <div class="Pos-Text">{{ data[9].Position }}</div>
      <div class="Box-Name">
        <div class="Name-Text">{{ data[9].Name }}</div>
      </div>
    </div>
    <!-- <button v-on:click="clickButton()">ボタン</button> -->
  </div>
</template>

<script setup lang="ts">
import { ParticipationMemberModel } from './ts/model/member-info-model';
import { defineProps } from 'vue';

const props = defineProps<{
  data: ParticipationMemberModel[];
}>()
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
    color: white;
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
    color: white;
    font-size: 40px;
    line-height: 50px;
}

.Box-Full-P{
    margin: auto;
    position: relative;
    overflow: hidden;
    width: 190px;
    height: 42px;
    border-top: 4px solid #ffffff;
    border-bottom: 4px solid #ff0000;
    animation: SlideInText 1s;
}

.Box-Full{
    margin: auto;
    position: relative;
    overflow: hidden;
    width: 190px;
    height: 42px;
    border-bottom: 4px solid #ff0000;
    animation: SlideInText 1s;
}

.Box-Pos{
    position: absolute;
    margin: 0;
    /* position: relative; */
    width: 51px;
    height: 42px;
    background: linear-gradient(to bottom, #595959 0%, #595959 40%, #333333 60%, #333333 100%);
    transform: translateX(-5px) skewX(-10deg);
    border-right: 2px solid #7F7F7F;
    z-index: 1;
    box-shadow: 3px 0px 8px black;
}

.Pos-Text{
    font-family: 'Alte DIN 1451 Mittelschrift';
    /* font-weight: bold; */
    position: absolute;
    width: 45px;
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
    font-size: 43px;
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
    width: 100%;
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 38px;
    font-size: 36px;
    text-align-last: justify;
    height: 42px;
    text-shadow: 3px 2px 1px black;
}

.Name-Text-Six{
    overflow: visible;
    white-space: nowrap;
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 38px;
    font-size: 36px;
    text-align: justify;
    text-align-last: justify;
    height: 42px;
    transform: scaleX(0.55);
    transform-origin: left;
    text-shadow: 3px 2px 1px black;
}

@keyframes SlideInText
{
    0%
    {
        transform: translateX(200px) scale(0.1);
    }
    70%
    {
        transform: translateX(0px) scale(0.75);
    }
    100%
    {
        transform: scale(1.0);
    }
}

</style>
