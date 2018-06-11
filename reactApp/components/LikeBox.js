import React from 'react';
import { connect } from 'react-redux';

class LikeBox extends React.Component {
    render() {
        const list = this.props.name === 'likeBox' ? this.props.likes : this.props.dislikes;
        const name = this.props.name === 'likeBox' ? 'Items you liked' : 'Items you disliked';

        return(
            <div className="likeBox">
                <div style={{ 'text-align': 'center' }}>{name}</div>
                <ul class="a">
                    {list.map(element => <li>{`${element.name} (${element.brand})`}</li> )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        likes: state.likes,
        dislikes: state.dislikes,
        idx: state.idx
    };
};

export default connect(
    mapStateToProps
)(LikeBox);

