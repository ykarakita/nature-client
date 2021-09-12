<template>
  <div class="hello">
    <ul v-for="device in devices" v-bind:key="device.id">
      <DeviceItem :device="device" :appliances="deviceAppliances(device)" />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DeviceItem from "@/components/DeviceItem.vue";
import { getAppliances } from "@/repositories/applianceRepository";
import { getDevices } from "@/repositories/deviceRepository";
import { Device, Appliance } from "@/types";

export default Vue.extend({
  name: "Top",
  components: {
    DeviceItem
  },
  data() {
    return {
      appliances: [] as Appliance[],
      devices: [] as Device[],
      token: this.$route.query.token
    };
  },
  created() {
    this.fetchAppliances();
    this.fetchDevices();
  },
  methods: {
    async fetchDevices() {
      const response = await getDevices(this.token);
      this.devices = response.data;
    },
    async fetchAppliances() {
      const response = await getAppliances(this.token);
      this.appliances = response.data;
    },
    deviceAppliances(device: Device): Appliance[] {
      return this.appliances.filter(
        (appliance: Appliance) => appliance.device.id === device.id
      );
    }
  }
});
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0 10px;
}
</style>
