import React from "react";
import star from '../img/Star 1.png'

export default function Card(props) {
    return(
  
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img className=" h-60 w-44" src={props.coverImg} alt="car!"/></figure>
    <div className="card-body">
      <h2 className="card-title">{props.title}
      {props.openSpots === 0 && <div className="badge badge-secondary">Sold!</div>}
      </h2>
      <div className="card-actions justify-end">
      <div className="badge badge-outline">${props.price}</div> 
      <div className="badge badge-outline">{props.location}</div>
      <div className="badge badge-outline"><img className="h-3.5" src={star} alt="star" /><p className="font-light text-sm ml-1">{props.stats.rating} </p></div>
    </div>
    </div>
  </div>
    )
}