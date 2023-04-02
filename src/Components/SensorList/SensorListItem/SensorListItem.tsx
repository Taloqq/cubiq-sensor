import React, { useState } from "react";
import { editSensor } from "../../../services/services";
import { ISensor } from "../../../types/types";
import SensorForm from "../../SensorForm/SensorForm";
import styles from './SensorListItem.module.css';

interface SensorListItemProps {
  sensor: ISensor
}

const SensorListItem = ({sensor}: SensorListItemProps) => {

  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const handleSubmit = async (sensor: ISensor) => {
    editSensor(sensor);
    setIsEditOpen(!isEditOpen);
  }

  if (isEditOpen) {
    return (
      <div>
        <SensorForm sensor={sensor} onSubmit={handleSubmit} />
        <div className={styles.edit} onClick={() => setIsEditOpen(!isEditOpen)}>
          takaisin
        </div>
      </div>
    )
  }
  
  return (
    <div className={styles.container}>
      <div>model: {sensor.model}</div>
      <div>location: {sensor.location}</div>
      <div>indoor: {sensor.indoor.toString()}</div>
      <div className={styles.edit} onClick={() => setIsEditOpen(!isEditOpen)}>
        Muokkaa
      </div>
    </div>
  )
}

export default SensorListItem;