import React from 'react';
import { Routes, Route, useLocation, useParams } from 'react-router-dom';

import CollectionPage from './collection';


const CollectionSelection = () => {
  const location = useLocation();
 
  const  collparam   = useParams();
 
  const collp = collparam.collectionId 
  return (
   
          <CollectionPage params={ collp } />
      
  );
};



export default CollectionSelection;