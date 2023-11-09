import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import { usePropertyContext } from '../components/PropertyContext';

function ViewProperty() {
  // const { setProperties } = usePropertyContext();
  // const { properties } = usePropertyContext();

  const {id} = useParams();
  const [content, setContent] = useState({});
  const [newBid, setNewBid] = useState("");
  const [showBidForm, setShowBidForm] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  // function handleDelete() {
  //   fetch(`https://auction-react-rafd.onrender.com/properties/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then(function (response) {
  //       if (!response.ok) {
  //         throw new Error("Failed to delete property");
  //       }
  //       return response.json();
  //     })
  //     .then(function () {
  //       // Redirect to the property list page or perform other actions after successful delete
  //       console.log("Property deleted successfully");
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //       // Handle error, show a message, or perform other actions
  //     });
  // };

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
    <div className="card border-dark mb-3 style={{max-width: '14rem'}} m-4">
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
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            {showBidForm &&
              <form>
                  <input type="text" className="form-control" value={newBid} onChange={(event) => setNewBid(event.target.value)} placeholder="Enter your bid" />
                  <br/>
                  <button type="submit" className="btn btn-primary" onClick={() => {
                    if (newBid <= content.price) {
                      alert("You cannot bid lower than the highest bid");
                    }
                    else {
                    fetch(`https://auction-react-rafd.onrender.com/properties/${id}`, {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        price: newBid
                      })
                    })
                    .then(function(response) {
                      return response.json();
                    })
                    .then(function(data) {
                      setContent(data);
                    })
                  }
                  }}>
                    Submit
                  </button>
                  <br/><br/>
              </form>
            }
            <div>
              <button type="button" className="btn btn-primary me-5" onClick={placeBid} disabled={buttonActive}>Bid</button>
              {/* <button type="button" className="btn btn-danger ms-5" onClick={handleDelete}>
                Delete
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewProperty;