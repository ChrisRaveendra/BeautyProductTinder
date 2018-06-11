import { connect } from 'react-redux';
import React from 'react';
import * as actionCreators from "../actions/index.js";

class ProductBox extends React.Component {
    render() {
        const product = this.props.idx != -1 && this.props.idx < this.props.products.length ? this.props.products[this.props.idx] : {};
        return(
            <div className="productBox" style={{ 
                'background': `url(${product.imageUrl})`,
                'background-size': 'cover'
}}>

                <div className="sentimentClick" onClick={() => { if (this.props.idx < this.props.products.length) this.props.swipeProduct(product, 'like')}}/>
                <div className="sentimentClick" onClick={() => { if (this.props.idx < this.props.products.length) this.props.swipeProduct(product, 'dislike') }}/>
            
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        products: state.products,
        idx: state.idx
    }
};

export default connect(
    mapStateToProps,
    actionCreators
)(ProductBox);

