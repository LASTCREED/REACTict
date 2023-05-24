import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Question1 = () => {

    var [pname,setPname]=useState("Windows")//variable declaration
    const changeName1= ()=>{
        console.log("Clicked");//inspect
        setPname(" windows")//changed name
    }
    var [pname,setPname2]=useState("Gallery")//variable declaration
    const changeName2= ()=>{
        console.log("Clicked");//inspect
        setPname(" Gallery")//changed name
    }
    var [pname,setPname]=useState("Room")//variable declaration
    const changeName3= ()=>{
        console.log("Clicked");//inspect
        setPname(" Room")//changed name
    }
  return (
    <div><Typography variant='h4' color={'secondary'}>Welcome to{pname}</Typography>
    <br/>
    <Button variant='outlined' color='error' onClick={changeName1}>Windows</Button>
    <br/>
    <br/>
    <Button variant='outlined' colour='success' onClick={changeName2}>Gallery</Button>
    <br/>
    <br/>
    <Button variant='outlined' color='secondary' onClick={changeName3}>room</Button>
    </div>
  )
}

export default Question1