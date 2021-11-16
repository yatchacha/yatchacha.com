import React from 'react';
import "../Style/Main.css";

const Main = () => {
  return (
    <div className="mainBody">
      <div className="videoContainer" style={{display: 'block'}}>
        <iframe src="https://player.twitch.tv/?channel=yatchacha&parent=yatchacha.com&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>    
      </div>
      <iframe style={{width: '100%'}} src="https://discordapp.com/widget?id=801123191484842004&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </div>
  )
};

export default Main;
