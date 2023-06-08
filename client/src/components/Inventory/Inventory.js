import React, { useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_INVENTORY } from "../../utils/actions";
import "./Inventory.css";
import preview_image from "../images/preview_image.jpg";

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
  const [state, dispatch] = useStoreContext();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TO_INVENTORY,
      product: { ...formData, image: file },
    });
  };

  return (
    <div>
      <div>
        <h2 className="inventoryTitle">Add Your Item for Sale</h2>
      </div>

      <div className="inventoryBox">
        <form className="inventoryForm" onSubmit={handleSubmit}>
          <CheckboxGroup />

          <input
            className="yourItemInputField"
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />

          <textarea
            className="yourItemInputField"
            type="text"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />

          <input
            className="yourItemInputField"
            type="number"
            placeholder="Price $$$"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />

          <input
            className="yourImageToUpload"
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={handleChange}
          />

          <img className="previewImage" src={file ?? preview_image} />

          <input className="submitButton" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Inventory;
