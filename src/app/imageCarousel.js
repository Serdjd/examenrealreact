import { useState } from "react";

export default function ImageCarousel({ imagenes }) {
  const [index, setIndex] = useState(0);

  //Itera el indice hacia delante y si ya es el último indice, lo pone en 0
  function next() {
    setIndex(index < imagenes.length - 1 ? index + 1 : 0);
  }
  //Itera el indice hacia detrás y si ya es el último indice, lo pone en 0
  function previous() {
    setIndex(index > 0 ? index - 1 : imagenes.length - 1);
  }

  return (
    <div>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
      <br />
      <Image imagen={imagenes[index]} />
    </div>
  );
}

function Image({ imagen }) {
  return (
    <>
      <p>{imagen.titulo}</p>
      <img src={imagen.url} width={500} height={300} />
    </>
  );
}
