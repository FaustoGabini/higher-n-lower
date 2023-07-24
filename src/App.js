import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import "./styles/styles.scss";
import Header from "./components/Header";
import Score from "./components/Score";

function App() {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [nextProduct, setNextProduct] = useState(null);
  const [score, setScore] = useState(null);
  const [mostrarJuego, setMostrarJuego] = useState(true);

  const categories = [
    {
      id: "MLA5725",
      name: "Accesorios para Vehículos",
    },
    {
      id: "MLA1512",
      name: "Agro",
    },
    {
      id: "MLA1403",
      name: "Alimentos y Bebidas",
    },
    {
      id: "MLA1071",
      name: "Animales y Mascotas",
    },
    {
      id: "MLA1367",
      name: "Antigüedades y Colecciones",
    },
    {
      id: "MLA1368",
      name: "Arte, Librería y Mercería",
    },
    {
      id: "MLA1743",
      name: "Autos, Motos y Otros",
    },
    {
      id: "MLA1384",
      name: "Bebés",
    },
    {
      id: "MLA1246",
      name: "Belleza y Cuidado Personal",
    },
    {
      id: "MLA1039",
      name: "Cámaras y Accesorios",
    },
    {
      id: "MLA1051",
      name: "Celulares y Teléfonos",
    },
    {
      id: "MLA1648",
      name: "Computación",
    },
    {
      id: "MLA1144",
      name: "Consolas y Videojuegos",
    },
    {
      id: "MLA1500",
      name: "Construcción",
    },
    {
      id: "MLA1276",
      name: "Deportes y Fitness",
    },
    {
      id: "MLA5726",
      name: "Electrodomésticos y Aires Ac.",
    },
    {
      id: "MLA1000",
      name: "Electrónica, Audio y Video",
    },
    {
      id: "MLA2547",
      name: "Entradas para Eventos",
    },
    {
      id: "MLA407134",
      name: "Herramientas",
    },
    {
      id: "MLA1574",
      name: "Hogar, Muebles y Jardín",
    },
    {
      id: "MLA1499",
      name: "Industrias y Oficinas",
    },
    {
      id: "MLA1459",
      name: "Inmuebles",
    },
    {
      id: "MLA1182",
      name: "Instrumentos Musicales",
    },
    {
      id: "MLA3937",
      name: "Joyas y Relojes",
    },
    {
      id: "MLA1132",
      name: "Juegos y Juguetes",
    },
    {
      id: "MLA3025",
      name: "Libros, Revistas y Comics",
    },
    {
      id: "MLA1168",
      name: "Música, Películas y Series",
    },
    {
      id: "MLA1430",
      name: "Ropa y Accesorios",
    },
    {
      id: "MLA409431",
      name: "Salud y Equipamiento Médico",
    },
    {
      id: "MLA1540",
      name: "Servicios",
    },
    {
      id: "MLA9304",
      name: "Souvenirs, Cotillón y Fiestas",
    },
    {
      id: "MLA1953",
      name: "Otras categorías",
    },
  ];

  useEffect(() => {
    consultarAPi();
  }, [score]);

  const handleVolverAJugar = () => {
    setMostrarJuego(!mostrarJuego);
  };

  const consultarAPi = async () => {
    const randomCategory = Math.floor(Math.random() * 32);
    const categoryId = categories[randomCategory].id;

    const api = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?status=active&category=${categoryId}`
    );

    const data = await api.json();
    const randomNumber = Math.floor(Math.random() * 25);
    if (score === 0 || score === null) {
      setCurrentProduct(data.results[randomNumber]);
    }

    setNextProduct(data.results[randomNumber + 1]);
  };

  const handleButtonPress = (buttonType) => {
    console.log(nextProduct.price);
    if (buttonType === "caro") {
      if (nextProduct.price >= currentProduct.price) {
        setScore(score + 1);
        setCurrentProduct(nextProduct);
        setNextProduct(null);
      } else {
        setMostrarJuego(false);
      }
    } else if (buttonType === "barato") {
      if (nextProduct.price <= currentProduct.price) {
        setScore(score + 1);
        setCurrentProduct(nextProduct);
        setNextProduct(null);
      } else {
        setMostrarJuego(false);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          {mostrarJuego ? (
            <>
              <div className="container__content">
                <ProductCard product={currentProduct} />
                <h1>vs</h1>
                <ProductCard
                  product={nextProduct}
                  isSecond={true}
                  onButtonPress={handleButtonPress}
                />
              </div>
              <p className="title__score">Puntos: {!score ? 0 : score}</p>
            </>
          ) : (
            <div className="container__content">
              <Score score={score} onVolverAJugar={handleVolverAJugar} />
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
