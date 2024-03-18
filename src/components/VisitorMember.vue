<template>
  <div
    class="Member"
    :class="[gameInfo.GameBaseInfo.HomePosition == '一塁側' ? 'Position-Left' : 'Position-Right']"
  >
    <div class="Team">
      <img :src="require(`./image/${gameInfo.GameBaseInfo.VisitorTeamName}.png`)" v-if="gameInfo.GameBaseInfo.VisitorTeamText == ''">
      <div
        id="visitorTeamName"
        v-if="gameInfo.GameBaseInfo.VisitorTeamText != ''"
        :class="[teamNameHalfWidthFlg ? 'Team-Text-Half-Width' : 'Team-Text-Full-Width',
                 teamNameTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center']"
        :style="[{transform: `scaleX(${teamNameTrans})`, transformOrigin: 'left'}]"
      >{{ gameInfo.GameBaseInfo.VisitorTeamText }}</div>
    </div>
    <div
      class="Box-Full"
      v-if="data.LeadOff.Name"
      :class="[{'Member-Before-Slide' : data.LeadOff.DispStatus.ChangeBeforeMember,
                'Member-After-Slide' : data.LeadOff.DispStatus.ChangeAfterMember},
                data.LeadOff.DispStatus.Display ? 'Display-LeadOff' : 'Display']"
    >
      <div
        class="Box-Pos"
        :class="[{'Basic-Position-BGC' : data.LeadOff.DispStatus.Basic,
                  'Batter-Position-BGC' : data.LeadOff.DispStatus.Batter,
                  'Runner-Position-BGC' : data.LeadOff.DispStatus.Runner,
                  'Next-Position-BGC' : data.LeadOff.DispStatus.NextRead}]"
      ></div>
      <div 
        id="visitorLeadOffPos"
        class="Pos-Text"
        :class="[{'Basic-Position-Text' : data.LeadOff.DispStatus.Basic,
                  'Batter-Position-Text' : data.LeadOff.DispStatus.Batter,
                  'Runner-Position-Text' : data.LeadOff.DispStatus.Runner,
                  'Next-Position-Text' : data.LeadOff.DispStatus.NextRead,
                  'LeadOff-Position-Only-Before-Basic' : data.LeadOff.DispStatus.Basic && data.LeadOff.DispStatus.ChangeBeforePisition,
                  'LeadOff-Position-Only-After-Basic' : data.LeadOff.DispStatus.Basic && data.LeadOff.DispStatus.ChangeAfterPisition,
                  'LeadOff-Position-Only-Before-Next' : data.LeadOff.DispStatus.NextRead && data.LeadOff.DispStatus.ChangeBeforePisition,
                  'LeadOff-Position-Only-After-Next' : data.LeadOff.DispStatus.NextRead && data.LeadOff.DispStatus.ChangeAfterPisition,
                  'Position-Member-Before-Basic' : data.LeadOff.DispStatus.Basic && data.LeadOff.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Basic' : data.LeadOff.DispStatus.Basic && data.LeadOff.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Batter' : data.LeadOff.DispStatus.Batter && data.LeadOff.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Batter' : data.LeadOff.DispStatus.Batter && data.LeadOff.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Runner' : data.LeadOff.DispStatus.Runner && data.LeadOff.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Runner' : data.LeadOff.DispStatus.Runner && data.LeadOff.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Next' : data.LeadOff.DispStatus.NextRead && data.LeadOff.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Next' : data.LeadOff.DispStatus.NextRead && data.LeadOff.DispStatus.ChangeAfterMember}]"
        :style="[{transform: `scaleX(${leadOffPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.LeadOff.Position }}</div>
      <div
        class="Box-Name"
        :class="[{'Basic-Name' : data.LeadOff.DispStatus.Basic,
                  'Batter-Name' : data.LeadOff.DispStatus.Batter,
                  'Runner-Name' : data.LeadOff.DispStatus.Runner,
                  'Next-Name' : data.LeadOff.DispStatus.NextRead,
                  'Member-Before-Basic' : data.LeadOff.DispStatus.Basic && data.LeadOff.DispStatus.ChangeBeforeMember,
                  'Member-After-Basic' : data.LeadOff.DispStatus.Basic && data.LeadOff.DispStatus.ChangeAfterMember,
                  'Member-Before-Batter' : data.LeadOff.DispStatus.Batter && data.LeadOff.DispStatus.ChangeBeforeMember,
                  'Member-After-Batter' : data.LeadOff.DispStatus.Batter && data.LeadOff.DispStatus.ChangeAfterMember,
                  'Member-Before-Runner' : data.LeadOff.DispStatus.Runner && data.LeadOff.DispStatus.ChangeBeforeMember,
                  'Member-After-Runner' : data.LeadOff.DispStatus.Runner && data.LeadOff.DispStatus.ChangeAfterMember,
                  'Member-Before-Next' : data.LeadOff.DispStatus.NextRead && data.LeadOff.DispStatus.ChangeBeforeMember,
                  'Member-After-Next' : data.LeadOff.DispStatus.NextRead && data.LeadOff.DispStatus.ChangeAfterMember}]"
      >
        <div
          id="visitorLeadOffName"
          class="Name-Text"
          :class="[leadOffTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center',
                   data.LeadOff.DispStatus.Basic && design.NameBasicEdge != '' ? 'Basic-Shadow' : 'Text-Shadow',
                   data.LeadOff.DispStatus.Batter && design.NameBatterEdge != '' ? 'Batter-Shadow' : 'Text-Shadow',
                   data.LeadOff.DispStatus.Runner && design.NameRunnerEdge != '' ? 'Runner-Shadow' : 'Text-Shadow',
                   data.LeadOff.DispStatus.NextRead && design.NameNextEdge != '' ? 'Next-Shadow' : 'Text-Shadow',]"
          :style="[{transform: `scaleX(${leadOffNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.LeadOff.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.Second.Name"
      :class="[{'Member-Before-Slide' : data.Second.DispStatus.ChangeBeforeMember,
                'Member-After-Slide' : data.Second.DispStatus.ChangeAfterMember},
                data.Second.DispStatus.Display ? 'Display-Second' : 'Display']"
    >
      <div
        class="Box-Pos"
        :class="[{'Basic-Position-BGC' : data.Second.DispStatus.Basic,
                  'Batter-Position-BGC' : data.Second.DispStatus.Batter,
                  'Runner-Position-BGC' : data.Second.DispStatus.Runner,
                  'Next-Position-BGC' : data.Second.DispStatus.NextRead}]"
      ></div>
      <div 
        id="visitorSecondPos"
        class="Pos-Text"
        :class="[{'Basic-Position-Text' : data.Second.DispStatus.Basic,
                  'Batter-Position-Text' : data.Second.DispStatus.Batter,
                  'Runner-Position-Text' : data.Second.DispStatus.Runner,
                  'Next-Position-Text' : data.Second.DispStatus.NextRead,
                  'Second-Position-Only-Before-Basic' : data.Second.DispStatus.Basic && data.Second.DispStatus.ChangeBeforePisition,
                  'Second-Position-Only-After-Basic' : data.Second.DispStatus.Basic && data.Second.DispStatus.ChangeAfterPisition,
                  'Second-Position-Only-Before-Next' : data.Second.DispStatus.NextRead && data.Second.DispStatus.ChangeBeforePisition,
                  'Second-Position-Only-After-Next' : data.Second.DispStatus.NextRead && data.Second.DispStatus.ChangeAfterPisition,
                  'Position-Member-Before-Basic' : data.Second.DispStatus.Basic && data.Second.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Basic' : data.Second.DispStatus.Basic && data.Second.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Batter' : data.Second.DispStatus.Batter && data.Second.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Batter' : data.Second.DispStatus.Batter && data.Second.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Runner' : data.Second.DispStatus.Runner && data.Second.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Runner' : data.Second.DispStatus.Runner && data.Second.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Next' : data.Second.DispStatus.NextRead && data.Second.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Next' : data.Second.DispStatus.NextRead && data.Second.DispStatus.ChangeAfterMember}]"
        :style="[{transform: `scaleX(${secondPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Second.Position }}</div>
      <div
        class="Box-Name"
        :class="[{'Basic-Name' : data.Second.DispStatus.Basic,
                  'Batter-Name' : data.Second.DispStatus.Batter,
                  'Runner-Name' : data.Second.DispStatus.Runner,
                  'Next-Name' : data.Second.DispStatus.NextRead,
                  'Member-Before-Basic' : data.Second.DispStatus.Basic && data.Second.DispStatus.ChangeBeforeMember,
                  'Member-After-Basic' : data.Second.DispStatus.Basic && data.Second.DispStatus.ChangeAfterMember,
                  'Member-Before-Batter' : data.Second.DispStatus.Batter && data.Second.DispStatus.ChangeBeforeMember,
                  'Member-After-Batter' : data.Second.DispStatus.Batter && data.Second.DispStatus.ChangeAfterMember,
                  'Member-Before-Runner' : data.Second.DispStatus.Runner && data.Second.DispStatus.ChangeBeforeMember,
                  'Member-After-Runner' : data.Second.DispStatus.Runner && data.Second.DispStatus.ChangeAfterMember,
                  'Member-Before-Next' : data.Second.DispStatus.NextRead && data.Second.DispStatus.ChangeBeforeMember,
                  'Member-After-Next' : data.Second.DispStatus.NextRead && data.Second.DispStatus.ChangeAfterMember}]"
      >
        <div
          id="visitorSecondName"
          class="Name-Text"
          :class="[secondTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center',
                   data.Second.DispStatus.Basic && design.NameBasicEdge != '' ? 'Basic-Shadow' : 'Text-Shadow',
                   data.Second.DispStatus.Batter && design.NameBatterEdge != '' ? 'Batter-Shadow' : 'Text-Shadow',
                   data.Second.DispStatus.Runner && design.NameRunnerEdge != '' ? 'Runner-Shadow' : 'Text-Shadow',
                   data.Second.DispStatus.NextRead && design.NameNextEdge != '' ? 'Next-Shadow' : 'Text-Shadow',]"
          :style="[{transform: `scaleX(${secondNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Second.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.Third.Name"
      :class="[{'Member-Before-Slide' : data.Third.DispStatus.ChangeBeforeMember,
                'Member-After-Slide' : data.Third.DispStatus.ChangeAfterMember},
                data.Third.DispStatus.Display ? 'Display-Third' : 'Display']"
    >
      <div
        class="Box-Pos"
        :class="[{'Basic-Position-BGC' : data.Third.DispStatus.Basic,
                  'Batter-Position-BGC' : data.Third.DispStatus.Batter,
                  'Runner-Position-BGC' : data.Third.DispStatus.Runner,
                  'Next-Position-BGC' : data.Third.DispStatus.NextRead}]"
      ></div>
      <div 
        id="visitorThirdPos"
        class="Pos-Text"
        :class="[{'Basic-Position-Text' : data.Third.DispStatus.Basic,
                  'Batter-Position-Text' : data.Third.DispStatus.Batter,
                  'Runner-Position-Text' : data.Third.DispStatus.Runner,
                  'Next-Position-Text' : data.Third.DispStatus.NextRead,
                  'Third-Position-Only-Before-Basic' : data.Third.DispStatus.Basic && data.Third.DispStatus.ChangeBeforePisition,
                  'Third-Position-Only-After-Basic' : data.Third.DispStatus.Basic && data.Third.DispStatus.ChangeAfterPisition,
                  'Third-Position-Only-Before-Next' : data.Third.DispStatus.NextRead && data.Third.DispStatus.ChangeBeforePisition,
                  'Third-Position-Only-After-Next' : data.Third.DispStatus.NextRead && data.Third.DispStatus.ChangeAfterPisition,
                  'Position-Member-Before-Basic' : data.Third.DispStatus.Basic && data.Third.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Basic' : data.Third.DispStatus.Basic && data.Third.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Batter' : data.Third.DispStatus.Batter && data.Third.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Batter' : data.Third.DispStatus.Batter && data.Third.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Runner' : data.Third.DispStatus.Runner && data.Third.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Runner' : data.Third.DispStatus.Runner && data.Third.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Next' : data.Third.DispStatus.NextRead && data.Third.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Next' : data.Third.DispStatus.NextRead && data.Third.DispStatus.ChangeAfterMember}]"
        :style="[{transform: `scaleX(${thirdPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Third.Position }}</div>
      <div
        class="Box-Name"
        :class="[{'Basic-Name' : data.Third.DispStatus.Basic,
                  'Batter-Name' : data.Third.DispStatus.Batter,
                  'Runner-Name' : data.Third.DispStatus.Runner,
                  'Next-Name' : data.Third.DispStatus.NextRead,
                  'Member-Before-Basic' : data.Third.DispStatus.Basic && data.Third.DispStatus.ChangeBeforeMember,
                  'Member-After-Basic' : data.Third.DispStatus.Basic && data.Third.DispStatus.ChangeAfterMember,
                  'Member-Before-Batter' : data.Third.DispStatus.Batter && data.Third.DispStatus.ChangeBeforeMember,
                  'Member-After-Batter' : data.Third.DispStatus.Batter && data.Third.DispStatus.ChangeAfterMember,
                  'Member-Before-Runner' : data.Third.DispStatus.Runner && data.Third.DispStatus.ChangeBeforeMember,
                  'Member-After-Runner' : data.Third.DispStatus.Runner && data.Third.DispStatus.ChangeAfterMember,
                  'Member-Before-Next' : data.Third.DispStatus.NextRead && data.Third.DispStatus.ChangeBeforeMember,
                  'Member-After-Next' : data.Third.DispStatus.NextRead && data.Third.DispStatus.ChangeAfterMember}]"
      >
        <div
          id="visitorThirdName"
          class="Name-Text"
          :class="[thirdTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center',
                   data.Third.DispStatus.Basic && design.NameBasicEdge != '' ? 'Basic-Shadow' : 'Text-Shadow',
                   data.Third.DispStatus.Batter && design.NameBatterEdge != '' ? 'Batter-Shadow' : 'Text-Shadow',
                   data.Third.DispStatus.Runner && design.NameRunnerEdge != '' ? 'Runner-Shadow' : 'Text-Shadow',
                   data.Third.DispStatus.NextRead && design.NameNextEdge != '' ? 'Next-Shadow' : 'Text-Shadow',]"
          :style="[{transform: `scaleX(${thirdNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Third.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.Fourth.Name"
      :class="[{'Member-Before-Slide' : data.Fourth.DispStatus.ChangeBeforeMember,
                'Member-After-Slide' : data.Fourth.DispStatus.ChangeAfterMember},
                data.Fourth.DispStatus.Display ? 'Display-Fourth' : 'Display']"
    >
      <div
        class="Box-Pos"
        :class="[{'Basic-Position-BGC' : data.Fourth.DispStatus.Basic,
                  'Batter-Position-BGC' : data.Fourth.DispStatus.Batter,
                  'Runner-Position-BGC' : data.Fourth.DispStatus.Runner,
                  'Next-Position-BGC' : data.Fourth.DispStatus.NextRead}]"
      ></div>
      <div 
        id="visitorFourthPos"
        class="Pos-Text"
        :class="[{'Basic-Position-Text' : data.Fourth.DispStatus.Basic,
                  'Batter-Position-Text' : data.Fourth.DispStatus.Batter,
                  'Runner-Position-Text' : data.Fourth.DispStatus.Runner,
                  'Next-Position-Text' : data.Fourth.DispStatus.NextRead,
                  'Fourth-Position-Only-Before-Basic' : data.Fourth.DispStatus.Basic && data.Fourth.DispStatus.ChangeBeforePisition,
                  'Fourth-Position-Only-After-Basic' : data.Fourth.DispStatus.Basic && data.Fourth.DispStatus.ChangeAfterPisition,
                  'Fourth-Position-Only-Before-Next' : data.Fourth.DispStatus.NextRead && data.Fourth.DispStatus.ChangeBeforePisition,
                  'Fourth-Position-Only-After-Next' : data.Fourth.DispStatus.NextRead && data.Fourth.DispStatus.ChangeAfterPisition,
                  'Position-Member-Before-Basic' : data.Fourth.DispStatus.Basic && data.Fourth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Basic' : data.Fourth.DispStatus.Basic && data.Fourth.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Batter' : data.Fourth.DispStatus.Batter && data.Fourth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Batter' : data.Fourth.DispStatus.Batter && data.Fourth.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Runner' : data.Fourth.DispStatus.Runner && data.Fourth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Runner' : data.Fourth.DispStatus.Runner && data.Fourth.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Next' : data.Fourth.DispStatus.NextRead && data.Fourth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Next' : data.Fourth.DispStatus.NextRead && data.Fourth.DispStatus.ChangeAfterMember}]"
        :style="[{transform: `scaleX(${fourthPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Fourth.Position }}</div>
      <div
        class="Box-Name"
        :class="[{'Basic-Name' : data.Fourth.DispStatus.Basic,
                  'Batter-Name' : data.Fourth.DispStatus.Batter,
                  'Runner-Name' : data.Fourth.DispStatus.Runner,
                  'Next-Name' : data.Fourth.DispStatus.NextRead,
                  'Member-Before-Basic' : data.Fourth.DispStatus.Basic && data.Fourth.DispStatus.ChangeBeforeMember,
                  'Member-After-Basic' : data.Fourth.DispStatus.Basic && data.Fourth.DispStatus.ChangeAfterMember,
                  'Member-Before-Batter' : data.Fourth.DispStatus.Batter && data.Fourth.DispStatus.ChangeBeforeMember,
                  'Member-After-Batter' : data.Fourth.DispStatus.Batter && data.Fourth.DispStatus.ChangeAfterMember,
                  'Member-Before-Runner' : data.Fourth.DispStatus.Runner && data.Fourth.DispStatus.ChangeBeforeMember,
                  'Member-After-Runner' : data.Fourth.DispStatus.Runner && data.Fourth.DispStatus.ChangeAfterMember,
                  'Member-Before-Next' : data.Fourth.DispStatus.NextRead && data.Fourth.DispStatus.ChangeBeforeMember,
                  'Member-After-Next' : data.Fourth.DispStatus.NextRead && data.Fourth.DispStatus.ChangeAfterMember}]"
      >
        <div
          id="visitorFourthName"
          class="Name-Text"
          :class="[fourthTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center',
                   data.Fourth.DispStatus.Basic && design.NameBasicEdge != '' ? 'Basic-Shadow' : 'Text-Shadow',
                   data.Fourth.DispStatus.Batter && design.NameBatterEdge != '' ? 'Batter-Shadow' : 'Text-Shadow',
                   data.Fourth.DispStatus.Runner && design.NameRunnerEdge != '' ? 'Runner-Shadow' : 'Text-Shadow',
                   data.Fourth.DispStatus.NextRead && design.NameNextEdge != '' ? 'Next-Shadow' : 'Text-Shadow',]"
          :style="[{transform: `scaleX(${fourthNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Fourth.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.Fifth.Name"
      :class="[{'Member-Before-Slide' : data.Fifth.DispStatus.ChangeBeforeMember,
                'Member-After-Slide' : data.Fifth.DispStatus.ChangeAfterMember},
                data.Fifth.DispStatus.Display ? 'Display-Fifth' : 'Display']"
    >
      <div
        class="Box-Pos"
        :class="[{'Basic-Position-BGC' : data.Fifth.DispStatus.Basic,
                  'Batter-Position-BGC' : data.Fifth.DispStatus.Batter,
                  'Runner-Position-BGC' : data.Fifth.DispStatus.Runner,
                  'Next-Position-BGC' : data.Fifth.DispStatus.NextRead}]"
      ></div>
      <div 
        id="visitorFifthPos"
        class="Pos-Text"
        :class="[{'Basic-Position-Text' : data.Fifth.DispStatus.Basic,
                  'Batter-Position-Text' : data.Fifth.DispStatus.Batter,
                  'Runner-Position-Text' : data.Fifth.DispStatus.Runner,
                  'Next-Position-Text' : data.Fifth.DispStatus.NextRead,
                  'Fifth-Position-Only-Before-Basic' : data.Fifth.DispStatus.Basic && data.Fifth.DispStatus.ChangeBeforePisition,
                  'Fifth-Position-Only-After-Basic' : data.Fifth.DispStatus.Basic && data.Fifth.DispStatus.ChangeAfterPisition,
                  'Fifth-Position-Only-Before-Next' : data.Fifth.DispStatus.NextRead && data.Fifth.DispStatus.ChangeBeforePisition,
                  'Fifth-Position-Only-After-Next' : data.Fifth.DispStatus.NextRead && data.Fifth.DispStatus.ChangeAfterPisition,
                  'Position-Member-Before-Basic' : data.Fifth.DispStatus.Basic && data.Fifth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Basic' : data.Fifth.DispStatus.Basic && data.Fifth.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Batter' : data.Fifth.DispStatus.Batter && data.Fifth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Batter' : data.Fifth.DispStatus.Batter && data.Fifth.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Runner' : data.Fifth.DispStatus.Runner && data.Fifth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Runner' : data.Fifth.DispStatus.Runner && data.Fifth.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Next' : data.Fifth.DispStatus.NextRead && data.Fifth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Next' : data.Fifth.DispStatus.NextRead && data.Fifth.DispStatus.ChangeAfterMember}]"
        :style="[{transform: `scaleX(${fifthPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Fifth.Position }}</div>
      <div
        class="Box-Name"
        :class="[{'Basic-Name' : data.Fifth.DispStatus.Basic,
                  'Batter-Name' : data.Fifth.DispStatus.Batter,
                  'Runner-Name' : data.Fifth.DispStatus.Runner,
                  'Next-Name' : data.Fifth.DispStatus.NextRead,
                  'Member-Before-Basic' : data.Fifth.DispStatus.Basic && data.Fifth.DispStatus.ChangeBeforeMember,
                  'Member-After-Basic' : data.Fifth.DispStatus.Basic && data.Fifth.DispStatus.ChangeAfterMember,
                  'Member-Before-Batter' : data.Fifth.DispStatus.Batter && data.Fifth.DispStatus.ChangeBeforeMember,
                  'Member-After-Batter' : data.Fifth.DispStatus.Batter && data.Fifth.DispStatus.ChangeAfterMember,
                  'Member-Before-Runner' : data.Fifth.DispStatus.Runner && data.Fifth.DispStatus.ChangeBeforeMember,
                  'Member-After-Runner' : data.Fifth.DispStatus.Runner && data.Fifth.DispStatus.ChangeAfterMember,
                  'Member-Before-Next' : data.Fifth.DispStatus.NextRead && data.Fifth.DispStatus.ChangeBeforeMember,
                  'Member-After-Next' : data.Fifth.DispStatus.NextRead && data.Fifth.DispStatus.ChangeAfterMember}]"
      >
        <div
          id="visitorFifthName"
          class="Name-Text"
          :class="[fifthTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center',
                   data.Fifth.DispStatus.Basic && design.NameBasicEdge != '' ? 'Basic-Shadow' : 'Text-Shadow',
                   data.Fifth.DispStatus.Batter && design.NameBatterEdge != '' ? 'Batter-Shadow' : 'Text-Shadow',
                   data.Fifth.DispStatus.Runner && design.NameRunnerEdge != '' ? 'Runner-Shadow' : 'Text-Shadow',
                   data.Fifth.DispStatus.NextRead && design.NameNextEdge != '' ? 'Next-Shadow' : 'Text-Shadow',]"
          :style="[{transform: `scaleX(${fifthNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Fifth.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.Sixth.Name"
      :class="[{'Member-Before-Slide' : data.Sixth.DispStatus.ChangeBeforeMember,
                'Member-After-Slide' : data.Sixth.DispStatus.ChangeAfterMember},
                data.Sixth.DispStatus.Display ? 'Display-Sixth' : 'Display']"
    >
      <div
        class="Box-Pos"
        :class="[{'Basic-Position-BGC' : data.Sixth.DispStatus.Basic,
                  'Batter-Position-BGC' : data.Sixth.DispStatus.Batter,
                  'Runner-Position-BGC' : data.Sixth.DispStatus.Runner,
                  'Next-Position-BGC' : data.Sixth.DispStatus.NextRead}]"
      ></div>
      <div 
        id="visitorSixthPos"
        class="Pos-Text"
        :class="[{'Basic-Position-Text' : data.Sixth.DispStatus.Basic,
                  'Batter-Position-Text' : data.Sixth.DispStatus.Batter,
                  'Runner-Position-Text' : data.Sixth.DispStatus.Runner,
                  'Next-Position-Text' : data.Sixth.DispStatus.NextRead,
                  'Sixth-Position-Only-Before-Basic' : data.Sixth.DispStatus.Basic && data.Sixth.DispStatus.ChangeBeforePisition,
                  'Sixth-Position-Only-After-Basic' : data.Sixth.DispStatus.Basic && data.Sixth.DispStatus.ChangeAfterPisition,
                  'Sixth-Position-Only-Before-Next' : data.Sixth.DispStatus.NextRead && data.Sixth.DispStatus.ChangeBeforePisition,
                  'Sixth-Position-Only-After-Next' : data.Sixth.DispStatus.NextRead && data.Sixth.DispStatus.ChangeAfterPisition,
                  'Position-Member-Before-Basic' : data.Sixth.DispStatus.Basic && data.Sixth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Basic' : data.Sixth.DispStatus.Basic && data.Sixth.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Batter' : data.Sixth.DispStatus.Batter && data.Sixth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Batter' : data.Sixth.DispStatus.Batter && data.Sixth.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Runner' : data.Sixth.DispStatus.Runner && data.Sixth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Runner' : data.Sixth.DispStatus.Runner && data.Sixth.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Next' : data.Sixth.DispStatus.NextRead && data.Sixth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Next' : data.Sixth.DispStatus.NextRead && data.Sixth.DispStatus.ChangeAfterMember}]"
        :style="[{transform: `scaleX(${sixthPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Sixth.Position }}</div>
      <div
        class="Box-Name"
        :class="[{'Basic-Name' : data.Sixth.DispStatus.Basic,
                  'Batter-Name' : data.Sixth.DispStatus.Batter,
                  'Runner-Name' : data.Sixth.DispStatus.Runner,
                  'Next-Name' : data.Sixth.DispStatus.NextRead,
                  'Member-Before-Basic' : data.Sixth.DispStatus.Basic && data.Sixth.DispStatus.ChangeBeforeMember,
                  'Member-After-Basic' : data.Sixth.DispStatus.Basic && data.Sixth.DispStatus.ChangeAfterMember,
                  'Member-Before-Batter' : data.Sixth.DispStatus.Batter && data.Sixth.DispStatus.ChangeBeforeMember,
                  'Member-After-Batter' : data.Sixth.DispStatus.Batter && data.Sixth.DispStatus.ChangeAfterMember,
                  'Member-Before-Runner' : data.Sixth.DispStatus.Runner && data.Sixth.DispStatus.ChangeBeforeMember,
                  'Member-After-Runner' : data.Sixth.DispStatus.Runner && data.Sixth.DispStatus.ChangeAfterMember,
                  'Member-Before-Next' : data.Sixth.DispStatus.NextRead && data.Sixth.DispStatus.ChangeBeforeMember,
                  'Member-After-Next' : data.Sixth.DispStatus.NextRead && data.Sixth.DispStatus.ChangeAfterMember}]"
      >
        <div
          id="visitorSixthName"
          class="Name-Text"
          :class="[sixthTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center',
                   data.Sixth.DispStatus.Basic && design.NameBasicEdge != '' ? 'Basic-Shadow' : 'Text-Shadow',
                   data.Sixth.DispStatus.Batter && design.NameBatterEdge != '' ? 'Batter-Shadow' : 'Text-Shadow',
                   data.Sixth.DispStatus.Runner && design.NameRunnerEdge != '' ? 'Runner-Shadow' : 'Text-Shadow',
                   data.Sixth.DispStatus.NextRead && design.NameNextEdge != '' ? 'Next-Shadow' : 'Text-Shadow',]"
          :style="[{transform: `scaleX(${sixthNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Sixth.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.Seventh.Name"
      :class="[{'Member-Before-Slide' : data.Seventh.DispStatus.ChangeBeforeMember,
                'Member-After-Slide' : data.Seventh.DispStatus.ChangeAfterMember},
                data.Seventh.DispStatus.Display ? 'Display-Seventh' : 'Display']"
    >
      <div
        class="Box-Pos"
        :class="[{'Basic-Position-BGC' : data.Seventh.DispStatus.Basic,
                  'Batter-Position-BGC' : data.Seventh.DispStatus.Batter,
                  'Runner-Position-BGC' : data.Seventh.DispStatus.Runner,
                  'Next-Position-BGC' : data.Seventh.DispStatus.NextRead}]"
      ></div>
      <div 
        id="visitorSeventhPos"
        class="Pos-Text"
        :class="[{'Basic-Position-Text' : data.Seventh.DispStatus.Basic,
                  'Batter-Position-Text' : data.Seventh.DispStatus.Batter,
                  'Runner-Position-Text' : data.Seventh.DispStatus.Runner,
                  'Next-Position-Text' : data.Seventh.DispStatus.NextRead,
                  'Seventh-Position-Only-Before-Basic' : data.Seventh.DispStatus.Basic && data.Seventh.DispStatus.ChangeBeforePisition,
                  'Seventh-Position-Only-After-Basic' : data.Seventh.DispStatus.Basic && data.Seventh.DispStatus.ChangeAfterPisition,
                  'Seventh-Position-Only-Before-Next' : data.Seventh.DispStatus.NextRead && data.Seventh.DispStatus.ChangeBeforePisition,
                  'Seventh-Position-Only-After-Next' : data.Seventh.DispStatus.NextRead && data.Seventh.DispStatus.ChangeAfterPisition,
                  'Position-Member-Before-Basic' : data.Seventh.DispStatus.Basic && data.Seventh.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Basic' : data.Seventh.DispStatus.Basic && data.Seventh.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Batter' : data.Seventh.DispStatus.Batter && data.Seventh.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Batter' : data.Seventh.DispStatus.Batter && data.Seventh.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Runner' : data.Seventh.DispStatus.Runner && data.Seventh.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Runner' : data.Seventh.DispStatus.Runner && data.Seventh.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Next' : data.Seventh.DispStatus.NextRead && data.Seventh.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Next' : data.Seventh.DispStatus.NextRead && data.Seventh.DispStatus.ChangeAfterMember}]"
        :style="[{transform: `scaleX(${seventhPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Seventh.Position }}</div>
      <div
        class="Box-Name"
        :class="[{'Basic-Name' : data.Seventh.DispStatus.Basic,
                  'Batter-Name' : data.Seventh.DispStatus.Batter,
                  'Runner-Name' : data.Seventh.DispStatus.Runner,
                  'Next-Name' : data.Seventh.DispStatus.NextRead,
                  'Member-Before-Basic' : data.Seventh.DispStatus.Basic && data.Seventh.DispStatus.ChangeBeforeMember,
                  'Member-After-Basic' : data.Seventh.DispStatus.Basic && data.Seventh.DispStatus.ChangeAfterMember,
                  'Member-Before-Batter' : data.Seventh.DispStatus.Batter && data.Seventh.DispStatus.ChangeBeforeMember,
                  'Member-After-Batter' : data.Seventh.DispStatus.Batter && data.Seventh.DispStatus.ChangeAfterMember,
                  'Member-Before-Runner' : data.Seventh.DispStatus.Runner && data.Seventh.DispStatus.ChangeBeforeMember,
                  'Member-After-Runner' : data.Seventh.DispStatus.Runner && data.Seventh.DispStatus.ChangeAfterMember,
                  'Member-Before-Next' : data.Seventh.DispStatus.NextRead && data.Seventh.DispStatus.ChangeBeforeMember,
                  'Member-After-Next' : data.Seventh.DispStatus.NextRead && data.Seventh.DispStatus.ChangeAfterMember}]"
      >
        <div
          id="visitorSeventhName"
          class="Name-Text"
          :class="[seventhTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center',
                   data.Seventh.DispStatus.Basic && design.NameBasicEdge != '' ? 'Basic-Shadow' : 'Text-Shadow',
                   data.Seventh.DispStatus.Batter && design.NameBatterEdge != '' ? 'Batter-Shadow' : 'Text-Shadow',
                   data.Seventh.DispStatus.Runner && design.NameRunnerEdge != '' ? 'Runner-Shadow' : 'Text-Shadow',
                   data.Seventh.DispStatus.NextRead && design.NameNextEdge != '' ? 'Next-Shadow' : 'Text-Shadow',]"
          :style="[{transform: `scaleX(${seventhNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Seventh.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.Eighth.Name"
      :class="[{'Member-Before-Slide' : data.Eighth.DispStatus.ChangeBeforeMember,
                'Member-After-Slide' : data.Eighth.DispStatus.ChangeAfterMember},
                data.Eighth.DispStatus.Display ? 'Display-Eighth' : 'Display']"
    >
      <div
        class="Box-Pos"
        :class="[{'Basic-Position-BGC' : data.Eighth.DispStatus.Basic,
                  'Batter-Position-BGC' : data.Eighth.DispStatus.Batter,
                  'Runner-Position-BGC' : data.Eighth.DispStatus.Runner,
                  'Next-Position-BGC' : data.Eighth.DispStatus.NextRead}]"
      ></div>
      <div 
        id="visitorEighthPos"
        class="Pos-Text"
        :class="[{'Basic-Position-Text' : data.Eighth.DispStatus.Basic,
                  'Batter-Position-Text' : data.Eighth.DispStatus.Batter,
                  'Runner-Position-Text' : data.Eighth.DispStatus.Runner,
                  'Next-Position-Text' : data.Eighth.DispStatus.NextRead,
                  'Eighth-Position-Only-Before-Basic' : data.Eighth.DispStatus.Basic && data.Eighth.DispStatus.ChangeBeforePisition,
                  'Eighth-Position-Only-After-Basic' : data.Eighth.DispStatus.Basic && data.Eighth.DispStatus.ChangeAfterPisition,
                  'Eighth-Position-Only-Before-Next' : data.Eighth.DispStatus.NextRead && data.Eighth.DispStatus.ChangeBeforePisition,
                  'Eighth-Position-Only-After-Next' : data.Eighth.DispStatus.NextRead && data.Eighth.DispStatus.ChangeAfterPisition,
                  'Position-Member-Before-Basic' : data.Eighth.DispStatus.Basic && data.Eighth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Basic' : data.Eighth.DispStatus.Basic && data.Eighth.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Batter' : data.Eighth.DispStatus.Batter && data.Eighth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Batter' : data.Eighth.DispStatus.Batter && data.Eighth.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Runner' : data.Eighth.DispStatus.Runner && data.Eighth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Runner' : data.Eighth.DispStatus.Runner && data.Eighth.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Next' : data.Eighth.DispStatus.NextRead && data.Eighth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Next' : data.Eighth.DispStatus.NextRead && data.Eighth.DispStatus.ChangeAfterMember}]"
        :style="[{transform: `scaleX(${eighthPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Eighth.Position }}</div>
      <div
        class="Box-Name"
        :class="[{'Basic-Name' : data.Eighth.DispStatus.Basic,
                  'Batter-Name' : data.Eighth.DispStatus.Batter,
                  'Runner-Name' : data.Eighth.DispStatus.Runner,
                  'Next-Name' : data.Eighth.DispStatus.NextRead,
                  'Member-Before-Basic' : data.Eighth.DispStatus.Basic && data.Eighth.DispStatus.ChangeBeforeMember,
                  'Member-After-Basic' : data.Eighth.DispStatus.Basic && data.Eighth.DispStatus.ChangeAfterMember,
                  'Member-Before-Batter' : data.Eighth.DispStatus.Batter && data.Eighth.DispStatus.ChangeBeforeMember,
                  'Member-After-Batter' : data.Eighth.DispStatus.Batter && data.Eighth.DispStatus.ChangeAfterMember,
                  'Member-Before-Runner' : data.Eighth.DispStatus.Runner && data.Eighth.DispStatus.ChangeBeforeMember,
                  'Member-After-Runner' : data.Eighth.DispStatus.Runner && data.Eighth.DispStatus.ChangeAfterMember,
                  'Member-Before-Next' : data.Eighth.DispStatus.NextRead && data.Eighth.DispStatus.ChangeBeforeMember,
                  'Member-After-Next' : data.Eighth.DispStatus.NextRead && data.Eighth.DispStatus.ChangeAfterMember}]"
      >
        <div
          id="visitorEighthName"
          class="Name-Text"
          :class="[eighthTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center',
                   data.Eighth.DispStatus.Basic && design.NameBasicEdge != '' ? 'Basic-Shadow' : 'Text-Shadow',
                   data.Eighth.DispStatus.Batter && design.NameBatterEdge != '' ? 'Batter-Shadow' : 'Text-Shadow',
                   data.Eighth.DispStatus.Runner && design.NameRunnerEdge != '' ? 'Runner-Shadow' : 'Text-Shadow',
                   data.Eighth.DispStatus.NextRead && design.NameNextEdge != '' ? 'Next-Shadow' : 'Text-Shadow',]"
          :style="[{transform: `scaleX(${eighthNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Eighth.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full"
      v-if="data.Ninth.Name"
      :class="[{'Member-Before-Slide' : data.Ninth.DispStatus.ChangeBeforeMember,
                'Member-After-Slide' : data.Ninth.DispStatus.ChangeAfterMember},
                data.Ninth.DispStatus.Display ? 'Display-Ninth' : 'Display']"
    >
      <div
        class="Box-Pos"
        :class="[{'Basic-Position-BGC' : data.Ninth.DispStatus.Basic,
                  'Batter-Position-BGC' : data.Ninth.DispStatus.Batter,
                  'Runner-Position-BGC' : data.Ninth.DispStatus.Runner,
                  'Next-Position-BGC' : data.Ninth.DispStatus.NextRead}]"
      ></div>
      <div 
        id="visitorNinthPos"
        class="Pos-Text"
        :class="[{'Basic-Position-Text' : data.Ninth.DispStatus.Basic,
                  'Batter-Position-Text' : data.Ninth.DispStatus.Batter,
                  'Runner-Position-Text' : data.Ninth.DispStatus.Runner,
                  'Next-Position-Text' : data.Ninth.DispStatus.NextRead,
                  'Ninth-Position-Only-Before-Basic' : data.Ninth.DispStatus.Basic && data.Ninth.DispStatus.ChangeBeforePisition,
                  'Ninth-Position-Only-After-Basic' : data.Ninth.DispStatus.Basic && data.Ninth.DispStatus.ChangeAfterPisition,
                  'Ninth-Position-Only-Before-Next' : data.Ninth.DispStatus.NextRead && data.Ninth.DispStatus.ChangeBeforePisition,
                  'Ninth-Position-Only-After-Next' : data.Ninth.DispStatus.NextRead && data.Ninth.DispStatus.ChangeAfterPisition,
                  'Position-Member-Before-Basic' : data.Ninth.DispStatus.Basic && data.Ninth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Basic' : data.Ninth.DispStatus.Basic && data.Ninth.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Batter' : data.Ninth.DispStatus.Batter && data.Ninth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Batter' : data.Ninth.DispStatus.Batter && data.Ninth.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Runner' : data.Ninth.DispStatus.Runner && data.Ninth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Runner' : data.Ninth.DispStatus.Runner && data.Ninth.DispStatus.ChangeAfterMember,
                  'Position-Member-Before-Next' : data.Ninth.DispStatus.NextRead && data.Ninth.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Next' : data.Ninth.DispStatus.NextRead && data.Ninth.DispStatus.ChangeAfterMember}]"
        :style="[{transform: `scaleX(${ninthPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Ninth.Position }}</div>
      <div
        class="Box-Name"
        :class="[{'Basic-Name' : data.Ninth.DispStatus.Basic,
                  'Batter-Name' : data.Ninth.DispStatus.Batter,
                  'Runner-Name' : data.Ninth.DispStatus.Runner,
                  'Next-Name' : data.Ninth.DispStatus.NextRead,
                  'Member-Before-Basic' : data.Ninth.DispStatus.Basic && data.Ninth.DispStatus.ChangeBeforeMember,
                  'Member-After-Basic' : data.Ninth.DispStatus.Basic && data.Ninth.DispStatus.ChangeAfterMember,
                  'Member-Before-Batter' : data.Ninth.DispStatus.Batter && data.Ninth.DispStatus.ChangeBeforeMember,
                  'Member-After-Batter' : data.Ninth.DispStatus.Batter && data.Ninth.DispStatus.ChangeAfterMember,
                  'Member-Before-Runner' : data.Ninth.DispStatus.Runner && data.Ninth.DispStatus.ChangeBeforeMember,
                  'Member-After-Runner' : data.Ninth.DispStatus.Runner && data.Ninth.DispStatus.ChangeAfterMember,
                  'Member-Before-Next' : data.Ninth.DispStatus.NextRead && data.Ninth.DispStatus.ChangeBeforeMember,
                  'Member-After-Next' : data.Ninth.DispStatus.NextRead && data.Ninth.DispStatus.ChangeAfterMember}]"
      >
        <div
          id="visitorNinthName"
          class="Name-Text"
          :class="[ninthTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center',
                   data.Ninth.DispStatus.Basic && design.NameBasicEdge != '' ? 'Basic-Shadow' : 'Text-Shadow',
                   data.Ninth.DispStatus.Batter && design.NameBatterEdge != '' ? 'Batter-Shadow' : 'Text-Shadow',
                   data.Ninth.DispStatus.Runner && design.NameRunnerEdge != '' ? 'Runner-Shadow' : 'Text-Shadow',
                   data.Ninth.DispStatus.NextRead && design.NameNextEdge != '' ? 'Next-Shadow' : 'Text-Shadow',]"
          :style="[{transform: `scaleX(${ninthNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Ninth.Name }}</div>
      </div>
    </div>
    <div
      class="Box-Full-P"
      v-if="data.Pitcher.Name"
      :class="[{'Member-Before-Slide' : data.Pitcher.DispStatus.ChangeBeforeMember,
                'Member-After-Slide' : data.Pitcher.DispStatus.ChangeAfterMember},
                data.Pitcher.DispStatus.Display ? 'Display-Pitcher' : 'Display']"
    >
      <div
        class="Box-Pos"
        :class="[{'Basic-Position-BGC' : data.Pitcher.DispStatus.Basic,
                  'Batter-Position-BGC' : data.Pitcher.DispStatus.Batter,
                  'Runner-Position-BGC' : data.Pitcher.DispStatus.Runner,
                  'Next-Position-BGC' : data.Pitcher.DispStatus.NextRead}]"
      ></div>
      <div 
        id="visitorPitcherPos"
        class="Pos-Text"
        :class="[{'Basic-Position-Text' : data.Pitcher.DispStatus.Basic,
                  'Position-Member-Before-Basic' : data.Pitcher.DispStatus.Basic && data.Pitcher.DispStatus.ChangeBeforeMember,
                  'Position-Member-After-Basic' : data.Pitcher.DispStatus.Basic && data.Pitcher.DispStatus.ChangeAfterMember,}]"
        :style="[{transform: `scaleX(${pitcherPosTrans})`, transformOrigin: 'left'}]"
      >{{ data.Pitcher.Position }}</div>
      <div
        class="Box-Name"
        :class="[{'Basic-Name' : data.Pitcher.DispStatus.Basic,
                  'Member-Before-Basic' : data.Pitcher.DispStatus.Basic && data.Pitcher.DispStatus.ChangeBeforeMember,
                  'Member-After-Basic' : data.Pitcher.DispStatus.Basic && data.Pitcher.DispStatus.ChangeAfterMember}]"
      >
        <div
          id="visitorPitcherName"
          class="Name-Text"
          :class="[pitcherTextAlignLastJustify ? 'Text-Align-Last-Justify' : 'Text-Align-Last-Center',
                   data.Pitcher.DispStatus.Basic && design.NameBasicEdge != '' ? 'Basic-Shadow' : 'Text-Shadow']"
          :style="[{transform: `scaleX(${pitcherNameTrans})`, transformOrigin: 'left'}]"
        >{{ data.Pitcher.Name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ParticipationMemberModel, ParticipationMemberPerTeamModel } from './ts/model/member-info-model';
import { defineProps, nextTick, ref, toRef, toRefs, watch } from 'vue';
import { DesignModel, MemberDesignModel } from './ts/model/design-model';
import { GameInfoModel } from './ts/model/game-model';
import { MemberController } from './ts/member-controller';

const props = defineProps<{
  data: ParticipationMemberPerTeamModel;
  gameInfo: GameInfoModel;
  design: MemberDesignModel;
}>()

/**
 * 半角チェック
 * @param str 
 */
function checkHalfWidth(str: string): boolean {
  let res = false;

  if (str) {
    if (str.match(/^[\x20-\x7e]*$/)) {
      res = true;
    }
  }

  return res;
}

/**
 * チーム名の横幅計算（アルファベット）
 * @param element 
 */
function calcTeamWidth(element: any): string {
  let returnData = '1.0';
  if (element) {
    if (element.scrollWidth > 170) {
      let width = 170 / element.scrollWidth;
      returnData = width.toString();
    }
  }
  return returnData;
}

/**
 * チーム名の横幅計算（アルファベット）
 * @param element 
 */
function calcTeamWidthJP(element: any): string {
  let returnData = '1.0';
  if (element) {
    if (element.scrollWidth > 174) {
      let width = 174 / element.scrollWidth;
      returnData = width.toString();
    }
  }
  return returnData;
}

/**
 * 守備位置の横幅計算
 * @param element DOM要素
 */
function calcPosWidth(element: any): string {
  let returnData = '1.0';
  if (element) {
    if (element.scrollWidth > 35) {
      let width = 35 / element.scrollWidth;
      returnData = width.toString();
    }
  }
  return returnData;
}

/**
 * 名前の横幅計算
 * @param element DOM要素
 */
function calcNameWidth(element: any): string {
  let returnData = '1.0';
  if (element) {
    if (element.scrollWidth > 120) {
      let width = 120 / element.scrollWidth;
      returnData = width.toString();
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
    if (text.match(/^[\x20-\x7e]*$/) || text.length === 1) {
      returnData = false;
    }
  }
  return returnData;
}

// チーム名
let teamNameTrans = ref('1.0');
let teamNameHalfWidthFlg = ref(true);
let teamNameTextAlignLastJustify = ref(true);
// 1番
let leadOffPosTrans = ref('1.0');
let leadOffNameTrans = ref('1.0');
let leadOffTextAlignLastJustify = ref(true);
// 2番
let secondPosTrans = ref('1.0');
let secondNameTrans = ref('1.0');
let secondTextAlignLastJustify = ref(true);
// 3番
let thirdPosTrans = ref('1.0');
let thirdNameTrans = ref('1.0');
let thirdTextAlignLastJustify = ref(true);
// 4番
let fourthPosTrans = ref('1.0');
let fourthNameTrans = ref('1.0');
let fourthTextAlignLastJustify = ref(true);
// 5番
let fifthPosTrans = ref('1.0');
let fifthNameTrans = ref('1.0');
let fifthTextAlignLastJustify = ref(true);
// 6番
let sixthPosTrans = ref('1.0');
let sixthNameTrans = ref('1.0');
let sixthTextAlignLastJustify = ref(true);
// 7番
let seventhPosTrans = ref('1.0');
let seventhNameTrans = ref('1.0');
let seventhTextAlignLastJustify = ref(true);
// 8番
let eighthPosTrans = ref('1.0');
let eighthNameTrans = ref('1.0');
let eighthTextAlignLastJustify = ref(true);
// 9番
let ninthPosTrans = ref('1.0');
let ninthNameTrans = ref('1.0');
let ninthTextAlignLastJustify = ref(true);
// 投手
let pitcherPosTrans = ref('1.0');
let pitcherNameTrans = ref('1.0');
let pitcherTextAlignLastJustify = ref(true);

watch(props, () => {
  nextTick(() => {
    teamNameHalfWidthFlg.value = checkHalfWidth(props.gameInfo.GameBaseInfo.VisitorTeamText);
    if (teamNameHalfWidthFlg.value) {
      teamNameTrans.value = calcTeamWidth(document.getElementById('visitorTeamName'));
    } else {
      teamNameTrans.value = calcTeamWidthJP(document.getElementById('visitorTeamName'));
    }
    teamNameTextAlignLastJustify.value = decisionTextAlignLastJustify(props.gameInfo.GameBaseInfo.VisitorTeamText);
    leadOffPosTrans.value = calcPosWidth(document.getElementById('visitorLeadOffPos'));
    leadOffNameTrans.value = calcNameWidth(document.getElementById('visitorLeadOffName'));
    leadOffTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.LeadOff.Name);
    secondPosTrans.value = calcPosWidth(document.getElementById('visitorSecondPos'));
    secondNameTrans.value = calcNameWidth(document.getElementById('visitorSecondName'));
    secondTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Second.Name);
    thirdPosTrans.value = calcPosWidth(document.getElementById('visitorThirdPos'));
    thirdNameTrans.value = calcNameWidth(document.getElementById('visitorThirdName'));
    thirdTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Third.Name);
    fourthPosTrans.value = calcPosWidth(document.getElementById('visitorFourthPos'));
    fourthNameTrans.value = calcNameWidth(document.getElementById('visitorFourthName'));
    fourthTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Fourth.Name);
    fifthPosTrans.value = calcPosWidth(document.getElementById('visitorFifthPos'));
    fifthNameTrans.value = calcNameWidth(document.getElementById('visitorFifthName'));
    fifthTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Fifth.Name);
    sixthPosTrans.value = calcPosWidth(document.getElementById('visitorSixthPos'));
    sixthNameTrans.value = calcNameWidth(document.getElementById('visitorSixthName'));
    sixthTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Sixth.Name);
    seventhPosTrans.value = calcPosWidth(document.getElementById('visitorSeventhPos'));
    seventhNameTrans.value = calcNameWidth(document.getElementById('visitorSeventhName'));
    seventhTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Seventh.Name);
    eighthPosTrans.value = calcPosWidth(document.getElementById('visitorEighthPos'));
    eighthNameTrans.value = calcNameWidth(document.getElementById('visitorEighthName'));
    eighthTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Eighth.Name);
    ninthPosTrans.value = calcPosWidth(document.getElementById('visitorNinthPos'));
    ninthNameTrans.value = calcNameWidth(document.getElementById('visitorNinthName'));
    ninthTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Ninth.Name);
    pitcherPosTrans.value = calcPosWidth(document.getElementById('visitorPitcherPos'));
    pitcherNameTrans.value = calcNameWidth(document.getElementById('visitorPitcherName'));
    pitcherTextAlignLastJustify.value = decisionTextAlignLastJustify(props.data.Pitcher.Name);
  })
});

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

.Position-Left {
  left: 0px;
}

.Position-Right {
  right: 0px;
}

.Team{
  margin-bottom: 10px;
  margin-left: 20px;
  background: v-bind('design.TeamNameBGC');
  color: v-bind('design.TeamNameText');
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  width: 170px;
  height: 49px;
  padding-left: 10px;
  padding-right: 10px;
}

.Team img{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  width: auto;
  max-width: 95%;
  max-height: 95%;
  margin: auto;
}

.Team-Text-Half-Width{
  font-family: 'Bahnschrift';
  font-size: 40px;
  line-height: 53px;
}

.Team-Text-Full-Width{
  font-family: 'Noto Sans JP', sans-serif;
  line-height: 45px;
  font-size: 39px;
}

.Box-Full-P{
  margin: auto;
  position: relative;
  overflow: hidden;
  width: 190px;
  height: 42px;
  border-top: 4px solid v-bind('design.UpperLine');
  border-bottom: 4px solid v-bind('design.UnderLine');
  opacity: 0;

}

.Box-Full{
  margin: auto;
  position: relative;
  overflow: hidden;
  width: 190px;
  height: 42px;
  border-bottom: 4px solid v-bind('design.UnderLine');
  opacity: 0;
}

.Box-Pos{
  position: absolute;
  margin: 0;
  width: 51px;
  height: 42px;
  transform: translateX(-5px) skewX(-10deg);
  border-right: 2px solid v-bind('design.DiagonalLine');
  z-index: 1;
  box-shadow: 1.5px 1.5px 8px rgba(0, 0, 0, 0.5),
              2px 2px 8px rgba(0, 0, 0, 0.5),
              2.5px 2.5px 8px rgba(0, 0, 0, 0.5),
              3px 3px 8px rgba(0, 0, 0, 0.5);
  background: v-bind('design.PositionBasicBGC');
}

.Pos-Text{
  font-family: 'Alte DIN 1451 Mittelschrift';
  position: absolute;
  width: 35px;
  margin-left: 5px;
  font-size: 45px;
  line-height: 42px;
  text-align: center;
  z-index: 2;
  letter-spacing: -2px;
}

.Box-Name{
  overflow: hidden;
  margin-left: 42px;
  width: 120px;
  height: 42px;
  padding-left: 18px;
  padding-right: 10px;
  z-index: 0;
  background: v-bind('design.NameBasicBGC');
}

.Name-Text{
  white-space: nowrap;
  font-family: 'Noto Sans JP', sans-serif;
  line-height: 38px;
  font-size: 36px;
  height: 42px;
}

.Basic-Position-BGC {
  background: v-bind('design.PositionBasicBGC');
}

.Basic-Position-Text {
  color: v-bind('design.PositionBasicText');
}

.Basic-Name {
  background: v-bind('design.NameBasicBGC');
  color: v-bind('design.NameBasicText');
}

.Batter-Position-BGC {
  background: v-bind('design.PositionBatterBGC');
}

.Batter-Position-Text {
  color: v-bind('design.PositionBatterText');
}

.Batter-Name {
  background: v-bind('design.NameBatterBGC');
  color: v-bind('design.NameBatterText');
}

.Runner-Position-BGC {
  background: v-bind('design.PositionRunnerBGC');
}

.Runner-Position-Text {
  color: v-bind('design.PositionRunnerText');
}

.Runner-Name {
  background: v-bind('design.NameRunnerBGC');
  color: v-bind('design.NameRunnerText');
}

.Next-Position-BGC {
  background: v-bind('design.PositionNextBGC');
}

.Next-Position-Text {
  color: v-bind('design.PositionNextText');
}

.Next-Name {
  background: v-bind('design.NameNextBGC');
  color: v-bind('design.NameNextText');
}

.Text-Align-Last-Center {
  text-align-last: center;
}

.Text-Align-Last-Justify {
  text-align-last: justify;
}

.Display {
  transform: translateX(0px) scale(1.0);
  opacity: 1;
}

.Display-LeadOff {
  animation: SlideInText 1s;
  animation-fill-mode: forwards;
}

.Display-Second {
  animation: SlideInText 1s;
  animation-delay: 100ms;
  animation-fill-mode: forwards;
}

.Display-Third {
  animation: SlideInText 1s;
  animation-delay: 200ms;
  animation-fill-mode: forwards;
}

.Display-Fourth {
  animation: SlideInText 1s;
  animation-delay: 300ms;
  animation-fill-mode: forwards;
}

.Display-Fifth {
  animation: SlideInText 1s;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
}

.Display-Sixth {
  animation: SlideInText 1s;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
}

.Display-Seventh {
  animation: SlideInText 1s;
  animation-delay: 600ms;
  animation-fill-mode: forwards;
}

.Display-Eighth {
  animation: SlideInText 1s;
  animation-delay: 700ms;
  animation-fill-mode: forwards;
}

.Display-Ninth {
  animation: SlideInText 1s;
  animation-delay: 800ms;
  animation-fill-mode: forwards;
}

.Display-Pitcher {
  animation: SlideInText 1s;
  animation-delay: 900ms;
  animation-fill-mode: forwards;
}

@keyframes SlideInText
{
  0% {
    transform: translateX(230px) scale(0.1);
    opacity: 1;
  }
  70% {
    transform: translateX(0px) scale(0.75);
    opacity: 1;
  }
  100% {
    transform: scale(1.0);
    opacity: 1;
  }
}

/** ---------------------------守備位置のみ------------------------ */
/** 1番 */
.LeadOff-Position-Only-Before-Basic {
  animation: position-only-before-basic-blinking 3.5s 0s forwards, leadoff-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-basic-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionBasicText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.LeadOff-Position-Only-After-Basic {
  animation: leadoff-rotate-after 1s 0s forwards, position-only-after-basic-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-basic-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionBasicText');
  }
}

.LeadOff-Position-Only-Before-Next {
  animation: position-only-before-next-blinking 3.5s 0s forwards, leadoff-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-next-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionNextText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.LeadOff-Position-Only-After-Next {
  animation: leadoff-rotate-after 1s 0s forwards, position-only-after-next-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-next-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionNextText');
  }
}

/** 回転 */
@keyframes leadoff-rotate-before {
  0% {
    transform: scaleX(v-bind('leadOffPosTrans')) rotateX(0deg);
  }
  100% {
    transform: scaleX(v-bind('leadOffPosTrans')) rotateX(90deg);
  }
}

@keyframes leadoff-rotate-after {
  0% {
    transform: scaleX(v-bind('leadOffPosTrans')) rotateX(90deg);
  }
  100% {
    transform: scaleX(v-bind('leadOffPosTrans')) rotateX(0deg);
  }
}

/** 2番 */
.Second-Position-Only-Before-Basic {
  animation: position-only-before-basic-blinking 3.5s 0s forwards, second-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-basic-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionBasicText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.Second-Position-Only-After-Basic {
  animation: second-rotate-after 1s 0s forwards, position-only-after-basic-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-basic-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionBasicText');
  }
}

.Second-Position-Only-Before-Next {
  animation: position-only-before-next-blinking 3.5s 0s forwards, second-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-next-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionNextText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.Second-Position-Only-After-Next {
  animation: second-rotate-after 1s 0s forwards, position-only-after-next-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-next-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionNextText');
  }
}

/** 回転 */
@keyframes second-rotate-before {
  0% {
    transform: scaleX(v-bind('secondPosTrans')) rotateX(0deg);
  }
  100% {
    transform: scaleX(v-bind('secondPosTrans')) rotateX(90deg);
  }
}

@keyframes second-rotate-after {
  0% {
    transform: scaleX(v-bind('secondPosTrans')) rotateX(90deg);
  }
  100% {
    transform: scaleX(v-bind('secondPosTrans')) rotateX(0deg);
  }
}

/** 3番 */
.Third-Position-Only-Before-Basic {
  animation: position-only-before-basic-blinking 3.5s 0s forwards, third-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-basic-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionBasicText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.Third-Position-Only-After-Basic {
  animation: third-rotate-after 1s 0s forwards, position-only-after-basic-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-basic-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionBasicText');
  }
}

.Third-Position-Only-Before-Next {
  animation: position-only-before-next-blinking 3.5s 0s forwards, third-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-next-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionNextText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.Third-Position-Only-After-Next {
  animation: third-rotate-after 1s 0s forwards, position-only-after-next-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-next-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionNextText');
  }
}

/** 回転 */
@keyframes third-rotate-before {
  0% {
    transform: scaleX(v-bind('thirdPosTrans')) rotateX(0deg);
  }
  100% {
    transform: scaleX(v-bind('thirdPosTrans')) rotateX(90deg);
  }
}

@keyframes third-rotate-after {
  0% {
    transform: scaleX(v-bind('thirdPosTrans')) rotateX(90deg);
  }
  100% {
    transform: scaleX(v-bind('thirdPosTrans')) rotateX(0deg);
  }
}

/** 4番 */
.Fourth-Position-Only-Before-Basic {
  animation: position-only-before-basic-blinking 3.5s 0s forwards, fourth-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-basic-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionBasicText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.Fourth-Position-Only-After-Basic {
  animation: fourth-rotate-after 1s 0s forwards, position-only-after-basic-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-basic-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionBasicText');
  }
}

.Fourth-Position-Only-Before-Next {
  animation: position-only-before-next-blinking 3.5s 0s forwards, fourth-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-next-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionNextText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.Fourth-Position-Only-After-Next {
  animation: fourth-rotate-after 1s 0s forwards, position-only-after-next-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-next-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionNextText');
  }
}

/** 回転 */
@keyframes fourth-rotate-before {
  0% {
    transform: scaleX(v-bind('fourthPosTrans')) rotateX(0deg);
  }
  100% {
    transform: scaleX(v-bind('fourthPosTrans')) rotateX(90deg);
  }
}

@keyframes fourth-rotate-after {
  0% {
    transform: scaleX(v-bind('fourthPosTrans')) rotateX(90deg);
  }
  100% {
    transform: scaleX(v-bind('fourthPosTrans')) rotateX(0deg);
  }
}

/** 5番 */
.Fifth-Position-Only-Before-Basic {
  animation: position-only-before-basic-blinking 3.5s 0s forwards, fifth-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-basic-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionBasicText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.Fifth-Position-Only-After-Basic {
  animation: fifth-rotate-after 1s 0s forwards, position-only-after-basic-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-basic-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionBasicText');
  }
}

.Fifth-Position-Only-Before-Next {
  animation: position-only-before-next-blinking 3.5s 0s forwards, fifth-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-next-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionNextText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.Fifth-Position-Only-After-Next {
  animation: fifth-rotate-after 1s 0s forwards, position-only-after-next-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-next-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionNextText');
  }
}

/** 回転 */
@keyframes fifth-rotate-before {
  0% {
    transform: scaleX(v-bind('fifthPosTrans')) rotateX(0deg);
  }
  100% {
    transform: scaleX(v-bind('fifthPosTrans')) rotateX(90deg);
  }
}

@keyframes fifth-rotate-after {
  0% {
    transform: scaleX(v-bind('fifthPosTrans')) rotateX(90deg);
  }
  100% {
    transform: scaleX(v-bind('fifthPosTrans')) rotateX(0deg);
  }
}

/** 6番 */
.Sixth-Position-Only-Before-Basic {
  animation: position-only-before-basic-blinking 3.5s 0s forwards, sixth-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-basic-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionBasicText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.Sixth-Position-Only-After-Basic {
  animation: sixth-rotate-after 1s 0s forwards, position-only-after-basic-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-basic-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionBasicText');
  }
}

.Sixth-Position-Only-Before-Next {
  animation: position-only-before-next-blinking 3.5s 0s forwards, sixth-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-next-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionNextText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.Sixth-Position-Only-After-Next {
  animation: sixth-rotate-after 1s 0s forwards, position-only-after-next-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-next-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionNextText');
  }
}

/** 回転 */
@keyframes sixth-rotate-before {
  0% {
    transform: scaleX(v-bind('sixthPosTrans')) rotateX(0deg);
  }
  100% {
    transform: scaleX(v-bind('sixthPosTrans')) rotateX(90deg);
  }
}

@keyframes sixth-rotate-after {
  0% {
    transform: scaleX(v-bind('sixthPosTrans')) rotateX(90deg);
  }
  100% {
    transform: scaleX(v-bind('sixthPosTrans')) rotateX(0deg);
  }
}

/** 7番 */
.Seventh-Position-Only-Before-Basic {
  animation: position-only-before-basic-blinking 3.5s 0s forwards, seventh-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-basic-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionBasicText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.Seventh-Position-Only-After-Basic {
  animation: seventh-rotate-after 1s 0s forwards, position-only-after-basic-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-basic-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionBasicText');
  }
}

.Seventh-Position-Only-Before-Next {
  animation: position-only-before-next-blinking 3.5s 0s forwards, seventh-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-next-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionNextText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.Seventh-Position-Only-After-Next {
  animation: seventh-rotate-after 1s 0s forwards, position-only-after-next-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-next-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionNextText');
  }
}

/** 回転 */
@keyframes seventh-rotate-before {
  0% {
    transform: scaleX(v-bind('seventhPosTrans')) rotateX(0deg);
  }
  100% {
    transform: scaleX(v-bind('seventhPosTrans')) rotateX(90deg);
  }
}

@keyframes seventh-rotate-after {
  0% {
    transform: scaleX(v-bind('seventhPosTrans')) rotateX(90deg);
  }
  100% {
    transform: scaleX(v-bind('seventhPosTrans')) rotateX(0deg);
  }
}

/** 8番 */
.Eighth-Position-Only-Before-Basic {
  animation: position-only-before-basic-blinking 3.5s 0s forwards, eighth-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-basic-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionBasicText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.Eighth-Position-Only-After-Basic {
  animation: eighth-rotate-after 1s 0s forwards, position-only-after-basic-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-basic-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionBasicText');
  }
}

.Eighth-Position-Only-Before-Next {
  animation: position-only-before-next-blinking 3.5s 0s forwards, eighth-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-next-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionNextText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.Eighth-Position-Only-After-Next {
  animation: eighth-rotate-after 1s 0s forwards, position-only-after-next-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-next-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionNextText');
  }
}

/** 回転 */
@keyframes eighth-rotate-before {
  0% {
    transform: scaleX(v-bind('eighthPosTrans')) rotateX(0deg);
  }
  100% {
    transform: scaleX(v-bind('eighthPosTrans')) rotateX(90deg);
  }
}

@keyframes eighth-rotate-after {
  0% {
    transform: scaleX(v-bind('eighthPosTrans')) rotateX(90deg);
  }
  100% {
    transform: scaleX(v-bind('eighthPosTrans')) rotateX(0deg);
  }
}

/** 9番 */
.Ninth-Position-Only-Before-Basic {
  animation: position-only-before-basic-blinking 3.5s 0s forwards, ninth-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-basic-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionBasicText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.Ninth-Position-Only-After-Basic {
  animation: ninth-rotate-after 1s 0s forwards, position-only-after-basic-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-basic-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionBasicText');
  }
}

.Ninth-Position-Only-Before-Next {
  animation: position-only-before-next-blinking 3.5s 0s forwards, ninth-rotate-before 1s 4s forwards;
}

@keyframes position-only-before-next-blinking {
  0%, 50%, 70%, 90% {
    color:  v-bind('design.PositionNextText');
  }
  10%, 40%, 60%, 80%, 100% {
    color: v-bind('design.Change');
  }
}

.Ninth-Position-Only-After-Next {
  animation: ninth-rotate-after 1s 0s forwards, position-only-after-next-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-only-after-next-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color:  v-bind('design.PositionNextText');
  }
}

/** 回転 */
@keyframes ninth-rotate-before {
  0% {
    transform: scaleX(v-bind('ninthPosTrans')) rotateX(0deg);
  }
  100% {
    transform: scaleX(v-bind('ninthPosTrans')) rotateX(90deg);
  }
}

@keyframes ninth-rotate-after {
  0% {
    transform: scaleX(v-bind('ninthPosTrans')) rotateX(90deg);
  }
  100% {
    transform: scaleX(v-bind('ninthPosTrans')) rotateX(0deg);
  }
}

/** ---------------------------メンバーごと------------------------ */
/** 標準 */
.Member-Before-Basic {
  animation: member-before-basic-blinking 2s 0s forwards;
}

@keyframes member-before-basic-blinking {
  0%, 40%, 80% {
    color: v-bind('design.NameBasicText');
  }
  20%, 60%, 100% {
    color: v-bind('design.Change');
  }
}

.Member-After-Basic {
  animation: member-after-basic-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes member-after-basic-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color: v-bind('design.NameBasicText');
  }
}

.Position-Member-Before-Basic {
  animation: position-member-before-basic-blinking 2s 0s forwards;
}

@keyframes position-member-before-basic-blinking {
  0%, 40%, 80% {
    color: v-bind('design.PositionBasicText');
  }
  20%, 60%, 100% {
    color: v-bind('design.Change');
  }
}

.Position-Member-After-Basic {
  animation: position-member-after-basic-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-member-after-basic-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color: v-bind('design.PositionBasicText');
  }
}

/** 打者 */
.Member-Before-Batter {
  animation: member-before-batter-blinking 2s 0s forwards;
}

@keyframes member-before-batter-blinking {
  0%, 40%, 80% {
    color: v-bind('design.NameBatterText');
  }
  20%, 60%, 100% {
    color: v-bind('design.Change');
  }
}

.Member-After-Batter {
  animation: member-after-batter-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes member-after-batter-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color: v-bind('design.NameBatterText');
  }
}

.Position-Member-Before-Batter {
  animation: position-member-before-batter-blinking 2s 0s forwards;
}

@keyframes position-member-before-batter-blinking {
  0%, 40%, 80% {
    color: v-bind('design.PositionBatterText');
  }
  20%, 60%, 100% {
    color: v-bind('design.Change');
  }
}

.Position-Member-After-Batter {
  animation: position-member-after-batter-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-member-after-batter-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color: v-bind('design.PositionBatterText');
  }
}

/** 走者 */
.Member-Before-Runner {
  animation: member-before-runner-blinking 2s 0s forwards;
}

@keyframes member-before-runner-blinking {
  0%, 40%, 80% {
    color: v-bind('design.NameRunnerText');
  }
  20%, 60%, 100% {
    color: v-bind('design.Change');
  }
}

.Member-After-Runner {
  animation: member-after-runner-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes member-after-runner-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color: v-bind('design.NameRunnerText');
  }
}

.Position-Member-Before-Runner {
  animation: position-member-before-runner-blinking 2s 0s forwards;
}

@keyframes position-member-before-runner-blinking {
  0%, 40%, 80% {
    color: v-bind('design.PositionRunnerText');
  }
  20%, 60%, 100% {
    color: v-bind('design.Change');
  }
}

.Position-Member-After-Runner {
  animation: position-member-after-runner-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-member-after-runner-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color: v-bind('design.PositionRunnerText');
  }
}

/** 次回先頭 */
.Member-Before-Next {
  animation: member-before-next-blinking 2s 0s forwards;
}

@keyframes member-before-next-blinking {
  0%, 40%, 80% {
    color: v-bind('design.NameNextText');
  }
  20%, 60%, 100% {
    color: v-bind('design.Change');
  }
}

.Member-After-Next {
  animation: member-after-next-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes member-after-next-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color: v-bind('design.NameNextText');
  }
}

.Position-Member-Before-Next {
  animation: position-member-before-next-blinking 2s 0s forwards;
}

@keyframes position-member-before-next-blinking {
  0%, 40%, 80% {
    color: v-bind('design.PositionNextText');
  }
  20%, 60%, 100% {
    color: v-bind('design.Change');
  }
}

.Position-Member-After-Next {
  animation: position-member-after-next-blinking 0.5s 2s forwards;
  color: v-bind('design.Change');
}

@keyframes position-member-after-next-blinking {
  0% {
    color: v-bind('design.Change');
  }
  100% {
    color: v-bind('design.PositionNextText');
  }
}

/** スライド */
.Member-Before-Slide {
  animation: slide-before 1.5s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  opacity: 1;
}

@keyframes slide-before {
  0% {
    transform: translateX(0px);
    opacity: 1;
  }
  100% {
    transform: translateX(230px);
    opacity: 1;
  }
}

.Member-After-Slide {
  animation: SlideInText 1s;
  animation-fill-mode: forwards;
  opacity: 1;
}

.Text-Shadow {
  text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.8);
}

.Basic-Shadow {
  text-shadow: 1px 1px 0px v-bind('design.NameBasicEdge'),
               -1px -1px 0px v-bind('design.NameBasicEdge'),
               -1px 1px 0px v-bind('design.NameBasicEdge'),
               -1px -1px 0px v-bind('design.NameBasicEdge'),
               0px 1px 0px v-bind('design.NameBasicEdge'),
               0px -1px 0px v-bind('design.NameBasicEdge'),
               -1px 0px 0px v-bind('design.NameBasicEdge'),
               1px 0px 0px v-bind('design.NameBasicEdge'),
               3px 3px 2px rgba(0, 0, 0, 0.8);
}

.Batter-Shadow {
  text-shadow: 1px 1px 0px v-bind('design.NameBatterEdge'),
               -1px -1px 0px v-bind('design.NameBatterEdge'),
               -1px 1px 0px v-bind('design.NameBatterEdge'),
               -1px -1px 0px v-bind('design.NameBatterEdge'),
               0px 1px 0px v-bind('design.NameBatterEdge'),
               0px -1px 0px v-bind('design.NameBatterEdge'),
               -1px 0px 0px v-bind('design.NameBatterEdge'),
               1px 0px 0px v-bind('design.NameBatterEdge'),
               3px 3px 2px rgba(0, 0, 0, 0.8);
}

.Runner-Shadow {
  text-shadow: 1px 1px 0px v-bind('design.NameRunnerEdge'),
               -1px -1px 0px v-bind('design.NameRunnerEdge'),
               -1px 1px 0px v-bind('design.NameRunnerEdge'),
               -1px -1px 0px v-bind('design.NameRunnerEdge'),
               0px 1px 0px v-bind('design.NameRunnerEdge'),
               0px -1px 0px v-bind('design.NameRunnerEdge'),
               -1px 0px 0px v-bind('design.NameRunnerEdge'),
               1px 0px 0px v-bind('design.NameRunnerEdge'),
               3px 3px 2px rgba(0, 0, 0, 0.8);
}

.Next-Shadow {
  text-shadow: 1px 1px 0px v-bind('design.NameNextEdge'),
               -1px -1px 0px v-bind('design.NameNextEdge'),
               -1px 1px 0px v-bind('design.NameNextEdge'),
               -1px -1px 0px v-bind('design.NameNextEdge'),
               0px 1px 0px v-bind('design.NameNextEdge'),
               0px -1px 0px v-bind('design.NameNextEdge'),
               -1px 0px 0px v-bind('design.NameNextEdge'),
               1px 0px 0px v-bind('design.NameNextEdge'),
               3px 3px 2px rgba(0, 0, 0, 0.8);
}

</style>
