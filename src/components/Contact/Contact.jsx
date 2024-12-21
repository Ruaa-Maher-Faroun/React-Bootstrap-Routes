import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

    return (
        <section className="Contact">
            <div className="container d-flex justify-content-center align-items-center flex-column">

                <div className="title">
                    <h2>Contact Me</h2>
                </div>
                <div className="decoration d-flex gap-3  align-items-center">
                    <div className='line'></div>
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <div className='line'></div>
                </div>
                <div className="row justify-content-center w-100">
                    <div class="col-lg-8 col-xl-7">
                        <form action="">

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="" />
                                <label for="floatingInput">Full name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingEmail" placeholder="" />
                                <label for="floatingEmail">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingMsg" placeholder="" />
                                <label for="floatingNumber">Phone number</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingMsg" placeholder="" />
                                <label for="floatingMsg">Message</label>
                            </div>

                            <button className='btn btn-xl btn-send'>Send</button>

                        </form>
                    </div>
                </div>
            </div>


        </section>

    )
};

export default Contact;

