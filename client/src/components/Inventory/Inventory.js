import React from "react";
import "./Inventory.css";
const Inventory = () => {
  return (
    <div>
      <div>
        <h2 className="inventoryTitle">Add Your Item for Sale</h2>
      </div>
      <div className="inventoryBox">
        <form className="inventoryForm">
          <input className="yourItemInputField" type="text" placeholder="Title" />
          <textarea className="yourItemInputField" type="text" placeholder="Description" />
          <input className="yourItemInputField" type="number" placeholder="Price $$$" />
          <input className="yourImageToUpload" type="file" accept=".png,.jpg,.jpeg" />
          <input className="submitButton" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Inventory;
