<template>
  <v-container>
    <h1 class="heading mb-3 ml-5">REFERENCE</h1>
    <v-container fluid class="effect-text">
      <span class="heading mech">Structure Damage & Overheating</span>
      <v-row dense justify="center">
        <v-col>
          <v-toolbar color="red darken-3" dark>
            <v-toolbar-title>STRUCTURE DAMAGE</v-toolbar-title>
          </v-toolbar>
          <v-card>
            <v-card-text>
              <v-row>
                <v-col>
                  <span class="heading h3">Roll</span>
                </v-col>
                <v-col v-if="$vuetify.breakpoint.smAndUp" cols="3">
                  <span class="heading h3">Result</span>
                </v-col>
                <v-col cols="7">
                  <span class="heading h3">Effect</span>
                </v-col>
              </v-row>
              <v-divider class="ma-2" />
              <v-row>
                <v-col>
                  <v-icon large>mdi-dice-5</v-icon>
                  <v-icon large>mdi-minus</v-icon>
                  <v-icon large>mdi-dice-6</v-icon>
                </v-col>
                <v-col v-if="$vuetify.breakpoint.smAndUp" cols="3">
                  <span class="heading h3">Glancing Blow</span>
                </v-col>
                <v-col cols="7">
                  <span class="body-text text--text">
                    Emergency systems kick in and stabilize your mech. However, your mech is
                    <b>impaired</b>
                    until the end of your next turn.
                  </span>
                </v-col>
              </v-row>
              <v-divider class="ma-2" />
              <v-row>
                <v-col>
                  <v-icon large>mdi-dice-2</v-icon>
                  <v-icon large>mdi-minus</v-icon>
                  <v-icon large>mdi-dice-4</v-icon>
                </v-col>
                <v-col v-if="$vuetify.breakpoint.smAndUp" cols="3">
                  <span class="heading h3">System Trauma</span>
                </v-col>
                <v-col cols="7">
                  <span class="body-text text--text">
                    Parts of your mech are torn off by the damage. Roll a d6. On a 1-3, all the
                    weapons on one mount are destroyed. On a 4-6, a system is destroyed. You choose
                    what’s destroyed, but systems or weapons with the limited tag and no charges
                    left are not valid. If there’s nothing left of one result, it becomes the other.
                    If there’s absolutely nothing left to destroy, this result becomes DIRECT HIT
                    instead.
                  </span>
                </v-col>
              </v-row>
              <v-divider class="ma-2" />
              <v-row>
                <v-col>
                  <v-icon large>mdi-dice-1</v-icon>
                </v-col>
                <v-col v-if="$vuetify.breakpoint.smAndUp" cols="3">
                  <span class="heading h3">Direct Hit</span>
                </v-col>
                <v-col cols="7">
                  <span class="body-text text--text">
                    This result has different outcomes depending on how much structure your mech has
                    remaining.
                    <br />
                    3+ - Your mech is
                    <b>stunned</b>
                    until the end of your next turn.
                    <br />
                    2 - Your mech must pass a
                    <b>hull</b>
                    check or be
                    <b>destroyed.</b>
                    Even on a successful check, your mech is
                    <b>stunned</b>
                    until the end of your next turn.
                    <br />
                    1 or lower - Your mech is
                    <b>destroyed.</b>
                  </span>
                </v-col>
              </v-row>
              <v-divider class="ma-2" />
              <v-row>
                <v-col>
                  <v-icon large>mdi-dice-1</v-icon>
                  <v-icon large>mdi-dice-1</v-icon>
                </v-col>
                <v-col v-if="$vuetify.breakpoint.smAndUp" cols="3">
                  <span class="heading h3">Crushing Hit</span>
                </v-col>
                <v-col cols="7">
                  <span class="body-text text--text">
                    Your mech is damaged beyond repair and is
                    <b>destroyed.</b>
                    You can still exit it as normal.
                  </span>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-4">
        <v-col>
          <v-toolbar color="orange darken-4" dark>
            <v-toolbar-title>OVERHEATING</v-toolbar-title>
          </v-toolbar>
          <v-card>
            <v-card-text>
              <v-row>
                <v-col>
                  <span class="heading h3">Roll</span>
                </v-col>
                <v-col v-if="$vuetify.breakpoint.smAndUp" cols="3">
                  <span class="heading h3">Result</span>
                </v-col>
                <v-col cols="7">
                  <span class="heading h3">Effect</span>
                </v-col>
              </v-row>
              <v-divider class="ma-2" />
              <v-row>
                <v-col>
                  <v-icon large>mdi-dice-5</v-icon>
                  <v-icon large>mdi-minus</v-icon>
                  <v-icon large>mdi-dice-6</v-icon>
                </v-col>
                <v-col v-if="$vuetify.breakpoint.smAndUp" cols="3">
                  <span class="heading h3">Emergency Shunt</span>
                </v-col>
                <v-col cols="7">
                  <span class="body-text text--text">
                    Cooling systems recover and manage to contain the peaking heat levels. However,
                    your mech is
                    <b>impaired</b>
                    until the end of your next turn.
                  </span>
                </v-col>
              </v-row>
              <v-divider class="ma-2" />
              <v-row>
                <v-col>
                  <v-icon large>mdi-dice-2</v-icon>
                  <v-icon large>mdi-minus</v-icon>
                  <v-icon large>mdi-dice-4</v-icon>
                </v-col>
                <v-col v-if="$vuetify.breakpoint.smAndUp" cols="3">
                  <span class="heading h3">Power Plant Destabilize</span>
                </v-col>
                <v-col cols="7">
                  <span class="body-text text--text">
                    Your mech’s power plant becomes unstable, ejecting jets of plasma. Your mech
                    suffers from the
                    <b>exposed</b>
                    status (taking double damage) until it takes action to remove it.
                  </span>
                </v-col>
              </v-row>
              <v-divider class="ma-2" />
              <v-row>
                <v-col>
                  <v-icon large>mdi-dice-1</v-icon>
                </v-col>
                <v-col v-if="$vuetify.breakpoint.smAndUp" cols="3">
                  <span class="heading h3">Meltdown</span>
                </v-col>
                <v-col cols="7">
                  <span class="body-text text--text">
                    This result has different outcomes depending on how much reactor stress your
                    mech has remaining.
                    <br />
                    3+ - Your mech becomes EXPOSED
                    <br />
                    2 - Roll an ENGINEERING check. On a success, your mech is EXPOSED; on a failure,
                    it suffers a reactor meltdown after 1d6 of your turns (rolled by the GM). A
                    reactor meltdown can be prevented by retrying the ENGINEERING check as a full
                    action.
                    <br />
                    1 or lower - Your mech suffers a reactor meltdown at the end of your next turn.
                  </span>
                </v-col>
              </v-row>
              <v-divider class="ma-2" />
              <v-row>
                <v-col>
                  <v-icon large>mdi-dice-1</v-icon>
                  <v-icon large>mdi-dice-1</v-icon>
                </v-col>
                <v-col v-if="$vuetify.breakpoint.smAndUp" cols="3">
                  <span class="heading h3">Irreversible Meltdown</span>
                </v-col>
                <v-col cols="7">
                  <span class="body-text text--text">
                    Your reactor goes critical. Your mech will suffer a reactor meltdown at the end
                    of your next turn.
                  </span>
                </v-col>
              </v-row>
              <v-divider class="ma-2" />
              <p class="ma-3 flavor-text">
                Certain overheating results can cause a reactor meltdown. This can be immediate, or
                involve a countdown (in which case update the countdown at the start of your turn.
                The meltdown triggers when specified). When a mech suffers a reactor meltdown, any
                pilot inside immediately dies, the mech is immediately vaporized in a catastrophic
                eruption, annihilating the wreck, and any characters inside a burst 2 area centered
                on the mech must pass an agility save or take 4d6 explosive damage, and half on a
                successful save.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-4">
        <v-col>
          <v-toolbar color="yellow darken-4" dark>
            <v-toolbar-title>DOWN AND OUT</v-toolbar-title>
          </v-toolbar>
          <v-card>
            <v-card-text>
              <v-row>
                <v-col>
                  <span class="heading h3">Roll</span>
                </v-col>
                <v-col cols="10">
                  <span class="heading h3">Effect</span>
                </v-col>
              </v-row>
              <v-divider class="ma-2" />
              <v-row>
                <v-col>
                  <v-icon large>mdi-dice-6</v-icon>
                </v-col>
                <v-col cols="10">
                  <span class="body-text text--text">
                    On 6, your pilot barely shrugs off the hit (or it’s a close call) – they return
                    to 1 HP.
                  </span>
                </v-col>
              </v-row>
              <v-divider class="ma-2" />
              <v-row>
                <v-col>
                  <v-icon large>mdi-dice-2</v-icon>
                  <v-icon large>mdi-minus</v-icon>
                  <v-icon large>mdi-dice-5</v-icon>
                </v-col>
                <v-col cols="10">
                  <span class="body-text text--text">
                    On 2–5, your pilot gains the DOWN AND OUT status (and the STUNNED condition) and
                    remains at 0 HP. They are unconscious, pinned, bleeding out, or otherwise unable
                    to act. If you’re in mech combat, they are Stunned and their EVASION drops to 5.
                    If they take any more damage – from being shot in the head, for instance – they
                    die.
                    <br />
                    You can choose for your pilot to die instead of becoming DOWN AND OUT.
                  </span>
                </v-col>
              </v-row>
              <v-divider class="ma-2" />
              <v-row>
                <v-col>
                  <v-icon large>mdi-dice-1</v-icon>
                </v-col>
                <v-col cols="10">
                  <span class="body-text text--text">
                    On 1, your pilot’s luck has run out – they die immediately.
                  </span>
                </v-col>
              </v-row>
              <v-divider class="ma-2" />
              <p class="ma-3 flavor-text">If your pilot is ever reduced to 0 HP, roll 1d6</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'reference',
})
</script>
