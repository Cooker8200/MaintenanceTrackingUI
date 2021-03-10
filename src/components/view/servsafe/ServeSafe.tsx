import * as React from 'react';
import { useState } from 'react';
import { IServeSafeRecord } from '../../../interfaces/IServeSafeRecord';
import MainAppBar from '../appbar/MainAppBar';
import { serveSafeData } from './serveSafeTestData';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import Title from '../utils/Title';

const ServeSafe: React.FC = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false)
  const [serveSafeRecords, setServeSafeRecords] = useState<IServeSafeRecord[]>([]);

  if (initializing === true && initialized === false) {
    // TODO: pull data from api/database
    setServeSafeRecords(serveSafeData);
    setInitializing(false);
    setInitialized(true);
  };

  const renderTitle = () => (
    <Title
      title={'ServSafe Records'}
      subtitle={'View ServSafe records below.'}
    />
  );

  const renderServSafeRecords = () => (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Expiration Date</TableCell>
            <TableCell>Certification Number</TableCell>
            <TableCell>Proctor</TableCell>
            <TableCell>In Compliance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {serveSafeRecords.map((record: IServeSafeRecord) => (
            <TableRow>
              <TableCell>{record.firstName + ' ' + record.lastName}</TableCell>
              <TableCell>{record.expirationDate}</TableCell>
              <TableCell>{record.certificationNumber}</TableCell>
              <TableCell>{record.proctor}</TableCell>
              <TableCell>{record.inCompliance ? 'Compliant' : 'Not Compliant'}</TableCell>
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
      {renderServSafeRecords()}
    </div>
  );
};

export default ServeSafe;
