import bgc1 from '../../../images/cards/mobile/bg-cards-1.png';
import bgc5 from '../../../images/cards/mobile/bg-cards-5.png';
import bgc10 from '../../../images/cards/mobile/bg-cards-10.png';
import bgc100 from '../../../images/cards/mobile/bg-cards-100.png';
import bgs1 from '../../../images/cards/mobile/bg-stage-1a.png';
import bgs1b from '../../../images/cards/mobile/bg-stage-1b.png';
import bgs1c from '../../../images/cards/mobile/bg-stage-1c.png';
import bgs2 from '../../../images/cards/mobile/bg-stage-2.png';
import bgs3 from '../../../images/cards/mobile/bg-stage-3.png';
import bgs4 from '../../../images/cards/mobile/bg-stage-4.png';
import trm from '../../../images/trophies-mobile.svg';
import trd from '../../../images/trophies-desktop.svg';

const images = [bgc1, bgc5, bgc10, bgc100, bgs1, bgs1b, bgs1c, bgs2, bgs3, bgs4, trm, trd];

export const preloadImages = ({ isMobile }) => {
  images.forEach((url) => {
    const img = new window.Image();
    img.src = isMobile ? url : url.replace(/mobile/i, 'desktop');
  });
};
