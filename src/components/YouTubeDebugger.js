// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }  //end of video 
        }  //end of settings
    } //end of state  

   changeBitrate = () => {
       this.setState({
           settings: {
               ...this.state.settings,
               bitrate: 12
           }
       })
   }

   changeResolution  = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    }, () => console.log(this.state)) }
    
   

   render() {
       return(
           <div> 
            <button className='bitrate' onClick={this.changeBitrate}>change bitrate </button>
            <button className='resolution' onClick={this.changeResolution}>change resolution </button>
           </div>
       )
   } 

} 