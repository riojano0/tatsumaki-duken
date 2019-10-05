import React from 'react';
import YoutubeWrapper from './youtube-wrapper.component';
import { Button } from 'react-materialize';
import TatsumakiDukenApi from '../api/tatsumaki.duken.api';

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
        this.handleClickShowVideos = this.handleClickShowVideos.bind(this);
    }

    render() {
        const videos = this.videos;
        const videoList = videos.map((data, idx) => {
            return <img className="video-thumb" key={idx} src={data.thumb} alt={data.title} onClick={() => this.handleThumbClick(data)}/>;
        })

        return (
            <div className="main">
                <header className="App-header"><div>Tatsumaki Duken - Tu random video de Tak Tak Duken</div></header>
                <div class="topnav">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCN7d0PD64S9ONOKD5yXNslg">Canal de TakTakDuken</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/riojano0/tatsumaki-duken">Github del projecto</a>
                </div>
                <Button className="select-fernet-button" onClick={this.handleClickSelectFernet}>Selecciona tu Fernet al Azar!</Button>
                <YoutubeWrapper selectedVideo={this.state.selectedVideo}/>
                <Button className="more-fernet-button" onClick={this.handleClickShowVideos}>{this.state.showMessage}</Button>
                <div className="video-list" hidden={this.state.hiddenVideos}>
                    {videoList}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.setState({
            selectedVideo : this.videos[0].id
        });
    }

    loadVideos() {
        const videos = TatsumakiDukenApi.getVideos();
        return videos;
    }

    handleThumbClick(data) {
        this.setState({
            selectedVideo: data.id
        });
    }

    handleClickSelectFernet() {
        let video = this.videos[Math.floor(Math.random() * this.videos.length)];

        this.setState({
            selectedVideo: video.id
        });
    }

    handleClickShowVideos() {
        let isVideosHide = this.state.hiddenVideos;

        if(isVideosHide) {
            this.setState({
                hiddenVideos: false,
                showMessage: "Menos fernet"
            });
        } else {
            this.setState({
                hiddenVideos: true,
                showMessage: "Quiero ver todos esos fernets!"
            });
        }
    }
}

export default Main;