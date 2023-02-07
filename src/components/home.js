import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Gallery from './gallery';
import "./home.css";

export default function Home() {
    const [image, setImage] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [countFaces, setCountFaces] = useState(0)
    useEffect(() => {
        fetchImageDetail();
    }, [])

    const fetchImageDetail = async () => {
        const res = await axios.get('https://randomuser.me/api/?results=560');
        setImage(res.data['results']);
        setCountFaces(res.data['results'].length)
        setLoading(false);
    }

    const filterGents = async () => {
        const res = await axios.get('https://randomuser.me/api/?results=560');
        const data = res.data['results'].filter((value) => {
            return value.gender === "male";
        });
        setImage(data);
        setCountFaces(data.length)
        setLoading(false);
    }
    const filterLadies = async () => {
        const res = await axios.get('https://randomuser.me/api/?results=560');
        const data = res.data['results'].filter((value) => {
            return value.gender === "female";
        });
        setImage(data);
        setCountFaces(data.length)
        setLoading(false);
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (

        <Fragment>
            <header className="header">
                <img src="./asset/logo.png" className="App-logo" alt="logo" />
                <Link to='/user-details'><button className='button'> GENERATE NEW USERS </button></Link>
            </header>
            <div className='line'></div>
            <main>
                <div className='sub-menu'>
                    <div className='body-text'>{countFaces}  new faces</div>
                    <div className='show-btn'>
                        <div className='body-text'>Show :</div>
                        <button className='outline-btn' onClick={() => fetchImageDetail()}>ALL</button>
                        <button className='outline-btn2' onClick={() => filterGents()}>GENTS</button>
                        <button className='outline-btn2' onClick={() => filterLadies()}>LADIES</button>
                    </div>
                </div>
                <div className='gallery'>
                    {
                        image.map((item) => (
                           <Gallery props={item}/>
                        ))
                    }
                </div>
            </main>
        </Fragment>
    )
}
