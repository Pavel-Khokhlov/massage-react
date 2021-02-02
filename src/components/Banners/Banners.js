import React from "react";
import Banner from '../Banner/Banner';

import Aravia from "../../images/aravia.jpg";
import Yunmai from "../../images/yunmai.png";
import Nasara from "../../images/nasara.jpg";
import Mirk from "../../images/mirk.jpg";
import Hl from "../../images/holyland.jpg";
import Styx from "../../images/styx.jpg";
import Tshock from "../../images/tshock.jpg";
import Inthenso from "../../images/inthenso.jpg";
import Yamaguchi from "../../images/yamaguchi.jpg";
import Ironfitness from "../../images/ironfitness.png";

const Banners = () => {
  return (
    <div className="about__logos">
      <Banner src={Aravia} alt={`aravia`}/>
      <Banner src={Yunmai} alt={`yunmai`}/>
      <Banner src={Nasara} alt={`nasara`}/>
      <Banner src={Mirk} alt={`mirk`}/>
      <Banner src={Hl} alt={`holyland`}/>
      <Banner src={Styx} alt={`styx`}/>
      <Banner src={Tshock} alt={`tshock`}/>
      <Banner src={Inthenso} alt={`inthenso`}/>
      <Banner src={Yamaguchi} alt={`yamaguchi`}/>
      <Banner src={Ironfitness} alt={`ironfitness`}/>
    </div>
  );
};

export default Banners;
