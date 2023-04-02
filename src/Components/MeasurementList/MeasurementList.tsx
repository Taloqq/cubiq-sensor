import React from "react";
import { IMeasurement } from "../../types/types";

interface MeasurementListProps {
  measurements: IMeasurement[],
}
const MeasurementList = ({measurements}: MeasurementListProps) => {

  if (measurements.length === 0) {
    return (
      <div>
        Ei mittaustuloksia
      </div>
    )
  }
  return (
    <div style={{'padding': '1rem 0'}}>
      {measurements.map((item, index) => (
        <div style={{'padding': '0.3rem 0'}} key={index}>
          <div>
          timestamp: {item.timestamp}
          </div>
          <div>
          temperature: {item.temperature}
          </div>
        </div>
      ))}    
    </div>
  );
};

export default MeasurementList;