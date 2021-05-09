import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { IHepARecord } from '../../../interfaces/IHepARecord';
import { getAllEmployeeRecords } from '../../actions/EmployeeActions';
import MainAppBar from '../appbar/MainAppBar';
import Title from '../utils/Title';

const HepA: React.FC = () => {
  const [hepARecords, setHepARecords] = useState<IHepARecord[]>([]);

  useEffect(() => {
    getRecords();
    // getAllEmployeeRecords().then(data => setHepARecords(data));
    // setHepARecords(hepAData)
  }, []);

  const getRecords = async () => {
    getAllEmployeeRecords().then(data => setHepARecords(data));
  };

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
              <TableCell>{record.firstHepA}</TableCell>
              <TableCell>{record.secondHepA}</TableCell>
              <TableCell>{record.inCompliance ? 'Compliant' : 'Not Compliant'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  console.log(hepARecords);
  if (hepARecords.length === 0) {
    return <></>;
  } else {
    return (
      <div>
        <MainAppBar />
        <br />
        {renderTitle()}
        {renderHepARecords()}
      </div>
    );
  }
};

export default HepA;
