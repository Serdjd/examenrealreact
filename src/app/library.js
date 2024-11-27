import { useState } from "react";
import { books } from "./data";

export default function Library() {
  const [libros, setLibros] = useState(books);
  //Establece el modo edición en el libro específico
  function edit(id) {
    setLibros(
      libros.map((libro) => {
        if (libro.id === id) {
          return { ...libro, editMode: true };
        } else {
          return libro;
        }
      })
    );
  }
  //Gudarda el núevo titulo y desactiva el modo edición
  function save(id, title) {
    setLibros(
      libros.map((libro) => {
        if (libro.id === id) {
          return { ...libro, titulo: title, editMode: false };
        } else {
          return libro;
        }
      })
    );
  }

  return (
    <>
      <h2>Libros</h2>
      {libros.map((libro) => (
        <Book book={libro} edit={edit} save={save} key={libro.id} />
      ))}
    </>
  );
}

function Book({ book, edit, save }) {
  const [libro, setLibro] = useState(book);
  //Actualiza el estado conforme el usuario escribe
  function handleChange(e) {
    setLibro({ ...libro, titulo: e.target.value });
  }
  return (
    <>
      <li>
        {book.editMode ? (
          <>
            <input
              type="text"
              value={libro.titulo}
              onChange={handleChange}
            ></input>
            <button onClick={() => save(libro.id)}>Guardar</button>
          </>
        ) : (
          <>
            <label>{libro.titulo}</label>
            <button onClick={() => edit(libro.id, libro.titulo)}>Editar</button>
          </>
        )}
      </li>
    </>
  );
}
