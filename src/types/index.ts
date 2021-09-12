interface Event {
  te: {
    val: number
  }
}

export interface Device {
  id: string
  name: string
  temperature_offset:	number
  humidity_offset: number
  newest_events: Event
}

export interface Appliance {
  id: string
  device: Device
  nickname: string
  type: 'AC' | 'TV' | 'LIGHT' | 'IR'
  settings: Settings
}

export interface Settings {
  temp: string
  temp_unit: string
  mode: string
  vol: string
  dir: string
  dirh: string
  button: string
  updated_at: string
}
