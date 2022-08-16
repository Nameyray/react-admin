import React, { useState } from 'react'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './new.scss'
import Axios from "axios"
// import { useAuthContext } from "../../hooks/useAuthContext"

const CreateStack = () => {

  // const { user } = useAuthContext()

  const [file, setFile] = useState("")
  const [name, setName] = useState("")

  const createStack = async(e) => {

    // e.preventDefault()

    // const res = await fetch("/stacks/create-stack", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${user.token}`,
    //   },
    // });
 
    e.preventDefault()

    Axios.post("/stacks/create-stack", {name})

  }
  
  

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Create New Stack</h1>
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
            <form onSubmit={createStack}>
              <div className="formInput">
                <label htmlFor='file'>Image: <DriveFolderUploadIcon className='icon' /></label>
                <input onChange={e=>setFile(e.target.files[0])} type="file" id='file' style={{ display: "none" }} />
              </div>
                <div className="formInput">
                  <label>Input Name</label>
                  <input 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text" 
                    placeholder="Please input name" 
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

export default CreateStack