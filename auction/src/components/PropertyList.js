import React, { createContext, useEffect, useState } from 'react'
import Property from './Property';
import { usePropertyContext } from '../components/PropertyContext';

export const PropertyContext = createContext();

function PropertyList() {
  // const [properties, setProperties] = useState([]);
  const { setProperties } = usePropertyContext();
  const { properties } = usePropertyContext();
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    fetch("http://localhost:3000/properties")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setProperties(data)
      setLoading(false)
    }) 
  },[])

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  const propertyList = properties.map(function(property) {
    return (
      <Property key={property.id} property={property}/>
    )
  })

  return (
    <PropertyContext.Provider value={propertyList}>
      <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
        {propertyList}
      </div>
    </PropertyContext.Provider>
  )
}

export default PropertyList;