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

const ProjectList = () => {

  const [projects, setProjects] = useState([])

  const getProjects = () => {
    Axios.get("/projects/get-projects")
      .then(res => {
        setProjects(res.data.data.getProjects)
      })
  }

  const deleteProject = (id) => {
    Axios.delete(`/projects/delete-project/${id}`)
      .then(() => {
        console.log("delete success")
        getProjects()
      })
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <TableContainer component={Paper} className="tableList">
          <div className='topContent'>
            <h2>Project List</h2>
            <Link to="/create-project">
              <button className='createButton'>Create Project</button>
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
              {projects.map((project, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {project.name}
                  </TableCell>
                  <TableCell align='center'>{project.image}</TableCell>
                  <TableCell align='right'>
                    <Link to={`/edit-project/${project._id}`}>
                      <button className='editButton'>Edit</button>
                    </Link>
                    <button onClick={ () => {deleteProject(project._id)}}
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

export default ProjectList