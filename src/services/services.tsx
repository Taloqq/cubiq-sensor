import { ISensor } from "../types/types";

export const fetchAllData = async () =>  {
  const [sensorsResp, measurementsResp] = await Promise.all([
    fetch('http://localhost:3000/sensors'),
    fetch('http://localhost:3000/measurements')
  ]);
  const sensorsData = await sensorsResp.json();
  const measurementsData = await measurementsResp.json();

  return [sensorsData, measurementsData];
}

// export const addSensor = async (sensor: ISensor) => {
//   const res = await fetch('http://localhost:3000/sensors', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(sensor)
//   });
//   return res.json();
// }
export const addSensor = async (sensor: ISensor) => {
  fetch('http://localhost:3000/sensors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sensor)
  })
  .then(res => {
    console.log('lisätty');
    Promise.resolve(res)
  })
  .catch(err => console.log(err))
}

export const editSensor = async (sensor: ISensor) => {
 fetch(`http://localhost:3000/sensors/${sensor.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sensor)
  })
  .then(res => {
    console.log('muokattu');
    Promise.resolve(res)
  })
  .catch(err => console.log(err))
}