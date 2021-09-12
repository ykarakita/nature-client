import axios from "axios";
import { Settings } from "@/types";

export interface Response {
  status: string
  data: Settings
}

export interface Params {
  button?: string
  temperature?: string
}

const bodyFormData = (params: any) => Object.keys(params).reduce((formData, key) => {
  formData.set(key, params[key]);
  return formData;
}, new FormData());

export const sendAirconSettings = (token: any, applianceId: string, params: Params): Promise<Response> => {
  return axios.post(`https://api.nature.global/1/appliances/${applianceId}/aircon_settings`, bodyFormData(params), {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
