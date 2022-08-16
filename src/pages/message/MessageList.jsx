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
import Axios from "axios"
import { useEffect, useState } from 'react';

const MessageList = () => {

  const [messages, setMessages] = useState([])

  const getMessages = () => {
    Axios.get("/messages/get-messages")
      .then(res => {
        setMessages(res.data.data.getMessages)
      })
  }

  const deleteMessage = (id) => {
    Axios.delete(`/messages/delete-message/${id}`)
      .then(() => {
        console.log("delete success")
        getMessages()
      })
  }

  useEffect(() => {
    getMessages()
  }, [])

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
              {messages.map((message, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {message.name}
                  </TableCell>
                  <TableCell align='center'>{message.email}</TableCell>
                  <TableCell align='right'>
                    <Link to={`/reply-message/${message._id}`}>
                      <button className='editButton'>Edit</button>
                    </Link>
                    <button onClick={() => { deleteMessage(message._id) }}
                      className='deleteButton'>Delete</button>
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