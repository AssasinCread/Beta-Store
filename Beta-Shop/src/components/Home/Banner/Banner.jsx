import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="prime-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Convallis interdum purus adipiscing disparturient posuere ac a quam
            a eleifend montes parturient posuere cause temporary
          </p>
          <div className="status">
            <div className="banner-status">Read More</div>
            <div className="banner-status v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="banner-img" />
      </div>
    </div>
  );
};

export default Banner;
