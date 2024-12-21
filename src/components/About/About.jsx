import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {

    return (
        <section className="About  
            d-flex 
            flex-column 
            justify-content-center 
            align-items-center">
                    <div className="container">

                <div className="title text-center">
                    <h2>About</h2>
                </div>
                <div className="decoration d-flex gap-3  align-items-center justify-content-center">
                    <div className='line'></div>
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <div className='line'></div>
                </div>
                <div className="row justify-content-center gap-3">
                   <div className="col-lg-4 ms-auto">
                    <p  className="about-paragraph">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                   </div>

                   <div className="col-lg-4 me-auto">
                        <p  className="about-paragraph">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                   </div>
                </div>
                <div className="download text-center mt-4">
                    <a className='btn btn-outline-light btn-xl'><FontAwesomeIcon icon={faDownload} className="download-icon" />Free Download!</a>
                </div>
                </div>
            

        </section>

    )
};

export default About;

