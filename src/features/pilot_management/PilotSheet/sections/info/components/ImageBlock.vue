<template>
  <div class="text-center">
    <div class="border">
      <v-img
        v-if="pilot.Portrait"
        :key="pilot.PortraitController.Image"
        :src="pilot.Portrait"
        max-width="100%"
      />
    </div>
    <v-btn
      outlined
      color="secondary"
      small
      block
      class="fadeSelect"
      @click="$refs.imageSelector.open()"
    >
      <v-icon left>mdi-circle-edit-outline</v-icon>
      Set Pilot Portrait
    </v-btn>

    <cc-image-selector-web ref="imageSelector" :item="pilot" type="pilot" />
  </div>
</template>

<script lang="ts">
import activePilot from '@/features/pilot_management/mixins/activePilot'

import vueMixins from '@/util/vueMixins'

export default vueMixins(activePilot).extend({
  name: 'image-block',
})
</script>
