export { };

declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady: any; // 👈️ turn off type checking
    Spotify: any; 
  }
}
