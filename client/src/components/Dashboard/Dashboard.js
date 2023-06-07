import React from 'react'
import "./Dashboard.css"
import DashboardCard from '../customs/DashboardCard'
import testImage from '../images/testImage.jpg'
import one from '../images/one.jpg'


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
            <DashboardCard key="1" title= "Product one" category="toy" price="100" desc="lorem ipsum somthing somtething bigger and longer" img={one} link="/"/>
            <DashboardCard key="2" title= "Product two" category="clothing kitchen" price="80" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
            <DashboardCard key="3" title= "Product three" category="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
            <DashboardCard key="4" title= "Product three" category="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
            <DashboardCard key="5" title= "Product three" category="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
            <DashboardCard key="6" title= "Product three" category="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
        </div>
    </div>
  )
}

export default Dashboard