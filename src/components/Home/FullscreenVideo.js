import YouTube from 'react-youtube';
import React from 'react';

class FullscreenVideo extends React.Component {
    render() {
        return (
            <div id="homepage-top">
                <div className="video-background">
                    <div className="video-foreground">
                        <YouTube
                          videoId="mNhagtvu8pU"
                          opts={{
                              playerVars: {
                                  controls: 0,
                                  showinfo: 0,
                                  rel: 0,
                                  autoplay: 1,
                                  loop: 1,
                                  playlist: 'mNhagtvu8pU'
                              }
                          }}
                          onReady={this._youtubeReady}
                        />
                    </div>
                </div>

                <div className="cover">
                    <div className="hi">This is fully responsive & mobile friendly YouTube video background</div>
                </div>
            </div>
        );
    }

    _youtubeReady(event) {
        event.target.mute();
    }
}

export default FullscreenVideo;
