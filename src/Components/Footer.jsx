
const Footer = () => {
  return (
    <div className="container mt-6 mb-5">
      <div className="row">
        <div className="col-6 col-md-4 col-lg-3 mt-4 mt-md-0">
            <h4 className="mb-3">Customer Service</h4>
            <i className="bi bi-shield-exclamation me-2 fs-5"></i>
            <p className="d-inline-block">Terms & Privacy Policy</p>
            <br />
            <i className="bi bi-arrow-counterclockwise me-2 fs-5"></i>
            <p className="d-inline-block">Return Policy</p>
        </div>
        <div className="col-6 col-md-4 col-lg-3 mt-4 mt-md-0">
        <h4 className="mb-3">Language</h4>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Myanmar (Unicode)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Myanmar (Zawgyi)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                    English
                    </label>
                </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3 mt-4 mt-md-0">
            <h4 className="mb-3">Customer Service</h4>
            <i className="bi bi-geo-alt me-2 fs-5"></i>
            <p className="d-inline-block">Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana, Thingangyun Tsp, Yangon</p>
            <br />
            <i className="bi bi-telephone me-2 fs-5"></i>
            <p className="d-inline-block">09458489458</p>
        </div>
        <div className="col-6 col-md-4 col-lg-3 mt-4 mt-md-0">
            <h4 className="mb-3">Download Our App</h4>
            <img src="../images/QR-code.jpg" className="w-50" alt="" />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-4">
            <h4>Payment</h4>
            <img className="w-25 rounded me-2" src="../images/kbzpay-logo.jpg" alt="" />
            <img className="w-25 rounded" src="../images/wavepay-logo.png" alt="" />
        </div>
        <div className="col-4">
        <h4>Follow Us On</h4>
        <i className="bi bi-facebook fs-2 text-primary me-2"></i>
        <i className="bi bi-instagram fs-2 text-danger me-2"></i>
        <i className="bi bi-messenger fs-2 text-primary me-2"></i>
        <i className="bi bi-whatsapp fs-2 text-success me-2"></i>
        <i className="bi bi-twitter fs-2 text-info me-2"></i>
        </div>
      </div>
      <div className="text-center mt-5">
        <i className="bi bi-c-circle me-2 fs-4"></i>
        <h4 className="d-inline-block">Copyright 2023 C by D Co.,Ltd. All rights reserved.</h4>
      </div>
    </div>
  )
}

export default Footer
