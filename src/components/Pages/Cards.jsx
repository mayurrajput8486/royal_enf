import React from 'react'
import bear650 from '../../assets/Cards/bear650.avif'
import bullet350 from '../../assets/Cards/bullet350.avif'
import classic350 from '../../assets/Cards/classic350.avif'
import himalayan from '../../assets/Cards/himalayan.avif'
import shotgun650 from '../../assets/Cards/shotgun650.avif'
import { NavLink } from 'react-router-dom'
const Cards = () => {
  return (
    <div>
        <div className='w-100 bg-dark text-light'>
        <div className='fs-2 fw-bold text-center p-3'>
          Our <span className='text-warning'>Popular Bikes</span>
        </div>
      </div>

      {/*-----------------------Cards---------------------- */}

      <div className='bg-secondary pt-5 pb-5'>
        {/* row 1 */}
        <div className='d-flex justify-content-evenly mb-3'>

          <div className="card" style={{ width: "18rem" }}>
            <img src={bear650} className="card-img-top" alt="bear650" />
            <div className="card-body">
              <h5 className="card-title">Bear 650</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="/contact" className="btn btn-primary">Contact</NavLink>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src={bullet350} className="card-img-top" alt="bullet350" />
            <div className="card-body">
              <h5 className="card-title">Bullet 350</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="/contact" className="btn btn-primary">Contact</NavLink>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src={classic350} className="card-img-top" alt="classic350" />
            <div className="card-body">
              <h5 className="card-title">Classic 350</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="/contact" className="btn btn-primary">Contact</NavLink>
            </div>
          </div>

        </div>

        {/* row 2 */}

        <div className='d-flex justify-content-evenly mb-3'>

          <div className="card" style={{ width: "18rem" }}>
            <img src={himalayan} className="card-img-top" alt="himalayan" />
            <div className="card-body">
              <h5 className="card-title">Himalayaan</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="/contact" className="btn btn-primary">Contact</NavLink>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src={shotgun650} className="card-img-top" alt="shotgun650" />
            <div className="card-body">
              <h5 className="card-title">Shotgun 650</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="/contact" className="btn btn-primary">Contact</NavLink>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src={classic350} className="card-img-top" alt="classic350" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="/contact" className="btn btn-primary">Contact</NavLink>
            </div>
          </div>

        </div>

        {/* row - 3 */}
        <div className='d-flex justify-content-evenly'>

          <div className="card" style={{ width: "18rem" }}>
            <img src={bear650} className="card-img-top" alt="bear650" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="/contact" className="btn btn-primary">Contact</NavLink>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src={bullet350} className="card-img-top" alt="bullet350" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="/contact" className="btn btn-primary">Contact</NavLink>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src={classic350} className="card-img-top" alt="classic350" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="/contact" className="btn btn-primary">Contact</NavLink>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cards