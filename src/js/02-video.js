import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
 
if (localStorage.getItem('videoplayer-current-time')) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
};
player.on('timeupdate', throttle(onVideoCurrentTime, 1000))

 function onVideoCurrentTime(data) {
     localStorage.setItem('videoplayer-current-time', data.seconds);     
 }
 
 