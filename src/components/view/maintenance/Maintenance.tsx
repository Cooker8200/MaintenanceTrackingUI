import * as React from 'react';
import MainAppBar from '../appbar/MainAppBar';
import { useState } from 'react';
// import { getAllMaintenanceRecords } from '../../actions/MaintenanceActions';
import { maintenanceData } from './maintenanceTestData';

const Maintenance: React.FC = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false)
  const [maintenanceRecords, setMaintenanceRecords] = useState<any>([]);

  if (initializing === true && initialized === false) {
    // getAllMaintenanceRecords();
    setMaintenanceRecords(maintenanceData)
    setInitializing(false);
    setInitialized(true)
  }

  return (
    <div>
      <MainAppBar />
      <div className='maintenance_body-container'>
        Maintenance Main View
      </div>
    </div>
  );
};

export default Maintenance;
