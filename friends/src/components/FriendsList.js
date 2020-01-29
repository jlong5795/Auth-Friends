import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../actions';

const FriendsList = props => {
    
    useEffect(() => {
        props.getFriends();
    },[]);

    return(
        props.friends.map(friend => {
            return (
            <div className='friend'>
                <p>{friend.name}</p>
            </div>
            )

        })
    )
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, {getFriends})(FriendsList);