import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }} style={{color:"white"}} fontStyle={'bold'}>Newapp</Typography>
                <Button variant='contained' color='inherit'><Link to={'/'} style={{textDecoration:'none',color:'black'}}>Home</Link></Button>&nbsp;
                <Button variant='contained' color='inherit'><Link to={'first'}style={{textDecoration:'none',color:'black'}}>First</Link></Button>&nbsp;
                <Button variant='contained' color='inherit' ><Link to={'table'}style={{textDecoration:'none',color:'black'}}>Table</Link></Button>&nbsp;
                <Button variant='contained' color='inherit'><Link to={'axios'}style={{textDecoration:'none',color:'black'}}>ApiGet</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar