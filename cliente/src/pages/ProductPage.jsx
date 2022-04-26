import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categorys from "../Components/Categorys";
import Loading from "../Components/Loading";
import CategoryContext from "../context/CategoryContext";
import { GetProductForId } from "../services/GetProductForId";
import "../Assets/Styles/scss/productPage.scss";
import { GetPictureFull } from "../services/GetPictureFull";

const ProductPage = () => {
  //Uso la categoria guardada en contexto
  const { cate, get_Categorys } = useContext(CategoryContext);
  //Tomo el parametro desde path
  const { id } = useParams();
  const { product, isLoading } = GetProductForId(id);
  const { picture } = GetPictureFull(id);
  const [cat, setCat] = useState([]);
  var priceFormat = 0;
  var picturefull = "";

  const title = product != undefined ? product.title.split(" ")[0] : "no";

  const URL_CATEGORY = `http://localhost:3002/api/items/categorys/${title}`;

  useEffect(() => {
    fetch(URL_CATEGORY)
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject();
      })
      .then((res) => {
        setCat(res.categories);
        get_Categorys(cat);
      });

    // SEO
    if (product != undefined) {
      document.title = `Mercado Libre | ${product.title}`;
      document.getElementsByTagName("META")[3].content = `${product.title}`;
    }
  }, [cate, cat]);

  if (product != undefined) {
    if (picture != undefined) {
      picturefull = picture;
    }
  }
  if (isLoading) return <Loading />;
  // Si el id del producto no existe, te retorna mensaje de error
  if (product == undefined) return <h2> No se encontro item</h2>;

  priceFormat = new Intl.NumberFormat("de-DE").format(product.price.amount);
  return (
    <div className="container">
      <Categorys categories={cate} />
      <div style={{ backgroundColor: "white", padding: "32px" }}>
        {product == undefined ? (
          <h2>No existe ningún producto con ese ID</h2>
        ) : (
          <>
            <div className="box-productPage">
              <div className="box-productPage-img">
                <img src={picturefull} />
              </div>
              <div className="buy-box">
                <span className="buy-condition">
                  {product.condition} - {product.sold_quantity}{" "}
                  {product.sold_quantity > 1 ? "vendidos" : "vendido"}
                </span>
                <div className="buy-title">{product.title}</div>
                <div className="buy-price">
                  $ {priceFormat}{" "}
                  <span style={{ fontSize: "23px", "vertical-align": "top" }}>
                    {product.price.decimals ? product.price.decimals : ""}
                  </span>
                </div>
                <button
                  className="buy-button"
                  style={{ width: "100%", paddingRight: "0px" }}
                >
                  Comprar
                </button>
              </div>
              <div>
                <div className="buy-description">Descripción del producto</div>
                <div className="buy-description-text">
                  {" "}
                  {product.description}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <br />
      <br />
    </div>
  );
};
export default ProductPage;
