import './Header.css';
import avatar from '../../assets/avataaars.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (
        <section className="header">

            <header>
                <div className="container d-flex gap-4  
                flex-column 
                justify-content-center 
                align-items-center">
                        <div className="img">
                            <img src={avatar} alt="avataars"
                            className='avatar-img' />
                        </div>
                        <div className="heading">
                            <h1>Start Bootstrap</h1>
                        </div>
                        <div className="decoration d-flex gap-3  align-items-center">                   
                            <div className='line'></div>                   
                            <FontAwesomeIcon icon={faStar} className='star-icon' />              
                            <div className='line'></div>                   
                        </div>
                        <div className="title">
                            <p>Graphic Artist - Web Designer - Illustrator
</p>              
                        </div>

                </div>
            </header>
        </section>

    )
};

export default Header;

