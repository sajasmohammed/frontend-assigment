import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

export default function Gallery({ props }) {
    return (
        <Fragment>
            <div class="grid-item">
                <Link to={`/user/${props.phone}`}>
                    <img src={props.picture.thumbnail} className="App-logo" alt="logo" />
                </Link>
            </div>
        </Fragment>
    )
}
