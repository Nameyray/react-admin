import React, { useEffect, useState } from 'react'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './new.scss'
import Axios from "axios"
import { useParams } from 'react-router-dom';

const EditStack = (props) => {

  const initialState = {
		name: ""
	};

  const {id} = useParams()
	// const navigate = useNavigate()

  const [file, setFile] = useState("")
  const [stack, setStack] = useState(initialState)

  function handleChange(e) {
		setStack({ ...stack, [e.target.name]: e.target.value });
	}

  const updateStack = (e) => {
    e.preventDefault()
    Axios.put(`/stacks/edit-stack/${stack._id}`, stack)
    .then(res => {
      console.log("success")
    })
  }

  useEffect(() => {
    const getStack = () => {
      Axios.get(`/stacks/get-stack/${id}`)
        .then(res => {
          setStack(res.data.data.stack)
        })
    }
    getStack()
  }, [id])

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Stack</h1>
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
            <form onSubmit={updateStack}>
              <div className="formInput">
                <label htmlFor='file'>Image: <DriveFolderUploadIcon className='icon' /></label>
                <input onChange={e=>setFile(e.target.files[0])} type="file" id='file' style={{ display: "none" }} />
              </div>
                <div className="formInput">
                  <label>Input Name</label>
                  <input
                    name= "name"
                    onChange={handleChange}
                    type="text"
                    placeholder="Please input name"
                    value={stack.name}
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

export default EditStack
