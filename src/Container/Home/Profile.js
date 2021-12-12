import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-first">
        <div className="profile-details">
          <div className="social">
            <div className="social-icon">
              <a href="https://daoni.notion.site/4208a9762f3a4a559c7eb67c79bc72fe">
                <i className="fas fa-book"></i>
              </a>
              <a href="https://www.instagram.com/co_oni_ding/?hl=ko">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/2-daoni">
                <i className="fab fa-git-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-text">
            <div className="profile-details-name">
              <h3 className="name">
                안녕하세요, 저는 <span className="highlighted-text ">이다원</span> 입니다.
              </h3>
            </div>
            <div className="profile-details-dev">
              <span className="dev">
                {' '}
                <h1>
                  저는&nbsp;
                  <Typical loop={Infinity} wrapper="b" steps={['프론트엔드👩', 2000, '노력하는🔥', 2000, '성장하는💦', 2000]} />
                  &nbsp;개발자 입니다.
                </h1>
                <span className="description">프론트엔드 개발자를 꿈꾸는 오니입니다</span>
              </span>
            </div>
          </div>
          <div className="profile-btn">
            <button className="btn primary-btn">
              {''}
              함께 일하고싶어요
            </button>
            <a href="portfolio.pdf" download>
              <button className="btn highlighted-btn">이력서 보기</button>
            </a>
          </div>
        </div>

        <div className="profile-pic">
          <div className="profile-pic-background"></div>
        </div>
      </div>
      <div className="profile-second">
        <div className="skills">
          <h3>Html</h3>
          <h3>CSS</h3>
          <h3>JavaScript</h3>
          <h3>React</h3>
        </div>
      </div>
    </div>
  );
}
