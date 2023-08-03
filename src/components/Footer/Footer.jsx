import React from 'react'
import './footer.css'
import {CiFacebook, CiYoutube, CiLinkedin} from 'react-icons/ci'
import {FaInstagram, FaTiktok} from 'react-icons/fa'
import F1 from '../../assets/f1.png'
import F2 from '../../assets/f2.png'

const Footer = () => {
  return (
    <>

    <footer>
        <div className="links1">
            <ul>
                <h4>Our Company</h4>
                <li>
                    <a href="">Our Community</a>
                </li>

                <li>
                    <a href="">Our Histroy</a>
                </li>
            </ul>
        </div>

        <div className="links2">
            <ul>
                <h4>Careers</h4>
                <li>
                    <a href="">Corprate</a>
                </li>

                <li>
                    <a href="">Resturant</a>
                </li>
            </ul>
        </div>

        <div className="links3">
            <ul>
                <h4>Contact us</h4>
                <li>
                    <a href="">Suggestion</a>
                </li>

                <li>
                    <a href="">Complaint</a>
                </li>
            </ul>
        </div>

        <div className="links4">
            <ul>
                <h4>News Room</h4>
                <li>
                    <a href="">Local</a>
                </li>
            </ul>
        </div>

        <div className='social-media'>
            <a href='https://www.facebook.com/McDonaldsPK/'>
            <CiFacebook className='fbicons'/>
            </a>

            <a href='https://www.youtube.com/@McDonalds'>
            <CiYoutube className='yticons'/>

            </a>
            
            <a href='https://www.instagram.com/mcdonaldspakistan/?hl=en'>
            <FaInstagram className='inicons'/>

            </a>
            
            <a href='https://www.linkedin.com/company/mcdonalds-corporation'>
            <CiLinkedin className='liicons'/>

            </a>

            <a href='https://www.tiktok.com/@mcdonalds?lang=en'>
            <FaTiktok className='tiicons'/>

            </a>
           
            
            


        </div>

        <div className="download">
            <a href="https://apps.apple.com/us/app/mcdonalds/id922103212">
            <img src={F1} alt="" />
            </a>
    
            <a href='https://play.google.com/store/apps/details?id=com.mcdonalds.mobileapp&hl=en&gl=US&pli=1'>
            <img src={F2} alt="" />
            </a>

        </div>

    </footer>
      
    </>
  )
}

export default Footer
