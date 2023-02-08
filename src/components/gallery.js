import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';

export default function Gallery({ data, i }) {
    return (
        <Fragment>
            <div className="grid-item" key={i}>
                <Link to={`/user/${i}`}>
                    <img src={data.picture.thumbnail} className="App-logo" alt="logo" />
                </Link>
            </div>
        </Fragment>
    )
}
