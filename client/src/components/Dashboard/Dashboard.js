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
<<<<<<< HEAD
            <DashboardCard title= "Product one" Tag="toy" price="100" desc="lorem ipsum somthing somtething bigger and longer" img={one} link="/"/>
            <DashboardCard title= "Product two" Tag="clothing kitchen" price="80" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
            <DashboardCard title= "Product three" Tag="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
            <DashboardCard title= "Product three" Tag="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
            <DashboardCard title= "Product three" Tag="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
            <DashboardCard title= "Product three" Tag="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
=======
            <DashboardCard title= "Product one" category="toy" price="100" desc="lorem ipsum somthing somtething bigger and longer" img={one} link="/" productId="2"/>
            <DashboardCard title= "Product two" category="clothing kitchen" price="80" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/" productId='3'/>
            <DashboardCard title= "Product three" category="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
            <DashboardCard title= "Product three" category="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
            <DashboardCard title= "Product three" category="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
            <DashboardCard title= "Product three" category="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
>>>>>>> b03a284491a26f97d3070ee1ed3aaf86978ec40f
        </div>
    </div>
  )
}

export default Dashboard