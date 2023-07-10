<template>
  <div id="Control-Visiter" class="Control-Section">
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">1</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.LeadOff.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.LeadOff.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">2</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Second.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Second.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">3</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Third.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Third.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">4</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Fourth.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Fourth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">5</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Fifth.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Fifth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">6</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Sixth.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Sixth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">7</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Seventh.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Seventh.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">8</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Eighth.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Eighth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">9</label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Ninth.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Ninth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;"></label>
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Pitcher.Position">
      <input type="text" class="Input-Box" v-model="visiterParticipationInput.Pitcher.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <input type="button" value="一括⏎" class="Bulk-Enter-Button" v-on:click="getBulkVisiterParticipationMember()">
    </div>
  </div>
  <div class="Control-Section">
    <div>走塁死</div>
    <select class="MultiSelect" multiple>
    </select>
    <div>生還</div>
    <select class="MultiSelect" multiple>
    </select>
    <select class="Runner-DropDown">
      <option hidden>出塁状況</option>
    </select>
  </div>
  <div class="Control-Section">
    <div class="Res-First-Category">
      <div class="Play-Result-Row">
        <input type="checkbox" name="first">三振
        <input type="checkbox" name="first">ゴロ
        <input type="checkbox" name="first">併殺
        <input type="checkbox" name="first">フライ
      </div>
      <div class="Play-Result-Row">
        <input type="checkbox" name="first">四球
        <input type="checkbox" name="first">死球
        <input type="checkbox" name="first">敬遠
      </div>
      <div class="Play-Result-Row">
        <input type="checkbox" name="first">犠飛
        <input type="checkbox" name="first">犠打
        <input type="checkbox" name="first">犠打失策
        <input type="checkbox" name="first">犠打野選
      </div>
    </div>
    <div class="Res-Second-Category">
      <div class="Play-Result-Row">
        <input type="checkbox" name="second">安打
        <input type="checkbox" name="second">二塁打
        <input type="checkbox" name="second">三塁打
        <input type="checkbox" name="second">本塁打
      </div>
    </div>
    <div class="Res-Third-Category">
      <div class="Play-Result-Row">
        <input type="checkbox" name="third">打者出塁
        <input type="checkbox" name="third">＋失策
      </div>
      <div class="Play-Result-Row">
        <input type="checkbox" name="third">失策
        <input type="checkbox" name="third">野選
        <input type="checkbox" name="third">振逃
      </div>
      <div class="Play-Result-Row">
        <input type="checkbox" name="third">打撃妨害
        <input type="checkbox" name="third">走塁妨害
      </div>
    </div>
    <div class="Res-Fours-Category">
      <div class="Play-Result-Row">
        <input type="checkbox" name="fours">投
        <input type="checkbox" name="fours">捕
        <input type="checkbox" name="fours">一
        <input type="checkbox" name="fours">二
        <input type="checkbox" name="fours">三
        <input type="checkbox" name="fours">遊
      </div>
      <div class="Play-Result-Row">
        <input type="checkbox" name="fours">左
        <input type="checkbox" name="fours">中
        <input type="checkbox" name="fours">右
        <input type="checkbox" name="fours">左中
        <input type="checkbox" name="fours">右中
      </div>
    </div>
    <div class="Res-Fifth-Category">
      <div class="Play-Result-Row">
        <input type="checkbox" name="fifth">盗塁
        <input type="checkbox" name="fifth">盗塁死
        <input type="checkbox" name="fifth">牽制死
      </div>
    </div>
  </div>
  <div class="Control-Section">
    <button class="Game-Start-End-Button">試合開始</button>
    <button class="Game-Start-End-Button">試合終了</button>
    <button class="Game-Start-End-Button">タイブレーク</button>
    <div class="Base-Area">
      <button class="Base-Button Base-First"></button>
      <button class="Base-Button Base-Second"></button>
      <button class="Base-Button Base-Third"></button>
    </div>
    <div>
      打点
      <select class="RBI-DropDown">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </div>
  </div>
  <div class="Control-Section">
    <div class="Button-Row">
      <button class="Count-Button Button-Color-Ball">B</button>
      <button class="Count-Button Button-Color-Ball">B-1</button>
      <button class="Minus-Button">投球数-1</button>
    </div>
    <div class="Button-Row">
      <button class="Count-Button Button-Color-Strike">S</button>
      <button class="Count-Button Button-Color-Strike">S-1</button>
      <button class="Minus-Button Button-Color-Strike">ファール</button>
    </div>
    <div class="Button-Row">
      <button class="Count-Button Button-Color-Out">O</button>
      <button class="Count-Button Button-Color-Out">O-1</button>
      <button class="Minus-Button">打席内-1</button>
    </div>
    <div class="Button-Row" style="margin-top: 10px;">
      <button class="Fix-Button">スコア修正</button>
      <button class="Fix-Button">打席結果修正</button>
    </div>
    <div class="Button-Row">
      <button class="Fix-Button">投手成績修正</button>
      <button class="Fix-Button">1つ前に戻る</button>
    </div>
    <div class="Button-Row" style="margin-bottom: 10px;">
      <button class="Fix-Button" v-on:click="clickUmpire()">審判</button>
      <button class="Fix-Button" v-on:click="clickDisp()">表示</button>
    </div>
    <div class="Button-Row">
      <button class="Confirm-Button">確定</button>
    </div>
  </div>
  <div class="Control-Section" style="font-size: 13.5px;">
    打者成績表示の切替
    <select class="Setting-DropDown"></select>
    INFOスペースの表示
    <select class="Setting-DropDown"></select>
    カスタムテキスト
    <textarea class="Custom-TextArea"></textarea>
  </div>
  <div id="Control-Home" class="Control-Section">
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">1</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.LeadOff.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.LeadOff.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">2</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Second.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Second.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">3</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Third.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Third.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">4</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Fourth.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Fourth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">5</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Fifth.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Fifth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">6</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Sixth.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Sixth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">7</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Seventh.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Seventh.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">8</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Eighth.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Eighth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">9</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Ninth.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Ninth.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;"></label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Pitcher.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Pitcher.Number">
      <button class="Enter-Button">⏎</button>
      <input type="checkbox">
    </div>
    <div class="Input-Row">
      <input type="button" value="一括⏎" class="Bulk-Enter-Button" v-on:click="getBulkHomeParticipationMember()">
    </div>
  </div>
  <div>
    <DialogComponent
      :flag="dialogDispFlg"
    />
  </div>
</template>

<script setup lang="ts">
import { DesignController } from './ts/design-controller';
import { DesignModel } from './ts/model/design-model';
import { defineEmits, ref } from 'vue';
import { MemberController } from './ts/member-controller';
import { DefaultMemberModel, ParticipationMemberModel, InputVModelTeam, ParticipationMemberPerTeamModel } from './ts/model/member-info-model';
import { emit } from 'process';
import { GameController } from './ts/game-controller';
import { GameInfoModel } from './ts/model/game-model';
import { VisiterHomeDivision } from './ts/constant';
import DialogComponent from './DialogComponent.vue';

// デザインコントローラー
const designController = new DesignController();
// メンバーコントローラー
const memberController = new MemberController();
// 試合コントローラー
const gameController = new GameController();
// emit
const emits = defineEmits<{
  (e: 'sendGameInfoData', v: GameInfoModel): void;
  (e: 'sendDesignData', v: DesignModel): void;
  (e: 'sendVisiterMemberData', v: ParticipationMemberPerTeamModel): void;
  (e: 'sendHomeMemberData', v: ParticipationMemberPerTeamModel): void;
}>()
// デザインデータ
let design: DesignModel = new DesignModel();
// 試合情報
let gameInfo: GameInfoModel = new GameInfoModel();
// ダイアログ表示フラグ
let dialogDispFlg = ref(false);
// ビジターメンバー初期情報リスト
let defaultVisiterMemberList: DefaultMemberModel[] = [];
// ビジター出場選手データ
let visiterParticipationMember = ref(new ParticipationMemberPerTeamModel());
// ビジター入力値
let visiterParticipationInput: InputVModelTeam = new InputVModelTeam();
// ホームメンバー初期情報リスト
let defaultHomeMemberList: DefaultMemberModel[] = [];
// ホーム出場選手データ
let homeParticipationMember = ref(new ParticipationMemberPerTeamModel());
// ホーム入力値
let homeParticipationInput: InputVModelTeam = new InputVModelTeam();

/**
 * 表示ボタンクリック時処理
 */
async function clickDisp() {
  gameInfo = await gameController.GetMemberInfo();
  design = await designController.GetDesign();
  defaultVisiterMemberList = await memberController.GetMemberInfo(VisiterHomeDivision.Visiter, gameInfo);
  defaultHomeMemberList = await memberController.GetMemberInfo(VisiterHomeDivision.Home, gameInfo);
  emits('sendDesignData', design);
  emits('sendGameInfoData', gameInfo);
}

/**
 * 一括ボタン（ビジター）クリック時処理
 */
function getBulkVisiterParticipationMember() {
  visiterParticipationMember.value = memberController.GetBulkParticipationMemberData(visiterParticipationMember.value, visiterParticipationInput, defaultVisiterMemberList);
  emits('sendVisiterMemberData', visiterParticipationMember.value);
}

/**
 * 一括ボタン（ホーム）クリック時処理
 */
function getBulkHomeParticipationMember() {
  homeParticipationMember.value = memberController.GetBulkParticipationMemberData(homeParticipationMember.value, homeParticipationInput, defaultHomeMemberList);
  emits('sendHomeMemberData', homeParticipationMember.value);
}

/**
 * 審判ボタンクリック時処理
 */
function clickUmpire() {
  dialogDispFlg.value = true;
}
</script>

<style scoped>

.Input-Row{
    display: flex;
}

.Input-Box{
    width: 30px;
    height: 15px;
    text-align: center;
}

.Enter-Button{
    width: 47px;
    height: 21px;
    text-align: center;
}

.Bulk-Enter-Button{
    margin-left: 15px;
    Width: 121px;
    height: 25px;
    text-align: center;
}

.CheckBox{
    height: 20px;
    color: black;
}

.Runner-DropDown{
    width: 120px;
    margin-top: 10px
}

.MultiSelect{
    width: 120px;
    height: 75px;
    overflow: auto;
}

.Control-Section{
    display: flex;
    flex-flow: column;
    color: #000000;
    margin-top: 10px;
}

.Play-Result-Row{
    display: flex;
    font-size: 15px;
}

.Res-First-Category{
    width: 300px;
    height: 75px;
}

.Res-Second-Category{
    width: 300px;
    height: 30px;
}

.Res-Third-Category{
    width: 300px;
    height: 75px;
}

.Res-Fours-Category{
    width: 300px;
    height: 55px;
}

.Res-Fifth-Category{
    width: 300px;
    height: 30px;
}

.Game-Start-End-Button{
    width: 100px;
    height: 40px;
}

.Base-Area{
    margin-top: 20px;
    height: 70px;
    position: relative;
}

.Base-Button{
    width: 25px;
    height: 25px;
    transform: rotate(135deg) skew(10deg, 10deg);
    position: absolute;
    border: 2px solid;
}

.RBI-DropDown{
    width: 60px;
}

.Base-First{
    top: 17px;
    left: 64px;
}

.Base-Second{
    left: 40px;
}

.Base-Third{
    top: 17px;
    left: 15px;
}

.Button-Row{
    display: flex;
}

.Count-Button{
    width: 50px;
    height: 33px;
}

.Minus-Button{
    width: 80px;
    height: 33px;
}

.Button-Color-Ball{
    background-color: #00fff2;
}

.Button-Color-Strike{
    background-color: #ffff00;
}

.Button-Color-Out{
    background-color: #ff0000;
}

.Confirm-Button{
    width: 180px;
    height: 45px;
    font-size: 20px;
}

.Fix-Button{
    width: 90px;
    height: 25px;
    font-size: 12px;
}

.Setting-DropDown{
    width: 130px;
    margin-bottom: 5px;
}

.Custom-TextArea{
    width: 125px;
    height: 125px;
}

</style>