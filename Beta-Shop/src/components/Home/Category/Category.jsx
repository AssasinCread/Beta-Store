import "./Category.scss";

const Category = ({categories}) => {
  return (
    <div className="shop-by-category">
      <div className="categories">
      {categories.data.map((item) => {
        <div key={item.id} className="category">
          <img src={"http://localhost:1337"} alt="" />
        </div>
      })}
      </div>
    </div>
  );
};

export default Category;
