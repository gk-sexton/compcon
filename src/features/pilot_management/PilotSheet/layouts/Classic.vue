<template>
  <div>
    <info-view id="section-0" :pilot="pilot" />
    <narrative-view id="section-1" :pilot="pilot" />
    <tactical-view id="section-2" :pilot="pilot" />
    <bonds-view v-show="hasBondData" id="section-4" :pilot="pilot" />
    <mech-hangar-view id="section-3" :pilot="pilot" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NarrativeView from '../sections/narrative/index.vue'
import InfoView from '../sections/info/index.vue'
import TacticalView from '../sections/tactical/index.vue'
import MechHangarView from '../sections/hangar/index.vue'
import BondsView from '../sections/bonds/index.vue'
import { getModule } from 'vuex-module-decorators'
import { CompendiumStore } from '@/store'

export default Vue.extend({
  name: 'classic',
  components: { NarrativeView, InfoView, TacticalView, MechHangarView, BondsView },
  props: {
    pilot: {
      type: Object,
      required: true,
    },
    page: {
      type: String,
      required: true,
    },
  },
  watch: {
    page(newPage) {
      this.$vuetify.goTo(`#section-${newPage}`, {
        duration: 15,
        easing: 'easeInOutCubic',
        offset: 10,
      })
    },
  },
  mounted() {
    this.$vuetify.goTo(0, {
      duration: 0,
    })
  },
  computed: {
    hasBondData() {
      return this.pilot.Level >= 1 && getModule(CompendiumStore, this.$store).Bonds.length
    },
  },
})
</script>
