import Carousel from "react-bootstrap/Carousel";
import Logo from "./assets/img/carousel-logo-1.png";
import Logo2 from "./assets/img/carousel-logo-2.png";
import Logo3 from "./assets/img/carousel-logo-3.png";
import Logo4 from "./assets/img/carousel-logo-4.png";
import Logo5 from "./assets/img/carousel-logo-5.png";
import Logo6 from "./assets/img/carousel-logo-6.png";
import MainImage from "./assets/img/carousel-main-1.png";
import MainImage2 from "./assets/img/carousel-main-2.png";
import MainImage3 from "./assets/img/carousel-main-3.png";
import MainImage4 from "./assets/img/carousel-main-4.png";
import MainImage5 from "./assets/img/carousel-main-5.png";
import MainImage6 from "./assets/img/carousel-main-6.png";

const KittiCarousel = ({ index, setIndex }) => {
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      variant="dark"
      activeIndex={index}
      onSelect={handleSelect}
      indicators={false}
      bsPrefix="main-section"
    >
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage}
          alt="First slide"
        />
        <img className="d-block kitti-logo" src={Logo} alt="Greenpeace" />
        <div className="kitti-details">
          <h6 className="carousel-title">Greenpeace</h6>
          <p className="description">
            We are a movement to protect the environment and promote peace.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
        <Carousel.Caption bsPrefix="design"></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage2}
          alt="Second slide"
        />
        <img className="d-block kitti-logo" src={Logo2} alt="Unicef" />
        <div className="kitti-details">
          <h6 className="carousel-title">Unicef</h6>
          <p className="description">
            We do whatever it takes to save and protect the world's most
            vulnerable children.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage3}
          alt="Third slide"
        />
        <img
          className="d-block kitti-logo"
          src={Logo3}
          alt="Save the Children"
        />
        <div className="kitti-details">
          <h6 className="carousel-title">Save the Children</h6>
          <p className="description">
            We do whatever it takes to save and protect the world's most
            vulnerable children.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage4}
          alt="Third slide"
        />
        <img
          className="d-block kitti-logo"
          src={Logo4}
          alt="Rethink Mental Illness"
        />
        <div className="kitti-details">
          <h6 className="carousel-title">Rethink Mental Illness</h6>
          <p className="description">
            Leading the way to a better life for everyone severely affected by
            mental illness.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage5}
          alt="Third slide"
        />
        <img className="d-block kitti-logo" src={Logo5} alt="Samaritans" />
        <div className="kitti-details">
          <h6 className="carousel-title">Samaritans</h6>
          <p className="description">
            Sharing stories of self-care, hope and recovery online can help to
            inspire others
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage6}
          alt="Third slide"
        />
        <img className="d-block kitti-logo" src={Logo6} alt="Women’s Aid" />
        <div className="kitti-details">
          <h6 className="carousel-title">Women’s Aid</h6>
          <p className="description">
            Women's Aid is the national charity working to end domestic abuse
            against women & children.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage}
          alt="First slide"
        />
        <img className="d-block kitti-logo" src={Logo} alt="Greenpeace" />
        <div className="kitti-details">
          <h6 className="carousel-title">Greenpeace</h6>
          <p className="description">
            We are a movement to protect the environment and promote peace.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
        <Carousel.Caption bsPrefix="design"></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage2}
          alt="Second slide"
        />
        <img className="d-block kitti-logo" src={Logo2} alt="Unicef" />
        <div className="kitti-details">
          <h6 className="carousel-title">Unicef</h6>
          <p className="description">
            We do whatever it takes to save and protect the world's most
            vulnerable children.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage3}
          alt="Third slide"
        />
        <img
          className="d-block kitti-logo"
          src={Logo3}
          alt="Save the Children"
        />
        <div className="kitti-details">
          <h6 className="carousel-title">Save the Children</h6>
          <p className="description">
            We do whatever it takes to save and protect the world's most
            vulnerable children.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage4}
          alt="Third slide"
        />
        <img
          className="d-block kitti-logo"
          src={Logo4}
          alt="Rethink Mental Illness"
        />
        <div className="kitti-details">
          <h6 className="carousel-title">Rethink Mental Illness</h6>
          <p className="description">
            Leading the way to a better life for everyone severely affected by
            mental illness.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage5}
          alt="Third slide"
        />
        <img className="d-block kitti-logo" src={Logo5} alt="Samaritans" />
        <div className="kitti-details">
          <h6 className="carousel-title">Samaritans</h6>
          <p className="description">
            Sharing stories of self-care, hope and recovery online can help to
            inspire others
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage6}
          alt="Third slide"
        />
        <img className="d-block kitti-logo" src={Logo6} alt="Women’s Aid" />
        <div className="kitti-details">
          <h6 className="carousel-title">Women’s Aid</h6>
          <p className="description">
            Women's Aid is the national charity working to end domestic abuse
            against women & children.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage}
          alt="First slide"
        />
        <img className="d-block kitti-logo" src={Logo} alt="Greenpeace" />
        <div className="kitti-details">
          <h6 className="carousel-title">Greenpeace</h6>
          <p className="description">
            We are a movement to protect the environment and promote peace.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
        <Carousel.Caption bsPrefix="design"></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage2}
          alt="Second slide"
        />
        <img className="d-block kitti-logo" src={Logo2} alt="Unicef" />
        <div className="kitti-details">
          <h6 className="carousel-title">Unicef</h6>
          <p className="description">
            We do whatever it takes to save and protect the world's most
            vulnerable children.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage3}
          alt="Third slide"
        />
        <img
          className="d-block kitti-logo"
          src={Logo3}
          alt="Save the Children"
        />
        <div className="kitti-details">
          <h6 className="carousel-title">Save the Children</h6>
          <p className="description">
            We do whatever it takes to save and protect the world's most
            vulnerable children.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage4}
          alt="Third slide"
        />
        <img
          className="d-block kitti-logo"
          src={Logo4}
          alt="Rethink Mental Illness"
        />
        <div className="kitti-details">
          <h6 className="carousel-title">Rethink Mental Illness</h6>
          <p className="description">
            Leading the way to a better life for everyone severely affected by
            mental illness.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage5}
          alt="Third slide"
        />
        <img className="d-block kitti-logo" src={Logo5} alt="Samaritans" />
        <div className="kitti-details">
          <h6 className="carousel-title">Samaritans</h6>
          <p className="description">
            Sharing stories of self-care, hope and recovery online can help to
            inspire others
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage6}
          alt="Third slide"
        />
        <img className="d-block kitti-logo" src={Logo6} alt="Women’s Aid" />
        <div className="kitti-details">
          <h6 className="carousel-title">Women’s Aid</h6>
          <p className="description">
            Women's Aid is the national charity working to end domestic abuse
            against women & children.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage}
          alt="First slide"
        />
        <img className="d-block kitti-logo" src={Logo} alt="Greenpeace" />
        <div className="kitti-details">
          <h6 className="carousel-title">Greenpeace</h6>
          <p className="description">
            We are a movement to protect the environment and promote peace.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
        <Carousel.Caption bsPrefix="design"></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage2}
          alt="Second slide"
        />
        <img className="d-block kitti-logo" src={Logo2} alt="Unicef" />
        <div className="kitti-details">
          <h6 className="carousel-title">Unicef</h6>
          <p className="description">
            We do whatever it takes to save and protect the world's most
            vulnerable children.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage3}
          alt="Third slide"
        />
        <img
          className="d-block kitti-logo"
          src={Logo3}
          alt="Save the Children"
        />
        <div className="kitti-details">
          <h6 className="carousel-title">Save the Children</h6>
          <p className="description">
            We do whatever it takes to save and protect the world's most
            vulnerable children.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage4}
          alt="Third slide"
        />
        <img
          className="d-block kitti-logo"
          src={Logo4}
          alt="Rethink Mental Illness"
        />
        <div className="kitti-details">
          <h6 className="carousel-title">Rethink Mental Illness</h6>
          <p className="description">
            Leading the way to a better life for everyone severely affected by
            mental illness.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage5}
          alt="Third slide"
        />
        <img className="d-block kitti-logo" src={Logo5} alt="Samaritans" />
        <div className="kitti-details">
          <h6 className="carousel-title">Samaritans</h6>
          <p className="description">
            Sharing stories of self-care, hope and recovery online can help to
            inspire others
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage6}
          alt="Third slide"
        />
        <img className="d-block kitti-logo" src={Logo6} alt="Women’s Aid" />
        <div className="kitti-details">
          <h6 className="carousel-title">Women’s Aid</h6>
          <p className="description">
            Women's Aid is the national charity working to end domestic abuse
            against women & children.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage}
          alt="First slide"
        />
        <img className="d-block kitti-logo" src={Logo} alt="Greenpeace" />
        <div className="kitti-details">
          <h6 className="carousel-title">Greenpeace</h6>
          <p className="description">
            We are a movement to protect the environment and promote peace.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
        <Carousel.Caption bsPrefix="design"></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage2}
          alt="Second slide"
        />
        <img className="d-block kitti-logo" src={Logo2} alt="Unicef" />
        <div className="kitti-details">
          <h6 className="carousel-title">Unicef</h6>
          <p className="description">
            We do whatever it takes to save and protect the world's most
            vulnerable children.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage3}
          alt="Third slide"
        />
        <img
          className="d-block kitti-logo"
          src={Logo3}
          alt="Save the Children"
        />
        <div className="kitti-details">
          <h6 className="carousel-title">Save the Children</h6>
          <p className="description">
            We do whatever it takes to save and protect the world's most
            vulnerable children.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage4}
          alt="Third slide"
        />
        <img
          className="d-block kitti-logo"
          src={Logo4}
          alt="Rethink Mental Illness"
        />
        <div className="kitti-details">
          <h6 className="carousel-title">Rethink Mental Illness</h6>
          <p className="description">
            Leading the way to a better life for everyone severely affected by
            mental illness.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage5}
          alt="Third slide"
        />
        <img className="d-block kitti-logo" src={Logo5} alt="Samaritans" />
        <div className="kitti-details">
          <h6 className="carousel-title">Samaritans</h6>
          <p className="description">
            Sharing stories of self-care, hope and recovery online can help to
            inspire others
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item className="kitti-carousel-section">
        <img
          className="d-block kitti-main-image"
          src={MainImage6}
          alt="Third slide"
        />
        <img className="d-block kitti-logo" src={Logo6} alt="Women’s Aid" />
        <div className="kitti-details">
          <h6 className="carousel-title">Women’s Aid</h6>
          <p className="description">
            Women's Aid is the national charity working to end domestic abuse
            against women & children.
          </p>
          <a className="kitti-link" href="javascript">
            View
          </a>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default KittiCarousel;
