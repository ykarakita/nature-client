<template>
  <div class="device-box">
    <div class="device-heading">
      <h2>{{ device.name }}</h2>
      <h2>{{ device.newest_events.te.val }}℃</h2>
    </div>
    <ul v-for="appliance in appliances" v-bind:key="appliance.id">
      <ApplianceItem :appliance="appliance" />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import ApplianceItem from "@/components/ApplianceItem.vue";
import { Appliance, Device } from "@/types";

export default Vue.extend({
  name: "Device.vue",
  props: {
    device: Object as PropType<Device>,
    appliances: Array as PropType<Appliance[]>
  },
  components: {
    ApplianceItem
  }
});
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0 10px;
}
.device-box {
  border: 2px solid #ccc;
  padding: 0 5px 15px 5px;
}
.device-heading {
  text-align: center;
}
</style>
