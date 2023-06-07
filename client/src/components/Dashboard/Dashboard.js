import React, { useEffect } from 'react';
import "./Dashboard.css"
import DashboardCard from '../customs/DashboardCard'
import testImage from '../images/testImage.jpg'
import one from '../images/one.jpg'
import { useLazyQuery, useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CURRENT_TAG,
  UPDATE_TAGS
} from '../../utils/actions';
import { 
  QUERY_TAGS, 
} from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

const Dashboard = () => {

  const [state, dispatch] = useStoreContext();

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
      currentTag: id,
    });
  };
  return (
    <div className='dashboard'>
        <ul className='tagList'>
          <li><p className='tag' id="toys" onClick={handleClick}>toys</p></li>  
          <li><p className='tag' id="electronics" onClick={handleClick}>electronics</p></li>  
          <li><p className='tag' id="outdoor" onClick={handleClick}>outdoor</p></li>  
          <li><p className='tag' id="kitchen" onClick={handleClick}>kitchen</p></li>  
          <li><p className='tag' id="clothing" onClick={handleClick}>clothing</p></li>  
        </ul>

        {/* Tag sorting code */}
        <div className='productsContainer'>            
            {state.currentTag ? (
            state.products.map((card) => {
              if (card.tag === state.currentTag.target.id) {
                return (
                  <DashboardCard
                    title={card.title}
                    tag={card.tag}
                    price={card.price}
                    desc={card.desc}
                    img={card.img}
                    key={card._id}
                  />
                );
              }
              return null; 
            })):
            (state.products.map((card) => {
                return (
                  <DashboardCard
                    title={card.title}
                    tag={card.tag}
                    price={card.price}
                    desc={card.desc}
                    img={card.img}
                    key={card._id}
                  />
                );
              }
            ))
            }
      </div>
      <div className='productsContainer'>
            <DashboardCard title= "Product one" tag="toy" price="100" desc="lorem ipsum somthing somtething bigger and longer" img={one} link="/" _id="1" key="1"/>
            <DashboardCard title= "Product two" tag="clothing kitchen" price="80" desc="lorem ipsum somthing somtething bigger and longer" img={testImage} link="/" _id="2" key="2"/>
        </div>
    </div>
  )
}

export default Dashboard