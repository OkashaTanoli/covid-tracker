import React, { useContext, useState } from 'react'
import './header.css'
import CovidLogo from '../../images/covid.png'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ContextApi } from '../GlobalState/contextApi'



function App({allCountriesList}) {
  const { ChangeCountry } = useContext(ContextApi)
  // const [Fdata, setFdata] = useState([])


  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: 200,
      backgroundColor:'rgba(0,0,0,0.3)'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    input: {
      color: 'gray',
      fontSize: '16px',
    },

    select: {
      color: 'white',
      '&:before': {
        borderBottom: '1px solid white'
      },
      '&:not(.Mui-disabled):hover::before': {
        borderBottom: '1px solid gray'
      },

      icon: {
        color: "blue"
      }
    },
  }));
  const [open, setOpen] = useState(false);

  const [country, setCountry] = useState('Global');

  const handleChange = (event) => {
    setCountry(event.target.value);
    // console.log(event.target.value)
    ChangeCountry(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const classes = useStyles();

  return (
    <div className="Header">
      <div className='borderBottom'></div>
      <div className='covidHead'>
        <div>
          C
        </div>
        <div>
          <img className='covidlogo' src={CovidLogo} alt="" width='30px' />
        </div>
        <div>
          vid Tracker
        </div>
      </div>
      <div className='selectCountryDiv'>
        <FormControl variant="filled" className={classes.formControl} id='formControl'>
          <InputLabel shrink className={classes.input} htmlFor="filled-age-native-simple">Select Country</InputLabel>
          <Select
            className={classes.select}
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={country}
            onChange={handleChange}
          >
            <MenuItem value='Global'>Global Data</MenuItem>
            {
              allCountriesList.map((val, index) => {
                return (
                  <MenuItem key={index} value={val.country} >{val.country}</MenuItem>
                )
              })
            }

          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
