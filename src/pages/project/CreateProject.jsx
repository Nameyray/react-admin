import React, { useState } from 'react'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './new.scss'
import Axios from "axios"
// import { useAuthContext } from "../../hooks/useAuthContext"

const CreateProject = () => {

  // const { user } = useAuthContext()

  const [file, setFile] = useState("")
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [client, setClient] = useState("")
  const [link, setLink] = useState("")
  const [description, setDescription] = useState("")

  const createProject = async(e) => {
 
    e.preventDefault()

    Axios.post("/projects/create-project", {name, category, client, link, description})

  }
  
  

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Create New Project</h1>
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
            <form onSubmit={createProject}>
              <div className="formInput">
                <label htmlFor='file'>Image: <DriveFolderUploadIcon className='icon' /></label>
                <input onChange={e=>setFile(e.target.files[0])} type="file" id='file' style={{ display: "none" }} />
              </div>
                <div className="formInput">
                  <label>Project Name</label>
                  <input 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text" 
                    placeholder="Please input name" 
                  />
                </div>
                <div className="formInput">
                  <label>Product Category</label>
                  <input 
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    type="text" 
                    placeholder="Please input category" 
                  />
                </div>
                <div className="formInput">
                  <label>Product Client</label>
                  <input 
                    onChange={(e) => setClient(e.target.value)}
                    value={client}
                    type="text" 
                    placeholder="Please input client" 
                  />
                </div>
                <div className="formInput">
                  <label>Product Link</label>
                  <input 
                    onChange={(e) => setLink(e.target.value)}
                    value={link}
                    type="text" 
                    placeholder="Please input link" 
                  />
                </div>
                <div className="formInput">
                  <label>Product Description</label>
                  <input 
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    type="text" 
                    placeholder="Please input description" 
                  />
                </div>
              <button>Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProject