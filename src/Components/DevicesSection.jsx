
const DevicesSection = () => {
  return (
    <div className="container mt-5 p-0">
        <div className="row p-0">
            <div className="membership-image col-lg-6 col-12 devices-section-col-1">
                <img className="rounded object-fit-cover" 
                src="../images/devices-section-1.jpg" alt="" />
                <div className="membership-text text-white ps-4">
                    <h2>Membership Program</h2>
                    <p>Be a Vape Pi member and get our <br></br> special exclusive offers</p>
                    <button className="view-btn">View</button>
                </div>
            </div>
            <div className=" col-6 col-lg-3 devices-section-col-2 position-relative ">
                <img className="rounded position-absolute" 
                src="../images/devices-section-2.jpg" alt="" />
                <div className="devices-hover text-white ps-3 position-absolute">
                    <div className="devices-text">
                        <h5>Devices</h5>
                        <p>Find the best for <br></br>you here!</p>
                    </div>
                        <i className="bi bi-chevron-right ms-5"></i>
                    </div>
            </div>
            <div className="col-6 col-lg-3 d-flex flex-column devices-section-col-3">
                <div className="pods-grid py-4 rounded">
                    <div className="info rounded pb-1">
                        <h5 className="d-inline-block">Pods</h5>
                        <i className="bi bi-chevron-right ms-5"></i>
                        <p>Variety of choices <br /> available</p>
                    </div>
                </div>
                <div className="disposable-grid py-4 my-1 rounded">
                    <div className="info rounded pb-1">
                        <h5 className="d-inline-block">Disposable</h5>
                        <i className="bi bi-chevron-right ms-5"></i>
                        <p>Variety of choices <br /> available</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default DevicesSection
