import React, { createContext, useEffect, useState } from 'react'
import Property from './Property';
import { usePropertyContext } from '../components/PropertyContext';

function PropertyList() {
  const { setProperties } = usePropertyContext();
  const { properties } = usePropertyContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (properties.length > 0) {
      setLoading(false);
    }
  }, [properties]);
  
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
      {properties.map((property) => (
        <Property key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertyList;