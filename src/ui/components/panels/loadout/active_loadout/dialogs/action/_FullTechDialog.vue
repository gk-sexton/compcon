<template>
  <div class="pt-2">
    <action-detail-expander :action="action" />
    <v-divider class="my-3" />
    <v-container style="max-width: 800px">
      <div v-for="(k, i) in Object.keys(quickActions)" :key="`sys_act_${i}`">
        <div class="flavor-text mb-n2 mt-1">{{ k }}</div>
        <item-selector-row
          v-for="(a, j) in quickActions[k]"
          :key="`action_${j}`"
          :item="a"
          :disabled="quick.length === MAX_QUICK || full.length > 0"
          color="action--quick"
          @click="addQuick(a)"
        />
        <cc-combat-dialog
          v-for="(a, j) in quickActions[k]"
          v-show="a.IsTechAttack"
          :key="`action_dialog_${j}`"
          :ref="`dialog_${a.ID}`"
          fulltech
          :action="a"
          :mech="mech"
          @add-invade="quick.push($event)"
          @add-fail="quick.push('attack-fail-' + $event)"
        />
        <item-selector-row
          v-if="i === 0"
          :item="invadeAction"
          :disabled="quick.length === MAX_QUICK || full.length > 0"
          color="action--quick"
          @click="openInvade()"
        />
      </div>
    </v-container>

    <v-divider v-if="Object.keys(fullActions).length" class="my-3" />

    <v-container v-if="Object.keys(fullActions).length" style="max-width: 800px">
      <div v-for="(k, i) in Object.keys(fullActions)" :key="`sys_act_${i}`">
        <div class="flavor-text mb-n2 mt-1">{{ k }}</div>
        <item-selector-row
          v-for="(a, j) in fullActions[k]"
          :key="`action_${j}`"
          :item="a"
          :disabled="quick.length > 0 || full.length > 0"
          color="action--full"
          @click="doFullTech(a)"
        />
        <cc-combat-dialog
          v-for="(a, j) in fullActions[k]"
          :key="`action_dialog_${j}`"
          :ref="`dialog_${a.ID}`"
          :action="a"
          :mech="mech"
          fulltech
          @fulltech-used="addFull($event)"
          @add-invade="addFull($event)"
          @add-fail="addFull('attack-fail-' + $event)"
        />
      </div>
    </v-container>

    <v-card-text>
      <v-slide-x-reverse-transition group>
        <v-row
          v-for="(q, i) in quick"
          :key="`quick_sel_${i}`"
          dense
          justify="center"
          align="center"
        >
          <v-col cols="12" md="">
            <v-alert v-if="q === 'invade-fail'" dense outlined class="text-center">
              <span class="heading h3 text-disabled">INVASION ATTEMPT FAILED</span>
            </v-alert>
            <v-alert
              v-else-if="typeof q === 'string' && q.startsWith('attack-fail-')"
              dense
              outlined
              class="text-center"
            >
              <span class="heading h3 text-disabled">{{ systemFromFailure(q) }} FAILED</span>
            </v-alert>
            <cc-action v-else panel :action="q" />
          </v-col>
          <v-col cols="auto">
            <v-btn v-if="$vuetify.breakpoint.mdAndUp" x-large icon @click="removeQuick(i)">
              <v-icon x-large>mdi-close</v-icon>
            </v-btn>
            <v-btn v-else small block @click="removeQuick(i)">
              <v-icon small left>mdi-close</v-icon>
              Cancel {{ q.Name }}
            </v-btn>
          </v-col>
        </v-row>
      </v-slide-x-reverse-transition>

      <v-slide-x-reverse-transition group>
        <v-row
          v-for="(f, i) in full"
          :key="`full_sel_${i}`"
          dense
          justify="center"
          align="center"
        >
          <v-col cols="12" md="">
            <v-alert
              v-if="typeof f === 'string' && f.startsWith('attack-fail-')"
              dense
              outlined
              class="text-center"
            >
              <span class="heading h3 text-disabled">{{ systemFromFailure(f) }} FAILED</span>
            </v-alert>
            <cc-action v-else panel :action="f" />
          </v-col>
          <v-col cols="auto">
            <v-btn v-if="$vuetify.breakpoint.mdAndUp" x-large icon @click="removeFull()">
              <v-icon x-large>mdi-close</v-icon>
            </v-btn>
            <v-btn v-else small block @click="removeFull()">
              <v-icon small left>mdi-close</v-icon>
              Cancel {{ f.Name }}
            </v-btn>
          </v-col>
        </v-row>
      </v-slide-x-reverse-transition>

      <v-slide-x-reverse-transition>
        <v-row v-if="quick.length === MAX_QUICK || full.length > 0" dense justify="center">
          <v-col lg="6" md="10" xs="12">
            <v-btn block x-large color="primary" :disabled="used" @click="$emit('use')">
              {{ !used ? 'CONFIRM' : 'ACTION CONFIRMED' }}
            </v-btn>
          </v-col>
        </v-row>
      </v-slide-x-reverse-transition>
    </v-card-text>
    <invade-dialog
      ref="inv_dialog"
      fulltech
      :mech="mech"
      :action="invadeAction"
      @add-invade="quick.push($event)"
      @add-fail="quick.push('invade-fail')"
    />
  </div>
</template>

<script lang="ts">
import _ from 'lodash'
import ActionDetailExpander from '../../components/_ActionDetailExpander.vue'
import ItemSelectorRow from '../../components/_ItemSelectorRow.vue'
import InvadeDialog from './_InvadeDialog.vue'

import Vue from 'vue'
import { ActivationType } from '@/classes/enums'

export default Vue.extend({
  name: 'full-tech-dialog',
  components: { ActionDetailExpander, ItemSelectorRow, InvadeDialog },
  props: {
    used: { type: Boolean },
    mech: {
      type: Object,
      required: true,
    },
    action: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    quick: [],
    full: [],
    MAX_QUICK: 2,
  }),
  computed: {
    state() {
      return this.mech.Pilot.State
    },
    invadeAction() {
      return this.state.TechActions.find(x => x.ID === 'act_invade')
    },
    quickActions() {
      const qtArr = this.state.TechActions.filter(
        x => x.Activation === ActivationType.QuickTech && x.ID !== 'act_invade'
      )
      return _.groupBy(qtArr, 'Origin')
    },
    fullActions() {
      return _.groupBy(
        this.state.TechActions.filter(x => x.Activation === ActivationType.FullTech),
        'Origin'
      )
    },
  },
  watch: {
    used: {
      immediate: true,
      deep: true,
      handler: function (newval) {
        if (!newval) this.quick = []
      },
    },
  },
  methods: {
    doFullTech(action) {
      const ref = `dialog_${action.ID}`
      this.$refs[ref][0].show()
    },
    init() {
      this.quick = this.quick.splice(0, this.quick.length)
    },
    addQuick(action) {
      if (action.IsTechAttack) this.doFullTech(action)
      else if (this.quick.length < this.MAX_QUICK) this.quick.push(action)
    },
    removeQuick(idx) {
      this.quick.splice(idx, 1)
    },
    addFull(action){
      if(this.full.length === 0)
        this.full.push(action)
    },
    removeFull(){
      this.full = []
    },
    openInvade() {
      this.$refs.inv_dialog.init()
      this.$refs.inv_dialog.show()
    },
    systemFromFailure(failureString) {
      return failureString.split('-')[2].toUpperCase()
    },
  },
})
</script>