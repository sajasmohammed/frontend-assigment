import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './css/user_details.css';
import './css/loader.css'


export default function User() {
    
    return (
        <Fragment>
            <header className="header">
                <img src="./asset/logo.png" className="App-logo" alt="logo" />
                <Link to='/'><button className='outline-btn1'>  Back </button></Link>
            </header>
            <div className='line'></div>
            <main className='body'>
                {
                    <div className='profile'>
                        {/* <img src={item.picture.thumbnail} className="avatar" alt="logo" /> */}
                        {/* <h1>{item.name.first} {item.name.last}</h1> */}
                        {/* <div className='contact-detail'>
                            <img src="./asset/email.png" alt="logo" /> <div className='contact-info'>
                                {item.email}
                            </div>
                            <img src="./asset/location.png" alt="logo" />  <div className='contact-info'>
                                {item.location.country}
                            </div> */}
                        {/* <img src={props} alt="logo" /> */}
                        {/* <div className='contact-info'>
                            {item}
                        </div> */}
                        {/* </div> */}
                    </div>
                }
            </main>
        </Fragment>
    )
}
