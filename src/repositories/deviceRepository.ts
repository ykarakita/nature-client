import axios from "axios";
import { Device } from "@/types";

type Response = {
  data: Array<Device>
  status: string
}

export const getDevices = (token: any): Promise<Response> => {
  return axios.get("https://api.nature.global/1/devices", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
