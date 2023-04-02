import React, { useState } from "react";
import { ISensor } from "../../types/types";
import SensorListItem from "./SensorListItem/SensorListItem";
import styles from './SensorList.module.css';

interface SensorListProps {
  sensors: ISensor[]
}

const SensorList = ({sensors}: SensorListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(!isOpen)

  return (
    <div className={styles.container}>
      <button type='button' onClick={handleOpen}>Listaa kaikki sensorit</button>
      {isOpen && sensors.map((item) => (
        <div key={item.id}>
          <SensorListItem sensor={item}/>
        </div>
      ))}
    </div>
  )
}

export default SensorList;