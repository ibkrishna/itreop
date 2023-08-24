import React from 'react'
import Slider from "react-slick";
// import reasonimg from "../assets/img/wimages";
import pwork from "../css/pwork.css";
function Pwork() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };



  return (

    <div className='projects'>

      <div className='recent_work'>
        <h2> Our Recents work</h2>
        <Slider {...settings}>
        
          <div className='pworkimg'>
            {/* <h1>Our Recent Work</h1> */}
            <div className='pworking_img'>

              <img src="https://img.freepik.com/free-vector/firmware-illustration-concept_114360-962.jpg?size=626&ext=jpg&ga=GA1.2.750320620.1691166365&semt=sph" alt="" />
            </div>


          </div>
          <div className='pworkimg'>
            <div className='pworking_img'>
              <img src="https://img.freepik.com/free-photo/html-system-websites-concept_23-2150323524.jpg?size=626&ext=jpg&ga=GA1.2.750320620.1691166365&semt=sph" alt="" />
            </div>

          </div>
          <div className='pworkimg'>
            <div className='pworking_img'>
              <img src="https://img.freepik.com/premium-vector/vector-laptop-technology-icon_734841-418.jpg?size=626&ext=jpg&ga=GA1.2.750320620.1691166365&semt=sph " alt="" />

            </div>
          </div>

          <div className='pworkimg'>
            <div className='pworking_img'>
              <img src="https://img.freepik.com/premium-psd/realistic-premium-15-inch-notebook-pro-web-ui-application-photoshop-mock-up-front-view_39605-171.jpg?size=626&ext=jpg&ga=GA1.2.750320620.1691166365&semt=sph" alt="" />

            </div>
          </div>
          <div className='pworkimg'>
            <div className='pworking_img'>
              <img src="https://img.freepik.com/free-vector/firmware-illustration-concept_114360-962.jpg?size=626&ext=jpg&ga=GA1.2.750320620.1691166365&semt=sph" alt="" />

            </div>
          </div>
        </Slider>
      </div>



    </div>

  )
}

export default Pwork;




