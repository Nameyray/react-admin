import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './new.scss'
import Axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';

const EditProfile = (props) => {

  const initialState = {
    first: "",
    middle: "",
    last: "",
    email: "",
    linkedin: "",
    github: "",
  };

  const { id } = useParams()
  // const navigate = useNavigate()

  const [file, setFile] = useState("")
  const [profile, setProfile] = useState(initialState)
  const [newFirst, setNewFirst] = useState('')
  const [newMiddle, setNewMiddle] = useState('')
  const [newLast, setNewLast] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newLinkedin, setNewLinkedin] = useState('')
  const [newGithub, setNewGithub] = useState('')


  const getProfile = () => {
    Axios.get(`/profiles/get-profile/${id}`)
      .then(res => {
        setProfile(res.data.data.profile)
      })
  }

  function handleChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  const updateProfile = (e) => {
    e.preventDefault()
    Axios.put(`/profiles/edit-profile/${profile._id}`, profile)
      .then(res => {
        console.log("success")
      })
  }

  useEffect(() => {
    getProfile()
  }, [props])


  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Profile</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={updateProfile}>
                <div className="formInput">
                  <label>Input First Name</label>
                  <input
                  name="first"
                  onChange={handleChange}
                  value={profile.first}
                  type="text" placeholder="Please input first name" />
                </div>
                <div className="formInput">
                  <label>Input Middle Name</label>
                  <input
                  name="middle"
                  onChange={handleChange}
                  value={profile.middle}
                  type="text" placeholder="Please input middle name" />
                </div>
                <div className="formInput">
                  <label>Input Last Name</label>
                  <input
                  name="last"
                  onChange={handleChange}
                  value={profile.last}
                  type="text" placeholder="Please input last name" />
                </div>
                <div className="formInput">
                  <label>Input Email</label>
                  <input
                  name="email"
                  onChange={handleChange}
                  value={profile.email}
                  type="email" placeholder="Please input email" />
                </div>
                <div className="formInput">
                  <label>Input Linkedin Link</label>
                  <input
                  name="linkedin"
                  onChange={handleChange}
                  value={profile.linkedin}
                  type="text" placeholder="Please input linkedin link" />
                </div>
                <div className="formInput">
                  <label>Input Github Link</label>
                  <input
                  name="github"
                  onChange={handleChange}
                  value={profile.github}
                  type="text" placeholder="Please input github link" />
                </div>
              <button>Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfile
