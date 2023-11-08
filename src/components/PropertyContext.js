import React, { createContext, useContext, useState, useEffect } from 'react';

export const PropertyContext = createContext();

export function PropertyProvider({ children }) {
  const [properties, setProperties] = useState([]);

  useEffect(function() {
    fetch("https://auction-react-rafd.onrender.com/properties")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setProperties(data)
      
    }) 
  },[])

  return (
    <PropertyContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertyContext.Provider>
  );
}

export function usePropertyContext() {
  return useContext(PropertyContext);
}
