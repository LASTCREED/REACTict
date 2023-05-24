import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiGet = () => {
var[users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
        setUsers(response.data)
        console.log(response.data)
    })
    .catch(err=>console.log(err))

    },[])
    
  return (
    <div style={{paddingTop:'100px'}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>NAME </TableCell>
                        <TableCell>USERNAME </TableCell>
                        <TableCell>EMAIL</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((value,index)=>{
                        return(
                            <TableRow key={index}>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.username}</TableCell>
                                <TableCell>{value.email}</TableCell>
                            </TableRow>                                                )
                    })}
                    
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ApiGet