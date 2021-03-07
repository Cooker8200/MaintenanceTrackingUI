import * as React from 'react';
import MainAppBar from '../appbar/MainAppBar';
import { useState } from 'react';
// import { getAllMaintenanceRecords } from '../../actions/MaintenanceActions';
import { maintenanceData } from './maintenanceTestData';
import { TableBody, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { IMaintenanceRecord } from '../../../interfaces/IMaintenanceRecord';

const Maintenance: React.FC = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false)
  const [maintenanceRecords, setMaintenanceRecords] = useState<IMaintenanceRecord[]>([]);

  if (initializing === true && initialized === false) {
    // getAllMaintenanceRecords();
    setMaintenanceRecords(maintenanceData)
    setInitializing(false);
    setInitialized(true)
  }

  const renderTitle = () => (
    <>
      <Typography variant='h4' className='maintenance_body-container'>
        Maintenance Records
      </Typography>
      <Typography variant='subtitle1'>
        View maintenance records below.
      </Typography>
    </>
  );

  const renderMaintenanceRecords = () => (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Equipment</TableCell>
            <TableCell>Repair Type</TableCell>
            <TableCell>Vendor</TableCell>
            <TableCell>Repair Date</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Paid</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {maintenanceRecords.map((record: IMaintenanceRecord) => (
            <TableRow>
              <TableCell>{record.equipment}</TableCell>
              <TableCell>{record.repairType}</TableCell>
              <TableCell>{record.vendor}</TableCell>
              <TableCell>{record.repairDate}</TableCell>
              <TableCell>{record.cost}</TableCell>
              <TableCell>{record.paid ? 'Paid' : 'Not Paid'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div>
      <MainAppBar />
      <br />
      {renderTitle()}
      {renderMaintenanceRecords()}
    </div>
  );
};

export default Maintenance;
