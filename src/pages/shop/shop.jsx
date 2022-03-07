import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview.jsx';
import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';
/* import CollectionPage from '../../pages/collection/collection'; */
import CollectionSelection from '../../pages/collection/collection-selection';

import { Routes, Route, useLocation, useParams } from 'react-router-dom';

const ShopPage = () => {
    const location = useLocation();
    console.log("locationMJShop:",location.pathname);
    const  collparam   = useParams();
    console.log("parsshop:" , collparam.collectionId )
    return (
     <div className='shop-page'>
          <Routes>
           <Route exact path='/' element ={ <CollectionsOverview /> } />         
          </Routes>
    </div>
      
);
    }



export default ShopPage;