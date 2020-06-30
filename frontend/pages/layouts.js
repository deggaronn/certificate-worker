import React from 'react';
import Api from '~/services/api';

export default () => {
  React.useEffect(() => {
    Api.get('layouts')
  }, []);

  return (
    <div>
      <h1>Layouts !</h1>
    </div>
  )
}