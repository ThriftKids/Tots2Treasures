import React, { useEffect } from 'react';
import "./Dashboard.css"
import DashboardCard from '../customs/DashboardCard'
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CURRENT_TAG,
  UPDATE_PRODUCTS,
  UPDATE_TAGS
} from '../../utils/actions';
import { 
  QUERY_PRODUCTS,
  QUERY_TAGS, 
} from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

const Dashboard = () => {

  const [state, dispatch] = useStoreContext();

  const { currentTag } = state;

  const { tagLoading, data: tagData } = useQuery(QUERY_TAGS);
  const { productLoading, data: productData } = useQuery(QUERY_PRODUCTS);
  useEffect(() => {
    if (tagData) {
      dispatch({
        type: UPDATE_TAGS,
        tags: tagData.tags,
      });
      tagData.tags.forEach((Tag) => {
        idbPromise('tags', 'put', Tag);
      });
    } else if (!tagLoading) {
      idbPromise('tags', 'get').then((tags) => {
        dispatch({
          type: UPDATE_TAGS,
          tags: tags,
        });
      });
    }
  }, [tagData, tagLoading, dispatch]);

  useEffect(() => {
    if (productData) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: productData.products,
      });
      productData.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!productLoading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [productData, productLoading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_TAG,
      currentTag: id,
    });
  };

  function addTags() {
    return Array.from(new Set(state.tags));
  }

  function filterProducts() {
    if (!currentTag) {
      return state.products;
    }
    return state.products.filter(
      (product) => product.Tag._id === currentTag.target.id
    );
  }

  return (
    <div className='dashboard'>
        <ul className='tagList'>
          {addTags().map((tag) => (
            <li key={tag._id}><p className='tag' id={tag._id} onClick={handleClick}>{tag.name}</p></li>
          ))}
        </ul>

        <div className='productsContainer'>            
          {state.products.length ? (
          <div className="flex-row">
            {filterProducts().map((card) => (
                <DashboardCard
                  _id={card._id}
                  name={card.name}
                  Tag={card.Tag}
                  price={card.price}
                  description={card.description}
                  img={card.image}
                  key={card._id}
                />
              ))}
          </div>
        ) : (
          <h3>You haven't added any products yet!</h3>
        )}
      </div>
    </div>
  )
}

export default Dashboard