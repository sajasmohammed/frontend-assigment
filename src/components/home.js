import React, { Fragment, useContext, useState } from 'react';
import "./css/home.css";
import './css/loader.css';
import { UserContext } from '../context/usercontext';
import { Link } from 'react-router-dom';


export default function Home() {

    const { image, filteredImage, setfilteredImage, user, setUser, countFaces, setCountFaces, isLoading, setLoading } = useContext(UserContext);
    const [active, setActive] = useState(true);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);

    const getAllImages = () => {
        setLoading(true);
        const data = image.filter((value) => {
            return value.gender === "female" || value.gender === "male";
        });
        setfilteredImage(data);
        setCountFaces(image.length);
        setLoading(false);

        setActive(true);
        setActive1(false);
        setActive2(false);
    }

    const filterGents = () => {
        setLoading(true);
        const data = image.filter((value) => {
            return value.gender === "male";
        });

        setfilteredImage(data);
        setCountFaces(data.length);
        setLoading(false);

        setActive(false);
        setActive1(true);
        setActive2(false);
    }
    const filterLadies = () => {
        setLoading(true);
        const data = image.filter((value) => {
            return value.gender === "female";
        });
        setfilteredImage(data);
        setCountFaces(data.length);
        setLoading(false);

        setActive(false);
        setActive1(false);
        setActive2(true);
    }

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
                <img src="./asset/logo.png" width="181" height="50" alt="logo" />
                <button className='button' onClick={() => setUser(user + 1)}> GENERATE NEW USERS </button>
            </header>
            <main className='main'>
                <div className='sub-menu'>
                    <div className='body-text'>{countFaces}  new faces</div>
                    <div className='show-btn'>
                        <div className='body-text1'>Show :</div>
                        <button className={`outline-btn ${active ? 'active' : ''}`} onClick={() => getAllImages()}>ALL</button>
                        <button className={`outline-btn1 ${active1 ? 'active' : ''}`} onClick={() => filterGents()}>GENTS</button>
                        <button className={`outline-btn2 ${active2 ? 'active' : ''}`} onClick={() => filterLadies()}>LADIES</button>
                    </div>
                </div>
                <div className='grid-container'>
                    {
                        filteredImage.map((item, index) => (
                            <div className="grid-item" key={index}>
                                <Link to={`/user/${item.login.uuid}`}>
                                    <img src={item.picture.thumbnail} className="App-logo" alt="logo" />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </main>
        </Fragment>
    )
}
