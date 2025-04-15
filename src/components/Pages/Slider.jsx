import React from 'react'
import banner1 from '../../assets/banners/banner1.jpg'
import banner2 from '../../assets/banners/banner2.avif'
import banner3 from '../../assets/banners/banner3.jpg'
import banner4 from '../../assets/banners/banner4.avif'
import banner5 from '../../assets/banners/banner5.avif'
const Slider = () => {
  return (
    <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="4000">
                    <img src={banner1} className="d-block w-100" alt="bike" />
                  </div>
                  <div className="carousel-item" data-bs-interval="4000">
                    <img src={banner2} className="d-block w-100" alt="bike" />
                  </div>
                  <div className="carousel-item" data-bs-interval="4000">
                    <img src={banner3} className="d-block w-100" alt="bike" />
                  </div>
                  <div className="carousel-item" data-bs-interval="4000">
                    <img src={banner4} className="d-block w-100" alt="bike" />
                  </div>
                  <div className="carousel-item" data-bs-interval="4000">
                    <img src={banner5} className="d-block w-100" alt="bike" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
    </div>
  )
}

export default Slider