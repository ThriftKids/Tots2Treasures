import React, { useEffect } from 'react';
import "./Dashboard.css"
import DashboardCard from '../customs/DashboardCard'
import testImage from '../images/testImage.jpg'
import one from '../images/one.jpg'
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CURRENT_TAG,
  UPDATE_TAGS
} from '../../utils/actions';
import { QUERY_TAGS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

const Dashboard = () => {

  const [state, dispatch] = useStoreContext();

  const { tags } = state;

  const { loading, data: tagData } = useQuery(QUERY_TAGS);

  useEffect(() => {
    if (tagData) {
      dispatch({
        type: UPDATE_TAGS,
        tags: tagData.tags,
      });
      tagData.tags.forEach((tag) => {
        idbPromise('tags', 'put', tag);
      });
    } else if (!loading) {
      idbPromise('tags', 'get').then((tags) => {
        dispatch({
          type: UPDATE_TAGS,
          tags: tags,
        });
      });
    }
  }, [tagData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_TAG,
      current: id,
    });
  };
  return (
    <div className='dashboard'>
        <ul className='tagList'>
          <li><p className='tag' id="toys" onClick={handleClick}>toys</p></li>  
          <li><p className='tag'>electronics</p></li>  
          <li><p className='tag'>outdoor</p></li>  
          <li><p className='tag'>kitchen</p></li>  
          <li><p className='tag'>clothing</p></li>  
        </ul>
        <div className='productsContainer'>
            <DashboardCard title= "Product one" tag="toy" price="100" desc="lorem ipsum somthing somtething bigger and longer" img={one} link="/"/>
            <DashboardCard title= "Product two" tag="clothing kitchen" price="80" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
            <DashboardCard title= "Product three" tag="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
            <DashboardCard title= "Product three" tag="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
            <DashboardCard title= "Product three" tag="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
            <DashboardCard title= "Product three" tag="outdoor electronics" price="70" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/"/>
        </div>
    </div>
  )
}

export default Dashboard