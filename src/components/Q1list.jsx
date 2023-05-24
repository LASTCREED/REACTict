import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Q1list = () => {
    var [pname,setPname]=useState("")//variable declaration
    const changeName= ()=>{
        if(pname=="")
        {
            setPname("AAA")
        }
        else if(pname=="AAA")
        {
            setPname("bbb")
        }
        else
        {
            setPname("ccc")
        }
        // setPname["aaa","bbb","ccc"]//changed name
    }
  return (
    <div style={{paddingTop:"100px"}}>
        <Typography variant='h4'> {pname}</Typography>
        <Button variant='outlined' onClick={changeName}>a</Button>
        <Button variant='outlined' onClick={changeName}>b</Button>
        <Button variant='outlined' onClick={changeName}>c</Button>
    </div>
  )
}

export default Q1list