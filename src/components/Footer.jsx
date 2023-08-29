import React from 'react'
import "../css/footer.css";
import {useNavigate} from 'react-router-dom'
import { BiChevronRight } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa";
import { BiSolidPhoneCall } from 'react-icons/bi';


function XFooter() {

  const navigate = useNavigate()
  return (
    <div className='footer'>
      <div className='footer_exclusive'>

        <div className='footer_exclusive_one '>

          <div className='footer_grid'>

            <div className='itservices_services'>
              <div className='footer_item_left'>Corplyx Technologies Private Limited</div>

              <div className='itservices_items_left'>Corplyx Technologies is the best website development, Search Engine Optimization and Digital Marketing company that provides the best services on time to its clients. </div>
              <div className='itservices_items_left'>Unit-930 I-thum Tower </div>
              <div className='itservices_items_left'>Sector-62 Noida,Uttar Pradesh 201301</div>
              <div className='itservices_items_left'><BiSolidPhoneCall />+9196-5038-8201</div>

            </div>

            <div className='itservices_services'>
              <div className='footer_item'>IT Services</div>

              <div className='itservices_items' onClick={()=> navigate('/ADevelopment')}><BiChevronRight />App Development</div>
              <div className='itservices_items'onClick={()=> navigate('/WDevelopment')}><BiChevronRight />Web Development</div>
              <div className='itservices_items'onClick={()=> navigate('/CSecurity')}><BiChevronRight />Cyber Security</div>
              <div className='itservices_items'onClick={()=> navigate('/GDevelopment')}><BiChevronRight />Game Development</div>
              <div className='itservices_items'onClick={()=> navigate('/SMMarketing')}><BiChevronRight />Social Media Marketing</div>
              <div className='itservices_items'onClick={()=> navigate('/BCDevelopment')}><BiChevronRight />Block Chain Development</div>
              <div className='itservices_items'onClick={()=> navigate('/SEOptimization')}><BiChevronRight />Search Engine Optimization</div>



            </div>
            <div className='itservices_services'>
              <div className='footer_item'>Services</div>

              <div className='itservices_items'><BiChevronRight />Bulk Email Services</div>
              <div className='itservices_items'><BiChevronRight />Bulk SMS Services</div>
              <div className='itservices_items'><BiChevronRight />Ecommerce Website</div>
              <div className='itservices_items'><BiChevronRight />School Software</div>
              <div className='itservices_items'><BiChevronRight />Dynamic Website</div>
              <div className='itservices_items'><BiChevronRight />E-Learning Management System </div>

            </div>
            <div className='itservices_services'>
              <div className='footer_item'>Social Links</div>
              <div className='itservices_items'><a href="https://www.facebook.com/profile.php?id=100095230572986"><FaFacebookF/>Facebook </a></div>
              <div className='itservices_items'> <a href="https://twitter.com/CorplyxTech"><FaTwitter /> Twitter </a></div>
              <div className='itservices_items'> <a href="https://www.instagram.com/"><FaInstagram /> Instagram </a></div>
              <div className='itservices_items'><a href='https://www.linkedin.com/company/corplyx/'> <FaLinkedin /> Linkedin </a></div>
              {/* <div className='itservices_items'><FaYoutube /> Youtube</div> */}


            </div>


          </div>





        </div>
      </div>



      <div className='hr_services'>
        <hr />

        <h5 className='copyright_mt-3'>© {new Date().getFullYear()} Corplyx Technologies Private Limited | All rights reserved</h5>
      </div>


    </div>

  )
}

export default XFooter;
