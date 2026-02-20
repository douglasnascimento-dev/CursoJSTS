type VideoPlayerElements = {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
};

type VideoPlayerEvents = {
  playToggle(): void;
  stop(): void;
  initEvents(): void;
};

export default class VideoPlayer implements VideoPlayerEvents {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;
  
  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer
    this.playButton = videoPlayerElements.playButton
    this.stopButton = videoPlayerElements.stopButton
    this.initEvents()
  }
  
  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause';
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
    }
  }
  
  stop(): void {
    
  }
  
  initEvents(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    })
    
    this.stopButton.addEventListener('click', () => {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
      this.playButton.innerText = 'Play';
    })
  }
}

export const videoPlayer = new VideoPlayer({ 
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
})

  