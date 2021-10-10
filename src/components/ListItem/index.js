import "./ListItem.css";

import { useState } from "react";
import Button from "../Button";
import { deleteItem, updateItem } from "../../firebase/utils";

function ListItem({ index, id, children, collection }) {
  const [showActions, setShowActions] = useState(false);
  const [text, setText] = useState(children);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async (id) => {
    try {
      await deleteItem(id, collection);
    } catch (e) {
      console.log(e);
    }
  };

  const handleEdit = async (id) => {
    try {
      await updateItem(id, text, collection);
    } catch (e) {
      console.log(e);
    }
    setIsEditing(false);
  };

  return (
    <div
      className="list-item"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {showActions ? (
        <div className="item-actions">
          <Button
            data-testid="edit"
            onClick={() => setIsEditing(true)}
            type="small"
          >
            edit
          </Button>
          <Button
            data-testid="delete"
            onClick={() => handleDelete(id)}
            type="small"
          >
            delete
          </Button>
        </div>
      ) : (
        ""
      )}
      {isEditing ? (
        <div>
          <textarea
            defaultValue={text}
            onChange={(e) => setText(e.target.value)}
            className="input-item"
          />
          <div className="item-actions">
            <Button onClick={() => setIsEditing(false)} type="small">
              cancel
            </Button>
            <Button onClick={() => handleEdit(id)} type="small">
              save
            </Button>
          </div>
        </div>
      ) : (
        <li>
          <span className="item-number">{index + 1}</span>
          {children}
        </li>
      )}
    </div>
  );
}

export default ListItem;
