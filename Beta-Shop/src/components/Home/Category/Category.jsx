import { useNavigate } from "react-router-dom";

import "./Category.scss";
const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      Categories
      <span></span>
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={
                "http://localhost:1337" +
                item.attributes.img.data.attributes.url
              }
              alt="Categories"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
