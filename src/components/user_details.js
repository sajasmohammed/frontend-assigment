import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/user_details.css';
import './css/loader.css'

export default function UserDetails() {

  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true)


  // const {id}=useParams()
  const fetchUserDetail = async () => {
    const res = await axios.get('https://randomuser.me/api/');
    setUser(res.data['results']);
    setLoading(false);
  }
  useEffect(() => {
    fetchUserDetail();
  }, [])
  if (isLoading) {
    return (
      <div className='loaderParent'>
        <div className="loader"></div>
      </div>
    )
  }
  return (
    <Fragment>
      <header className="header">
        <img src="./asset/logo.png" className="App-logo" alt="logo" />
        <Link to='/'><button className='outline-btn1'> + Back </button></Link>
      </header>
      <div className='line'></div>
      <main className='body'>
        {
          user.map((item) => (
            <div className='profile'>
              <img src={item.picture.thumbnail} className="avatar" alt="logo" />
              <h1>{item.name.first} {item.name.last}</h1>
              <div className='contact-detail'>
                <img src="./asset/email.png" alt="logo" /> <div className='contact-info'>
                  {item.email}
                </div>
                <img src="./asset/location.png" alt="logo" />  <div className='contact-info'>
                  {item.location.country}
                </div>
                <img src="./asset/phone.png" alt="logo" /><div className='contact-info'>
                  {item.phone}
                </div>
              </div>
            </div>
          ))
        }
      </main>
    </Fragment>
  )
}
