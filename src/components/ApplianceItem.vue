<template>
  <div>
    <h4>{{ appliance.nickname }}</h4>
    <div class="button-wrapper">
      <div class="appliance-box">
        <button v-on:click="turnOn(appliance.id)">ON</button>
        <button v-on:click="turnOff(appliance.id)">OFF</button>
      </div>
      <div class="appliance-box" v-if="appliance.type === 'AC'">
        <button v-on:click="changeTemp(appliance, -1)">-1</button>
        {{ appliance.settings.mode }}
        {{ appliance.settings.temp }}℃
        <button v-on:click="changeTemp(appliance, 1)">+1</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Appliance } from "@/types";
import {
  Params,
  sendAirconSettings
} from "@/repositories/airconSettingRepository";

export default Vue.extend({
  name: "ApplianceItem",
  props: {
    appliance: Object as PropType<Appliance>
  },
  methods: {
    async changeTemp(appliance: Appliance, temp: number) {
      const params: Params = {
        temperature: eval(`${appliance.settings.temp}+${temp}`)
      };
      const token = this.$route.query["token"] || ""
      const response = await sendAirconSettings(token, appliance.id, params);
      this.appliance.settings = response.data;
    },
    async turnOff(applianceId: string) {
      const params: Params = { button: "power-off" }
      const token = this.$route.query["token"] || ""
      const response = await sendAirconSettings(token, applianceId, params);
      this.appliance.settings = response.data;
    },
    async turnOn(applianceId: string) {
      const params: Params = {};
      const token = this.$route.query["token"] || ""
      const response = await sendAirconSettings(token, applianceId, params);
      this.appliance.settings = response.data;
    }
  }
});
</script>

<style scoped>
button {
  font-size: large;
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid gray;
}
.appliance-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 45%;
  text-align: center;
}
.button-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
