import KittiCarousel from "./KittiCarousel";
import { useState } from "react";

const Layout = () => {
  const [index, setIndex] = useState(0);
  const [, setDirection] = useState(null);
  const [carouselItemCount] = useState(30);

  const toggleCarousel = (direction) => {
    let tempIndex = index;
    const [min, max] = [0, carouselItemCount - 1];

    if (direction === "next") {
      tempIndex++;
    } else if (direction === "prev") {
      tempIndex--;
    }

    if (tempIndex > max) {
      tempIndex = 0;
    }

    if (tempIndex < min) {
      tempIndex = max;
    }
    setIndex(tempIndex);
    setDirection(direction);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="nav-bar"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="p-3 donation-section">
            <h1 className="donation-title">
              SMALL DONATIONS.
              <br />
              BIG IMPACT
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="p-3 feature-section">
            <div className="row">
              <div className="col-6">
                <h4 className="feature-title">Featured Charities</h4>
              </div>
              <div className="col-6">
                <div className="arrow-container">
                  <a
                    className="left carousel-control kitti-prev-icon float-left"
                    onClick={() => toggleCarousel("prev")}
                  ></a>
                  <a
                    className="right carousel-control kitti-next-icon float-right"
                    onClick={() => toggleCarousel("next")}
                  ></a>
                </div>
              </div>
            </div>
            <KittiCarousel index={index} setIndex={setIndex}></KittiCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
