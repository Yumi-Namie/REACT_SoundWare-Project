import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Image } from 'semantic-ui-react';
import ImgMicro from '../../assets/microphone.svg';
import ImgAlbums from '../../assets/albums.svg';
import ImgMore from '../../assets/more.svg';
import ImgCovers from '../../assets/covers.jpg';
import Footer from '../../components/MOLECULES/Footer/Footer';
import './discoverpage.css';
import './discoverpage-laptop.css';

interface DiscoverpageProps {}

const Discoverpage: React.FC<DiscoverpageProps> = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <main className="discover-main">
        <div className="discover-content">
          <div className="left-side">
            <h1>Discover new music</h1>
            <div className="icons-discover">
              <Link to="/charts" className={`icon-link ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Image src={ImgMicro} alt="Microphone icon" size="mini" />
                <p>Charts</p>
              </Link>

              <Link to="/albums" className={`icon-link ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Image src={ImgAlbums} alt="Albums icon" size="mini" />
                <p>Albums</p>
              </Link>

              <Link to="/more" className={`icon-link ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Image src={ImgMore} alt="Look for more" size="mini" />
                <p>More</p>
              </Link>
            </div>

            <p>By joining you can benefit from listening to the latest albums released.</p>
          </div>
          <Image className="covers" src={ImgCovers} alt="Album covers" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Discoverpage;

