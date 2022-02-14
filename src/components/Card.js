import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import tibidabo from "./assets/tibidabo.jpeg"

import "./Card.css";



function Card(props) {

    return (
        <div className="card-container">
            <div className="card">

                <div className="container2">
                    <div className="card1">

                            {props.experience.coverImage}
                            <a href="" className="news-card__card-link"></a>
                            <img src={tibidabo} className="tibidabo" alt=""></img>
                            <div className="text-wrapper">
                                <h2 className="experience-name">
                                    {props.experience.name}
                                </h2>
                                <div className="details-wrapper">
                                    <button className="read-more">Edit
                                        <i className="fas fa-long-arrow-alt-right"></i></button>

                                    <button className="read-more">Delete
                                        <i className="fas fa-long-arrow-alt-right"></i></button>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="parametros">
                    <p className="card-description">
                        {props.experience.description}
                    </p>
                    <p className="card-price">
                        {props.experience.price}€
                    </p>
                    <p className="card-duration">
                        {props.experience.duration}
                    </p>
                    <p className="card-tag">
                        {props.experience.tag}
                    </p>
                </div>
                    <div className="action-buttons">
                        <Button>Saber más</Button>

                    </div>


            </div>
        </div>

    )
}

export default Card;