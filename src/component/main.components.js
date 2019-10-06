import React from 'react';
import YoutubeWrapper from './youtube-wrapper.component';
import { Button } from 'react-materialize';
import TatsumakiDukenApi from '../api/tatsumaki.duken.api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faDragon, faPlay } from '@fortawesome/free-solid-svg-icons';

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            video : "",
            selectedVideo : "",
            showMessage: "Quiero ver todos esos fernets!",
            hiddenVideos: true
        };

        this.videos = this.loadVideos();
        this.handleClickSelectFernet = this.handleClickSelectFernet.bind(this);
        this.handleThumbClick = this.handleThumbClick.bind(this);
    }

    render() {


        const videos = this.videos;

        
        const videoList = videos.map((data, idx) => {
            return <div className="vidItem" onClick={() => this.handleThumbClick(data)}>
                <figure className="video-thumb" style={{backgroundImage: `url(${data.thumb})`}} key={idx} src={data.thumb} />
                <FontAwesomeIcon className="playIcon" icon={faPlay} />
                <div className="InfoItem">
                    <div>
                        <span>{data.title}</span>
                        <p>25/5/2019</p>
                    </div>
                    
                    <span className="displayNone">2:51</span>
                </div>
            </div>;
        })
        

        return (
            <div className="main">

                <div className="AppNav">
                    <div className="HeaderNav">
                        <FontAwesomeIcon icon={faDragon} />
                        <div className="Appheader">
                            <div>Tatsumaki Duken</div>
                            <span>Tu random video de Tak Tak Duken</span>
                        </div>
                    </div>
                    <div className="InfoHead">
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/riojano0/tatsumaki-duken">
                                <FontAwesomeIcon icon={faGithub} />
                                Github del projecto
                            </a>
                        </div>
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCN7d0PD64S9ONOKD5yXNslg">
                                <FontAwesomeIcon icon={faYoutube} />
                                Canal de TakTakDuken
                            </a>
                        </div>
                    </div>
                </div>

                <div className="MainContent">
                    <div className="dv_mainVideo">
                        <h1>{this.state.selectedVideo.title}</h1>
                        <p>{this.state.selectedVideo.description}</p>
                        <YoutubeWrapper selectedVideo={this.state.selectedVideo.id}/>
                        <a target="_blank" rel="noopener noreferrer" href={this.state.selectedVideo.link}>Ver video en Youtube</a>
                    </div>
                    <div className="dv_videoList">
                        
                        <Button className="btlRandom" onClick={this.handleClickSelectFernet}>Selecciona tu Fernet al Azar!</Button>
                        
                        <div className="video-list" hidden={this.state.hiddenVideos}>
                            {videoList}
                        </div>
                    </div>

                </div>

                <div className="Footer">

                </div>
              
            </div>
        );
    }


    



    componentDidMount() {
        this.setState({
            selectedVideo : this.videos[0]
        });
    }

    loadVideos() {
        const videos = TatsumakiDukenApi.getVideos();
        return videos;
    }

    handleThumbClick(data) {
        this.setState({
            selectedVideo: data
        });
    }

    handleClickSelectFernet() {
        let video = this.videos[Math.floor(Math.random() * this.videos.length)];

        this.setState({
            selectedVideo: video
        });
    }

  
}

export default Main;