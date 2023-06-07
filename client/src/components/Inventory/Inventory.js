import React from "react";
import { useState } from "react";
import "./Inventory.css";
import preview_image from "../images/preview_image.jpg"
const CheckboxGroup = () => {
  const [checkboxes, setCheckboxes] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div className="tagsCheckbox">
      <p className="tagTitle">Pick a tag for your item:</p>
        <div className="checkboxesList">

      <label className="checkboxLabel flipBox">
        <input
          type="checkbox"
          checked={checkboxes[0]}
          onChange={() => handleCheckboxChange(0)}
          />
        <span className="checkboxText">Toys</span>
        
      </label>

      <label className="checkboxLabel">
        <input
          type="checkbox"
          checked={checkboxes[1]}
          onChange={() => handleCheckboxChange(1)}
          />
        <span className="checkboxText">Electronics</span>
      </label>

      <label className="checkboxLabel">
        <input
          type="checkbox"
          checked={checkboxes[2]}
          onChange={() => handleCheckboxChange(2)}
          />
        <span className="checkboxText">Outdoor</span>
      </label>
      <label className="checkboxLabel">
        <input
          type="checkbox"
          checked={checkboxes[3]}
          onChange={() => handleCheckboxChange(3)}
          />
        <span className="checkboxText">Kitchen</span>
      </label>
      <label className="checkboxLabel">
        <input
          type="checkbox"
          checked={checkboxes[4]}
          onChange={() => handleCheckboxChange(4)}
          />
        <span className="checkboxText">Clothing</span>
      </label>
          </div>
    </div>
  );
};

const Inventory = () => {

  const [file, setfile] = useState(null)

  const handleChange= (e)=>{
    setfile(URL.createObjectURL(e.target.files[0]))
  }



  return (
    <div>
      <div>
        <h2 className="inventoryTitle">Add Your Item for Sale</h2>
      </div>

      <div className="inventoryBox">
        <form className="inventoryForm">
          <CheckboxGroup />

          <input
            className="yourItemInputField"
            type="text"
            placeholder="Title"
          />
          <textarea
            className="yourItemInputField"
            type="text"
            placeholder="Description"
          />
          <input
            className="yourItemInputField"
            type="number"
            placeholder="Price $$$"
          />
          <input
            className="yourImageToUpload"
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={handleChange}
          />
          <img className="previewImage" src={file??preview_image}/>
          <input className="submitButton" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Inventory;
