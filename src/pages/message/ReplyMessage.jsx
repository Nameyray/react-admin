import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './new.scss'

const ReplyMessage = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Reply Message</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
                <div className="formInput">
                  <input disabled  type="text" placeholder="name" />
                </div>
                <div className="formInput">
                  <input disabled  type="text" placeholder="email" />
                </div>
                <div className="formInput">
                  <input disabled  type="text" placeholder="subject" />
                </div>
                <div className="formInput">
                  <input disabled  type="text" placeholder="message" />
                </div>
                <div className="formInput">
                  <label>Write a reply</label>
                  <input type="text" placeholder="Write a reply" />
                </div>
              <button>Reply Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReplyMessage