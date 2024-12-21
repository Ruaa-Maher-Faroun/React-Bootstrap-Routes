import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {

    return (
        <footer className="footer">
            <div className=" container">
                <div className="row jusify-content-around ">
                    <div className="col-lg-4">
                        <h4 className='mb-4 text-uppercase'>Location
                        </h4>
                        <p className='lead mb-0'>2215 John Daniel Drive <br />
                            Clark, MO 65243</p>
                    </div>
                    <div className="col-lg-4  mb-5 mb-lg-0">
                        <h4 className='mb-4 text-uppercase'>Around the Web
                        </h4>
                        <div className='d-flex justify-content-center'>
                            <a href="" className="btn btn-outline-light btn-social mx-1 rounded-circle">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="" className="btn btn-outline-light btn-social mx-1 rounded-circle">
                                <FontAwesomeIcon icon={faTwitter} />

                            </a>
                            <a href="" className="btn btn-outline-light btn-social mx-1 rounded-circle">
                                <FontAwesomeIcon icon={faLinkedinIn} />

                            </a>
                            <a href="" className="btn btn-outline-light btn-social mx-1 rounded-circle">
                                <FontAwesomeIcon icon={faBasketballBall} />

                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h4 className='mb-4 text-uppercase'>About Freelancer
                        </h4>
                        <p className='lead mb-0'>Freelance is a free to use, MIT licensed Bootstrap theme created by <a className='linkFooter'>Start Bootstrap</a>  .</p>
                    </div>
                </div>
            </div>
        </footer>



    )
};

export default Footer;

