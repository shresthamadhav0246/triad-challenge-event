import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddAuction = () => {
  const [lotNumber, setLotNumber] = useState('');
  const [artist, setArtist] = useState('');
  const [yearProduced, setYearProduced] = useState('');
  const [classification, setClassification] = useState('');
  const [description, setDescription] = useState('');
  const [auctionDate, setAuctionDate] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState('');
  const [medium, setMedium] = useState('');
  const [framed, setFramed] = useState(false);
  const [dimensions, setDimensions] = useState('');
  const [material, setMaterial] = useState('');
  const [weight, setWeight] = useState('');

  const handleLotNumberChange = (e) => {
    setLotNumber(e.target.value);
  };

  const handleArtistChange = (e) => {
    setArtist(e.target.value);
  };

  const handleYearProducedChange = (e) => {
    setYearProduced(e.target.value);
  };

  const handleClassificationChange = (e) => {
    setClassification(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAuctionDateChange = (e) => {
    setAuctionDate(e.target.value);
  };

  const handleEstimatedPriceChange = (e) => {
    setEstimatedPrice(e.target.value);
  };

  const handleMediumChange = (e) => {
    setMedium(e.target.value);
  };

  const handleFramedChange = (e) => {
    setFramed(e.target.checked);
  };

  const handleDimensionsChange = (e) => {
    setDimensions(e.target.value);
  };

  const handleMaterialChange = (e) => {
    setMaterial(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform add auction logic here
  };

  return (
    <div className="container">
      <h1>Add Auction</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Lot Number:</label>
          <input
            type="text"
            className="form-control"
            value={lotNumber}
            onChange={handleLotNumberChange}
          />
        </div>
        <div className="form-group">
          <label>Artist:</label>
          <input
            type="text"
            className="form-control"
            value={artist}
            onChange={handleArtistChange}
          />
        </div>
        <div className="form-group">
          <label>Year Produced:</label>
          <input
            type="text"
            className="form-control"
            value={yearProduced}
            onChange={handleYearProducedChange}
          />
        </div>
        <div className="form-group">
          <label>Classification:</label>
          <input
            type="text"
            className="form-control"
            value={classification}
            onChange={handleClassificationChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Auction Date:</label>
          <input
            type="text"
            className="form-control"
            value={auctionDate}
            onChange={handleAuctionDateChange}
          />
        </div>
        <div className="form-group">
          <label>Estimated Price:</label>
          <input
            type="text"
            className="form-control"
            value={estimatedPrice}
            onChange={handleEstimatedPriceChange}
          />
        </div>
        <div className="form-group">
          <label>Medium:</label>
          <input
            type="text"
            className="form-control"
            value={medium}
            onChange={handleMediumChange}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={framed}
            onChange={handleFramedChange}
          />
          <label className="form-check-label">Framed</label>
        </div>
        <div className="form-group">
          <label>Dimensions:</label>
          <input
            type="text"
            className="form-control"
            value={dimensions}
            onChange={handleDimensionsChange}
          />
        </div>
        <div className="form-group">
          <label>Material:</label>
          <input
            type="text"
            className="form-control"
            value={material}
            onChange={handleMaterialChange}
          />
        </div>
        <div className="form-group">
          <label>Weight:</label>
          <input
            type="text"
            className="form-control"
            value={weight}
            onChange={handleWeightChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Auction</button>
      </form>
    </div>
  );
};

export default AddAuction;