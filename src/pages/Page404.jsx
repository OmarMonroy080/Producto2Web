import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/404.css';

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="page404-container page404-container-star">
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-1"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
        <div className="page404-star-2"></div>
      </div>
      <div className="page404-container page404-container-bird">
        <div className="page404-bird page404-bird-anim">
          <div className="page404-bird-container">
            <div className="page404-wing page404-wing-left">
              <div className="page404-wing-left-top"></div>
            </div>
            <div className="page404-wing page404-wing-right">
              <div className="page404-wing-right-top"></div>
            </div>
          </div>
        </div>
        <div className="page404-bird page404-bird-anim">
          <div className="page404-bird-container">
            <div className="page404-wing page404-wing-left">
              <div className="page404-wing-left-top"></div>
            </div>
            <div className="page404-wing page404-wing-right">
              <div className="page404-wing-right-top"></div>
            </div>
          </div>
        </div>
        <div className="page404-bird page404-bird-anim">
          <div className="page404-bird-container">
            <div className="page404-wing page404-wing-left">
              <div className="page404-wing-left-top"></div>
            </div>
            <div className="page404-wing page404-wing-right">
              <div className="page404-wing-right-top"></div>
            </div>
          </div>
        </div>
        <div className="page404-bird page404-bird-anim">
          <div className="page404-bird-container">
            <div className="page404-wing page404-wing-left">
              <div className="page404-wing-left-top"></div>
            </div>
            <div className="page404-wing page404-wing-right">
              <div className="page404-wing-right-top"></div>
            </div>
          </div>
        </div>
        <div className="page404-bird page404-bird-anim">
          <div className="page404-bird-container">
            <div className="page404-wing page404-wing-left">
              <div className="page404-wing-left-top"></div>
            </div>
            <div className="page404-wing page404-wing-right">
              <div className="page404-wing-right-top"></div>
            </div>
          </div>
        </div>
        <div className="page404-bird page404-bird-anim">
          <div className="page404-bird-container">
            <div className="page404-wing page404-wing-left">
              <div className="page404-wing-left-top"></div>
            </div>
            <div className="page404-wing page404-wing-right">
              <div className="page404-wing-right-top"></div>
            </div>
          </div>
        </div>
        <div className="page404-container-title">
          <div className="page404-title">
            <div className="page404-number">4</div>
            <div className="page404-moon">
              <div className="page404-face">
                <div className="page404-mouth"></div>
                <div className="page404-eyes">
                  <div className="page404-eye-left"></div>
                  <div className="page404-eye-right"></div>
                </div>
              </div>
            </div>
            <div className="page404-number">4</div>
          </div>
          <div className="page404-subtitle">
            Oops. Parece que estás perdido.<br/>
            <small>La página que estás buscando no está disponible.</small>
          </div>
          <button onClick={()=>navigate(-1)} className='page404-button'>Regresar</button>
        </div>
      </div>
    </>
  );
};

export default Page404;
