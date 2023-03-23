import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";

import useFetche from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useFetche(`/api/products?populate=*&[filters][id]=${id}`);

  if (!data) return;
  const product = data.data[0].attributes;
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={"http://localhost:1337" + product.img.data[0].attributes.url}
              alt="product"
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8380;{product.price}</span>
            <span className="desc">{product.description}</span>
            {/* ///////////////////////////////////////////////////// */}
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>0</span>
                <span>+</span>
              </div>
              {/* ///////////////////////////////////////////////////// */}
              <button className="add-to-cart-button">
                <FaCartPlus size={"20px"} />
                ADD TO CART
              </button>
            </div>
            {/* ///////////////////////////////////////////////////// */}
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedin size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
