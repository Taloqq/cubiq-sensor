import React, {useEffect, useState} from "react";
import AddSensor from "../../Components/AddSensor/AddSensor";
import SensorNameList from "../../Components/SensorNameList/SensorNameList";
import ListMeasurements from "../../Components/SensorNameList/SensorNameList";
import SensorList from "../../Components/SensorList/SensorList";
import { IMeasurement, ISensor } from "../../types/types";
import styles from './FrontPage.module.css';

interface FrontPageProps {
  measurements: IMeasurement[]|undefined,
  sensors: ISensor[]|undefined
}

const FrontPage = ({measurements, sensors}: FrontPageProps) => {


  if (measurements && sensors) {
    return (
      <div className={styles.fpContainer}>
        <SensorList sensors={sensors} />
        <AddSensor />
        <SensorNameList sensors={sensors} measurements={measurements} />
      </div>
    )
  }

  return <></>
}

export default FrontPage;