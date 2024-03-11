// src/components/ExampleComponent.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../services/api';

const ExampleComponent: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.yourReducer);

  useEffect(() => {
    // Example Axios request using Redux
    api.get('/example-endpoint')
      .then(response => {
        // Dispatch an action with the response data
        dispatch({ type: 'EXAMPLE_ACTION', payload: response.data });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [dispatch]);

  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default ExampleComponent;
