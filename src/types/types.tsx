export interface IMeasurement {
  sensorId: number,
  timestamp: string,
  temperature: number
}
export interface ISensor {
  id: number,
  location: string,
  model: string,
  indoor: boolean
}