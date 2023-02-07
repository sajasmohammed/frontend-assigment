import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import Gallery from './gallery';
import "./css/home.css";
import './css/loader.css';
import { UserContext } from '../context/usercontext';


export default function Home() {

    const { image, filteredImage, setfilteredImage, user, setUser, countFaces, setCountFaces, isLoading, setLoading } = useContext(UserContext);


    const getAllImages = async () => {
        setLoading(true);
        const data = image.filter((value) => {
            return value.gender === "female" || value.gender === "male";
        });
        setfilteredImage(data);
        setCountFaces(image.length)
        setLoading(false);
    }
    const filterGents = async () => {
        setLoading(true);
        const data = image.filter((value) => {
            return value.gender === "male";
        });

        setfilteredImage(data);
        setCountFaces(data.length);

        setLoading(false);
    }
    const filterLadies = () => {
        setLoading(true);
        const data = image.filter((value) => {
            return value.gender === "female";
        });
        setfilteredImage(data);
        setCountFaces(data.length)
        setLoading(false);
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
                <img src="./asset/logo.png" className="App-logo" alt="logo" />
                <button className='button' onClick={() => setUser(user + 1)}> GENERATE NEW USERS </button>
            </header>
            <div className='line'></div>
            <main>
                <div className='sub-menu'>
                    <div className='body-text'>{countFaces}  new faces</div>
                    <div className='show-btn'>
                        <div className='body-text'>Show :</div>
                        <button className='outline-btn' onClick={() => getAllImages()}>ALL</button>
                        <button className='outline-btn2' onClick={() => filterGents()}>GENTS</button>
                        <button className='outline-btn2' onClick={() => filterLadies()}>LADIES</button>
                    </div>
                </div>
                <div className='gallery'>
                    {
                        filteredImage.map((item, index) => (
                            <Gallery data={item} i={index} />
                        ))
                    }
                </div>
            </main>
        </Fragment>
    )
}
