
const Navbar = () => {
  return (
    <nav className="">
      <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="home-carousel home-carousel-1 vh-100">
        <header className=" mx-6 text-white d-flex justify-content-center">
          <h2 className="mt-3">ShopDoora</h2>
          <ul className="ms-auto nav-items align-self-center d-flex gap-3 mt-3">
            <li>
              <a href="#"><i className="bi bi-search text-white fs-4"></i></a>
            </li>
            <li>
              <a href="#"><i className="bi bi-cart3 text-white fs-4"></i></a>
            </li>
            <li>
              <a href="#"><i className="bi bi-list text-white fs-4"></i></a>
            </li>
          </ul>
        </header>
        <div className="text-center text-white mt-7 pt-6">
          <h4>The Best Look</h4>
          <h1 className="fw-bold display-3">AnyTime Anywhere</h1>
          <h5>Start from 10,000 MMK</h5>
          <button className="view-btn mt-3">View</button>
        </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="home-carousel home-carousel-2 vh-100">
        <header className=" mx-6 text-white d-flex justify-content-center">
          <h2 className="mt-3">ShopDoora</h2>
          <ul className="ms-auto nav-items align-self-center d-flex gap-3 mt-3">
            <li>
              <a href="#"><i className="bi bi-search text-white fs-4"></i></a>
            </li>
            <li>
              <a href="#"><i className="bi bi-cart3 text-white fs-4"></i></a>
            </li>
            <li>
              <a href="#"><i className="bi bi-list text-white fs-4"></i></a>
            </li>
          </ul>
        </header>
        <div className="text-center text-white mt-7 pt-6">
          <h4>The Best Look</h4>
          <h1 className="fw-bold display-3">AnyTime Anywhere</h1>
          <h5>Start from 10,000 MMK</h5>
          <button className="view-btn mt-3">View</button>
        </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="home-carousel home-carousel-3 vh-100">
        <header className=" mx-6 text-white d-flex justify-content-center">
          <h2 className="mt-3">ShopDoora</h2>
          <ul className="ms-auto nav-items align-self-center d-flex gap-3 mt-3">
            <li>
              <a href="#"><i className="bi bi-search text-white fs-4"></i></a>
            </li>
            <li>
              <a href="#"><i className="bi bi-cart3 text-white fs-4"></i></a>
            </li>
            <li>
              <a href="#"><i className="bi bi-list text-white fs-4"></i></a>
            </li>
          </ul>
        </header>
        <div className="text-center text-white mt-7 pt-6">
          <h4>The Best Look</h4>
          <h1 className=" fw-bold display-3">AnyTime Anywhere</h1>
          <h5>Start from 10,000 MMK</h5>
          <button className="view-btn mt-3">View</button>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </nav>
  )
}

export default Navbar
