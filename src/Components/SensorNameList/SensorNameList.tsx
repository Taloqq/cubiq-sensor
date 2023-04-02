import React, { useState } from "react";
import { IMeasurement, ISensor } from "../../types/types";
import MeasurementList from "../MeasurementList/MeasurementList";

interface SensorNameListProps {
  measurements: IMeasurement[],
  sensors: ISensor[]
}
const SensorNameList = ({measurements, sensors}: SensorNameListProps) => {

  const [selectedSensorId, setSelectedSensorId] = useState<number|undefined>(); 
  const filteredMeasurements = selectedSensorId && measurements.filter(item => item.sensorId === selectedSensorId);
  
  return (
    <div>
      <h3>
        Näytä kaikki sensorin mittaustulokset
      </h3>
      {selectedSensorId && filteredMeasurements &&
        <MeasurementList measurements={filteredMeasurements} />
      }
      {sensors.map((item) => (
        <div key={item.id} onClick={() => setSelectedSensorId(item.id)}>
          {item.model}
        </div>
      ))}
    </div>
  );
};

export default SensorNameList;