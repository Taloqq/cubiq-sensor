import React, { useEffect, useState } from 'react';
import FrontPage from './Pages/FrontPage/FrontPage';
import { fetchAllData } from './services/services';
import { IMeasurement, ISensor } from './types/types';

const App = () => {

  const [sensors, setSensors] = useState<ISensor[]>();
  const [measurements, setMeasurements] = useState<IMeasurement[]>();

  useEffect(() => {
    (async () => {
      const [sensorsData, measurementsData] = await fetchAllData();
      setSensors(sensorsData);
      setMeasurements(measurementsData);
    })();
  }, [])
  
  return (
    <main>
      <FrontPage sensors={sensors} measurements={measurements} />
    </main>
  );
}

export default App;
