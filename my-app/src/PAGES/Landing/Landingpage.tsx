import { Image } from 'semantic-ui-react';
import { useState } from 'react';
import { ButtonJoin } from '../../components/ATOMS/Buttons/Buttons';
import womanPhoto from '../../assets/landing-page-girl.png';

import "./landingpage-mobile.css"
import "./landingpage-laptop.css"

const LandingPage = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <main className="landing-main">
      <div className="main-content">
        <Image className="woman-photo" src={womanPhoto} alt="Afro-descendant woman with headphones listening to and enjoying music" />
        <div className="main-text">
          <h1 className="h1">Feel The Music</h1>
          <p>Stream over 20,000 songs with just one click</p>
          {!isButtonClicked && (
            <div onClick={handleButtonClick}>
              <ButtonJoin />
            </div>
          )}
        </div>
      </div>
      <div className="circles">
        <div className='pink-cirle'></div>
        <div className='blue-cirle'></div>
        <div className='big-blue-cirle'></div>
      </div>
    </main>
  );
};

export default LandingPage;
