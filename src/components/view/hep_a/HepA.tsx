import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import { IHepARecord } from '../../../interfaces/IHepARecord';
import MainAppBar from '../appbar/MainAppBar';
import Title from '../utils/Title';
import { hepAData } from './hepATestData';

const HepA: React.FC = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false)
  const [hepARecords, setHepARecords] = useState<IHepARecord[]>([]);

  if (initializing === true && initialized === false) {
    // TODO: get data from api/database;
    setHepARecords(hepAData)
    setInitializing(false);
    setInitialized(true)
  }

  const renderTitle = () => (
    <Title
      title={'Hep A Records'}
      subtitle={'View Hep A records below.'}
    />
  );

  const renderHepARecords = () => (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>First Short</TableCell>
            <TableCell>Second Shot</TableCell>
            <TableCell>In Compliance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hepARecords.map((record: IHepARecord) => (
            <TableRow>
              <TableCell>{record.firstName + ' ' + record.lastName}</TableCell>
              <TableCell>{record.firstShot}</TableCell>
              <TableCell>{record.secondShot}</TableCell>
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
      {renderHepARecords()}
    </div>
  );
};

export default HepA;
