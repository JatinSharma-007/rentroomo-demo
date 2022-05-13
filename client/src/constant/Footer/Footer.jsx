import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer section'>
        <div className="footer__container container grid">
            <div>
                <a href="#" className="footer__logo">
                    Rentroomo <i className='bx bxs-home-alt-2'></i>
                </a>
                <p className="footer__description">
                    Our Mission is to provide no stress and
                    hassle free   <br /> renting experience to our customers and lorem an <br />
                    sit la doree Lorem ipsum dolor sit amet 
                </p>
            </div>
            <div className="footer__content">
                <div>
                    <h3 className="footer__title">
                        About
                    </h3>
                    <ul className="footer__links">
                        <li>
                            <a href="" className="footer__link">About Us</a>
                        </li>
                        <li>
                            <a href="" className="footer__link">Pricing</a>
                        </li>
                        <li>
                            <a href="" className="footer__link">Value</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer__title">
                        Support
                    </h3>
                    <ul className="footer__links">
                        <li>
                            <a href="" className="footer__link">FAQs</a>
                        </li>
                        <li>
                            <a href="" className="footer__link">Support Center</a>
                        </li>
                        <li>
                            <a href="" className="footer__link">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer__title">
                        Support
                    </h3>
                    <ul className="footer__links">
                        <li>
                            <a href="" className="footer__link">FAQs</a>
                        </li>
                        <li>
                            <a href="" className="footer__link">Support Center</a>
                        </li>
                        <li>
                            <a href="" className="footer__link">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer__title">
                        Follow us
                    </h3>
                    <ul className="footer__social">
                        <a href="#" target={"_blank"} className="footer__social-link"><i className='bx bxl-facebook-circle' ></i></a>
                        <a href="#" target={"_blank"} className="footer__social-link"><i className='bx bxl-instagram' ></i></a>
                        <a href="#" target={"_blank"} className="footer__social-link"><i className='bx bxl-linkedin' ></i></a>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer__info container">
            <span className="footer__copy">
                &#169; Rentroomo. All rights reserved
            </span>
            <div className="footer__privacy">
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer