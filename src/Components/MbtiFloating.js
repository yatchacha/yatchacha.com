import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Style/Home.css';
import { FloatingPanel, List, IndexBar } from 'antd-mobile'
import { Avatar, Image } from 'antd';
import {Link} from 'react-router-dom';

const MbtiFloating = () => {

  const [users, setUsers] = useState(null);
  // const [titleName, setTitle]
  const mbtiPreset = [
    [ 'ISTJ', 'ISFJ', 'INFJ', 'INTJ' ],
    [ 'ISTP', 'ISFP', 'INFP', 'INTP' ],
    [ 'ESTP', 'ESFP', 'ENFP', 'ENTP' ],
    [ 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ' ]
  ];

  const anchors = [100, window.innerHeight * 0.3, window.innerHeight * 0.6]
  

  useEffect(() => {
    loadMbti(true);
  }, [])

  function loadMbti(isInit = false, twInfo = true) {
    const base_url = (twInfo) ? "https://api.yatchacha.com/mbti/user?allow_tw_info=true"
     : "https://api.yatchacha.com/mbti/user";
    
    axios
      .get(base_url)
      .then((Response)=>{
        if (Response.data.result === 'success') {
          setUsers(Response.data.data[0].data);
        }
      })
      .catch((Error) => {
        console.log(Error);
        if (isInit) loadMbti();
      });
  }
  
  return (
    <div class="mbtiFloating">
      <FloatingPanel anchors={anchors} style={{zIndex: 0, top: 'calc(100vh - 51px)'}}>
        <IndexBar>
          {
            mbtiPreset.map((mbtiLine) => {
              return (
                <>
                  {
                    mbtiLine.map((mbtiEach) => {
                      return (
                        <IndexBar.Panel index={mbtiEach}>
                          <List>
                            {users && users.map((user) => {
                              const link = "/mbti/user/" + user.tw_id;
                              const userLogo = (user.twitch_info !== null) ? user.twitch_info.logo : 'https://img.favpng.com/18/1/17/twitch-computer-icons-logo-png-favpng-Gpj6D8W7NPubLhPvTbefsX9ym.jpg';
                              return (user.mbti === mbtiEach) && <Link to={link}><List.Item key={user.id}>
                                  <Avatar src={<Image src={userLogo} style={{ width: 28 }} />} />&nbsp;
                                  {user.tw_name}
                                </List.Item></Link>
                            })}
                          </List>
                        </IndexBar.Panel>
                      )
                    })
                  }
                </>
              )
            })
          }
        </IndexBar>
      </FloatingPanel>
    </div>
  );
}

export default MbtiFloating;