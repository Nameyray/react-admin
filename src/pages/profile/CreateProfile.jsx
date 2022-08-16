import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './new.scss'

const CreateProfile = () => {
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
            <form>
                <div className="formInput">
                  <label>Input First Name</label>
                  <input type="text" placeholder="Please input first name" />
                </div>
                <div className="formInput">
                  <label>Input Middle Name</label>
                  <input type="text" placeholder="Please input middle name" />
                </div>
                <div className="formInput">
                  <label>Input Last Name</label>
                  <input type="text" placeholder="Please input last name" />
                </div>
                <div className="formInput">
                  <label>Input Email</label>
                  <input type="email" placeholder="Please input email" />
                </div>
                <div className="formInput">
                  <label>Input Linkedin Link</label>
                  <input type="text" placeholder="Please input linkedin link" />
                </div>
                <div className="formInput">
                  <label>Input Github Link</label>
                  <input type="text" placeholder="Please input github link" />
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