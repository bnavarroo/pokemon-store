import React from 'react';

import './styles/page.scss';

const NotFound = () => (
  <div className="not-found full-container centralized-y">
    <div className="not-found-wrapper p-5 w-100 d-flex flex-column text-white text-center text-md-start">
      <h1>Ops...</h1>
      <h5>Parece que o nosso ADM está ocupado e não encontrou essa página...</h5>
    </div>
  </div>
);
export default NotFound;
