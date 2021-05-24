import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { retrieveCart } from '../cart/retrieve-cart/retrieve-cart.slice';
import { RequestStatus } from '../common/redux/redux.constants';

export const HomePageComponent = () => {

  const dispatch = useDispatch();
  const retrieveCartState = useSelector(state => state.cart.retrieveCart);

  useEffect(() => {
    dispatch(retrieveCart(1));
  }, [dispatch]);

  return (
    <div>
      Home Page
      {retrieveCartState.status === RequestStatus.LOADING
        ? (<div>Loading...</div>)
        : (<div>{JSON.stringify(retrieveCartState?.response)}</div>)
      }
    </div>
  );
}

export default connect(
  
)(HomePageComponent);
