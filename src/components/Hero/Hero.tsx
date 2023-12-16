import { FC } from "react";
import "./_hero.scss";
import { ReactSVG } from 'react-svg';
import logo from '../../images/logo.svg'; 

const Hero: FC = () => {
  return (
    <div className="hero">
      <div className="hero__logo">
        <ReactSVG src={logo} />
      </div>
    </div>
  )
}

export default Hero
