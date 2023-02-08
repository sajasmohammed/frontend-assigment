import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './css/user_details.css';
import './css/loader.css';
import { UserContext } from '../context/usercontext';

export default function User() {

    var id = useParams();
    const { filteredImage } = useContext(UserContext);
    const [data, setData] = useState({ first: "", last: "", pic: "", email: "", country: "", phone: "" });

    useEffect(() => {
        let res = filteredImage.find((item) => {
            return item.login.uuid === id.item ? item : "";
        });
        setData({ first: res.name.first, last: res.name.last, pic: res.picture.thumbnail, email: res.email, country: res.location.country, phone: res.phone });

    }, [filteredImage, id])

    return (
        <Fragment>
            <header className="header">
                <img src="./asset/logo.png" className="App-logo" alt="logo" />
                <Link to='/'><button className='outline-btn1'>  Back </button></Link>
            </header>
            <main className='body'>
                <div className='profile'>
                    <img src={data.pic} className="avatar" alt="logo" />
                    <h1>{data.first ?? ""} {data.last ?? ""}</h1>
                    <div className='contact-detail'>
                        <img src="./asset/email.png" alt="logo" /> <div className='contact-info'>
                            {data.email}
                        </div>
                        <img src="./asset/location.png" alt="logo" />  <div className='contact-info'>
                            {data.country}
                        </div>
                        <div className='contact-info'>
                            {data.phone}
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
