
const NewReleased = () => {
  return (
    <div className="container released-container text-center">
        <h1><span className="text-danger">New</span> Released</h1>
        <h5 className="mb-5">Try out our Latset favour here</h5>
        <div className="row">
            <div className="col-6 col-md-4 col-lg-3 mt-lg-0 mt-2">
                <img className="w-100 rounded-4" src="../images/new-released-1.jpg" alt="" />
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-lg-0 mt-2">
                <img className="w-100 rounded-4" src="../images/new-released-2.jpg" alt="" />
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-lg-0 mt-2">
                <img className="w-100 rounded-4" src="../images/new-released-3.jpg" alt="" />
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-lg-0 mt-2">
                <img className="w-100 rounded-4" src="../images/new-released-4.jpg" alt="" />
            </div>
        </div>
        <button className="btn px-5 py-2 btn-light rounded-5 mt-4">View More <i className="bi bi-chevron-right"></i></button>
    </div>
  )
}

export default NewReleased
