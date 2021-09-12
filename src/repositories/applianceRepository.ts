import axios from "axios";
import { Appliance } from "@/types";

type Response = {
  data: Array<Appliance>
  status: string
}

export const getAppliances = (token: any): Promise<Response> => {
  return axios.get("https://api.nature.global/1/appliances", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
