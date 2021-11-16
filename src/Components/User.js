import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import MbtiUser from './MbtiUser';
import moment from 'moment';
import ReactTooltip from 'react-tooltip';
import { Spin } from 'antd';
import MbtiFloating from './MbtiFloating';
import { Divider } from 'antd-mobile'
import { prominent } from 'color.js';

const User = ({match}) => {
  const param = match.params;
  const userId = param.name;
  const url = "https://api.yatchacha.com/mbti/user?allow_tw_info=true&tw_id=" + userId;
  const [isUserSet, setUserSet] = useState(0);
  const [user, setUser] = useState({});
  const [sameMbti, setSameMbti] = useState({});
  const [sameMbtiNum, setSameMbtiNum] = useState(0);
  const [twInfo, setTwInfo] = useState({});
  const [majorColor, setMajorColor] = useState('white');
  const titleStyle = {
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center'
  };

  const mbtiLogo = {
    INTJ: "https://static.neris-assets.com/images/personality-types/avatars/intj-architect.png",
    INTP: "https://static.neris-assets.com/images/personality-types/avatars/intp-logician.png",
    ENTJ: "https://static.neris-assets.com/images/personality-types/avatars/entj-commander.png",
    ENTP: "https://static.neris-assets.com/images/personality-types/avatars/entp-debater.png",
    INFJ: "https://static.neris-assets.com/images/personality-types/avatars/infj-advocate.png",
    INFP: "https://static.neris-assets.com/images/personality-types/avatars/infp-mediator.png",
    ENFJ: "https://static.neris-assets.com/images/personality-types/avatars/enfj-protagonist.png",
    ENFP: "https://static.neris-assets.com/images/personality-types/avatars/enfp-campaigner.png",
    ISTJ: "https://static.neris-assets.com/images/personality-types/avatars/istj-logistician.png",
    ISFJ: "https://static.neris-assets.com/images/personality-types/avatars/isfj-defender.png",
    ESTJ: "https://static.neris-assets.com/images/personality-types/avatars/estj-executive.png",
    ESFJ: "https://static.neris-assets.com/images/personality-types/avatars/esfj-consul.png",
    ISTP: "https://static.neris-assets.com/images/personality-types/avatars/istp-virtuoso.png",
    ISFP: "https://static.neris-assets.com/images/personality-types/avatars/isfp-adventurer.png",
    ESTP: "https://static.neris-assets.com/images/personality-types/avatars/estp-entrepreneur.png",
    ESFP: "https://static.neris-assets.com/images/personality-types/avatars/esfp-entertainer.png"
  };
  const mbtiName = {
    INTJ: "용의주도한 전략가",
    INTP: "논리적인 사색가",
    ENTJ: "대담한 통솔자",
    ENTP: "뜨거운 논쟁을 즐기는 변론가",
    INFJ: "선의의 옹호자",
    INFP: "열정적인 중재자",
    ENFJ: "정의로운 사회운동가",
    ENFP: "재기발랄한 활동가",
    ISTJ: "청렴결백한 논리주의자",
    ISFJ: "용감한 수호자",
    ESTJ: "엄격한 관리자",
    ESFJ: "사교적인 외교관",
    ISTP: "만능 재주꾼",
    ISFP: "호기심 많은 예술가",
    ESTP: "모험을 즐기는 사업가",
    ESFP: "자유로운 영혼의 연예인"
  };


  useEffect(() => {
    loadUserData(true);
  }, [param])

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  useEffect(() => {
    prominent(twInfo.logo, { amount: 1 }).then(color => {
      const colorText = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
      setMajorColor(colorText);
    })
  }, [twInfo.logo])

  function loadUserData(isInit = false) {
    let userMbti = '';

    // BASIC INIT
    axios
      .get(url)
      .then((Response)=>{
        if (Response.data.result === 'success') {
          if (Response.data.data[0].rows !== 0 &&
            Response.data.data[0].data[0].twitch_info !== null) {
              setUser(Response.data.data[0].data[0]);
              setTwInfo(Response.data.data[0].data[0].twitch_info);
              setUserSet(1);
              userMbti = Response.data.data[0].data[0].mbti;
          } else {
            setUserSet(-1);
          }
        } else {
          setUserSet(-1);
        }
      })
      .catch((Error) => {
        console.log(Error);
        if (isInit) loadUserData();
      })
      .then(() => {
        // Same MBTI
        const sameUrl = "https://api.yatchacha.com/mbti/user?allow_tw_info=true&mbti=" + userMbti;
        axios
          .get(sameUrl)
          .then((Response)=>{
            if (Response.data.result === 'success') {
              setSameMbti(Response.data.data[0].data);
              setSameMbtiNum(Response.data.data[0].rows - 1);
            }
          })
          .catch((Error) => {
            console.log(Error);
          });
      })
  }
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  if (isUserSet === -1) {
    return (
      <p className="jua">
        이런! 유저를 찾을 수 없어요!<br /><br />
        <Link to="/mbti" style={{fontSize: '14px'}}>첫 페이지로</Link>
      </p>
    );
  } else if (isUserSet === 0) {
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Spin size="large" />
      </div>
    );
  } else {
    return (
      <>
        <div className="totalWrapper">
          <div style={{width: '100%', height: '120px', backgroundColor: majorColor, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <a href={"https://twitch.tv/" + user.tw_id} target="_blank" rel="noopener noreferrer">
              <img src="/logo.png" style={{width: '30px'}} />
            </a>
          </div>
          <div style={{display: 'flex', marginTop: '-100px', justifyContent: 'center'}}>
            <img src={twInfo.logo} style={{width: '150px', borderRadius: '75px', backgroundColor: 'white', boxShadow: '1px 1px 2px #ccc'}} />
          </div>
          <p style={{fontSize: '26px', textAlign: 'center', marginTop: '5px'}}>{user.tw_name}</p>
          <p style={{fontSize: '16px', textAlign: 'center', marginTop: '-25px'}}>{twInfo.bio}</p>
          <Divider className="noto">MBTI</Divider>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            <img src={mbtiLogo[user.mbti]} style={{width: '150px'}} />
            <div style={{textAlign: 'center'}}>
              <span style={{fontSize: '22px'}}>{mbtiName[user.mbti]}</span><br />
              <span style={{fontSize: '32px'}}>{user.mbti}</span>
            </div>
          </div>
          <Divider className="noto">또 다른 {user.mbti} 찾기</Divider>
          <div style={{marginTop: '20px', marginBottom: '120px', textAlign: 'center'}}>
            <div>
              {/* {sameMbti[0].tw_id} */}
              {sameMbtiNum ? sameMbti.map((user) => {
                if (userId === user.tw_id) { return ''; }
                const userLogo = (user.twitch_info !== null) ? user.twitch_info.logo : 'https://img.favpng.com/18/1/17/twitch-computer-icons-logo-png-favpng-Gpj6D8W7NPubLhPvTbefsX9ym.jpg';
                return <MbtiUser userName={user.tw_name} userId={user.tw_id} userLogo={userLogo} key={user.id} />
              }) : <p style={{fontSize: '12px'}}>아쉽게도 아직 {user.mbti}인 다른 유저가 없네요 ㅠㅠ</p>}
            </div>
          </div>
          <div style={{visibility: 'hidden'}}>&nbsp;</div>
          <ReactTooltip id="tooltipComp" globalEventOff={isMobile ? 'click' : undefined} />
        </div>
        <MbtiFloating />
      </>
    );
  }


}

export default User;