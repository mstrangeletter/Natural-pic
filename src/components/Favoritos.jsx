import { Context } from "../Context";
import { useContext } from "react";
import "./favoritos.css";


function Favoritos() {
  const { fotos } = useContext(Context);

  const favoritos = fotos.filter((foto) => foto.liked === true);

  return (
    <div>
      <h1>Fotos Favoritas</h1>

      <div className="grilla">
        {favoritos.map((photo, i) => {
          return (
            <div className="img-container">
              <div
                className="imagen"
                style={{ backgroundImage: `url('${photo.src}')` }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favoritos;
