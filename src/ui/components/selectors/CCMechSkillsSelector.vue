<template>
  <v-container>
    <v-row dense class="mt-n6 mb-3">
      <v-col cols="12" md="5" class="ml-auto mr-auto">
        <v-alert
          :value="true"
          :type="pilot.MechSkillsController.IsMissingHASE ? 'info' : 'success'"
          outlined
          class="stat-text mt-6"
        >
          {{ pilot.MechSkillsController.CurrentHASEPoints }}/{{
            pilot.MechSkillsController.MaxHASEPoints
          }}
          Mech Skills selected
        </v-alert>
        <div class="text-center mt-n2">
          <v-btn
            small
            class="fadeSelect"
            color="info"
            outlined
            @click="pilot.MechSkillsController.Reset()"
          >
            Reset Mech Skills
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12" lg="6">
        <cc-title :small="$vuetify.breakpoint.smAndDown">HULL</cc-title>
        <span class="flavor-text">
          Your HULL skill describes your ability to build and pilot durable, heavy mechs that can
          take punches and keep going
        </span>
        <v-row dense>
          <v-col cols="auto" class="ml-auto mr-auto text-center">
            <v-btn
              color="secondary"
              :disabled="!pilot.MechSkillsController.MechSkills.Hull"
              fab
              x-small
              left
              bottom
              class="d-inline elevation-0"
              @click="remove('Hull')"
            >
              <v-icon>remove</v-icon>
            </v-btn>
            <cc-rating
              :dense="$vuetify.breakpoint.mdAndDown"
              :model="pilot.MechSkillsController.MechSkills.Hull"
            />
            <v-btn
              :disabled="!pilot.MechSkillsController.IsMissingHASE"
              color="secondary"
              fab
              x-small
              right
              bottom
              class="d-inline elevation-0"
              @click="add('Hull')"
            >
              <v-icon>add</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row dense class="mt-n3 mb-6">
          <v-col cols="auto" class="ml-auto mr-auto text-center">
            <span class="heading h3">
              MECH HP
              <span class="accent--text">
                +{{ pilot.MechSkillsController.MechSkills.Hull * 2 }}
              </span>
            </span>
            <cc-slashes class="ml-1 mr-1" />
            <span class="heading h3">
              REPAIR CAPACITY
              <span class="accent--text">
                +{{ Math.floor(pilot.MechSkillsController.MechSkills.Hull / 2) }}
              </span>
            </span>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" lg="6">
        <cc-title :small="$vuetify.breakpoint.smAndDown">AGILITY</cc-title>
        <span class="flavor-text">
          Your AGILITY skill describes your ability to build and pilot fast, evasive mechs
        </span>
        <v-row dense>
          <v-col cols="auto" class="ml-auto mr-auto text-center">
            <v-btn
              color="secondary"
              :disabled="!pilot.MechSkillsController.MechSkills.Agi"
              fab
              x-small
              left
              bottom
              class="d-inline elevation-0"
              @click="remove('Agi')"
            >
              <v-icon>remove</v-icon>
            </v-btn>
            <cc-rating
              :dense="$vuetify.breakpoint.mdAndDown"
              :model="pilot.MechSkillsController.MechSkills.Agi"
            />
            <v-btn
              :disabled="!pilot.MechSkillsController.IsMissingHASE"
              color="secondary"
              class="d-inline elevation-0"
              fab
              x-small
              right
              bottom
              @click="add('Agi')"
            >
              <v-icon>add</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-row dense class="mt-n3 mb-6">
          <v-col cols="auto" class="ml-auto mr-auto text-center">
            <span class="heading h3">EVASION</span>
            <span class="heading h3 accent--text">
              +{{ pilot.MechSkillsController.MechSkills.Agi }}
            </span>
            <cc-slashes class="ml-1 mr-1" />
            <span class="heading h3">SPEED</span>
            <span class="heading h3 accent--text">
              +{{ Math.floor(pilot.MechSkillsController.MechSkills.Agi / 2) }}
            </span>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" lg="6">
        <cc-title :small="$vuetify.breakpoint.smAndDown">SYSTEMS</cc-title>
        <span class="flavor-text">
          Your SYSTEMS skill describes your ability to build and pilot technical mechs with powerful
          electronic warfare tools
        </span>
        <v-row dense>
          <v-col cols="auto" class="ml-auto mr-auto text-center">
            <v-btn
              color="secondary"
              :disabled="!pilot.MechSkillsController.MechSkills.Sys"
              fab
              x-small
              left
              bottom
              class="d-inline elevation-0"
              @click="remove('Sys')"
            >
              <v-icon>remove</v-icon>
            </v-btn>
            <cc-rating
              :dense="$vuetify.breakpoint.mdAndDown"
              :model="pilot.MechSkillsController.MechSkills.Sys"
            />
            <v-btn
              class="d-inline elevation-0"
              color="secondary"
              :disabled="!pilot.MechSkillsController.IsMissingHASE"
              fab
              x-small
              right
              bottom
              @click="add('Sys')"
            >
              <v-icon>add</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-row dense class="mt-n3 mb-6">
          <v-col cols="auto" class="ml-auto mr-auto text-center">
            <span class="heading h3">ELECTRONIC DEFENSE</span>
            <span class="heading h3 accent--text">
              +{{ pilot.MechSkillsController.MechSkills.Sys }}
            </span>
            <cc-slashes class="ml-1 mr-1" />
            <span class="heading h3">TECH ATTACK</span>
            <span class="heading h3 accent--text">
              +{{ pilot.MechSkillsController.MechSkills.Sys }}
            </span>
            <cc-slashes class="ml-1 mr-1" />
            <span class="heading h3">SP</span>
            <span class="heading h3 accent--text">
              +{{ Math.floor(pilot.MechSkillsController.MechSkills.Sys / 2) }}
            </span>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" lg="6">
        <cc-title :small="$vuetify.breakpoint.smAndDown">Engineering</cc-title>
        <span class="flavor-text">
          Your ENGINEERING skill describes your ability to build and pilot mechs with powerful
          reactors, supplies and support systems
        </span>
        <v-row dense>
          <v-col cols="auto" class="ml-auto mr-auto text-center">
            <v-btn
              color="secondary"
              :disabled="!pilot.MechSkillsController.MechSkills.Eng"
              fab
              x-small
              left
              bottom
              class="d-inline elevation-0"
              @click="remove('Eng')"
            >
              <v-icon>remove</v-icon>
            </v-btn>
            <cc-rating
              :dense="$vuetify.breakpoint.mdAndDown"
              :model="pilot.MechSkillsController.MechSkills.Eng"
            />
            <v-btn
              class="d-inline elevation-0"
              color="secondary"
              :disabled="!pilot.MechSkillsController.IsMissingHASE"
              fab
              x-small
              right
              bottom
              @click="add('Eng')"
            >
              <v-icon>add</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-row dense class="mt-n3 mb-6">
          <v-col cols="auto" class="ml-auto mr-auto text-center">
            <span class="heading h3">HEAT CAPACITY</span>
            <span class="heading h3 accent--text">
              +{{ pilot.MechSkillsController.MechSkills.Eng }}
            </span>

            <cc-slashes class="ml-1 mr-1" />

            <span class="heading h3">LIMITED SYSTEMS BONUS</span>
            <span class="heading h3 accent--text">
              +{{ Math.floor(pilot.MechSkillsController.MechSkills.Eng / 2) }}
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Pilot, HASE } from '@/class'

export default Vue.extend({
  name: 'cc-mech-skills-selector',
  props: {
    pilot: Pilot,
  },
  watch: {
    'pilot.MechSkillsController.IsMissingHASE': function (newVal) {
      if (newVal === false) window.scrollTo(0, document.body.scrollHeight)
    },
  },
  methods: {
    add(field: HASE) {
      this.pilot.MechSkillsController.MechSkills.Increment(field)
    },
    remove(field: HASE) {
      this.pilot.MechSkillsController.MechSkills.Decrement(field)
    },
    close() {
      this.$emit('close')
    },
  },
})
</script>

<style scoped>
.bonus-text {
  position: relative;
  bottom: 20px;
}
</style>
