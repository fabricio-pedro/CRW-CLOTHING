import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import collectionsData from './shop.data';
class ShopPage extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
     collections:collectionsData
    }
  } 
render(){
   const {collections} =this.state; 
  return (  
            <div className="shop-page">
                {
                   collections.map(({id, ...otherProps})=>{
                       return <CollectionPreview key={id} {...otherProps}></CollectionPreview>
                   })   
                }
            </div>
        )
}

}

export default ShopPage;