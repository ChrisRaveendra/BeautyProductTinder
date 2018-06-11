import React from 'react';
import { connect } from 'react-redux';
import LikeBox from './LikeBox';
import ProductBox from './ProductBox';
import * as actionCreators from "../actions/index.js";

class App extends React.Component {
    render() {
        const product = this.props.idx != -1 && this.props.idx < this.props.products.length ? this.props.products[this.props.idx].rating:'';

        return(
            <div style={{'display': 'flex', 'flex': '1', 'height': '97vh'}}>
                <div style={{'display': 'flex', 'flexDirection': 'column', 'flex': '.25'}}>
                    <button onClick={() => { if(this.props.idx === -1) this.props.loadProducts() }}> Load Products </button>
                    <LikeBox name='likeBox' />
                    <LikeBox name='dislikeBox' />
                </div>
                <div className="mainContent">
                    <ProductBox />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        idx: state.idx
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // newAppointment: (info) => dispatch({ type: 'NEW_APPOINTMENT', info }),
        // closeModal: () => dispatch({ type: 'CLOSE_MODAL' }),
    };
};

export default connect(
    mapStateToProps,
    // mapDispatchToProps
    actionCreators
)(App);
