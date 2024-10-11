const HeroBanner = () => {
  const banners = [
    {
      title: "Affordable Price For Car Servicing",
      discription:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide2",
      prev: "#slide4",
    },
    {
      title: "Affordable Price For Car Servicing",
      discription:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide3",
      prev: "#slide1",
    },
    {
      title: "Affordable Price For Car Servicing",
      discription:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide4",
      prev: "#slide2",
    },
    {
      title: "Affordable Price For Car Servicing",
      discription:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide1",
      prev: "#slide3",
    },
  ];
  return (
    <div className="carousel w-full">
      {banners.map((banner, index) => (
        <div key={index} className="carousel w-full h-screen">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroBanner;
