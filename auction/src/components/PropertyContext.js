import React, { createContext, useContext, useState } from 'react';

const PropertyContext = createContext();

export function PropertyProvider({ children }) {
  const [properties, setProperties] = useState([]);

  return (
    <PropertyContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertyContext.Provider>
  );
}

export function usePropertyContext() {
  return useContext(PropertyContext);
}
