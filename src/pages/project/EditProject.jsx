import React, { useEffect, useState } from 'react'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './new.scss'
import Axios from "axios"
import { useParams } from 'react-router-dom';

const EditProject = (props) => {

  const initialState = {
    name: "",
    category: "",
    link: "",
    description: "",
    client: ""
  };

  const { id } = useParams()
  // const navigate = useNavigate()

  const [file, setFile] = useState("")
  const [project, setProject] = useState(initialState)

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  const updateProject = (e) => {
    e.preventDefault()
    Axios.put(`/projects/edit-project/${project._id}`, project)
      .then(res => {
        console.log("success")
      })
  }

  useEffect(() => {
    const getProject = () => {
      Axios.get(`/projects/get-project/${id}`)
        .then(res => {
          setProject(res.data.data.project)
        })
    }
    getProject()
  }, [id])

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Project</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) :
                "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={updateProject}>
              <div className="formInput">
                <label htmlFor='file'>Image: <DriveFolderUploadIcon className='icon' /></label>
                <input onChange={e => setFile(e.target.files[0])} type="file" id='file' style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label>Input Name</label>
                <input
                  name="name"
                  onChange={handleChange}
                  type="text"
                  placeholder="Please input name"
                  value={project.name}
                />
              </div>
              <div className="formInput">
                <label>Product Category</label>
                <input
                  name="category"
                  onChange={handleChange}
                  value={project.category}
                  type="text"
                  placeholder="Please input category"
                />
              </div>
              <div className="formInput">
                <label>Product Client</label>
                <input
                  name="client"
                  onChange={handleChange}
                  value={project.client}
                  type="text"
                  placeholder="Please input client"
                />
              </div>
              <div className="formInput">
                <label>Product Link</label>
                <input
                  name="link"
                  onChange={handleChange}
                  value={project.link}
                  type="text"
                  placeholder="Please input link"
                />
              </div>
              <div className="formInput">
                <label>Product Description</label>
                <input
                  name="description"
                  onChange={handleChange}
                  value={project.description}
                  type="text"
                  placeholder="Please input description"
                />
              </div>
              <button>Edit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProject
