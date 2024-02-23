import React, { useState } from 'react';
import { useAuth } from '../Security/AuthContext';

const Search = () => {
  const [artist, setArtist] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [auctionDate, setAuctionDate] = useState('');
  const [subjectClassification, setSubjectClassification] = useState('');

  const handleArtistChange = (e) => {
    setArtist(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleAuctionDateChange = (e) => {
    setAuctionDate(e.target.value);
  };

  const handleSubjectClassificationChange = (e) => {
    setSubjectClassification(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search logic here
  };

  const authContext = useAuth()
  console.log(authContext.number)

  return (
    <div className="container mt-4">
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>Artist:</label>
              <input
                type="text"
                className="form-control"
                value={artist}
                onChange={handleArtistChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Category:</label>
              <input
                type="text"
                className="form-control"
                value={category}
                onChange={handleCategoryChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Price:</label>
              <input
                type="text"
                className="form-control"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Auction Date:</label>
              <input
                type="text"
                className="form-control"
                value={auctionDate}
                onChange={handleAuctionDateChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Subject Classification:</label>
              <input
                type="text"
                className="form-control"
                value={subjectClassification}
                onChange={handleSubjectClassificationChange}
              />
            </div>
          </div>
        </div>

        <div className="form-group m-3">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;