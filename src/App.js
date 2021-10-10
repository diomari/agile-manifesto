import "./App.css";

import { useEffect, useState, useRef } from "react";
import List from "./components/List";
import AddItem from "./components/AddItem";
import db from "./firebase/";
import { addItem } from "./firebase/utils";
import { onSnapshot, collection } from "@firebase/firestore";

function App() {
  const [principles, setPrinciples] = useState([]);
  const [values, setValues] = useState([]);
  const [value, setValue] = useState("");
  const [principle, setPrinciple] = useState("");

  const inputValue = useRef(null);
  const inputPrinciple = useRef(null);

  const fetchData = async () => {
    onSnapshot(collection(db, "principles"), (snapshot) => {
      setPrinciples(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    onSnapshot(collection(db, "values"), (snapshot) => {
      setValues(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  const handleAdd = async (text, collection, inputRef) => {
    await addItem(text, collection);
    inputRef.current.value = "";
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>Agile Manifesto</h1>
        </header>
        <div className="main-content">
          <section className="values-section">
            <List title="🌱 Values" list={values} collection="values" />
            <AddItem
              onSubmit={() => handleAdd(value, "values", inputValue)}
              onInputChange={(e) => setValue(e.target.value)}
              innerRef={inputValue}
            />
          </section>
          <section className="principles-section">
            <List
              title="⚓ Principles"
              list={principles}
              collection="principles"
            />
            <AddItem
              onSubmit={() =>
                handleAdd(principle, "principles", inputPrinciple)
              }
              onInputChange={(e) => setPrinciple(e.target.value)}
              innerRef={inputPrinciple}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
