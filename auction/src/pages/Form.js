import React, { useContext, useState } from 'react';
import { usePropertyContext } from '../components/PropertyContext';

function Form() {
  const { setProperties } = usePropertyContext();
  const { properties } = usePropertyContext();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bed, setBed] = useState("");
  const [bath, setBath] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [type, setType] = useState("");
  const [type1, setType1] = useState("");
  const [price, setPrice] = useState("");

  function addProperty(event) {
      event.preventDefault();

      const newProperty = {
        title: title,
        description: description,
        location: location,
        type: type,
        bedrooms: bed,
        bathrooms: bath,
        size: size,
        price: price,
        image: imageUrl,
      };

      fetch("http://localhost:3000/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProperty)
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const newPropertyList = [...properties, data];
        setProperties(newPropertyList);

        setTitle("");
        setLocation("");
        setImageUrl("");
        setBed("");
        setBath("");
        setDescription("");
        setSize("");
        setType("");
        setPrice("");
      })
  };

  return (
    <div id="form" className='m-5'>
      <h5>Fill in the form to log your property!</h5>
      <br/>
      <form className="row g-3" onSubmit={addProperty}>
          <div className="col-12">
            <input type="text" className="form-control" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title"/>
          </div>
          <div className="col-12">
            <input type="text" className="form-control" value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Location"/>
          </div>
          <div className="col-12">
            <input type="text" className="form-control" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} placeholder="Image URL"/>
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" value={bed} onChange={(event) => setBed(event.target.value)} placeholder='Bedrooms'/>
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" value={bath} onChange={(event) => setBath(event.target.value)} placeholder='Bathrooms'/>
          </div>
          <div>
            <textarea type="text" className="form-control" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Description" style={{height:"150px"}} />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" value={size} onChange={(event) => setSize(event.target.value)} placeholder='Size' />
          </div>
          <div className="col-md-4">
            <select id="inputState" className="form-select" value={type} onChange={(event) => setType(event.target.value)}>
              <option selected>Type...</option>
              <option>Mansion</option>
              <option>Condo</option>
              <option>Villa</option>
              <option>Penthouse</option>
              <option>Apartment</option>
              <option>Estate</option>
            </select>
          </div>
          <div className="col-md-2">
            <input type="text" className="form-control" value={type1} onChange={(event) => setType1(event.target.value)} placeholder='Type'/>
          </div>
          <div className="col-12">
            <input type="text" className="form-control" value={price} onChange={(event) => setPrice(event.target.value)} placeholder="Start Price"/>
          </div>
          <br/>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">LOG</button>
          </div>
    </form>
    </div>
  )
}

export default Form;