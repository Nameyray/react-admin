import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './new.scss'

const EditContact = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Contact</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Input Name</label>
                <input type="text" placeholder="Please input name" />
              </div>
              <div className="formInput">
                <label>Input Link</label>
                <input type="text" placeholder="Please input link" />
              </div>
              <button>Edit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditContact