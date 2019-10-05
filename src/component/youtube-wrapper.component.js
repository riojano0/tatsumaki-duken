import React from 'react';
import Youtube from 'react-youtube';

class YoutubeWrapper extends React.Component {

    constructor(props) {
        super();
    }

    render () {
        const opts = {
            playerVars: {
                autoplay: 0
            }
        };

        return (
            <div className="youtube-wrapper">
                <Youtube videoId={this.props.selectedVideo} opts={opts} onReady={this._onReady}/>
            </div>
        );
    };

    _onReady(event) {
        event.target.pauseVideo();
    };
};

export default YoutubeWrapper;