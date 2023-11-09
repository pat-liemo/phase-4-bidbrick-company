import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { usePropertyContext } from '../components/PropertyContext';
import Swal from 'sweetalert2';

function ViewProperty() {

  const { setProperties } = usePropertyContext();
  const { properties } = usePropertyContext();
  const navigate = useNavigate();

  const {id} = useParams();
  const [content, setContent] = useState({});
  const [newBid, setNewBid] = useState("");
  const [showBidForm, setShowBidForm] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(function() {
    fetch(`https://auction-react-rafd.onrender.com/properties/${id}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setContent(data);
    })
  }, [id]);

  function placeBid() {
    setShowBidForm(true);
    setButtonActive(true);
  };

  return (
    <div className="card border-dark mb-3 m-4" style={{ maxWidth: '1700px' }}>

      <div className="row g-0">
        <div className="col-md-4">
          <img src={content.image} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body pt-5">
            <h5 className="card-title">{content.title}</h5>
            <br/>
            <p className="card-text">{content.description}.</p>
            <span style={{ display: "inline" }}>
              <h6 style={{ display: "inline" }}>Type:</h6> {content.type}
            </span>
            <br/><br/>
            <span style={{ display: "inline" }}>
              <h6 style={{ display: "inline" }}>Location:</h6> {content.location}
            </span>
            <br/><br/>
            <span style={{ display: "inline" }}>
              <h6 style={{ display: "inline" }}>Size:</h6> {content.size}
            </span>
            <br/><br/>
            <span style={{ display: "inline" }}>
              <h6 style={{ display: "inline" }}>
                <i class="fa fa-bed" aria-hidden="true"></i>:
              </h6>
              &nbsp;&nbsp;
               {content.bedrooms}
            </span>
            <br/><br/>
            <span style={{ display: "inline" }}>
              <h6 style={{ display: "inline" }}>
              <i class="fa fa-bath" aria-hidden="true"></i>:
              </h6>
              &nbsp;&nbsp;
               {content.bathrooms}
            </span>
            <br/><br/>
            <span style={{ display: "inline" }}>
              <h6 style={{ display: "inline" }}>Highest Bid:</h6> <span id="price">{content.price}</span>
            </span>
            <br/><br/>
            <p className="card-text"><small className="text-muted">Last updated 1 sec ago</small></p>
            {showBidForm &&
              <form>
                  <input type="text" className="form-control" value={newBid} onChange={(event) => setNewBid(event.target.value)} placeholder="Enter your bid" />
                  <br/>
                  <button type="submit" className="btn btn-primary" onClick={(event) => {
                    event.preventDefault();
                    const bidAmount = parseInt(newBid, 10);
                    const currentPrice = parseInt(content.price, 10);

                    if (bidAmount <= currentPrice) {
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "You can only place a bid higher than the highest bid!",
                        footer: '<a href="#">Read more on How to Bid...</a>'
                      });
                    }
                    else {
                    fetch(`https://auction-react-rafd.onrender.com/properties/${id}`, {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        price: bidAmount
                      })
                    })
                    .then(function(response) {
                      return response.json();
                    })
                    .then(function(data) {
                      Swal.fire({
                        title: "Congratulations!",
                        text: "You are our newest highest bidder!",
                        icon: "success"
                      });
                      setContent(data);
                    })
                  }
                  setShowBidForm(false);
                  }}>
                    Submit
                  </button>
                  <br/><br/>
              </form>
            }
            <div>
              <button type="button" className="btn btn-primary me-5" onClick={placeBid} disabled={buttonActive}>Bid</button>

              <button 
               type="button"
               className="btn btn-danger ms-5" 
               onClick={() => {
                fetch(`https://auction-react-rafd.onrender.com/properties/${id}`, {
                  method: "DELETE"
                })
                .then(function(response) {
                  return response.json();
                })
                .then(function(data) {
                  const updatedProperties = properties.filter(function(property) {
                    return property.id !== id;
                  })
                  setProperties(updatedProperties);

                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Property deleted successfully!",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  navigate('/');
                })
              }} 
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewProperty;