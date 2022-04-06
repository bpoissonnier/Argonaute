import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase/compat/app";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //lecture bdd et récup les nouvellesdonnées
  useEffect(() => {
    //ce déclache quand app.js ce charge
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map(doc => doc.data()));
        //
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  const addTodo = (event) => {
    //click du boutton
    event.preventDefault(); //stop refresh

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, input]);
    setInput(""); // efface l'input apres clique sur btn
  };

  return (
    <div className="App">
      {/* <!-- Header section --> */}
      <header>
        <h1>
          <img
            src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
            alt="Wild Code School logo"
          />
          Les Argonautes
        </h1>
      </header>

      {/* <!-- Main section --> */}
      <main>
        {/* <!-- New member form --> */}
        <h2>Ajouter un(e) Argonaute</h2>
        <form className="new-member-form">
          <label for="name">Nom de l&apos;Argonaute</label>
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button className="btn" type="submit" onClick={addTodo}>
            Envoyer
          </button>
        </form>

        {/* <!-- Member list --> */}
        <h2>Membres de l'équipage</h2>
        <section className="member-list">
          {todos.map((todo) => (
            <Todo text={todo} />
            // <li>{todo}</li>
          ))}
          {/* <div className="member-item">Eleftheria</div>
          <div className="member-item">Gennadios</div>
          <div className="member-item">Lysimachos</div> */}
        </section>
      </main>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}

export default App;
