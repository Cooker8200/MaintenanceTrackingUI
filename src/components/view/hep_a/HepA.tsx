import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { IHepARecord } from '../../../interfaces/IHepARecord';
import { getAllEmployeeRecords } from '../../actions/EmployeeActions';
import MainAppBar from '../appbar/MainAppBar';
import Title from '../utils/Title';
import { hepAData } from './hepATestData';

const HepA: React.FC = () => {
  const [hepARecords, setHepARecords] = useState<IHepARecord[]>([]);

  useEffect(() => {
    getAllEmployeeRecords()
      .then(x => console.log('results: ', x));
    // TODO: get data from api/database;
    setHepARecords(hepAData)
  }, []);

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
