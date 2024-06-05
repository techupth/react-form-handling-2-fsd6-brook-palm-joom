import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [imgUrlInput, setImgUrlInput] = useState("");
  const [price, setPrice] = useState("");
  const [priceInput, setpriceInput] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const handleClick = () => {
    setName(nameInput);
    setPrice(priceInput);
    setImgUrl(imgUrlInput);
    setDescription(descriptionInput);
    alert(
      `Name: ${nameInput}\nPrice: ${priceInput}\nImage: ${imgUrlInput}\nDescription: ${descriptionInput}\n`
    );
  };
  const handleNameChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleImgUrlChange = (event) => {
    setImgUrlInput(event.target.value);
  };

  const handlePriceChange = (event) => {
    setpriceInput(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescriptionInput(event.target.value);
  };

  return (
    <form className="post-form">
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={handleNameChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={handleImgUrlChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={handlePriceChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={handleDescriptionChange}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" onClick={handleClick}>
          Create
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
