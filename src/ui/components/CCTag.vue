<template>
  <div
    v-if="!tag.IsHidden"
    :class="`text-center d-inline-block ${dense || $vuetify.breakpoint.mdAndDown ? '' : 'my-2'}`"
  >
    <cc-tooltip :err="tag.err" :title="tag.GetName(bonus)" :content="tag.GetDescription(bonus)">
      <v-chip
        :class="$vuetify.breakpoint.mdAndUp ? 'px-2 py-2 mx-1' : 'ma-1'"
        :color="tag.err ? 'error' : tag.IsExotic ? 'exotic' : color"
        dark
        label
        :small="small"
        :outlined="outlined"
      >
        <v-avatar>
          <v-icon v-if="tag.err" small>label_off</v-icon>
          <v-icon v-else small>label</v-icon>
        </v-avatar>
        <span v-if="tag.err">MISSING DATA</span>
        <span v-else>{{ tag.GetName(bonus).toUpperCase() }}</span>
      </v-chip>
    </cc-tooltip>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Pilot, Tag } from '@/class'

@Component({ name: 'cc-tag' })
export default class CCTag extends Vue {
  @Prop({ type: Boolean, required: false })
  readonly small?: boolean
  @Prop({ type: Boolean, required: false })
  readonly dense?: boolean
  @Prop({ type: Boolean, required: false })
  readonly outlined?: boolean

  @Prop({ type: String, required: false, default: 'primary' })
  readonly color: string

  @Prop({ type: Object, required: true })
  readonly tag!: Tag

  @Prop({ type: Object, required: false, default: null })
  readonly pilot?: Pilot

  @Prop({ type: Number, required: false, default: 0 })
  readonly bonus?: number
}
</script>
