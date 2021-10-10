import "./List.css";
import ListItem from "../ListItem";

function List({ list, title, collection }) {
  return (
    <>
      <h2 className="list-title">{title}</h2>
      {list?.length ? (
        <>
          <ul className="list">
            {list.map(({ id, text }, index) => (
              <ListItem index={index} collection={collection} id={id} key={id}>
                {text}
              </ListItem>
            ))}
          </ul>
        </>
      ) : (
        <div className="loading">Loading.... </div>
      )}
    </>
  );
}

export default List;
