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

const Profile = () => {

  const [profiles, setProfiles] = useState([])

  const getProfiles = () => {
    Axios.get("/profiles/get-profiles")
      .then(res => {
        setProfiles(res.data.data.getProfiles)
      })
  }

  const deleteProfile = (id) => {
    Axios.delete(`/profiles/delete-profile/${id}`)
      .then(() => {
        console.log("delete success")
        getProfiles()
      })
  }

  useEffect(() => {
    getProfiles()
  }, [])

  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <TableContainer component={Paper} className="tableList">
          <div className='topContent'>
            <h2>Profile</h2>
            <Link to="/create-profile">
              <button className='createButton'>Create Profile</button>
            </Link>
          </div>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell align='center'>Last Name</TableCell>
                <TableCell align='right'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {profiles.map((profile, index) => (
                <TableRow
                key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {profile.first}
                  </TableCell>
                  <TableCell align='center'>{profile.last}</TableCell>
                  <TableCell align='right'>
                    <Link to={`/edit-profile/${profile._id}`}>
                      <button className='editButton'>Edit</button>
                    </Link>
                    <button onClick={ () => {deleteProfile(profile._id)}}
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

export default Profile
