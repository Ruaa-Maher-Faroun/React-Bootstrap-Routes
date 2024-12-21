import './Portfolio.css';
import cabin from '../../assets/cabin.png';
import cake from '../../assets/cake.png';
import circus from '../../assets/circus.png';
import game from '../../assets/game.png';
import safe from '../../assets/safe.png';
import submarine from '../../assets/submarine.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {

    return (
        <section className="portfolio d-flex justify-content-center align-items-center">
            <div className="container">
                    
                <div className="title text-center">
                    <h2>Portfolio</h2>
                </div>
                <div className="decoration d-flex gap-3  align-items-center justify-content-center">
                    <div className='line'></div>
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <div className='line'></div>
                </div>
                <div className="por-work">
                    <div className="row g-5 ">
                    <div className="col-sm-12 col-md-6 col-lg-4 pe-3 rounded-3">
                        <img src={cabin} alt="cabin" className='w-100 rounded-3' />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 pe-3 rounded-3">
                        <img src={cake} alt="cake"  className='w-100 rounded-3'  />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 pe-0 rounded-3">
                        <img src={circus} alt="circus"  className='w-100 rounded-3'  />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4  pe-3 rounded-3">
                        <img src={game} alt="game"  className='w-100 rounded-3' />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 pe-3 rounded-3">
                        <img src={safe} alt="safe"  className='w-100 rounded-3' />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 pe-0 rounded-3">
                        <img src={submarine} alt="submarine"  className='w-100 rounded-3' />
                    </div>
                    </div>
                </div>

            </div>

        </section>

    )
};

export default Portfolio;

