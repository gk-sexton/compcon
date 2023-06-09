<template>
  <v-menu offset-y top>
    <template v-slot:activator="{ on }">
      <v-btn
        class="mx-1"
        :small="$vuetify.breakpoint.lgAndUp"
        :x-small="$vuetify.breakpoint.smAndDown"
        dark
        :fab="$vuetify.breakpoint.lgAndUp || $vuetify.breakpoint.smAndDown"
        elevation="0"
        :color="available && (baseActions.length || itemActions.length) ? color : 'grey darken-2'"
        v-on="on"
      >
        <slot name="icon" />
        <span v-if="$vuetify.breakpoint.md" class="pl-2" v-html="title.replace(' ACTIONS', '')" />
      </v-btn>
    </template>
    <div>
      <v-toolbar dense flat class="heading h3" style="min-width: 80px">
        {{ title }}
        <v-spacer />
        <v-btn
          :small="$vuetify.breakpoint.lgAndUp"
          :x-small="$vuetify.breakpoint.smAndDown"
          icon
          color="accent"
          class="ml-4"
          @click="$emit('open-menu')"
        >
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list class="px-2 py-3" dense color="panel">
        <v-list-item
          v-for="(a, i) in baseActions"
          v-show="allowed.includes(a.ID)"
          :key="`${title}_action${i}_${a.Name}_${a.Used}`"
          @click="$emit('open-dialog', a)"
        >
          <v-list-item-title class="text-button">
            <v-icon left :style="!available && !a.Used ? 'opacity:0.3' : ''">
              {{ a.Used ? 'mdi-check-circle' : a.Icon }}
            </v-icon>
            {{ a.Name }}
          </v-list-item-title>
        </v-list-item>
        <v-divider v-if="baseActions.length > 0 && itemActions.length > 0" />
        <v-list-item
          v-for="(a, i) in itemActions"
          v-show="allowed.includes(a.ID)"
          :key="`${title}_action${i}_${a.Name}_${a.Used}`"
          @click="$emit('open-dialog', a)"
        >
          <v-list-item-title class="text-button">
            <v-icon left :style="!available && !a.Used ? 'opacity:0.3' : ''">
              {{ a.Used ? 'mdi-check-circle' : a.Icon }}
            </v-icon>
            {{ a.Name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'action-menu-button',
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    actions: {
      type: Array,
      required: true,
    },
    mech: {
      type: Object,
      required: true,
    },
    available: {
      type: Boolean,
    },
  },
  computed: {
    baseActions() {
      return this.actions.filter(x => !x.IsItemAction)
    },
    itemActions() {
      return this.actions.filter(x => x.IsItemAction)
    },
    allowed() {
      return this.mech.Pilot.State.AvailableActions
    },
  },
})
</script>
