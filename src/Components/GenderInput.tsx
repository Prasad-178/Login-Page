import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface PropsType {
  gender?: string
  handleChange?: any
  handleGender?: any
}

function GenderSelect(props: PropsType) {
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className="genderField">
        <InputLabel id="demo-simple-select-standard-label" onChange={props.handleChange}>Gender</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={props.gender}
          label="Gender"
          onChange={props.handleGender}
          defaultValue=""
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default GenderSelect