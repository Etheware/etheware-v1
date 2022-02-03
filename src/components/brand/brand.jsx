import React from "react";
import './brand.css';
import { Georgia, Citrix, Benz, Goldman, Nasscom } from  './imports';

const Brand = () => {
  return (
    <div className="brand">
       <div>
        <img src={Benz} alt='Mercedes-Benz USA' />
      </div> 
      <div>
          <img src={Georgia} alt='Toyota USA' />
      </div> 
      <div>
        <img src={Citrix} alt='TD-Ameritrade' />
      </div> 
      <div>
        <img src={Nasscom} alt='Nasscom' />
      </div>  
      <div>
        <img src={Goldman} alt='Goldman-Sachs' />
      </div> 
    </div>
  )
};
export default Brand;
