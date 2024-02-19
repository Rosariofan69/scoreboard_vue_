<template>
  <div
    class="Control-Section"
    :class="[gameInfo.GameBaseInfo.HomePosition == '一塁側' ? 'Member-Input-Left' : 'Member-Input-Right']"
  >
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">1</label>
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.LeadOff.Position">
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.LeadOff.ID">
      <button class="Enter-Button" v-on:click="getVisitorParticipationMember(0, visitorCancelChange.LeadOff)">⏎</button>
      <input type="checkbox" v-model="visitorCancelChange.LeadOff">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">2</label>
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Second.Position">
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Second.ID">
      <button class="Enter-Button" v-on:click="getVisitorParticipationMember(1, visitorCancelChange.Second)">⏎</button>
      <input type="checkbox" v-model="visitorCancelChange.Second">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">3</label>
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Third.Position">
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Third.ID">
      <button class="Enter-Button" v-on:click="getVisitorParticipationMember(2, visitorCancelChange.Third)">⏎</button>
      <input type="checkbox" v-model="visitorCancelChange.Third">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">4</label>
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Fourth.Position">
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Fourth.ID">
      <button class="Enter-Button" v-on:click="getVisitorParticipationMember(3, visitorCancelChange.Fourth)">⏎</button>
      <input type="checkbox" v-model="visitorCancelChange.Fourth">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">5</label>
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Fifth.Position">
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Fifth.ID">
      <button class="Enter-Button" v-on:click="getVisitorParticipationMember(4, visitorCancelChange.Fifth)">⏎</button>
      <input type="checkbox" v-model="visitorCancelChange.Fifth">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">6</label>
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Sixth.Position">
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Sixth.ID">
      <button class="Enter-Button" v-on:click="getVisitorParticipationMember(5, visitorCancelChange.Sixth)">⏎</button>
      <input type="checkbox" v-model="visitorCancelChange.Sixth">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">7</label>
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Seventh.Position">
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Seventh.ID">
      <button class="Enter-Button" v-on:click="getVisitorParticipationMember(6, visitorCancelChange.Seventh)">⏎</button>
      <input type="checkbox" v-model="visitorCancelChange.Seventh">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">8</label>
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Eighth.Position">
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Eighth.ID">
      <button class="Enter-Button" v-on:click="getVisitorParticipationMember(7, visitorCancelChange.Eighth)">⏎</button>
      <input type="checkbox" v-model="visitorCancelChange.Eighth">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">9</label>
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Ninth.Position">
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Ninth.ID">
      <button class="Enter-Button" v-on:click="getVisitorParticipationMember(8, visitorCancelChange.Ninth)">⏎</button>
      <input type="checkbox" v-model="visitorCancelChange.Ninth">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;"></label>
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Pitcher.Position">
      <input type="text" class="Input-Box" v-model="visitorParticipationInput.Pitcher.ID">
      <button class="Enter-Button" v-on:click="getVisitorParticipationMember(9, visitorCancelChange.Pitcher)">⏎</button>
      <input type="checkbox" v-model="visitorCancelChange.Pitcher">
    </div>
    <div class="Input-Row">
      <input type="button" value="一括⏎" class="Bulk-Enter-Button" v-on:click="getBulkVisitorParticipationMember()">
    </div>
  </div>
  <div class="Control-Central">
    <div class="Control-Section">
      <div>走塁死</div>
      <div class="MultiSelect">
        <label style="display: block;">
          <input id="Base-Run-Out-Batter" type="checkbox" v-model="selectedBaseRunningOut" :value="runnerData.Batter.Order" v-if="runnerData.Batter.Name">{{ runnerData.Batter.Name }}
        </label>
        <label style="display: block;">
          <input id="Base-Run-Out-First" type="checkbox" v-model="selectedBaseRunningOut" :value="runnerData.First.Order" v-if="runnerData.First.Name">{{ runnerData.First.Name }}
        </label>
        <label style="display: block;">
          <input id="Base-Run-Out-Second" type="checkbox" v-model="selectedBaseRunningOut" :value="runnerData.Second.Order" v-if="runnerData.Second.Name">{{ runnerData.Second.Name }}
        </label>
        <label style="display: block;">
          <input id="Base-Run-Out-Third" type="checkbox" v-model="selectedBaseRunningOut" :value="runnerData.Third.Order" v-if="runnerData.Third.Name">{{ runnerData.Third.Name }}
        </label>
      </div>
      <div>生還</div>
      <div class="MultiSelect">
        <label style="display: block;">
          <input id="Base-Runs-Batter" type="checkbox" v-model="selectedBaseRuns" :value="runnerData.Batter.Order" v-if="runnerData.Batter.Name">{{ runnerData.Batter.Name }}
        </label>
        <label style="display: block;">
          <input id="Base-Runs-First" type="checkbox" v-model="selectedBaseRuns" :value="runnerData.First.Order" v-if="runnerData.First.Name">{{ runnerData.First.Name }}
        </label>
        <label style="display: block;">
          <input id="Base-Runs-Second" type="checkbox" v-model="selectedBaseRuns" :value="runnerData.Second.Order" v-if="runnerData.Second.Name">{{ runnerData.Second.Name }}
        </label>
        <label style="display: block;">
          <input id="Base-Runs-Third" type="checkbox" v-model="selectedBaseRuns" :value="runnerData.Third.Order" v-if="runnerData.Third.Name">{{ runnerData.Third.Name }}
        </label>
      </div>
      <button class="OnBase-Status-Button" v-on:click="onBaseStatusBoxDispFlg = !onBaseStatusBoxDispFlg;">出塁状況</button>
      <div class="OnBase-Status-Box" v-if="onBaseStatusBoxDispFlg">
        <div v-if="gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor">
          <div v-for="(visitorMember) in visitorParticipationMember" :key="visitorMember.ID">
            <label>
              <input type="checkbox" v-model="visitorMember.DispStatus.Runner">{{ visitorMember.Name }}
            </label>
          </div>
        </div>
        <div v-if="gameInfo.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home">
          <div v-for="(homeMember) in homeParticipationMember" :key="homeMember.ID">
            <label>
              <input type="checkbox" v-model="homeMember.DispStatus.Runner">{{ homeMember.Name }}
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="Control-Section">
      <div class="Res-First-Category">
        <div class="Play-Result-Row">
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.GroundBall" @change="changeResultCheck(ResultCheckBox.GroundBall, resultCheckBox.GroundBall)">ゴロ</label>
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.FlyBall" @change="changeResultCheck(ResultCheckBox.FlyBall, resultCheckBox.FlyBall)">フライ</label>
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.LineDrive" @change="changeResultCheck(ResultCheckBox.LineDrive, resultCheckBox.LineDrive)">ライナー</label>
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.DoublePlay" @change="changeResultCheck(ResultCheckBox.DoublePlay, resultCheckBox.DoublePlay)">併殺</label>
        </div>
        <div class="Play-Result-Row">
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.StrikeOut" @change="changeResultCheck(ResultCheckBox.StrikeOut, resultCheckBox.StrikeOut)">三振</label>
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.FourPitchWalk" @change="changeResultCheck(ResultCheckBox.FourPitchWalk, resultCheckBox.FourPitchWalk)">四球</label>
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.HitByPitch" @change="changeResultCheck(ResultCheckBox.HitByPitch, resultCheckBox.HitByPitch)">死球</label>
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.IntentionalWalk" @change="changeResultCheck(ResultCheckBox.IntentionalWalk, resultCheckBox.IntentionalWalk)">敬遠</label>
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.FoulFly" @change="changeResultCheck(ResultCheckBox.FoulFly, resultCheckBox.FoulFly)">邪飛</label>
        </div>
        <div class="Play-Result-Row">
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.SacrificeFly" @change="changeResultCheck(ResultCheckBox.SacrificeFly, resultCheckBox.SacrificeFly)">犠飛</label>
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.SacrificeBunt" @change="changeResultCheck(ResultCheckBox.SacrificeBunt, resultCheckBox.SacrificeBunt)">犠打</label>
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.SacrificeBuntError" @change="changeResultCheck(ResultCheckBox.SacrificeBuntError, resultCheckBox.SacrificeBuntError)">犠打失策</label>
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.SacrificeBuntFC" @change="changeResultCheck(ResultCheckBox.SacrificeBuntFC, resultCheckBox.SacrificeBuntFC)">犠打野選</label>
        </div>
      </div>
      <div class="Res-Second-Category">
        <div class="Play-Result-Row">
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.SingleHit" @change="changeResultCheck(ResultCheckBox.SingleHit, resultCheckBox.SingleHit)">安打</label>
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.TwoBaseHit" @change="changeResultCheck(ResultCheckBox.TwoBaseHit, resultCheckBox.TwoBaseHit)">二塁打</label>
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.ThreeBaseHit" @change="changeResultCheck(ResultCheckBox.ThreeBaseHit, resultCheckBox.ThreeBaseHit)">三塁打</label>
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.HomeRun" @change="changeResultCheck(ResultCheckBox.HomeRun, resultCheckBox.HomeRun)">本塁打</label>
        </div>
      </div>
      <div class="Res-Third-Category">
        <div class="Play-Result-Row">
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.Error" @change="changeResultCheck(ResultCheckBox.Error, resultCheckBox.Error)">失策</label>
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.FieldersChoice" @change="changeResultCheck(ResultCheckBox.FieldersChoice, resultCheckBox.FieldersChoice)">野選</label>
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.UncaughtThirdStrike" @change="changeResultCheck(ResultCheckBox.UncaughtThirdStrike, resultCheckBox.UncaughtThirdStrike)">振逃</label>
        </div>
        <div class="Play-Result-Row">
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.Interference" @change="changeResultCheck(ResultCheckBox.Interference, resultCheckBox.Interference)">打撃妨害</label>
          <label><input type="checkbox" name="resultCheck" v-model="resultCheckBox.Obstruction" @change="changeResultCheck(ResultCheckBox.Obstruction, resultCheckBox.Obstruction)">走塁妨害</label>
        </div>
        <div class="Play-Result-Row">
          <label><input type="checkbox" name="resultOption" v-model="resultOptionCheckBox.BatterOnBase">打者出塁</label>
          <label><input type="checkbox" name="resultOption" v-model="resultOptionCheckBox.PlusError">＋失策</label>
        </div>
      </div>
      <div class="Res-Fours-Category">
        <div class="Play-Result-Row">
          <label><input type="checkbox" :disabled="resultPositionFlg" name="resultPositon" value="投" v-model="resultPositionCheckBox" @change="changeResultPositionCheck()">投</label>
          <label><input type="checkbox" :disabled="resultPositionFlg" name="resultPositon" value="捕" v-model="resultPositionCheckBox" @change="changeResultPositionCheck()">捕</label>
          <label><input type="checkbox" :disabled="resultPositionFlg" name="resultPositon" value="一" v-model="resultPositionCheckBox" @change="changeResultPositionCheck()">一</label>
          <label><input type="checkbox" :disabled="resultPositionFlg" name="resultPositon" value="二" v-model="resultPositionCheckBox" @change="changeResultPositionCheck()">二</label>
          <label><input type="checkbox" :disabled="resultPositionFlg" name="resultPositon" value="三" v-model="resultPositionCheckBox" @change="changeResultPositionCheck()">三</label>
          <label><input type="checkbox" :disabled="resultPositionFlg" name="resultPositon" value="遊" v-model="resultPositionCheckBox" @change="changeResultPositionCheck()">遊</label>
        </div>
        <div class="Play-Result-Row">
          <label><input type="checkbox" :disabled="resultPositionFlg" name="resultPositon" value="左" v-model="resultPositionCheckBox" @change="changeResultPositionCheck()">左</label>
          <label><input type="checkbox" :disabled="resultPositionFlg" name="resultPositon" value="中" v-model="resultPositionCheckBox" @change="changeResultPositionCheck()">中</label>
          <label><input type="checkbox" :disabled="resultPositionFlg" name="resultPositon" value="右" v-model="resultPositionCheckBox" @change="changeResultPositionCheck()">右</label>
          <label><input type="checkbox" :disabled="resultPositionFlg" name="resultPositon" value="左中" v-model="resultPositionCheckBox" @change="changeResultPositionCheck()">左中</label>
          <label><input type="checkbox" :disabled="resultPositionFlg" name="resultPositon" value="右中" v-model="resultPositionCheckBox" @change="changeResultPositionCheck()">右中</label>
        </div>
      </div>
      <div class="Res-Fifth-Category">
        <div class="Play-Result-Row">
          <button class="Stolen-Base-Button" v-on:click="stolenBaseBoxDispFlg = !stolenBaseBoxDispFlg">盗塁</button>
          <div class="Stolen-Base-Select MultiSelect" v-if="stolenBaseBoxDispFlg">
            <label style="display: block;">
              <input id="Base-Runs-First" type="checkbox" v-model="selectedStolenBase" :value="runnerData.First.Order" v-if="runnerData.First.Name">{{ runnerData.First.Name }}
            </label>
            <label style="display: block;">
              <input id="Base-Runs-Second" type="checkbox" v-model="selectedStolenBase" :value="runnerData.Second.Order" v-if="runnerData.Second.Name">{{ runnerData.Second.Name }}
            </label>
            <label style="display: block;">
              <input id="Base-Runs-Third" type="checkbox" v-model="selectedStolenBase" :value="runnerData.Third.Order" v-if="runnerData.Third.Name">{{ runnerData.Third.Name }}
            </label>
          </div>
          <button class="Stolen-Base-Button" v-on:click="caughtStealingBoxDispFlg = !caughtStealingBoxDispFlg">盗塁死</button>
          <div class="Caught-Stealing-Select MultiSelect" v-if="caughtStealingBoxDispFlg">
            <label style="display: block;">
              <input id="Base-Runs-First" type="checkbox" v-model="selectedCaughtStealing" :value="runnerData.First.Order" v-if="runnerData.First.Name">{{ runnerData.First.Name }}
            </label>
            <label style="display: block;">
              <input id="Base-Runs-Second" type="checkbox" v-model="selectedCaughtStealing" :value="runnerData.Second.Order" v-if="runnerData.Second.Name">{{ runnerData.Second.Name }}
            </label>
            <label style="display: block;">
              <input id="Base-Runs-Third" type="checkbox" v-model="selectedCaughtStealing" :value="runnerData.Third.Order" v-if="runnerData.Third.Name">{{ runnerData.Third.Name }}
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="Control-Section">
      <button class="Game-Start-End-Button" v-on:click="clickGameStart()">試合開始</button>
      <button class="Game-Start-End-Button">試合終了</button>
      <button class="Game-Start-End-Button">タイブレーク</button>
      <div class="Base-Area">
        <button class="Base-Button Base-First" v-on:click="clickBase(PositionName.FB)" :class="[{'Button-Color-Out' : runnerState.First}]"></button>
        <button class="Base-Button Base-Second" v-on:click="clickBase(PositionName.SB)" :class="[{'Button-Color-Out' : runnerState.Second}]"></button>
        <button class="Base-Button Base-Third" v-on:click="clickBase(PositionName.TB)" :class="[{'Button-Color-Out' : runnerState.Third}]"></button>
      </div>
      <div>
        打点
        <select class="RBI-DropDown" v-model="selectedRBI">
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
        <button class="Count-Button Button-Color-Ball" v-on:click="clickBall()">B</button>
        <button class="Count-Button Button-Color-Ball" v-on:click="clickBallMinus()">B-1</button>
        <button class="Minus-Button" v-on:click="pitchMinus()">投球数-1</button>
      </div>
      <div class="Button-Row">
        <button class="Count-Button Button-Color-Strike" v-on:click="clickStrike()">S</button>
        <button class="Count-Button Button-Color-Strike" v-on:click="clickStrikeMinus()">S-1</button>
        <button class="Minus-Button Button-Color-Strike" v-on:click="foulClick()">ファール</button>
      </div>
      <div class="Button-Row">
        <button class="Count-Button Button-Color-Out" v-on:click="clickOut()">O</button>
        <button class="Count-Button Button-Color-Out" v-on:click="clickOutMinus()">O-1</button>
        <button class="Minus-Button" v-on:click="thisAtBatPitchMinus()">打席内-1</button>
      </div>
      <div class="Button-Row" style="margin-top: 10px; margin-bottom: 10px;">
        <select class="Modify-DropDown" v-model="selectedModifyDivision">
          <option>{{ DialogCallDivision.VisitorMemberInfo }}</option>
          <option>{{ DialogCallDivision.HomeMemberInfo }}</option>
          <option>{{ DialogCallDivision.VisitorBattingResult }}</option>
          <option>{{ DialogCallDivision.HomeBattingResult }}</option>
          <option>{{ DialogCallDivision.VisitorPitcherInfo }}</option>
          <option>{{ DialogCallDivision.HomePitcherInfo }}</option>
          <option>{{ DialogCallDivision.Score }}</option>
        </select>
        <button class="Modify-Button" v-on:click="clickModify()">修正</button>
      </div>
      <div class="Button-Row">
        <button class="Fix-Button" v-on:click="clickUmpire()">審判</button>
        <button class="Fix-Button" v-on:click="clickUndo()">1つ前に戻る</button>
      </div>
      <div class="Button-Row" style="margin-bottom: 10px;">
        <button class="Fix-Button" v-on:click="clickDisp()">表示</button>
      </div>
      <div class="Button-Row">
        <button class="Confirm-Button" v-on:click="clickConfirm()">確定</button>
      </div>
    </div>
    <div class="Control-Section" style="font-size: 13.5px;">
      打者成績表示の切替
      <select class="Setting-DropDown"></select>
      INFOスペースの表示
      <select class="Setting-DropDown"></select>
      カスタムテキスト
      <textarea class="Custom-TextArea" v-model="customText" @change="changeCustomText()"></textarea>
    </div>
  </div>
  <div
    class="Control-Section"
    :class="[gameInfo.GameBaseInfo.HomePosition == '一塁側' ? 'Member-Input-Right' : 'Member-Input-Left']"
  >
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">1</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.LeadOff.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.LeadOff.ID">
      <button class="Enter-Button" v-on:click="getHomeParticipationMember(0, homeCancelChange.LeadOff)">⏎</button>
      <input type="checkbox" v-model="homeCancelChange.LeadOff">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">2</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Second.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Second.ID">
      <button class="Enter-Button" v-on:click="getHomeParticipationMember(1, homeCancelChange.Second)">⏎</button>
      <input type="checkbox" v-model="homeCancelChange.Second">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">3</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Third.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Third.ID">
      <button class="Enter-Button" v-on:click="getHomeParticipationMember(2, homeCancelChange.Third)">⏎</button>
      <input type="checkbox" v-model="homeCancelChange.Third">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">4</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Fourth.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Fourth.ID">
      <button class="Enter-Button" v-on:click="getHomeParticipationMember(3, homeCancelChange.Fourth)">⏎</button>
      <input type="checkbox" v-model="homeCancelChange.Fourth">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">5</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Fifth.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Fifth.ID">
      <button class="Enter-Button" v-on:click="getHomeParticipationMember(4, homeCancelChange.Fifth)">⏎</button>
      <input type="checkbox" v-model="homeCancelChange.Fifth">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">6</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Sixth.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Sixth.ID">
      <button class="Enter-Button" v-on:click="getHomeParticipationMember(5, homeCancelChange.Sixth)">⏎</button>
      <input type="checkbox" v-model="homeCancelChange.Sixth">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">7</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Seventh.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Seventh.ID">
      <button class="Enter-Button" v-on:click="getHomeParticipationMember(6, homeCancelChange.Seventh)">⏎</button>
      <input type="checkbox" v-model="homeCancelChange.Seventh">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">8</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Eighth.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Eighth.ID">
      <button class="Enter-Button" v-on:click="getHomeParticipationMember(7, homeCancelChange.Eighth)">⏎</button>
      <input type="checkbox" v-model="homeCancelChange.Eighth">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;">9</label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Ninth.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Ninth.ID">
      <button class="Enter-Button" v-on:click="getHomeParticipationMember(8, homeCancelChange.Ninth)">⏎</button>
      <input type="checkbox" v-model="homeCancelChange.Ninth">
    </div>
    <div class="Input-Row">
      <label style="color: black; width: 15px; height: 8px;"></label>
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Pitcher.Position">
      <input type="text" class="Input-Box" v-model="homeParticipationInput.Pitcher.ID">
      <button class="Enter-Button" v-on:click="getHomeParticipationMember(9, homeCancelChange.Pitcher)">⏎</button>
      <input type="checkbox" v-model="homeCancelChange.Pitcher">
    </div>
    <div class="Input-Row">
      <input type="button" value="一括⏎" class="Bulk-Enter-Button" v-on:click="getBulkHomeParticipationMember()">
    </div>
  </div>
  <div>
    <UmpireDialogComponent
      :flag="umpireDialogDispFlg"
      :umpireData="umpire"
      @sendUmpireData="getUmpireData"
      @closeDialog="getCloseDialog"
    />
  </div>
  <div>
    <ModifyDialogComponent
      :flag="modifyDialogDispFlg"
      :callDivision="selectedModifyDivision"
      :visitorMembers="defaultVisitorMemberList"
      :homeMembers="defaultHomeMemberList"
      :visitorBattingResults="visitorBattingResult"
      :homeBattingResults="homeBattingResult"
      :visitorPitcherInfos="visitorPitcherInfo"
      :homePitcherInfos="homePitcherInfo"
      :scoreData="runningScore"
      :gameInfo="gameInfo"
      @sendModifyData="getModifyData"
      @closeDialog="getCloseDialog"
    />
  </div>
  <div class="Dialog" v-if="gameSetDialogDispFlg">
    {{ Message.Message004 }}
    <button v-on:click="clickOkGameSet()">OK</button>
    <button v-on:click="closeGameSetDialog()">キャンセル</button>
  </div>
</template>

<script setup lang="ts">
import { DesignController } from './ts/design-controller';
import { DesignModel } from './ts/model/design-model';
import { defineEmits, ref } from 'vue';
import { MemberController } from './ts/member-controller';
import { DefaultMemberModel,
         InputVTeamModel,
         ParticipationMemberPerTeamModel,
         UmpireModel,
         BattingResultPerTeamModel,
         PitcherInfoModel,
         PositionModel,
         RunnerNameModel,
         DispBatterStatsModel,
         RunnerStateModel,
         BatterStatsUpdateModel,
         AtBatResultModel, 
ChangeCancelMemberModel} from './ts/model/member-info-model';
import { GameController } from './ts/game-controller';
import { GameInfoModel, ResultCheckBoxModel, ResultOptionCheckBoxModel, ResultPositionCheckBoxModel, GameProgressLogModel } from './ts/model/game-model';
import { VisitorHomeDivision } from './ts/constant';
import UmpireDialogComponent from './UmpireDialogComponent.vue';
import ModifyDialogComponent from './ModifyDialogComponent.vue';
import { CountModel, DispRunningScoreModel, DispScoreModel, JudgeModel, RunningScoreModel } from './ts/model/score-info-model';
import { ResultCheckBox, PositionName, Message, DialogCallDivision } from './ts/constant';
import _ from 'lodash';
import e from 'express';

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
  (e: 'sendUmpireData', v: UmpireModel): void;
  (e: 'sendVisitorMemberData', v: ParticipationMemberPerTeamModel): void;
  (e: 'sendHomeMemberData', v: ParticipationMemberPerTeamModel): void;
  (e: 'sendPositionData', v: PositionModel): void;
  (e: 'sendRunnerData', v: RunnerNameModel): void;
  (e: 'sendPitcherData', v: PitcherInfoModel): void;
  (e: 'sendBatterStatsData', v: DispBatterStatsModel): void;
  (e: 'sendScoreData', v: DispScoreModel): void;
  (e: 'sendCountData', v: CountModel): void;
  (e: 'sendJudgeData', v: JudgeModel): void;
  (e: 'sendBattingResultData', v: AtBatResultModel[]): void;
  (e: 'sendBigInfoDispFlg', v: boolean): void;
  (e: 'sendCustomText', v: string): void;
}>()
// デザインデータ
let design: DesignModel = new DesignModel();
// 審判
let umpire = ref(new UmpireModel());
// 試合情報
let gameInfo = ref(new GameInfoModel());
// 審判ダイアログ表示フラグ
let umpireDialogDispFlg = ref(false);
// 修正ダイアログ表示フラグ
let modifyDialogDispFlg = ref(false);
// 修正区分選択値
let selectedModifyDivision = ref('');
// ビジターメンバー初期情報リスト
let defaultVisitorMemberList = ref<DefaultMemberModel[]>([]);
// ビジター出場選手データ
let visitorParticipationMember = ref(new ParticipationMemberPerTeamModel());
// ビジター打席結果
let visitorBattingResult = ref(new BattingResultPerTeamModel());
// ビジター入力値
let visitorParticipationInput: InputVTeamModel = new InputVTeamModel();
// ビジター交代前入力値
let visitorBeforeChangeInput: InputVTeamModel = new InputVTeamModel();
// ビジター投手情報
let visitorPitcherInfo: PitcherInfoModel[] = [];
// ビジター選手交代取消
let visitorCancelChange = ref(new ChangeCancelMemberModel());
// ホームメンバー初期情報リスト
let defaultHomeMemberList: DefaultMemberModel[] = [];
// ホーム出場選手データ
let homeParticipationMember = ref(new ParticipationMemberPerTeamModel());
// ホーム打席結果
let homeBattingResult = ref(new BattingResultPerTeamModel());
// ホーム入力値
let homeParticipationInput: InputVTeamModel = new InputVTeamModel();
// ホーム交代前入力値
let homeBeforeChangeInput: InputVTeamModel = new InputVTeamModel();
// ホーム投手情報
let homePitcherInfo: PitcherInfoModel[] = [];
// ビジター選手交代取消
let homeCancelChange = ref(new ChangeCancelMemberModel());
// 投手情報
let pitcherInfo = ref(new PitcherInfoModel());
// 守備位置
let positionData = ref(new PositionModel());
// 走者
let runnerData = ref(new RunnerNameModel());
// 走者の状態
let runnerState = ref(new RunnerStateModel());
// 打者成績
let batterStats = ref(new DispBatterStatsModel());
// ランニングスコア
let runningScore: RunningScoreModel = new RunningScoreModel();
// 表示用ランニングスコア
let dispRunningScore = ref(new DispScoreModel());
// カウントデータ
let countData = ref(new CountModel());
// 判定データ
let judgeData = ref(new JudgeModel());
// 打席結果データ
let battingResultData = ref<AtBatResultModel[]>([]);
// 打席結果チェックボックス
let resultCheckBox = ref(new ResultCheckBoxModel());
// 打席結果チェックボックスプロパティリスト
const resultCheckBoxPropertyList = ['GroundBall',
                                    'FlyBall',
                                    'LineDrive',
                                    'DoublePlay',
                                    'StrikeOut',
                                    'FourPitchWalk',
                                    'HitByPitch',
                                    'IntentionalWalk',
                                    'FoulFly',
                                    'SacrificeFly',
                                    'SacrificeBunt',
                                    'SacrificeBuntError',
                                    'SacrificeBuntFC',
                                    'SingleHit',
                                    'TwoBaseHit',
                                    'ThreeBaseHit',
                                    'HomeRun',
                                    'Error',
                                    'FieldersChoice',
                                    'UncaughtThirdStrike',
                                    'Interference',
                                    'Obstruction',
                                    'UnSelected'] as const;
const runnerProperty = ['Batter', 'First', 'Second', 'Third'] as const;
// 打席結果オプション
let resultOptionCheckBox = ref(new ResultOptionCheckBoxModel())
// 打席結果守備位置ラジオボタン
let resultPositionCheckBox = ref<string[]>([]);
// 打席結果守備位置活性フラグ
let resultPositionFlg = ref(true);
// 走塁死選択値
let selectedBaseRunningOut = ref<number[]>([]);
// 生還選択値
let selectedBaseRuns = ref<number[]>([]);
// 盗塁選択ボックス表示フラグ
let stolenBaseBoxDispFlg = ref(false);
// 盗塁選択値
let selectedStolenBase = ref<number[]>([]);
// 盗塁死選択ボックス表示フラグ
let caughtStealingBoxDispFlg = ref(false);
// 盗塁死選択値
let selectedCaughtStealing = ref<number[]>([]);
// 打点選択値
let selectedRBI = ref('0');
// インフォメーション（大）タイマー
let bigInfoTimer;
// インフォメーション（大）表示フラグ true:野手成績 false:守備位置
let bigInfoDispFlg = ref(true);
// 試合経過ログリスト
let gameProgressLogList: GameProgressLogModel[] = [];
// 試合終了ダイアログ表示フラグ
let gameSetDialogDispFlg = ref(false);
// 確認ダイアログ表示フラグ
let confirmdDialogDispFlg = ref(false);
// メッセージダイアログ表示フラグ
let messageDialogDispFlg = ref(false);
// 出塁状況表示フラグ
let onBaseStatusBoxDispFlg = ref(false);
// カスタムテキスト
let customText = ref('');

/**
 * 表示ボタンクリック時処理
 */
async function clickDisp() {
  gameInfo.value = await gameController.GetGameInfoStart();
  design = await designController.GetDesign();
  defaultVisitorMemberList.value = await memberController.GetMemberInfo(VisitorHomeDivision.Visitor, gameInfo.value);
  defaultHomeMemberList = await memberController.GetMemberInfo(VisitorHomeDivision.Home, gameInfo.value);
  emits('sendDesignData', design);
  emits('sendGameInfoData', gameInfo.value);
  emits('sendScoreData', dispRunningScore.value);
}

/**
 * 審判データ取得
 * @param data
 */
const getUmpireData = (data: UmpireModel) => {
  umpire.value = data;
  umpireDialogDispFlg.value = false;
  emits('sendUmpireData', umpire.value);
}

/**
 * 修正データ取得
 * @param data 
 */
const getModifyData = (data: any) => {
  switch (selectedModifyDivision.value) {
    case DialogCallDivision.VisitorMemberInfo:
      defaultVisitorMemberList.value = data;
      getBatterStats();
      break;
    case DialogCallDivision.HomeMemberInfo:
      defaultHomeMemberList = data;
      getBatterStats();
      break;
    case DialogCallDivision.VisitorBattingResult:
      visitorBattingResult.value = data;
      getBattingResult();
      break;
    case DialogCallDivision.HomeBattingResult:
      homeBattingResult.value = data;
      getBattingResult();
      break;
    case DialogCallDivision.VisitorPitcherInfo:
      visitorPitcherInfo = data;
      getPitcherInfo();
      break;
    case DialogCallDivision.HomePitcherInfo:
      homePitcherInfo = data;
      getPitcherInfo();
      break;
    case DialogCallDivision.Score:
      runningScore = data;
      dispRunningScore.value.Score = gameController.CreateDispRunningScore(gameInfo.value, runningScore);
      emits('sendScoreData', dispRunningScore.value);
      break;
    default:
      break;
  }
  modifyDialogDispFlg.value = false;
}

/**
 * ダイアログクローズ
 * @param data
 */
const getCloseDialog = (data: any) => {
  modifyDialogDispFlg.value = data;
  umpireDialogDispFlg.value = data;
}

/**
 * Enterボタン（ビジター）クリック
 */
async function getVisitorParticipationMember(index: number, cancel: boolean) {
  if (!gameInfo.value.GameProgressInfo.IsStarted) {
    visitorParticipationMember.value = memberController.GetParticipationMemberData(visitorParticipationMember.value, visitorParticipationInput, defaultVisitorMemberList.value, index);
    emits('sendVisitorMemberData', visitorParticipationMember.value);
    visitorBeforeChangeInput = _.cloneDeep(visitorParticipationInput);
  } else {
    if (visitorBeforeChangeInput == visitorParticipationInput) {
      return;
    }

    // 交代前
    visitorParticipationMember.value = memberController.ChangeBeforeMember(visitorBeforeChangeInput, visitorParticipationInput, visitorParticipationMember.value, index);

    await new Promise(resolve => setTimeout(() => {
      [visitorParticipationMember.value, visitorBattingResult.value, visitorPitcherInfo] = 
      memberController.ChangeAfterMember(visitorBeforeChangeInput, visitorParticipationInput, visitorParticipationMember.value, defaultVisitorMemberList.value, visitorBattingResult.value, visitorPitcherInfo, index, cancel);
      
      if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
        batterStats.value = memberController.GetBatterStats(visitorParticipationMember.value, defaultVisitorMemberList.value);
        const id = visitorParticipationMember.value[memberController.orderKeysDH[runnerData.value.Batter.Order - 1]].ID;
        battingResultData.value = memberController.GetBattingResult(visitorBattingResult.value, runnerData.value.Batter.Order, id);
        runnerData.value = gameController.SortRunner(visitorParticipationMember.value, runnerState.value, runnerData.value.Batter);
        emits('sendBatterStatsData', batterStats.value);
        emits('sendBattingResultData', battingResultData.value);
        emits('sendRunnerData', runnerData.value);
      } else {
        positionData.value = memberController.SetPositionData(visitorParticipationMember.value);
        visitorPitcherInfo = memberController.SetPitcherInfo(visitorParticipationMember.value, visitorPitcherInfo);
        pitcherInfo.value = memberController.GetPitcherInfo(visitorParticipationMember.value, visitorPitcherInfo);
        emits('sendPositionData', positionData.value);
        emits('sendPitcherData', pitcherInfo.value);
      }
      visitorBeforeChangeInput = _.cloneDeep(visitorParticipationInput);
    }, 5000));
  }
}

/**
 * 一括ボタン（ビジター）クリック時処理
 */
async function getBulkVisitorParticipationMember() {
  if (!gameInfo.value.GameProgressInfo.IsStarted) {
    visitorParticipationMember.value = memberController.GetBulkParticipationMemberData(visitorParticipationMember.value, visitorParticipationInput, defaultVisitorMemberList.value);
    emits('sendVisitorMemberData', visitorParticipationMember.value);
    visitorBeforeChangeInput = _.cloneDeep(visitorParticipationInput);
  } else {
    if (visitorBeforeChangeInput == visitorParticipationInput) {
      return;
    }

    // 交代前
    visitorParticipationMember.value = memberController.ChangeBeforeMemberBulk(visitorBeforeChangeInput, visitorParticipationInput, visitorParticipationMember.value);

    await new Promise(resolve => setTimeout(() => {
      [visitorParticipationMember.value, visitorBattingResult.value] = memberController.ChangeAfterMemberBulk(visitorBeforeChangeInput, visitorParticipationInput, visitorParticipationMember.value, defaultVisitorMemberList.value, visitorBattingResult.value);
      
      if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
        batterStats.value = memberController.GetBatterStats(visitorParticipationMember.value, defaultVisitorMemberList.value);
        const id = visitorParticipationMember.value[memberController.orderKeysDH[runnerData.value.Batter.Order - 1]].ID;
        battingResultData.value = memberController.GetBattingResult(visitorBattingResult.value, runnerData.value.Batter.Order, id);
        runnerData.value = gameController.SortRunner(visitorParticipationMember.value, runnerState.value, runnerData.value.Batter);
        emits('sendBatterStatsData', batterStats.value);
        emits('sendBattingResultData', battingResultData.value);
        emits('sendRunnerData', runnerData.value);
      } else {
        positionData.value = memberController.SetPositionData(visitorParticipationMember.value);
        visitorPitcherInfo = memberController.SetPitcherInfo(visitorParticipationMember.value, visitorPitcherInfo);
        pitcherInfo.value = memberController.GetPitcherInfo(visitorParticipationMember.value, visitorPitcherInfo);
        emits('sendPositionData', positionData.value);
        emits('sendPitcherData', pitcherInfo.value);
      }
      visitorBeforeChangeInput = _.cloneDeep(visitorParticipationInput);
    }, 5000));
  }
}

/**
 * Enterボタン（ホーム）クリック
 */
 async function getHomeParticipationMember(index: number, cancel: boolean) {
  if (!gameInfo.value.GameProgressInfo.IsStarted) {
    homeParticipationMember.value = memberController.GetParticipationMemberData(homeParticipationMember.value, homeParticipationInput, defaultHomeMemberList, index);
    emits('sendHomeMemberData', homeParticipationMember.value);
    homeBeforeChangeInput = _.cloneDeep(homeParticipationInput);
  } else {
    if (homeBeforeChangeInput == homeParticipationInput) {
      return;
    }

    // 交代前
    homeParticipationMember.value = memberController.ChangeBeforeMember(homeBeforeChangeInput, homeParticipationInput, homeParticipationMember.value, index);

    await new Promise(resolve => setTimeout(() => {
      [homeParticipationMember.value, homeBattingResult.value, homePitcherInfo] = 
      memberController.ChangeAfterMember(homeBeforeChangeInput, homeParticipationInput, homeParticipationMember.value, defaultHomeMemberList, homeBattingResult.value, homePitcherInfo, index, cancel);
      
      if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home) {
        batterStats.value = memberController.GetBatterStats(homeParticipationMember.value, defaultHomeMemberList);
        const id = homeParticipationMember.value[memberController.orderKeysDH[runnerData.value.Batter.Order - 1]].ID;
        battingResultData.value = memberController.GetBattingResult(homeBattingResult.value, runnerData.value.Batter.Order, id);
        runnerData.value = gameController.SortRunner(homeParticipationMember.value, runnerState.value, runnerData.value.Batter);
        emits('sendBatterStatsData', batterStats.value);
        emits('sendBattingResultData', battingResultData.value);
        emits('sendRunnerData', runnerData.value);
      } else {
        positionData.value = memberController.SetPositionData(homeParticipationMember.value);
        homePitcherInfo = memberController.SetPitcherInfo(homeParticipationMember.value, homePitcherInfo);
        pitcherInfo.value = memberController.GetPitcherInfo(homeParticipationMember.value, homePitcherInfo);
        emits('sendPositionData', positionData.value);
        emits('sendPitcherData', pitcherInfo.value);
      }
      homeBeforeChangeInput = _.cloneDeep(homeParticipationInput);
    }, 5000));
  }
}

/**
 * 一括ボタン（ホーム）クリック時処理
 */
async function getBulkHomeParticipationMember() {
  if (!gameInfo.value.GameProgressInfo.IsStarted) {
    homeParticipationMember.value = memberController.GetBulkParticipationMemberData(homeParticipationMember.value, homeParticipationInput, defaultHomeMemberList);
    emits('sendHomeMemberData', homeParticipationMember.value);
    homeBeforeChangeInput = _.cloneDeep(homeParticipationInput);
  } else {
    if (homeBeforeChangeInput == homeParticipationInput) {
      return;
    }

    // 交代前
    homeParticipationMember.value = memberController.ChangeBeforeMemberBulk(homeBeforeChangeInput, homeParticipationInput, homeParticipationMember.value);

    await new Promise(resolve => setTimeout(() => {
      [homeParticipationMember.value, homeBattingResult.value] = memberController.ChangeAfterMemberBulk(homeBeforeChangeInput, homeParticipationInput, homeParticipationMember.value, defaultHomeMemberList, homeBattingResult.value);
      
      if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Home) {
        batterStats.value = memberController.GetBatterStats(homeParticipationMember.value, defaultHomeMemberList);
        const id = homeParticipationMember.value[memberController.orderKeysDH[runnerData.value.Batter.Order - 1]].ID;
        battingResultData.value = memberController.GetBattingResult(homeBattingResult.value, runnerData.value.Batter.Order, id);
        runnerData.value = gameController.SortRunner(homeParticipationMember.value, runnerState.value, runnerData.value.Batter);
        emits('sendBatterStatsData', batterStats.value);
        emits('sendBattingResultData', battingResultData.value);
        emits('sendRunnerData', runnerData.value);
      } else {
        positionData.value = memberController.SetPositionData(homeParticipationMember.value);
        homePitcherInfo = memberController.SetPitcherInfo(homeParticipationMember.value, homePitcherInfo);
        pitcherInfo.value = memberController.GetPitcherInfo(homeParticipationMember.value, homePitcherInfo);
        emits('sendPositionData', positionData.value);
        emits('sendPitcherData', pitcherInfo.value);
      }
      homeBeforeChangeInput = _.cloneDeep(homeParticipationInput);
    }, 5000));
  }
}

/**
 * 審判ボタンクリック時処理
 */
function clickUmpire() {
  umpireDialogDispFlg.value = true;
}

/**
 * 塁ボタンクリック時処理
 */
function clickBase(position: PositionName) {
  switch (position) {
    case PositionName.FB:
      runnerState.value.First = !runnerState.value.First;
      break;
    case PositionName.SB:
      runnerState.value.Second = !runnerState.value.Second;
      break;
    case PositionName.TB:
      runnerState.value.Third = !runnerState.value.Third;
      break;
    default:
      break;
  }
}

/**
 * 試合開始ボタンクリック時処理
 */
function clickGameStart() {
  if (gameInfo.value.GameProgressInfo.IsStarted == true) {
    return;
  }
  let cloneVisitorMember = _.cloneDeep(visitorParticipationMember.value);
  let cloneHomeMember = _.cloneDeep(homeParticipationMember.value);
  let cloneGameInfo = _.cloneDeep(gameInfo.value);
  [
    cloneVisitorMember,
    visitorBattingResult.value,
    cloneHomeMember,
    homeBattingResult.value,
    visitorPitcherInfo,
    homePitcherInfo,
    pitcherInfo.value,
    positionData.value,
    cloneGameInfo.GameProgressInfo
  ] = gameController.SetDataGameStart(visitorParticipationMember.value, homeParticipationMember.value);

  cloneVisitorMember.LeadOff.DispStatus.Batter = true;
  cloneVisitorMember.LeadOff.DispStatus.Basic = false;
  cloneHomeMember.LeadOff.DispStatus.NextRead = true;
  runnerData.value.Batter.Order = 1;
  runnerData.value.Batter.Name = visitorParticipationMember.value.LeadOff.Name;

  batterStats.value = memberController.GetBatterStats(cloneVisitorMember, defaultVisitorMemberList.value);
  visitorParticipationMember.value = cloneVisitorMember;
  homeParticipationMember.value = cloneHomeMember;
  gameInfo.value = cloneGameInfo;

  emits('sendPitcherData', pitcherInfo.value);
  emits('sendBatterStatsData', batterStats.value);
  emits('sendPositionData', positionData.value);
  emits('sendVisitorMemberData', visitorParticipationMember.value);
  emits('sendHomeMemberData', homeParticipationMember.value);
  emits('sendGameInfoData', gameInfo.value);
  startTimerBigInfo();
}

/**
 * インフォメーション（大）タイマー開始
 */
function startTimerBigInfo() {
  bigInfoTimer = setInterval(() => {
    bigInfoDispFlg.value = !bigInfoDispFlg.value;
    emits('sendBigInfoDispFlg', bigInfoDispFlg.value);
  }, 10000)
}

/**
 * ボールクリック
 */
function clickBall() {
  if (countData.value.Ball < 3) {
    countData.value.Ball++;
    emits('sendCountData', countData.value);
    pitchPlus(false);
  } else {
    clickConfirm();
  }
}

/**
 * ボールマイナスクリック
 */
function clickBallMinus() {
  if (countData.value.Ball > 0) {
    countData.value.Ball--;
    pitchMinus();
    thisAtBatPitchMinus();
    emits('sendCountData', countData.value);
  }
}

/**
 * ストライククリック
 */
function clickStrike() {
  if (countData.value.Strike < 2) {
    countData.value.Strike++;
    emits('sendCountData', countData.value);
    pitchPlus(false);
  } else {
    clickConfirm();
  }
}

/**
 * ストライクマイナスクリック
 */
function clickStrikeMinus() {
  if (countData.value.Strike > 0) {
    countData.value.Strike--;
    pitchMinus();
    thisAtBatPitchMinus();
    emits('sendCountData', countData.value);
  }
}

/**
 * ファールクリック
 */
function foulClick() {
  if (countData.value.Strike < 2) {
    countData.value.Strike++;
  }
  pitchPlus(false);
}

/**
 * カウントリセット
 */
function resetCount() {
  countData.value.Ball = 0;
  countData.value.Strike = 0;
}

/**
 * 投球数加算
 */
function pitchPlus(batterChangeFlg: boolean) {
  pitcherInfo.value.PitchCount++;
  if (batterChangeFlg) {
    pitcherInfo.value.ThisAtBat = 0;
  } else {
    pitcherInfo.value.ThisAtBat++;
  }
  // emits('sendPitcherData', pitcherInfo.value);
}

/**
 * 投球数減算
 */
function pitchMinus() {
  if (pitcherInfo.value.ThisAtBat > 0) {
    pitcherInfo.value.PitchCount--;
  }
  emits('sendPitcherData', pitcherInfo.value);
}

/**
 * 打席内減算
 */
function thisAtBatPitchMinus() {
  if (pitcherInfo.value.ThisAtBat > 0) {
    pitcherInfo.value.ThisAtBat--;
  }
  emits('sendPitcherData', pitcherInfo.value);
}

/**
 * アウトクリック
 */
function clickOut() {
  if (countData.value.Out < 2) {
    countData.value.Out++;
    emits('sendCountData', countData.value);
  }
}

/**
 * アウトマイナスクリック
 */
function clickOutMinus() {
  if (countData.value.Out > 0) {
    countData.value.Out--;
    emits('sendCountData', countData.value);
  }
}

/**
 * 確定クリック
 */
async function clickConfirm() {
  if (resultOptionCheckBox.value.PlusError) {
    // +失策
    litError();
  }
  // 試合経過ログ保存
  saveGameProgressLog();

  if (selectedStolenBase.value.length > 0) {
    // 盗塁
    stolenBase();
  }
  if (selectedCaughtStealing.value.length > 0) {
    // 盗塁死
    caughtStealing();
  }

  if (resultCheckBox.value.StrikeOut) {
    // 三振
    strikeOut();
  } else if (resultCheckBox.value.FourPitchWalk) {
    // 四球
    fourPitchWalk();
  } else if (resultCheckBox.value.SingleHit || resultCheckBox.value.TwoBaseHit || resultCheckBox.value.ThreeBaseHit || resultCheckBox.value.HomeRun) {
    // 単打、二塁打、三塁打、本塁打
    hit();
  } else if (resultCheckBox.value.GroundBall || resultCheckBox.value.FlyBall || resultCheckBox.value.LineDrive || resultCheckBox.value.DoublePlay ||
             resultCheckBox.value.FoulFly || resultCheckBox.value.SacrificeBunt || resultCheckBox.value.SacrificeFly) {
    // ゴロ、フライ、ライナー、併殺、邪飛、犠打、犠飛
    batterOut();
  } else if (resultCheckBox.value.IntentionalWalk) {
    // 敬遠
    intentionalWalk();
  } else if (resultCheckBox.value.UncaughtThirdStrike) {
    // 振り逃げ
    uncaughtThirdStrike();
  } else if (resultCheckBox.value.Error || resultCheckBox.value.SacrificeBuntError) {
    // 失策、犠打失策
    error();
  } else if (resultCheckBox.value.FieldersChoice || resultCheckBox.value.SacrificeBuntFC) {
    // 野選、犠打野選
    fieldersChoice();
  } else if (resultCheckBox.value.HitByPitch || resultCheckBox.value.Interference || resultCheckBox.value.Obstruction) {
    // 死球、打撃妨害、走塁妨害
    anotherOnBase();

  } else {
    let cloneMember = new ParticipationMemberPerTeamModel();

    if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
      cloneMember = _.cloneDeep(visitorParticipationMember.value);
    } else {
      cloneMember = _.cloneDeep(homeParticipationMember.value);
    }

    cloneMember = baseRuns(cloneMember);
    cloneMember = baseRunningOut(cloneMember);

    if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
      visitorParticipationMember.value = cloneMember;
      emits('sendVisitorMemberData', visitorParticipationMember.value);
    } else {
      homeParticipationMember.value = cloneMember;
      emits('sendHomeMemberData', homeParticipationMember.value);
    }
  }

  // 投手情報保存
  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
    homePitcherInfo = memberController.SavePitcherInfo(homePitcherInfo, pitcherInfo.value);
  } else {
    visitorPitcherInfo = memberController.SavePitcherInfo(visitorPitcherInfo, pitcherInfo.value);
  }
  resultCheckBox.value = new ResultCheckBoxModel();
  resultPositionCheckBox.value = [];
  resultOptionCheckBox.value = new ResultOptionCheckBoxModel();
  resultPositionFlg.value = true;
  selectedRBI.value = '0';
  if (checkGameSetAvailability()) {
    // 試合終了
    gameSetDialogDispFlg.value = true;
  } else {
    // 攻守交代
    changeAttackTeam();
  }
}

/**
 * 打席結果チェックボックス変更イベント
 * @param changeItem
 * @param targetValue
 */
function changeResultCheck(changeItem: number, targetValue: boolean) {
  resultCheckBox.value = new ResultCheckBoxModel();
  if (targetValue) {
    // 守備位置活性制御
    if (changeItem == ResultCheckBox.StrikeOut ||
        changeItem == ResultCheckBox.FourPitchWalk ||
        changeItem == ResultCheckBox.HitByPitch ||
        changeItem == ResultCheckBox.IntentionalWalk ||
        changeItem == ResultCheckBox.UncaughtThirdStrike ||
        changeItem == ResultCheckBox.Interference ||
        changeItem == ResultCheckBox.Obstruction) {
      resultPositionFlg.value = true;
      resultPositionCheckBox.value = [];
    } else {
      resultPositionFlg.value = false;
    }

    // 本塁打の場合、全走者を生還させる
    if (changeItem == ResultCheckBox.HomeRun) {
      selectedBaseRuns.value = [];
      runnerProperty.forEach(x => {
        if (runnerData.value[x].Order != null) {
          selectedBaseRuns.value.push(runnerData.value[x].Order);
          runnerState.value = new RunnerStateModel();
        }
      });
    }

    let returnValue = new ResultCheckBoxModel();
    returnValue[resultCheckBoxPropertyList[changeItem]] = targetValue;
    resultCheckBox.value = returnValue;
  } else {
    resultPositionFlg.value = true;
    resultPositionCheckBox.value = [];
    resultCheckBox.value = new ResultCheckBoxModel();
  }
}

/**
 * 打席結果守備位置チェックボックス変更イベント
 * @param changeItem
 * @param targetValue
 */
function changeResultPositionCheck() {
  if (resultPositionCheckBox.value.length > 1) {
    const newValue = resultPositionCheckBox.value[1];
    resultPositionCheckBox.value = [];
    resultPositionCheckBox.value.push(newValue);
  }
}

/**
 * 出塁
 */
async function onBase(homeRun: boolean) {
  let cloneMember = new ParticipationMemberPerTeamModel();
  let defMember: DefaultMemberModel[] = [];
  let battingResultList = new BattingResultPerTeamModel();

  // 打席結果保存
  SaveBattingResult();

  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
    cloneMember = _.cloneDeep(visitorParticipationMember.value);
    defMember = defaultVisitorMemberList.value;
    battingResultList = visitorBattingResult.value;
  } else {
    cloneMember = _.cloneDeep(homeParticipationMember.value);
    defMember = defaultHomeMemberList;
    battingResultList = homeBattingResult.value;
  }

  // 打者成績更新
  const updateData = createBatterStatsUpdateData();
  defMember = updateBatterStats(cloneMember, defMember, updateData);
  updateExcelBatterStats(cloneMember, updateData);

  [cloneMember, runnerData.value.Batter, battingResultData.value] = gameController.NextBatter(cloneMember, battingResultList);
  if (!homeRun) {
    cloneMember = gameController.OnBase(cloneMember);
  }
  cloneMember = baseRuns(cloneMember);
  cloneMember = baseRunningOut(cloneMember);
  batterStats.value = memberController.GetBatterStats(cloneMember, defMember);
  emits('sendRunnerData', runnerData.value);

  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
    visitorParticipationMember.value = cloneMember;
    defaultVisitorMemberList.value = defMember;
    emits('sendVisitorMemberData', visitorParticipationMember.value);
  } else {
    homeParticipationMember.value = cloneMember;
    defaultHomeMemberList = defMember;
    emits('sendHomeMemberData', homeParticipationMember.value);
  }
  emits('sendBatterStatsData', batterStats.value);
  emits('sendBattingResultData', battingResultData.value);
}

/**
 * 三振
 */
async function strikeOut() {
  pitcherInfo.value.SO++;
  batterOut();
}

/**
 * 四球
 */
async function fourPitchWalk() {
  resetCount();
  pitcherInfo.value.BB++;
  pitchPlus(true);
  await onBase(false);
}

/**
 * 敬遠
 */
async function intentionalWalk() {
  resetCount();
  pitcherInfo.value.BB++;
  await onBase(false);
}

/**
 * その他の出塁
 */
async function anotherOnBase() {
  resetCount();
  pitchPlus(true);
  await onBase(false);
}

/**
 * 振り逃げ
 */
async function uncaughtThirdStrike() {
  resetCount();
  pitcherInfo.value.SO++;
  pitchPlus(true);
  await onBase(false);
  clickConfirm();
}

/**
 * 安打
 */
function hit() {
  resetCount();
  pitchPlus(true);
  litHit();
  if (resultCheckBox.value.HomeRun) {
    onBase(true);
  } else {
    onBase(false);
  }
}

/**
 * 失策
 */
function error() {
  resetCount();
  pitchPlus(true);
  litError();
  onBase(false);
}

/**
 * 野選
 */
function fieldersChoice() {
  resetCount();
  pitchPlus(true);
  litFieldersChoice();
  onBase(false);
}

/**
 * 打者アウト（凡打、犠打、犠飛）
 */
async function batterOut() {
  resetCount();
  emits('sendCountData', countData.value);
  pitchPlus(true);
  let cloneMember = new ParticipationMemberPerTeamModel();
  let defMember: DefaultMemberModel[] = [];
  let battingResultList = new BattingResultPerTeamModel();

  // 打席結果保存
  SaveBattingResult();

  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
    cloneMember = _.cloneDeep(visitorParticipationMember.value);
    defMember = defaultVisitorMemberList.value;
    battingResultList = visitorBattingResult.value;
  } else {
    cloneMember = _.cloneDeep(homeParticipationMember.value);
    defMember = defaultHomeMemberList;
    battingResultList = homeBattingResult.value;
  }

  // 打者成績更新
  const updateData = createBatterStatsUpdateData();
  defMember = updateBatterStats(cloneMember, defMember, updateData);
  updateExcelBatterStats(cloneMember, updateData);

  [cloneMember, runnerData.value.Batter, battingResultData.value] = gameController.NextBatter(cloneMember, battingResultList);
  if (resultOptionCheckBox.value.BatterOnBase) {
    cloneMember = gameController.OnBase(cloneMember);
  } else {
    countData.value.Out++;
    emits('sendCountData', countData.value);
  }
  cloneMember = baseRuns(cloneMember);
  cloneMember = baseRunningOut(cloneMember);
  batterStats.value = memberController.GetBatterStats(cloneMember, defMember);
  runnerData.value = gameController.SortRunner(cloneMember, runnerState.value, runnerData.value.Batter);
  emits('sendRunnerData', runnerData.value);

  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
    visitorParticipationMember.value = cloneMember;
    defaultVisitorMemberList.value = defMember;
    emits('sendVisitorMemberData', visitorParticipationMember.value);
  } else {
    homeParticipationMember.value = cloneMember;
    defaultHomeMemberList = defMember;
    emits('sendHomeMemberData', homeParticipationMember.value);
  }
  emits('sendBatterStatsData', batterStats.value);
  emits('sendBattingResultData', battingResultData.value);
}

/**
 * 盗塁
 */
function stolenBase() {
  let updateData = new BatterStatsUpdateModel();
  updateData.SB = 1;
  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
    defaultVisitorMemberList.value = updateRunnerStats(visitorParticipationMember.value, defaultVisitorMemberList.value, selectedStolenBase.value, updateData);
    updateExcelRunnerStats(visitorParticipationMember.value, selectedStolenBase.value, updateData);
  } else {
    defaultHomeMemberList = updateRunnerStats(homeParticipationMember.value, defaultHomeMemberList, selectedStolenBase.value, updateData);
    updateExcelRunnerStats(homeParticipationMember.value, selectedStolenBase.value, updateData);
  }

  selectedStolenBase.value = [];
}

/**
 * 盗塁死
 */
function caughtStealing() {
  let updateData = new BatterStatsUpdateModel();
  updateData.CS = 1;
  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
    defaultVisitorMemberList.value = updateRunnerStats(visitorParticipationMember.value, defaultVisitorMemberList.value, selectedCaughtStealing.value, updateData);
    updateExcelRunnerStats(visitorParticipationMember.value, selectedCaughtStealing.value, updateData);
    visitorParticipationMember.value = gameController.ResolvedRunner(visitorParticipationMember.value, selectedCaughtStealing.value);
    runnerData.value = gameController.SortRunner(visitorParticipationMember.value, runnerState.value, runnerData.value.Batter);
  } else {
    defaultHomeMemberList = updateRunnerStats(homeParticipationMember.value, defaultHomeMemberList, selectedCaughtStealing.value, updateData);
    updateExcelRunnerStats(homeParticipationMember.value, selectedCaughtStealing.value, updateData);
    homeParticipationMember.value = gameController.ResolvedRunner(homeParticipationMember.value, selectedCaughtStealing.value);
    runnerData.value = gameController.SortRunner(homeParticipationMember.value, runnerState.value, runnerData.value.Batter);
  }

  countData.value.Out += selectedCaughtStealing.value.length;
  emits('sendCountData', countData.value);
  selectedCaughtStealing.value = [];
}

/**
 * 走塁死
 * @param member
 */
function baseRunningOut(member: ParticipationMemberPerTeamModel): ParticipationMemberPerTeamModel {
  member = gameController.ResolvedRunner(member, selectedBaseRunningOut.value);
  runnerData.value = gameController.SortRunner(member, runnerState.value, runnerData.value.Batter);
  emits('sendRunnerData', runnerData.value);

  countData.value.Out += selectedBaseRunningOut.value.length;
  emits('sendCountData', countData.value);
  selectedBaseRunningOut.value = [];

  return member;
}

/**
 * 生還
 * @param member
 * @param scoreData
 * @param dispScoreData
 */
function baseRuns(member: ParticipationMemberPerTeamModel): ParticipationMemberPerTeamModel {
  if (selectedBaseRuns.value.length == 0) {
    return member;
  }

  member = gameController.ResolvedRunner(member, selectedBaseRuns.value);
  runnerData.value = gameController.SortRunner(member, runnerState.value, runnerData.value.Batter);
  emits('sendRunnerData', runnerData.value);

  [runningScore, dispRunningScore.value.Score] = gameController.CalcRuns(selectedBaseRuns.value.length, gameInfo.value, runningScore, dispRunningScore.value.Score);
  emits('sendScoreData', dispRunningScore.value);
  selectedBaseRuns.value = [];

  return member;
}

/**
 * ヒット点灯
 */
async function litHit() {
  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
    runningScore.VisitorH++;
    dispRunningScore.value.Score.VisitorH = runningScore.VisitorH.toString();
  } else {
    runningScore.HomeH++;
    dispRunningScore.value.Score.HomeH = runningScore.HomeH.toString();
  }

  judgeData.value.Hit = true;
  emits('sendJudgeData', judgeData.value);
  emits('sendScoreData', dispRunningScore.value);

  setTimeout(() => {
    judgeData.value.Hit = false;
    emits('sendJudgeData', judgeData.value);
  }, 7000);
}

/**
 * エラー点灯
 */
async function litError() {
  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
    runningScore.HomeE++;
    dispRunningScore.value.Score.HomeE = runningScore.HomeE.toString();
  } else {
    runningScore.VisitorE++;
    dispRunningScore.value.Score.VisitorE = runningScore.VisitorE.toString();
  }

  judgeData.value.Error = true;
  emits('sendJudgeData', judgeData.value);
  emits('sendScoreData', dispRunningScore.value);

  setTimeout(() => {
    judgeData.value.Error = false;
    emits('sendJudgeData', judgeData.value);
  }, 7000);
}

/**
 * 野選点灯
 */
async function litFieldersChoice() {
  judgeData.value.FieldersChoice = true;
  emits('sendJudgeData', judgeData.value);
  emits('sendScoreData', dispRunningScore.value);

  setTimeout(() => {
    judgeData.value.FieldersChoice = false;
    emits('sendJudgeData', judgeData.value);
  }, 7000);
}

/**
 * 攻守交代
 */
async function changeAttackTeam() {
  if (!gameInfo.value.GameProgressInfo.IsStarted || countData.value.Out < 3) {
    return;
  }

  countData.value = new CountModel();
  emits('sendCountData', countData.value);

  let cloneVisitorMember = _.cloneDeep(visitorParticipationMember.value);
  let cloneHomeMember = _.cloneDeep(homeParticipationMember.value);
  let battingResultList = new BattingResultPerTeamModel();

  let restRunner: number[] = [];
  // 残塁算出
  runnerProperty.forEach(x => {
    if (runnerData.value.Batter.Order != runnerData.value[x].Order && runnerData.value[x].Order != null) {
      restRunner.push(runnerData.value[x].Order);
    }
  });

  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
    battingResultList = homeBattingResult.value; 
    if (restRunner.length > 0) {
      cloneVisitorMember = gameController.ResolvedRunner(cloneVisitorMember, restRunner);
      runningScore.VisitorLOB += restRunner.length;
      dispRunningScore.value.Score.VisitorLOB = runningScore.VisitorLOB.toString();
      emits('sendScoreData', dispRunningScore.value);
    }
  } else {
    battingResultList = visitorBattingResult.value;
    if (restRunner.length > 0) {
      cloneHomeMember = gameController.ResolvedRunner(cloneHomeMember, restRunner);
      runningScore.HomeLOB += restRunner.length;
      dispRunningScore.value.Score.HomeLOB = runningScore.HomeLOB.toString();
      emits('sendScoreData', dispRunningScore.value);
    }
  }

  runnerData.value = new RunnerNameModel();
  runnerState.value = new RunnerStateModel();
  [cloneVisitorMember, cloneHomeMember, runnerData.value.Batter, battingResultData.value] = memberController.ChangeAttackEditMember(cloneVisitorMember, cloneHomeMember, gameInfo.value, battingResultList);

  const cloneGameInfo = _.cloneDeep(gameInfo.value);
  // メンバー編集、野手成績、投手情報、守備位置取得
  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
    // 無得点
    if (runningScore.VisitorScore.length < gameInfo.value.GameProgressInfo.NowInning) {
      [runningScore, dispRunningScore.value.Score] = gameController.CalcRuns(0, cloneGameInfo, runningScore, dispRunningScore.value.Score);
      emits('sendScoreData', dispRunningScore.value);
    }
    cloneGameInfo.GameProgressInfo.NowAttackTeam = VisitorHomeDivision.Home;

    positionData.value = memberController.SetPositionData(visitorParticipationMember.value);
  } else {
    // 無得点
    if (runningScore.HomeScore.length < gameInfo.value.GameProgressInfo.NowInning) {
      [runningScore, dispRunningScore.value.Score] = gameController.CalcRuns(0, cloneGameInfo, runningScore, dispRunningScore.value.Score);
      emits('sendScoreData', dispRunningScore.value);
    }
    cloneGameInfo.GameProgressInfo.NowAttackTeam = VisitorHomeDivision.Visitor;
    cloneGameInfo.GameProgressInfo.NowInning++;

    positionData.value = memberController.SetPositionData(homeParticipationMember.value);
  }

  visitorParticipationMember.value = cloneVisitorMember;
  homeParticipationMember.value = cloneHomeMember;
  gameInfo.value = cloneGameInfo;
  emits('sendVisitorMemberData', visitorParticipationMember.value);
  emits('sendHomeMemberData', homeParticipationMember.value);
  emits('sendPositionData', positionData.value);
  getBatterStats();
  getPitcherInfo();
  emits('sendGameInfoData', gameInfo.value);
  emits('sendRunnerData', runnerData.value);
  emits('sendBattingResultData', battingResultData.value);
}

/**
 * 打席結果保存
 */
function SaveBattingResult() {
  let result = '';
  let position = resultPositionCheckBox.value;

  switch (true) {
    case resultCheckBox.value.GroundBall:
      result = 'ゴロ';
      break;
    case resultCheckBox.value.FlyBall:
      result = 'フライ';
      break;
    case resultCheckBox.value.LineDrive:
      result = '直';
      break;
    case resultCheckBox.value.DoublePlay:
      result = '併殺';
      break;
    case resultCheckBox.value.StrikeOut:
      result = '三振';
      break;
    case resultCheckBox.value.FourPitchWalk:
      result = '四球';
      break;
    case resultCheckBox.value.HitByPitch:
      result = '死球';
      break;
    case resultCheckBox.value.IntentionalWalk:
      result = '敬遠';
      break;
    case resultCheckBox.value.FoulFly:
      result = '邪飛';
      break;
    case resultCheckBox.value.SacrificeFly:
      result = '犠飛';
      break;
    case resultCheckBox.value.SacrificeBunt:
      result = '犠打';
      break;
    case resultCheckBox.value.SacrificeBuntError:
      result = '犠失';
      break;
    case resultCheckBox.value.SacrificeBuntFC:
      result = '犠選';
      break;
    case resultCheckBox.value.SingleHit:
      result = '安';
      break;
    case resultCheckBox.value.TwoBaseHit:
      result = '２塁打';
      break;
    case resultCheckBox.value.ThreeBaseHit:
      result = '３塁打';
      break;
    case resultCheckBox.value.HomeRun:
      result = '本';
      break;
    case resultCheckBox.value.Error:
      result = '失';
      break;
    case resultCheckBox.value.FieldersChoice:
      result = '野選';
      break;
    case resultCheckBox.value.UncaughtThirdStrike:
      result = '振逃';
      break;
    case resultCheckBox.value.Interference:
      result = '打撃妨害';
      break;
    case resultCheckBox.value.Obstruction:
      result = '走塁妨害';
      break;
    default:
      break;
  }

  // 打点つきで二塁打か三塁打
  if (selectedRBI.value != '0' && (resultCheckBox.value.TwoBaseHit || resultCheckBox.value.ThreeBaseHit)) {
    result = result.substring(0);
  }

  let resultStr = result;
  const newResPos = new ResultPositionCheckBoxModel();
  // 守備位置
  if (position.length > 0) {
    resultStr = position[0] + resultStr;
  }

  // 打点
  if (selectedRBI.value == '1') {
    resultStr = resultStr + '①';
  } else if (selectedRBI.value == '2') {
    resultStr = resultStr + '②';
  } else if (selectedRBI.value == '3') {
    resultStr = resultStr + '③';
  } else if (selectedRBI.value == '4') {
    resultStr = resultStr + '④';
  }

  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
    visitorBattingResult.value = memberController.SaveBattingResult(visitorBattingResult.value, runnerData.value.Batter, gameInfo.value, resultStr);
  } else {
    homeBattingResult.value = memberController.SaveBattingResult(homeBattingResult.value, runnerData.value.Batter, gameInfo.value, resultStr)
  }
}

/**
 * 打者成績更新データ作成
 */
function createBatterStatsUpdateData(): BatterStatsUpdateModel {
  let updateData = new BatterStatsUpdateModel();

  switch (true) {
    case resultCheckBox.value.GroundBall:
      updateData.AtBat = 1;
      updateData.RBI = Number(selectedRBI.value);
      break;
    case resultCheckBox.value.FlyBall:
      updateData.AtBat = 1;
      updateData.RBI = Number(selectedRBI.value);
      break;
    case resultCheckBox.value.LineDrive:
      updateData.AtBat = 1;
      updateData.RBI = Number(selectedRBI.value);
      break;
    case resultCheckBox.value.DoublePlay:
      updateData.AtBat = 1;
      updateData.DP = 1;
      break;
    case resultCheckBox.value.StrikeOut:
      updateData.AtBat = 1;
      updateData.SO = 1;
      break;
    case resultCheckBox.value.FourPitchWalk:
      updateData.RBI = Number(selectedRBI.value);
      updateData.BB = 1;
      break;
    case resultCheckBox.value.HitByPitch:
      updateData.RBI = Number(selectedRBI.value);
      updateData.HBP = 1;
      break;
    case resultCheckBox.value.IntentionalWalk:
      updateData.RBI = Number(selectedRBI.value);
      updateData.BB = 1;
      break;
    case resultCheckBox.value.FoulFly:
      updateData.AtBat = 1;
      break;
    case resultCheckBox.value.SacrificeFly:
      updateData.RBI = Number(selectedRBI.value);
      updateData.SacFly = 1;
      break;
    case resultCheckBox.value.SacrificeBunt:
      updateData.RBI = Number(selectedRBI.value);
      updateData.SacBunt = 1;
      break;
    case resultCheckBox.value.SacrificeBuntError:
      updateData.SacBunt = 1;
      break;
    case resultCheckBox.value.SacrificeBuntFC:
      updateData.SacBunt = 1;
      break;
    case resultCheckBox.value.SingleHit:
      updateData.AtBat = 1;
      updateData.Hit = 1;
      updateData.RBI = Number(selectedRBI.value);
      break;
    case resultCheckBox.value.TwoBaseHit:
      updateData.AtBat = 1;
      updateData.Hit = 1;
      updateData.Double = 1;
      updateData.RBI = Number(selectedRBI.value);
      break;
    case resultCheckBox.value.ThreeBaseHit:
      updateData.AtBat = 1;
      updateData.Hit = 1;
      updateData.Triple = 1;
      updateData.RBI = Number(selectedRBI.value);
      break;
    case resultCheckBox.value.HomeRun:
      updateData.AtBat = 1;
      updateData.Hit = 1;
      updateData.HomeRun = 1;
      updateData.RBI = Number(selectedRBI.value);
      break;
    case resultCheckBox.value.Error:
      updateData.AtBat = 1;
      updateData.RBI = Number(selectedRBI.value);
      break;
    case resultCheckBox.value.FieldersChoice:
      updateData.AtBat = 1;
      updateData.RBI = Number(selectedRBI.value);
      break;
    case resultCheckBox.value.UncaughtThirdStrike:
      updateData.AtBat = 1;
      updateData.SO = 1;
      break;
    case resultCheckBox.value.Interference:
      updateData.RBI = Number(selectedRBI.value);
      break;
    case resultCheckBox.value.Obstruction:
      updateData.RBI = Number(selectedRBI.value);
      break;
    default:
      break;
  }

  return updateData;
}

/**
 * 打者成績更新
 * @param member
 */
function updateBatterStats(member: ParticipationMemberPerTeamModel, defMember: DefaultMemberModel[], updData: BatterStatsUpdateModel): DefaultMemberModel[] {
  if (gameInfo.value.GameBaseInfo.StatsAddition == 'しない') {
    return defMember;
  }

  defMember = memberController.UpdateBatterStats(member, defMember, updData);

  return defMember;
}

/**
 * 打者成績更新（Excel）
 * @param member
 */
async function updateExcelBatterStats(member: ParticipationMemberPerTeamModel, updData: BatterStatsUpdateModel) {
  if (gameInfo.value.GameBaseInfo.StatsAddition == 'しない') {
    return;
  }

  let row = 0;
  for (let i = 0; i < 9; i++) {
    if (member[memberController.orderKeys[i]].DispStatus.Batter) {
        row = member[memberController.orderKeys[i]].RowNumber;
        break;
    }
  }

  const result = await memberController.UpdateExcelBatterStats(row, gameInfo.value, updData);

  if (!result) {
    alert('');
  }
}

/**
 * 走者成績更新
 * @param member
 */
function updateRunnerStats(member: ParticipationMemberPerTeamModel, defMember: DefaultMemberModel[], runnerList: number[], updData: BatterStatsUpdateModel): DefaultMemberModel[] {
  if (gameInfo.value.GameBaseInfo.StatsAddition == 'しない') {
    return defMember;
  }

  runnerList.forEach(x => {
    const id = member[memberController.orderKeys[x]].ID;
    defMember = memberController.UpdateRunnerStats(id, defMember, updData);
  })

  return defMember;
}

/**
 * 走者成績更新（Excel）
 * @param member
 */
async function updateExcelRunnerStats(member: ParticipationMemberPerTeamModel, runnerList: number[], updData: BatterStatsUpdateModel) {
  if (gameInfo.value.GameBaseInfo.StatsAddition == 'しない') {
    return;
  }

  const resultList: boolean[] = [];
  for (const x of runnerList) {
    const row = member[memberController.orderKeys[x - 1]].RowNumber;
    resultList.push(await memberController.UpdateExcelBatterStats(row, gameInfo.value, updData));
  }

  let result = true;
  resultList.forEach(x => {
    if (!x) {
      result = false;
    }
  })
  if (!result) {
    alert('');
  }
}

/**
 * 試合経過ログ保存
 */
function saveGameProgressLog() {
  let pushData = new GameProgressLogModel();
  pushData.GameInfo = _.cloneDeep(gameInfo.value);
  pushData.VisitorMemberList = _.cloneDeep(defaultVisitorMemberList.value);
  pushData.VisitorParticipationMember = _.cloneDeep(visitorParticipationMember.value);
  pushData.VisterBattingResult = _.cloneDeep(visitorBattingResult.value);
  pushData.VisitorPitcherInfo = _.cloneDeep(visitorPitcherInfo);
  pushData.HomeMemberList = _.cloneDeep(defaultHomeMemberList);
  pushData.HomeParticipationMember = _.cloneDeep(homeParticipationMember.value);
  pushData.HomeBattingResult = _.cloneDeep(homeBattingResult.value);
  pushData.HomePitcherInfo = _.cloneDeep(homePitcherInfo);
  pushData.RunningScore = _.cloneDeep(runningScore);
  pushData.DispScore = _.cloneDeep(dispRunningScore.value);
  pushData.Count = _.cloneDeep(countData.value);
  pushData.BatterStats = _.cloneDeep(batterStats.value);
  pushData.Position = _.cloneDeep(positionData.value);
  pushData.PitcherInfo = _.cloneDeep(pitcherInfo.value);
  pushData.Runner = _.cloneDeep(runnerData.value);
  pushData.RunnerState = _.cloneDeep(runnerState.value);
  pushData.BattingResult = _.cloneDeep(battingResultData.value);

  gameProgressLogList.push(pushData);
}

/**
 * 一つ前に戻るボタンクリック
 */
function clickUndo() {
  const beforeData = gameProgressLogList[gameProgressLogList.length - 1];

  gameInfo.value = beforeData.GameInfo;
  defaultVisitorMemberList.value = beforeData.VisitorMemberList;
  visitorParticipationMember.value = beforeData.VisitorParticipationMember;
  visitorBattingResult.value = beforeData.VisterBattingResult;
  visitorPitcherInfo = beforeData.VisitorPitcherInfo;
  defaultHomeMemberList = beforeData.HomeMemberList;
  homeParticipationMember.value = beforeData.HomeParticipationMember;
  homeBattingResult.value = beforeData.HomeBattingResult;
  homePitcherInfo = beforeData.HomePitcherInfo;
  runningScore = beforeData.RunningScore;
  dispRunningScore.value = beforeData.DispScore;
  countData.value = beforeData.Count;
  batterStats.value = beforeData.BatterStats;
  positionData.value = beforeData.Position;
  pitcherInfo.value = beforeData.PitcherInfo;
  runnerData.value = beforeData.Runner;
  runnerState.value = beforeData.RunnerState;
  battingResultData.value = beforeData.BattingResult;

  gameProgressLogList.pop();

  emits('sendGameInfoData', gameInfo.value);
  emits('sendVisitorMemberData', visitorParticipationMember.value);
  emits('sendHomeMemberData', homeParticipationMember.value);
  emits('sendScoreData', dispRunningScore.value);
  emits('sendCountData', countData.value);
  emits('sendBatterStatsData', batterStats.value);
  emits('sendPositionData', positionData.value);
  emits('sendPitcherData', pitcherInfo.value);
  emits('sendRunnerData', runnerData.value);
  emits('sendBattingResultData', battingResultData.value);
}

/**
 * 試合終了可否チェック
 */
function checkGameSetAvailability(): boolean {
  let res = false;
  const nowInning = gameInfo.value.GameProgressInfo.NowInning;
  const nowAttack = gameInfo.value.GameProgressInfo.NowAttackTeam;
  const out = countData.value.Out;
  let visitorR = 0;
  let homeR = 0;
  runningScore.VisitorScore.forEach(x => {
    visitorR = visitorR + x;
  })
  runningScore.HomeScore.forEach(x => {
    homeR = homeR + x;
  })

  if ((nowInning == 9 && nowAttack == VisitorHomeDivision.Visitor && visitorR < homeR && out == 3) ||
      (nowInning >= 9 && nowAttack == VisitorHomeDivision.Home && visitorR > homeR && out == 3) ||
      (nowInning >= 9 && nowAttack == VisitorHomeDivision.Home && visitorR < homeR)) {
    res = true;
  }

  return res;
}

/**
 * 試合終了ダイアログOKクリック
 */
function clickOkGameSet() {
  // クローズ
  gameSetDialogDispFlg.value = false;

  [runningScore, dispRunningScore.value] = gameController.GameSet(runningScore, dispRunningScore.value, gameInfo.value, countData.value);
  gameInfo.value.GameProgressInfo.IsStarted = false;
  clearInterval(bigInfoTimer);
  bigInfoDispFlg.value = false;
  battingResultData.value = [];
  batterStats.value = new DispBatterStatsModel();
  positionData.value = new PositionModel();
  [visitorParticipationMember.value, homeParticipationMember.value] = memberController.InitMemberDataGameSet(visitorParticipationMember.value, homeParticipationMember.value);
  
  emits('sendScoreData', dispRunningScore.value);
  emits('sendGameInfoData', gameInfo.value);
  emits('sendBattingResultData', battingResultData.value);
  emits('sendBatterStatsData', batterStats.value);
  emits('sendPositionData', positionData.value);
  emits('sendBigInfoDispFlg', bigInfoDispFlg.value);
  emits('sendVisitorMemberData', visitorParticipationMember.value);
  emits('sendHomeMemberData', homeParticipationMember.value);
}

/**
 * 試合終了ダイアログクローズ
 */
function closeGameSetDialog() {
  gameSetDialogDispFlg.value = false;
  // 攻守交代
  changeAttackTeam();
}

/**
 * 修正ボタンクリック
 */
function clickModify() {
  if (selectedModifyDivision.value == '') {
    return;
  }

  modifyDialogDispFlg.value = true;
}

/**
 * カスタムテキスト変更
 */
function changeCustomText() {
  emits('sendCustomText', customText.value);
}

/**
 * 野手成績取得
 */
function getBatterStats() {
  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
    batterStats.value = memberController.GetBatterStats(visitorParticipationMember.value, defaultVisitorMemberList.value);
  } else {
    batterStats.value = memberController.GetBatterStats(homeParticipationMember.value, defaultHomeMemberList);
  }
  emits('sendBatterStatsData', batterStats.value);
}

/**
 * 打席結果取得
 */
function getBattingResult() {
  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
    const id = visitorParticipationMember.value[memberController.orderKeysDH[runnerData.value.Batter.Order]].ID;
    battingResultData.value = memberController.GetBattingResult(visitorBattingResult.value, runnerData.value.Batter.Order, id);
  } else {
    const id = homeParticipationMember.value[memberController.orderKeysDH[runnerData.value.Batter.Order]].ID;
    battingResultData.value = memberController.GetBattingResult(homeBattingResult.value, runnerData.value.Batter.Order, id);
  }
  emits('sendBattingResultData', battingResultData.value);
}

/**
 * 投手情報取得
 */
function getPitcherInfo() {
  if (gameInfo.value.GameProgressInfo.NowAttackTeam == VisitorHomeDivision.Visitor) {
    pitcherInfo.value = memberController.GetPitcherInfo(homeParticipationMember.value, homePitcherInfo);
  } else {
    pitcherInfo.value = memberController.GetPitcherInfo(visitorParticipationMember.value, visitorPitcherInfo);
  }
  emits('sendPitcherData', pitcherInfo.value);
}

</script>

<style scoped>

.Input-Row {
  display: flex;
}

.Input-Box {
  width: 30px;
  height: 15px;
  text-align: center;
}

.Enter-Button {
  width: 47px;
  height: 21px;
  text-align: center;
}

.Bulk-Enter-Button {
  margin-left: 15px;
  Width: 121px;
  height: 25px;
  text-align: center;
}

.CheckBox {
  height: 20px;
  color: black;
}

.OnBase-Status-Button {
  width: 120px;
  margin-top: 5px
}

.MultiSelect {
  width: 120px;
  height: 87px;
  overflow: auto;
  background-color: white;
  border: 1px solid black;
  font-size: 15px;
  line-height: 20px;
  white-space: nowrap;
}

.Control-Section {
  display: flex;
  flex-flow: column;
  color: #000000;
  margin-top: 10px;
}

.Control-Central {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 890px;
  left: 50%;
  transform: translate(-50%);
}

.Member-Input-Left {
  position: absolute;
  left: 0px;
}

.Member-Input-Right {
  position: absolute;
  right: 0px;
}

.Play-Result-Row {
  display: flex;
  font-size: 15px;
}

.Res-First-Category {
  width: 300px;
  height: 75px;
}

.Res-Second-Category {
  width: 300px;
  height: 30px;
}

.Res-Third-Category {
  width: 300px;
  height: 75px;
}

.Res-Fours-Category {
  width: 300px;
  height: 55px;
}

.Res-Fifth-Category {
  width: 300px;
  height: 30px;
}

.Game-Start-End-Button {
  width: 100px;
  height: 40px;
}

.Base-Area {
  margin-top: 20px;
  height: 70px;
  position: relative;
}

.Base-Button {
  width: 25px;
  height: 25px;
  transform: rotate(135deg) skew(10deg, 10deg);
  position: absolute;
  border: 2px solid;
}

.RBI-DropDown {
  width: 60px;
}

.Base-First {
  top: 17px;
  left: 64px;
}

.Base-Second {
  left: 40px;
}

.Base-Third {
  top: 17px;
  left: 15px;
}

.Button-Row {
  display: flex;
}

.Count-Button {
  width: 50px;
  height: 33px;
}

.Minus-Button {
  width: 80px;
  height: 33px;
}

.Button-Color-Ball {
  background-color: #00fff2;
}

.Button-Color-Strike {
  background-color: #ffff00;
}

.Button-Color-Out {
  background-color: #ff0000;
  color: #ffffff;
}

.Confirm-Button {
  width: 180px;
  height: 45px;
  font-size: 20px;
}

.Fix-Button {
  width: 90px;
  height: 25px;
  font-size: 12px;
}

.Setting-DropDown {
  width: 130px;
  margin-bottom: 5px;
}

.Custom-TextArea {
  width: 125px;
  height: 125px;
}

.Stolen-Base-Button {
  width: 121px;
  height: 25px;
  text-align: center;
}

.Stolen-Base-Select{
  position: absolute;
  bottom: 29px;
}

.Caught-Stealing-Select {
  position: absolute;
  left: 429px;
  bottom: 29px;
}

.Dialog {
  position: absolute;
  background-color: white;
  color: black;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
}

.Modify-DropDown {
  width: 130px;
}

.Modify-Button {
  width: 50px;
  height: 25px;
  font-size: 12px;
}

.OnBase-Status-Box {
  position: absolute;
  bottom: 29px;
  width: 120px;
  height: 195px;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: white;
  border: 1px solid black;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
}

</style>