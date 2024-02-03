
const NewFlavor = () => {
  return (
    <div className="mt-5 container">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner rounded-3">
        <div className="carousel-item active">
            <div className="d-block d-flex flex-column align-items-end me-auto new-flavour-carousel-1 py-5 pe-7 text-white">
                <h2>Try New Flavor </h2>
                <h5>Citrus Monster</h5>
                <button className="view-btn">View</button>    
            </div>
        </div>
        <div className="carousel-item">
            <div className="d-block d-flex flex-column align-items-end me-auto new-flavour-carousel-2 py-5 pe-7 text-white">
                    <h2>Try New Flavor </h2>
                    <h5>Citrus Monster</h5>
                    <button className="view-btn">View</button>    
            </div>
        </div>
    <div className="carousel-item">
        <div className="d-block d-flex flex-column align-items-end me-auto new-flavour-carousel-3 py-5 pe-7 text-white">
                <h2>Try New Flavor </h2>
                <h5>Citrus Monster</h5>
                <button className="view-btn">View</button>    
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default NewFlavor
