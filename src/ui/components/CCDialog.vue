<template>
  <div>
    <v-btn v-if="flat" :small="smallBtn || $vuetify.breakpoint.smAndDown" :color="color" text :dark="dark"
      @click="dialog = true">
      <slot name="button" />
    </v-btn>
    <v-btn v-else tile :small="smallBtn || $vuetify.breakpoint.smAndDown" :color="color" @click="dialog = true">
      <slot name="button" />
    </v-btn>
    <v-dialog v-model="dialog" :fullscreen="fullscreen || $vuetify.breakpoint.mdAndDown"
      :width="small ? '30vw' : large ? '80vw' : '50vw'">
      <v-card tile class="background">
        <cc-titlebar :color="color">
          <slot name="title" />
          <slot slot="items" name="title-items" />
        </cc-titlebar>

        <v-card-text>
          <slot />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions v-if="fullscreen || $vuetify.breakpoint.mdAndDown || (noConfirm && !noDismiss)">
          <v-spacer />
          <v-btn text @click="dialog = false">dismiss</v-btn>
        </v-card-actions>
        <v-card-actions v-else-if="!noDismiss">
          <v-btn text @click="dialog = false">cancel</v-btn>
          <v-spacer />
          <cc-btn @click="confirm">confirm</cc-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component({ name: 'cc-dialog' })
export default class CCDialog extends Vue {
  @Prop({ type: Boolean })
  readonly small?: boolean
  @Prop({ type: Boolean })
  readonly fullscreen?: boolean
  @Prop({ type: Boolean })
  readonly smallBtn?: boolean
  @Prop({ type: Boolean })
  readonly large?: boolean

  @Prop({ type: String, required: false, default: 'primary' })
  readonly color: string

  @Prop({ type: Boolean })
  readonly flat?: boolean
  @Prop({ type: Boolean })
  readonly dark?: boolean
  @Prop({ type: Boolean })
  readonly noConfirm?: boolean
  @Prop({ type: Boolean })
  readonly noDismiss?: boolean

  dialog = false

  @Emit()
  confirm(): void {
    this.dialog = false
  }
}
</script>

<style scoped>
.v-btn:focus {
  outline: rgba(0, 0, 0, 0.202) solid 5px;
}
</style>