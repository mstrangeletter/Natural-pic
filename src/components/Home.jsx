
import { Context } from "../Context";
import { useContext } from "react";
import "./home.css";
import CorazonLleno from"../assets/img/CorazonLleno.png";
import CorazonVacio from"../assets/img/CorazonVacio.png";

function Home() {
  const { fotos, setFotos } = useContext(Context);

  return (
    <div>
      <h1>Natural Pic</h1>

      <div className="grilla">
        {fotos.map((photo, i) => {
          return (
            <div
              className="imagen"
              style={{ backgroundImage: `url('${photo.src}')` }}
              onClick={() => {
                const foto = fotos[i];
                const estadoActualDelLike = foto.liked;
                if (estadoActualDelLike) foto.liked = false;
                else foto.liked = true;
                setFotos([...fotos]);
              }}
            >
              {photo.liked ? (
                <div className="heart">
                  <img  height="25" src={CorazonLleno} alt="" />
                </div>

              ) : (
                <div className="heart">
                <img  height="25" src={CorazonVacio} alt="" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
