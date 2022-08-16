import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './new.scss'
import Axios from "axios"

const CreateProfile = () => {

  const [file, setFile] = useState("")
  const [first, setFirst] = useState("")
  const [middle, setMiddle] = useState("")
  const [last, setlast] = useState("")
  const [email, setEmail] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [github, setGithub] = useState("")

  const createProfile = async(e) => {
 
    e.preventDefault()

    Axios.post("/profiles/create-profile", {first, middle, last, email, linkedin, github})

  }

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Create Profile</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={createProfile}>
                <div className="formInput">
                  <label>Input First Name</label>
                  <input 
                    onChange={(e) => setFirst(e.target.value)}
                    value={first}
                    type="text" placeholder="Please input first name" />
                </div>
                <div className="formInput">
                  <label>Input Middle Name</label>
                  <input
                  onChange={(e) => setMiddle(e.target.value)}
                  value={middle}
                   type="text" placeholder="Please input middle name" />
                </div>
                <div className="formInput">
                  <label>Input Last Name</label>
                  <input 
                  onChange={(e) => setlast(e.target.value)}
                  value={last}
                  type="text" placeholder="Please input last name" />
                </div>
                <div className="formInput">
                  <label>Input Email</label>
                  <input 
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email" placeholder="Please input email" />
                </div>
                <div className="formInput">
                  <label>Input Linkedin Link</label>
                  <input 
                  onChange={(e) => setLinkedin(e.target.value)}
                  value={linkedin}
                  type="text" placeholder="Please input linkedin link" />
                </div>
                <div className="formInput">
                  <label>Input Github Link</label>
                  <input 
                  onChange={(e) => setGithub(e.target.value)}
                  value={github}
                  type="text" placeholder="Please input github link" />
                </div>
              <button>Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProfile