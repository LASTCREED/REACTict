import { Button, Typography, colors } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [pname,setPname]=useState("pain")//variable declaration
    const changeName= ()=>{
        console.log("Clicked");//inspect
        setPname("sole")//changed name
    }
  return (
    <div>
        <Typography variant='h4'>know {pname}</Typography>
        <br/>
        <br/>
        <br/>
        <Button variant='outlined'  onClick={changeName}>CHANGE</Button>
    </div>
  )
}

export default StateBasics