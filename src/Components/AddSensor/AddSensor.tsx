import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { addSensor } from '../../services/services';
import { ISensor } from '../../types/types';
import SensorForm from '../SensorForm/SensorForm';
import styles from './AddSensor.module.css';

const AddSensor = () => {

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const handleAddSensor = async (sensor: ISensor) => {
    addSensor(sensor)
  }

  const handleSetFormOpen = () => setIsFormOpen(!isFormOpen);
  return (
    <div>
      <button type='button' onClick={handleSetFormOpen}>Lisää uusi sensori</button>
      {isFormOpen && <SensorForm onSubmit={handleAddSensor} />}
    </div>
  )
}

export default AddSensor;