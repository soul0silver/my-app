import './AboutUs.css';
import { Link } from 'react-router-dom';
import pic from './aboutpic';
const AboutUs = () => {
  return (
    <div className="about-us">


      <div className='about_container1'>
        <div>
          <h2>Let's plant trees together</h2>
          <div className='about_container12'>
          <p>
            Pioneering in building colorful bonsai collections,
            We are committed to providing quality, healthy and beautiful bonsai in store. The variety of trees and sizes to choose from, dedicated staff to support and advise on choosing the right tree. Products are packed carefully and safely.</p>
        </div>
        </div>
      </div>


<h3>The value that makes up G5</h3>
      <div className='about_container left'>

        <div className='abuout_pic'>
          <img src={pic.about[1]} alt=''/>
          <img src={pic.about[2]} alt=''/>
        </div>
        
        <div className='abuout_content'>
          <h1>Sincerely</h1>
          <p>Starting from "Green Mission", we are forced to transform towards green goals. This is the inevitable transformation of Vietnam as well as the whole world; This is a growth model that focuses on economic development to ensure environmental sustainability, through emission reduction, economical and efficient use of natural resources, and prevention of ecosystem degradation.</p>
        </div>
      </div>


      <div className='about_container' >
        <div className='abuout_content'>
          <h1>Care About</h1>

          <p id='p2'>Trees are living creatures that are more than just decorations, with every tree that reaches the customer's hand is absolutely guaranteed. Together with G5 spread good things to everyone.</p>
        </div>
        <div className='abuout_pic'>
          <img src={pic.about[0]} alt=''/>
          <img src={pic.about[3]}alt=''/>
          </div>
      </div>


      <div className='AboutMe'>
          <h1>About Us</h1>
          <div className='AboutMe_content2'>
            
          <div className='AboutMe_content'>
            <h5>Talk about me</h5>

            <p>G5 is the leading brand in the field of manufacturing & supplying all kinds of feng shui plants, office plants, succulents, cactus & high-class Terrarium miniatures for interior decoration.
            G5 always tries to create beautiful, unique and completely different products from the market. We turn products into works of art with all our passion and enthusiasm... to meet all the needs of our customers.</p>
          </div>
          <div className='AboutMe_content1'>
          <h4>Our motto</h4>
          <div>
          <p> Reasonable price, suitable for all customers</p>
          <p> Unique, luxurious products with the best service quality</p>
          <p >Customer satisfaction is the only goal for survival and development</p>
          <h5> G5 bonsai the perfect choice for your green space!</h5>
          </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutUs