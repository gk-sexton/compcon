<template>
  <v-col :cols="cols" :lg="lg" :md="md" :sm="sm">
    <div class="mx-2" @click="$emit('clicked')" @keydown.enter="$emit('clicked')" tabindex="0">
      <v-alert outlined :color="color" prominent dense border="left">
        <v-icon slot="prepend" class="icn" x-large :color="`${color} lighten-1`" left>
          {{ icon }}
        </v-icon>
        <div class="d-inline mt-n1 heading h2 stark--text">{{ name }}</div>
      </v-alert>
    </div>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({ name: 'cc-compendium-page-btn' })
export default class CompendiumPageButton extends Vue {
  @Prop({ type: String, required: true })
  readonly name!: string

  @Prop({ type: String, required: false, default: '' })
  readonly icon: string

  @Prop({ type: String, required: false, default: '' })
  readonly cols?: string

  @Prop({ type: String, required: false, default: '' })
  readonly lg?: string

  @Prop({ type: String, required: false, default: '' })
  readonly md?: string

  @Prop({ type: String, required: false, default: '' })
  readonly sm?: string

  @Prop({ type: String, required: false, default: 'primary' })
  readonly color: string
}
</script>

<style scoped>
.v-alert {
  filter: brightness(100%);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.v-alert:hover {
  filter: brightness(160%);
}

.icn {
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;
}

.v-alert:hover > .icn {
  opacity: 1;
  color: var(--v-stark-base);
}
</style>
