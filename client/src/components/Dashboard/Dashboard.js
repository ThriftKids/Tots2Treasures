import React from 'react';
import "./Dashboard.css";
import DashboardCard from '../customs/DashboardCard';
import testImage from '../images/testImage.jpg';
import one from '../images/one.jpg';
import { v4 as uuidv4 } from 'uuid';


const Dashboard = () => {
  return (
    <div className='dashboard'>
        <ul className='categoryList'>
          <li><p className='category'>toys</p></li>  
          <li><p className='category'>electronics</p></li>  
          <li><p className='category'>outdoor</p></li>  
          <li><p className='category'>kitchen</p></li>  
          <li><p className='category'>clothing</p></li>  
        </ul>
        <div className='productsContainer'>
            <DashboardCard title= "Product one" category="toy" price="100" desc="lorem ipsum somthing somtething bigger and longer" img={one} link="/" _id="1" key={uuidv4()}/>
            <DashboardCard title= "Product two" category="clothing kitchen" price="80" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/" _id="2" key={uuidv4()}/>
            <DashboardCard title= "Product three" category="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/" _id="3" key={uuidv4()}/>
            <DashboardCard title= "Product three" category="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/" _id="4" key={uuidv4()}/>
            <DashboardCard title= "Product three" category="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/" _id="5" key={uuidv4()}/>
            <DashboardCard title= "Product three" category="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/" _id="6" key={uuidv4()}/>
        </div>
    </div>
  )
}

export default Dashboard