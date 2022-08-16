import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './table.scss'
import { Link } from 'react-router-dom';

const MessageList = () => {

  const rows = [
    {name: 'Contact Data', email: 'rupiahjeremiah'},
  ];

  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <TableContainer component={Paper} className="tableList">
          <div className='topContent'>
          <h2>Message List</h2>
          <Link to="/create-contact">
          </Link>
          </div>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='center'>Email</TableCell>
                <TableCell align='right'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align='center'>{row.email}</TableCell>
                  <TableCell align='right'>
                    <Link to="/reply-message">
                    <button className='editButton'>Reply</button>
                    </Link>
                    <button className='deleteButton'>Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default MessageList