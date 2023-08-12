import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {




    return (

        <footer id='results'>
            <div className="footer-container" >


                <div className="footer-content">
                    <div className='footer-content-item'>
                        <h6>8A Ton That Thuyet, My Dinh, Nam Tu Liem, Hanoi 100000, Vietnam</h6>
                        <a href="tel:(123) 156-789" id="tel0" class="phoneNo">(123) 156-789</a>
                        <p>Contact Us:G5rden@gmail.com</p>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
                            <div style={{ display: 'flex', width: '10%', justifyItems: 'center', paddingTop: '10px' }}>
                                <div class="social">
                                    <Link><i className="fab fa-facebook-f fa-lg"></i></Link>
                                </div>
                                <div class="social">
                                    <Link><i className="fab fa-instagram fa-lg"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='footer-content-item-lg'>
                        <iframe className='map' id="my-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0964842999224!2d105.77972177395297!3d21.028825087778905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd376479b%3A0xbc2e0bb9db373ed2!2zOGEgVMO0biBUaOG6pXQgVGh1eeG6v3QsIE3hu7kgxJDDrG5oLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1688618231459!5m2!1svi!2s" />
                    </div>
                </div>
            </div>

            <div className='footer_bottom'>



                <div className='footer-mid'>
                    <div className='footer-link' >
                        <h6>LEARN MORE ABOUT</h6>
                        <Link id='link'>About Us</Link>
                        <Link id='link'>Privacy</Link>
                    </div>

                    <div className='footer-link'>
                        <h6>SHOP</h6>
                        <Link id='link'>Anniversary</Link>
                        <Link id='link'>Birthday</Link>
                        <Link id='link'>Get Well</Link>
                    </div>

                    <div className='footer-link'>
                        <h6>CUSTOMER SERVICE</h6>
                        <Link id='link'>Help/FAQs</Link>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>Copyright © 2023 G5rden. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer
