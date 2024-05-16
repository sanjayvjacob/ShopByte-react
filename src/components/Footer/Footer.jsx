import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
    <div class="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <p className="#bbb">© ShopByte 2024</p>
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 #bbb">Home</a></li>
        <li className
        ="nav-item mb-2"><a href="#" className="nav-link p-0 #bbb">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 #bbb">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 #bbb">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 #bbb">About</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 #bbb">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 #bbb">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 #bbb">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 #bbb">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 #bbb">About</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 #bbb">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 #bbb">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 #bbb">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 #bbb">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 #bbb">About</a></li>
      </ul>
    </div>
  </footer>
</div>
    </div>
  )
}

export default Footer