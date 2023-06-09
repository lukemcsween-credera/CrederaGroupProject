import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveCart } from '../../cart/retrieve-cart/retrieve-cart.slice';
import { RequestStatus } from '../../common/redux/redux.constants';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

export const HomePageComponent = () => {

  const history = useHistory();
  
  const routeChange = () =>{ 
    let path = `/Display`; 
    history.push(path);
  }

  return (
    <div>
      Home Page
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
