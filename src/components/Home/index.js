import React, { PropTypes } from 'react';
import FullscreenVideo from './FullscreenVideo';
import Blog from '../Blog';

class Home extends React.Component {

    render() {
        return (
            <div>
                <FullscreenVideo />
                <Blog />
            </div>
        );
    }
}

export default Home;
