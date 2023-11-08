import React from 'react'
import { Link } from "react-router-dom"

function Property({ property }) {

  return (
    <div className="col m-4 p-4">
    <div id="card" className="card h-100">
      <img src={property.image} className="card-img-top" alt="Loading..."/>
      <div className="card-body">
        <h5 className="card-title">{property.title}</h5>
        <br/>
        <span style={{ display: "inline" }}>
          <h6 style={{ display: "inline" }}>Type:</h6> {property.type}
        </span>
        <br/><br/>
        <span style={{ display: "inline" }}>
          <h6 style={{ display: "inline" }}>Location:</h6> {property.location}
        </span>
        <br/><br/>
        <span style={{ display: "inline" }}>
          <h6 style={{ display: "inline" }}>Price:</h6> <span id="price">{property.price}</span>
        </span>
        <br/><br/>
          <Link className="nav-link active btn btn-dark" to={`/property/${property.id}`}>View</Link>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  )
}

export default Property;