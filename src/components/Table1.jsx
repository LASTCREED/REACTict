import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, colors } from '@mui/material'
import React, { useState } from 'react'

const Table1 = () => {
  var [name,setNames]= useState(["Tiya","Jude","Meera"])
  return (
    <div style={{paddingTop:"50px"}}>
        <TableContainer>
            <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{color:"red"}}> Name</TableCell>
                    <TableCell style={{color:"red"}}>Age</TableCell>
                    <TableCell>rollno</TableCell>
                      

                    
                  </TableRow> 
                </TableHead>
                <TableBody>
                  {name.map((value,index)=>{
                    return(
                      <TableRow>
                        <TableCell>{value}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
            </Table>
        </TableContainer>

    </div>
  )
}

export default Table1