import * as React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { IKeyValue } from '../../../interfaces/IKeyValue';

const RecordsDropDown: React.FC = () => {
  const options = [
    {
      key: 'maintenance',
      value: 'Maintenance Records'
    },
    {
      key: 'hepa',
      value: 'Hep A Records'
    },
    {
      key: 'servsafe',
      value: 'ServSafe Records'
    },
  ];

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.value}
      className='records-drop-down_autocomplete'
      style={{ width: '350px' }}
      renderInput={(params) => <TextField {...params} />}
      onChange={() => console.log('you selected: ')}
    />
  );
};

export default withRouter(RecordsDropDown);