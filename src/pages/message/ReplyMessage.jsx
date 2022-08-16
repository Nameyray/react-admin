import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './new.scss'
import Axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';

const ReplyMessage = (props) => {

  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  const { id } = useParams()
  // const navigate = useNavigate()

  const [message, setMessage] = useState(initialState)

  const getMessage = () => {
    Axios.get(`/messages/get-message/${id}`)
      .then(res => {
        setMessage(res.data.data.profile)
      })
  }

  function handleChange(e) {
    setMessage({ ...message, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    getMessage()
  }, [props])

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
                  <input
                  name="name"
                  onChange={handleChange}
                  value={message.name}
                    disabled  type="text" placeholder="name" />
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
