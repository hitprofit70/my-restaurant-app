import Carousel from "react-bootstrap/Carousel";

const ImgSlide = () => {
  return (
    <div className="container mt-5">
      <Carousel
        fade
        className="shadow bg-body rounded animate__animated animate__fadeInUp animate__repeat-3"
        style={{ borderRadius: "5px", animationDuration: "10s" }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 shadow bg-body"
            src="https://media.istockphoto.com/id/1428594094/photo/empty-coffee-shop-interior-with-wooden-tables-coffee-maker-pastries-and-pendant-lights.webp?b=1&s=170667a&w=0&k=20&c=TTATB_esYszT-yzqQixyDBJeZQfcXjHwDs6-PhnMDcE="
            style={{ height: "600px", borderRadius: "5px" }}
            alt=""
          />
          <Carousel.Caption>
            <h3>This place is opening soon</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 shadow bg-body"
            src="https://media.istockphoto.com/id/1464763636/photo/group-of-friends-relaxing-in-a-caf%C3%A9.webp?b=1&s=170667a&w=0&k=20&c=TtO9OW1-QvL7y-kKE9WhEu_wfNVOT3MjdvL_YenL5IM="
            style={{ height: "600px", borderRadius: "5px" }}
            alt=""
          />

          <Carousel.Caption>
            <h3>Bring your big smile and have fun at our restaurant</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 shadow bg-body"
            src="https://media.istockphoto.com/id/1474203885/photo/woman-eating-at-the-table-young-asia-woman-eating-spaghetti-at-restaurant.webp?b=1&s=170667a&w=0&k=20&c=gwsdeRzSH2grtGAu-BfQVRbkv3Qu0ZQ9AOIYy4z9vcM="
            style={{ height: "600px", borderRadius: "5px" }}
            alt=""
          />

          <Carousel.Caption>
            <h3>Try to taste the new meal</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade shadow bg-body rounded animate__animated animate__fadeInLeft"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://media.istockphoto.com/id/1428594094/photo/empty-coffee-shop-interior-with-wooden-tables-coffee-maker-pastries-and-pendant-lights.webp?b=1&s=170667a&w=0&k=20&c=TTATB_esYszT-yzqQixyDBJeZQfcXjHwDs6-PhnMDcE="
              style={{ height: "600px" }}
              className="d-block w-100 shadow bg-body rounded"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1464763636/photo/group-of-friends-relaxing-in-a-caf%C3%A9.webp?b=1&s=170667a&w=0&k=20&c=TtO9OW1-QvL7y-kKE9WhEu_wfNVOT3MjdvL_YenL5IM="
              style={{ height: "600px" }}
              className="d-block w-100 shadow bg-body rounded"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1474203885/photo/woman-eating-at-the-table-young-asia-woman-eating-spaghetti-at-restaurant.webp?b=1&s=170667a&w=0&k=20&c=gwsdeRzSH2grtGAu-BfQVRbkv3Qu0ZQ9AOIYy4z9vcM="
              style={{ height: "600px" }}
              className="d-block w-100 shadow bg-body rounded"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </div>
  );
};

export default ImgSlide;
