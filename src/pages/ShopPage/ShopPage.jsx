import React from "react";
import shopData from "./shopData";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections:shopData
        };
    }
    render(){
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {collections.map(({id, ...otherprops }) => (
                    <CollectionPreview key={id} {...otherprops}/>
                ))}
            </div>
        )
    }
}
export default ShopPage; 