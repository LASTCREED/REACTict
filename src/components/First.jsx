import React from 'react'
import { Button, TextField, Typography } from '@mui/material';
const First = () => {
  return (
    <div><h1>Eren Yeager</h1>
    <input placeholder='Anime name'/>
    <br/>
    <input placeholder='Episodes'/>
    <br/>
    <button>SUBMIT</button>

    <br/>

    <Typography variant='h1'>Eren Yeager</Typography>
    <br/>
    <TextField variant='outlined' label='Anime Name'/>
    <br/>
    <TextField variant='filled' label='Anime Name'/>
    <br/>
    <TextField variant='standard' label='Anime Name'/>
    <br/>
    <br/>
    <Button variant='contained'>SUBMIT</Button>
    
    <br/>
    <Button variant='text'>SUBMIT</Button>
    <br/>
    <Button variant='outlined'>SUBMIT</Button>
    </div>
  )
}

export default First