import React from 'react'
import "./aritist.css"

export default function Artist(props) {
    if(!props.artist) return null;

    const { name, genres, images, followers } = props.artist;

    return (
        <div className="row">
            <div className="col-md-6 col-md-offset-3 well well-lg">
                <h3 className="text-center">{name}</h3>
                <img src={images[1].url} alt="" className="img-responsive img-circle" />
                <ul className="list-group">
                    <li className="list-group-item">
                        Followers <span className="pull-right">{followers.total}</span>
                    </li>
                    <li className="list-group-item">
                    Genres
    

                            <ul className="list-group">
                                {
                                    genres.map((item, key) =>{
                                    return <li className="list-group-item" key={key}>{item}</li>
                                    })
                                }
                            </ul>
                        
                    </li>
                </ul>
            </div>

        </div>
    );
}