import React from 'react';
import Youtube from 'react-youtube';

class YoutubeWrapper extends React.Component {

    constructor(props) {
        super();
    }

    render () {
        const opts = {
            height: '720',
            width: '1280',
            playerVars: {
                autoplay: 0
            }
        };

        return (
            <Youtube videoId={this.props.selectedVideo} opts={opts} onReady={this._onReady}/>
        );
    };

    _onReady(event) {
        event.target.pauseVideo();
    };
};

export default YoutubeWrapper;