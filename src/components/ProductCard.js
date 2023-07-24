import React from "react";
import "../styles/ProductCard.scss";
import "../styles/styles.scss";
import Skeleton from "./Skeleton";

const ProductCard = ({ product, isSecond, onButtonPress }) => {
  const handleButtonClick = (buttonType) => {
    onButtonPress(buttonType); // Llama a la función pasada por prop en el componente padre con el tipo de botón (puede ser "buttonA" o "buttonB")
  };

  return (
    <div>
      {product ? (
        <div className="product-card">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-card__image"
          />
          <h2 className="product-card__name">{product.title}</h2>

          {isSecond ? (
            <div className="product-card__buttons-container">
              <button
                className="button__expensive"
                onClick={() => handleButtonClick("caro")}
              >
                Mas caro
              </button>
              <button
                className="button__cheap"
                onClick={() => handleButtonClick("barato")}
              >
                Mas barato
              </button>
            </div>
          ) : (
            <>
              <p className="product-card__price">${product.price}</p>
              <a
                className="button__buy"
                href={product.permalink}
                target="_blank"
                rel="noreferrer"
              >
                Comprar
              </a>
            </>
          )}
        </div>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default ProductCard;
