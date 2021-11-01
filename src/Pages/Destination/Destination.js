import React from 'react';
import './Destination.css';
import p1 from '../../images/destination-1.jpg'
import p2 from '../../images/destination-2.jpg'
import p3 from '../../images/destination-3.jpg'
import pic from '../../images/gallary/feature-4.jpg'
import pic2 from '../../images/gallary/frozen-bubble-1943224_1280.jpg'
import pic3 from '../../images/gallary/news-10-370x270.jpg'
import pic4 from '../../images/gallary/news-9-370x270.jpg'
import pic5 from '../../images/gallary/feature-3.jpg'
import pic6 from '../../images/gallary/destination-8.jpg'

const Destination = () => {
    return (
        
            
       
            <div className="container my-5">



    
<h2 className="fs-2 fw-bold text-primary text-center">Mont Blanc Mountain</h2>
        <h4 className="fs-5 text-muted text-wrap">
        Mont Blanc Mountain,  specila package for special person and your fammil are invitted Sconsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, so if you want to go special package the beautifull mountain area we are appresilated to you.
        </h4>


         <div className="row  mx-auto border my-5">

            <div className="col-md-3">
                <img className src={p1} alt="" />
            </div>
            <div  className="col-md-3">
                <img src={p2} alt="" />
            </div>
            <div  className="col-md-3">
                <img src={p3} alt="" />
            </div>
            {/* <div  className="col-md-3">
                <img src={p2} alt="" />
            </div> */}
        </div>  








<div className="container border">

    <h2 className="fs-2 text-center text-primary">Our Photo Gallary</h2>
    <h4 className="text-center text-muted my-5">We are ready to click you and we are appreciate to join our
        our photo gallay 
    </h4>

    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={pic} class="card-img-top" alt="..."/>
      <div class="card-body">
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={pic2}class="card-img-top" alt="..."/>
      <div class="card-body">
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={pic3} class="card-img-top" alt="..."/>
      <div class="card-body">
        
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={pic4}class="card-img-top" alt="..."/>
      <div class="card-body">
        
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={pic5}class="card-img-top" alt="..."/>
      <div class="card-body">
       
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={pic6}class="card-img-top" alt="..."/>
      <div class="card-body">
       
      </div>
    </div>
  </div>
</div>





</div>
        

        
    </div>
   

       
    );
};

export default Destination;