import "./AddItem.css";

import Button from "../Button";

function AddItem({ onInputChange, innerRef, onSubmit }) {
  return (
    <div className="add-item">
      <textarea
        ref={innerRef}
        onChange={onInputChange}
        className="input-item"
      ></textarea>
      <div className="add-actions">
        <Button type="primary" data-testid="add-button" onClick={onSubmit}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default AddItem;
