<template>
  <div class="my-3">
    <cc-title small color="pilot" class="pl-3" style="margin-left: -70px !important">
      <section-edit-icon
        label="Add Reserves and Bonuses"
        @open-selector="$refs.dtSelector.show()"
      />
      Reserves and Bonuses
    </cc-title>
    <cc-solo-dialog
      ref="dtSelector"
      icon="cci-barrage"
      no-confirm
      title="Edit Reserves and Bonuses"
      fullscreen
      no-pad
    >
      <cc-reserve-selector :pilot="pilot" @close="$refs.dtSelector.hide()" />
    </cc-solo-dialog>
    <v-container>
      <no-data-block
        v-if="
          !pilot.ReservesController.Reserves.length &&
          !pilot.ReservesController.Organizations.length
        "
      />
      <v-row v-else dense>
        <cc-reserve-item
          v-for="(r, i) in pilot.ReservesController.Reserves"
          :key="`r_${i}`"
          :reserve="r"
          @remove="pilot.ReservesController.RemoveReserve(i)"
        />
        <cc-org-item
          v-for="(o, i) in pilot.ReservesController.Organizations"
          :key="`o_${i}`"
          :org="o"
          @remove="pilot.ReservesController.RemoveOrganization(i)"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SectionEditIcon from '../../components/SectionEditIcon.vue'
import NoDataBlock from '../../components/NoDataBlock.vue'

export default Vue.extend({
  name: 'dt-resources-block',
  components: { SectionEditIcon, NoDataBlock },
  props: {
    pilot: {
      type: Object,
      required: true,
    },
  },
})
</script>
