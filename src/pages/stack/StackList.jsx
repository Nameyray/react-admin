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

const StackList = () => {

  const [stacks, setStacks] = useState([])

  const getStacks = () => {
    Axios.get("/stacks/get-stacks")
      .then(res => {
        setStacks(res.data.data.getStacks)
      })
  }

  const deleteStack = (id) => {
    Axios.delete(`/stacks/delete-stack/${id}`)
      .then(() => {
        console.log("delete success")
        getStacks()
      })
  }

  useEffect(() => {
    getStacks()
  }, [])

  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <TableContainer component={Paper} className="tableList">
          <div className='topContent'>
            <h2>Stack List</h2>
            <Link to="/create-stack">
              <button className='createButton'>Create Stack</button>
            </Link>
          </div>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='center'>Image</TableCell>
                <TableCell align='right'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stacks.map((stack, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {stack.name}
                  </TableCell>
                  <TableCell align='center'>{stack.image}</TableCell>
                  <TableCell align='right'>
                    <Link to={`/edit-stack/${stack._id}`}>
                      <button className='editButton'>Edit</button>
                    </Link>
                    <button onClick={ () => {deleteStack(stack._id)}}
                      className='deleteButton'>Delete</button>
                  </TableCell>
                </TableRow>
              ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default StackList