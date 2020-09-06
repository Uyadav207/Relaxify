import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js';
import SpotifyPlayer from 'react-spotify-web-playback';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'reactstrap';
import { faSpotify } from "@fortawesome/free-brands-svg-icons";


const spotifyWebApi = new Spotify();

class App extends Component{


  
  constructor () {
    super();
  const params = this.getHashParams();
  this.state = {
    acc: params.access_token,
    loggedIn: params.access_token ? true : false,
    nowPlaying: {
      name:'Loading...',
      image:''
  }
  }
  if (params.access_token){
    spotifyWebApi.setAccessToken(params.access_token)
  }
}
   getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  getNowPlaying() {
    spotifyWebApi.getMyCurrentPlaybackState()
    .then((res)=>{
      this.setState({
        nowPlaying:{
          name: res.item.name,
          image:res.item.album.images[0].url
        }
      });
    })
    
    .catch((err)=>{
      console.log(err);
    });
   
  }
 


  

  render () {
  return (
  

  <main>
   
    <div className="App">
      <div className="music-box">


            <div className="box">
           
            <Button className="start-buttons" color="danger" href="https://relaxify.herokuapp.com/">
            <FontAwesomeIcon icon = {faSpotify}/> Login With Spotify  
            </Button>
          
          <div className="loader"> 
            <div className="loading">
                    {this.state.nowPlaying.name}
            </div>
            <div className="img-loading">
            {
      ((this.state.nowPlaying.image === "")
       ? '' : 
          <img alt="Icons" class="imgo" src = {this.state.nowPlaying.image}
                    style={{height:200, width: 200,borderRadius: '50%'}} 

                    /> )
        }
            </div>
          </div>
         


            <Button className="start-buttons" color="light" onClick={()=> this.getNowPlaying()}>
          Check Now Playing
          </Button> 
          
          </div>



          
    </div>
   </div>
   <div classname="Player"> 
    <SpotifyPlayer           
        token={this.state.acc}
        name = 'Relaxify-by Utkarsh '
        showSaveIcon='true'
        magnifySliderOnHover='true'
        styles={{
          height:"20",
          position: 'fixed',
          left: '0' ,
          bottom: '0' ,
          textAlign: 'center', 
          bgColor: '#FFFFFF',
          color: '#191414',
          loaderColor: '#fff',
          sliderColor: '#191414',
          sliderHandleColor: '#1DB954',
          saveColor: '#1DB954',
          trackArtistColor: 'coral',
          trackNameColor: '#191414'
      }}
    /></div>
     </main>
  );
}
}

export default App;
