import React from 'react';
import { useForm } from "react-hook-form";
import { ISensor } from '../../types/types';
import styles from './SensorForm.module.css';

interface SensorFormProps {
  sensor?: ISensor,
  onSubmit: (sensor: ISensor) => void;
}

// todo validaatio
const SensorForm = ({sensor, onSubmit}: SensorFormProps) => {
  
  const { register, handleSubmit } = useForm();

  const submitForm = async (data:any) => {
    const obj = {
      model: data.model,
      location: data.location,
      indoor: Boolean(data.indoor),
      id: sensor?.id ?? Math.floor(Math.random() * 100000) + 1
    }
    return onSubmit(obj);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)} className={styles.form}>
        <input placeholder='Model' defaultValue={sensor?.model} {...register("model", { required: true })} />
        <input placeholder='Location' defaultValue={sensor?.location} {...register("location", { required: true })} />
        <label>Indoor</label>
        <label>
          true
          <input type="radio" {...register('indoor', { required: true })} value="true" />
        </label>
        <label>
          false
          <input type="radio" {...register('indoor', { required: true })} value="false" />
        </label>
        <input type="submit" />
      </form>
      
    </div>
  )
}

export default SensorForm;