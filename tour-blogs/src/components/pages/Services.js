// Services.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Services.css';

const Services = () => {
  return (
    <section className="services container mt-4">
      <h2 className="text-center mb-5 justify-content-center">Our Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-5 ">
          <img src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg" className='images'/>

            <div className="card-body p-4 pl-5">
              <h3 className="card-title">Guided Tours</h3>
              <p className="card-text">Explore amazing destinations with our knowledgeable guides.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
          <img src="https://ceoworld.biz/wp-content/uploads/2019/06/Bora-Bora-Island-Tahiti-French-Polynesia.jpg " className='images__src '/>

            <div className="card-body p-4 pl-5">
              <h3 className="card-title">Accommodation</h3>
              <p className="card-text">Stay in comfortable and luxurious accommodations during your tour.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card me-4">
          <img src="https://cdn.pixabay.com/photo/2016/07/30/00/03/winding-road-1556177_1280.jpg" className='images__src '/>

            <div className="card-body p-4 pl-5 ">
              <h3 className="card-title">Transportation</h3>
              <p className="card-text">Effortless travel with our convenient transportation options.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
          <img src="https://media.istockphoto.com/id/1409298844/photo/man-in-office-showing-an-insurance-policy-and-pointing-with-a-pen-where-the-policyholder-must.jpg?s=1024x1024&w=is&k=20&c=khS5b0xO8A9XG7AgaMDES8cd8BDkO572L81HErEWwxc=" className='images__src '/>

            <div className="card-body p-4 pl-5 ">
              <h3 className="card-title">Insurance</h3>
              <p className="card-text">Explore amazing destinations with our knowledgeable guides.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src='https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg' className='image_src' height='235px'/>                
            <div className="card-body p-4 pl-5">
              <h3 className="card-title">Package</h3>
              <p className="card-text">Explore amazing destinations with our knowledgeable guides.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card me-4">
          <img src='https://cdn.pixabay.com/photo/2017/09/04/16/58/passport-2714675_1280.jpg' className='image_src' height='235px'/>                

            <div className="card-body p-4 ">
              <h3 className="card-title">Tour Travels</h3>
              <p className="card-text">Explore amazing destinations with our knowledgeable guides.</p>
            </div>
          </div>
        </div>
        {/* Add more services as needed */}
      </div>
    </section>
  );
}

export default Services;
