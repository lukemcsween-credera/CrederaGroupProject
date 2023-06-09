import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveCart } from '../../cart/retrieve-cart/retrieve-cart.slice';
import { RequestStatus } from '../../common/redux/redux.constants';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from "react-router-dom";

export const HomePageComponent = () => {

  const dispatch = useDispatch();
  const retrieveCartState = useSelector(state => state.cart.retrieveCart);

  useEffect(() => {
    // Example purposes only - should likely move retrieveCart call to a new 'cart' component
    dispatch(retrieveCart(1));
  }, []);

  const history = useHistory();
  
  const routeChange = () =>{ 
    let path = `/Display`; 
    history.push(path);
  }

  return (
    <div>
      Home Page
      {retrieveCartState.status === RequestStatus.LOADING
        ? (<div data-testid='loading-spinner'>Loading...</div>)
        : (
          <div>
            <Button onClick={() => dispatch(retrieveCart(1))}>Retrieve Cart</Button>
            <div>(Current CartId: {retrieveCartState?.response?.cartId})</div>
            <div>
              {JSON.stringify(retrieveCartState?.response)}
            </div>
          </div>
        )
      }
      <div>
      <Button color="primary" className="px-4"
                onClick={routeChange}
                  >
                  Login
                </Button>
      </div>
    </div>
  );
}

export default HomePageComponent;
